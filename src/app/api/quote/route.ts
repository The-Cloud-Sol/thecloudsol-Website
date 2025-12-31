import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { SentMessageInfo } from 'nodemailer';

// Types
interface QuoteData {
  name: string;
  email: string;
  phone: string;
  company: string;
  designation?: string;
  services?: string[];
  message: string;
}

interface MailOptions {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

// This is a simple in-memory store for development
const devEmails: MailOptions[] = [];
const isDev = process.env.NODE_ENV !== 'production';

// Email configuration
const CONFIG = {
  // Sender email
  SENDER_EMAIL: process.env.SMTP_USER || 'tech.thecloudsol@gmail.com',
  // Recipient emails (where quote requests go)
  RECIPIENT_EMAILS: [
    process.env.COMPANY_EMAIL || 'tech.thecloudsol@gmail.com',
    'info@thecloudsol.com'
  ],
  // SMTP Configuration
  SMTP: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'false',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
    pool: true,
    maxConnections: 2,
    maxMessages: 5,
    rateDelta: 1000,
    rateLimit: 5
  }
};

// Create a reusable transporter object using default SMTP transport
const transporter = nodemailer.createTransport({
  ...CONFIG.SMTP,
  connectionTimeout: 10000, // 10 seconds
  socketTimeout: 30000, // 30 seconds
  greetingTimeout: 30000, // 30 seconds
  dnsTimeout: 10000, // 10 seconds
});

export async function POST(request: Request) {
  try {
    const body = await request.json() as QuoteData;
    const { 
      name, 
      email, 
      phone, 
      company, 
      designation,
      services,
      message
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { SENDER_EMAIL, RECIPIENT_EMAILS } = CONFIG;

    if (isDev) {
      console.log('Development - Preparing to send quote emails');
      console.log('Admin emails to:', RECIPIENT_EMAILS);
      console.log('Confirmation to:', email);
    }

    // Validate SMTP configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials are missing');
      throw new Error('Email configuration is incomplete');
    }

    // Log SMTP config (without password)
    console.log('Using SMTP server:', CONFIG.SMTP.host, 'on port', CONFIG.SMTP.port);
    console.log('Authenticating as:', CONFIG.SMTP.auth.user);
    
    // Verify SMTP connection
    try {
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('SMTP connection error:', error);
      throw new Error(`Failed to connect to SMTP server: ${errorMessage}`);
    }
    
    // Create admin mail promises for all recipients
    const adminMailPromises = RECIPIENT_EMAILS.map(recipient => {
      const adminMailOptions: MailOptions = {
        from: `The Cloud Sol Quote Form <${SENDER_EMAIL}>`,
        to: recipient,
        replyTo: email,
        subject: `New Quote Request from ${name} - ${company}`,
        text: `New Quote Request:

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
${designation ? `Designation: ${designation}` : ''}
${services && services.length > 0 ? `Services: ${services.join(', ')}` : ''}

Project Details:
${message}

---
This email was sent from quote form on The Cloud Sol website.`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request - High Value Opportunity</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2C2C2C; background-color: #F7F9FC;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F7F9FC;">
    <tr>
      <td align="center" valign="top" style="padding: 30px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 25%, #047857 50%, #065f46 75%, #064e3b 100%); padding: 25px 30px; text-align: center;">
              <div style="margin-bottom: 15px;">
                <img src="https://www.thecloudsol.com/logo.png" alt="The Cloud Sol Logo" style="width: 60px; height: 60px; border-radius: 12px; background: white; padding: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
              </div>
              <div style="background: #fbbf24; color: #7c2d12; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 700; display: inline-block; margin-bottom: 10px;">
                💰 NEW QUOTE REQUEST
              </div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 600; color: #FFFFFF;">High Value Opportunity</h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.9);">Lead Source: Website Quote Form</p>
              <p style="margin: 4px 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.8);">Received: ${new Date().toLocaleString()}</p>
            </td>
          </tr>
          
          <!-- Contact Info -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #10b981; font-weight: 600; padding-bottom: 8px; border-bottom: 1px solid #E0E6ED;">
                📇 Client Information
              </h2>
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; width: 30%; color: #5F6368; font-weight: 500; vertical-align: top;">Name:</td>
                  <td style="padding: 8px 0; font-weight: 400; color: #2C2C2C;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5F6368; font-weight: 500; vertical-align: top;">Company:</td>
                  <td style="padding: 8px 0; font-weight: 600; color: #10b981;">${company}</td>
                </tr>
                ${designation ? `
                <tr>
                  <td style="padding: 8px 0; color: #5F6368; font-weight: 500; vertical-align: top;">Designation:</td>
                  <td style="padding: 8px 0;">${designation}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 8px 0; color: #5F6368; font-weight: 500; vertical-align: top;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5F6368; font-weight: 500; vertical-align: top;">Phone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a></td>
                </tr>
                ${services && services.length > 0 ? `
                <tr>
                  <td style="padding: 8px 0; color: #5F6368; font-weight: 500; vertical-align: top;">Services:</td>
                  <td style="padding: 8px 0;">
                    <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 10px; border-radius: 4px;">
                      ${services.map(service => `<div style="margin-bottom: 4px; color: #047857; font-weight: 500;">✓ ${service}</div>`).join('')}
                    </div>
                  </td>
                </tr>` : ''}
              </table>
            </td>
          </tr>
          
          <!-- Project Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #10b981; font-weight: 600; padding-bottom: 8px; border-bottom: 1px solid #E0E6ED;">
                📝 Project Details
              </h2>
              <div style="background-color: #F8FAFE; border-left: 4px solid #10b981; padding: 15px; border-radius: 0 4px 4px 0;">
                <p style="margin: 0; color: #2C2C2C; white-space: pre-line; line-height: 1.6;">${message}</p>
              </div>
              
              <!-- Action Required Box -->
              <div style="margin-top: 20px; padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 6px; border: 2px solid #fcd34d;">
                <p style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: #92400e;">⚡ Action Required</p>
                <p style="margin: 0 0 15px 0; font-size: 14px; color: #78350f; line-height: 1.5;">This is a high-value quote request. Please respond within 24 hours to provide excellent service and secure this opportunity.</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  <a href="mailto:${email}" style="display: inline-block; background: #10b981; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);">📧 Reply Now</a>
                  <a href="tel:${phone}" style="display: inline-block; background: white; color: #10b981; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; border: 2px solid #10b981; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);">📱 Call Client</a>
                </div>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; text-align: center; font-size: 12px; color: #70757A; background-color: #F8F9FA; border-top: 1px solid #E0E6ED;">
              <p style="margin: 0 0 8px 0;">This email was sent from quote form on The Cloud Sol website.</p>
              <p style="margin: 0; font-size: 11px; color: #9AA0A6;">© ${new Date().getFullYear()} The Cloud Sol. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
      };
      return transporter.sendMail(adminMailOptions);
    });

    // User confirmation email
    const userMailOptions: MailOptions = {
      from: `The Cloud Sol <${SENDER_EMAIL}>`,
      to: email,
      subject: `Thank You for Your Quote Request - The Cloud Sol`,
      text: `Thank You for Your Quote Request

Hello ${name},

Thank you for requesting a quote from The Cloud Sol for your project. We have received your request and are excited to learn more about your needs.

Company: ${company}
${designation ? `Designation: ${designation}` : ''}
${services && services.length > 0 ? `Services: ${services.join(', ')}` : ''}

Our team will review your project requirements and get back to you within 24-48 hours with a customized quote.

What happens next:
1. Our team will review your project requirements
2. We'll contact you within 24-48 hours to discuss details
3. We'll provide a customized quote based on your specific needs

We look forward to the possibility of working together and will be in touch soon.

Best regards,
The Cloud Sol Team

---
Cloud Solutions & Digital Transformation
Email: tech.thecloudsol@gmail.com
Website: www.thecloudsol.com

© ${new Date().getFullYear()} The Cloud Sol. All rights reserved.`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Quote Request - The Cloud Sol</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2C2C2C; background-color: #F7F9FC;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F7F9FC;">
    <tr>
      <td align="center" valign="top" style="padding: 30px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 35px 30px; text-align: center;">
              <div style="margin-bottom: 15px;">
                <img src="https://www.thecloudsol.com/logo.png" alt="The Cloud Sol Logo" style="width: 80px; height: 80px; border-radius: 20px; background: white; padding: 8px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
              </div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #FFFFFF; line-height: 1.3;">Thank You for Your Quote Request</h1>
              <p style="margin: 8px 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.95);">Cloud Solutions & Digital Transformation</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 20px 0; font-size: 16px; color: #2C2C2C;">Hello ${name},</p>
              
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #5F6368;">
                Thank you for requesting a quote from The Cloud Sol for your project. We have received your request and are excited to learn more about your needs.
              </p>
              
              <!-- Company Info Box -->
              <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-radius: 6px; padding: 16px; margin: 20px 0; border: 1px solid #a7f3d0;">
                <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: 500; color: #065f46;">Company:</p>
                <p style="margin: 0 0 8px 0; font-size: 15px; font-weight: 600; color: #047857;">${company}</p>
                ${designation ? `<p style="margin: 0 0 8px 0; font-size: 14px; font-weight: 500; color: #065f46;">Designation:</p>
                <p style="margin: 0 0 8px 0; font-size: 15px; font-weight: 500; color: #047857;">${designation}</p>` : ''}
                ${services && services.length > 0 ? `
                <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: 500; color: #065f46;">Requested Services:</p>
                <div style="background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #10b981;">
                  ${services.map(service => `<div style="margin-bottom: 4px; color: #047857; font-weight: 500;">✓ ${service}</div>`).join('')}
                </div>` : ''}
              </div>
              
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #5F6368;">
                Our team will review your project requirements and get back to you within <strong style="color: #667eea;">24-48 hours</strong> with a customized quote.
              </p>
              
              <!-- Next Steps -->
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 6px; padding: 20px; margin: 20px 0; border: 1px solid #fcd34d;">
                <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: #92400e;">🎯 What Happens Next?</h3>
                <ol style="margin: 0; padding-left: 20px; color: #78350f; font-size: 14px; line-height: 1.6;">
                  <li style="margin-bottom: 8px;">Our team will review your project requirements</li>
                  <li style="margin-bottom: 8px;">We'll contact you within 24-48 hours to discuss details</li>
                  <li>We'll provide a customized quote based on your specific needs</li>
                </ol>
              </div>
              
              <p style="margin: 0 0 25px 0; font-size: 15px; line-height: 1.6; color: #5F6368;">
                We look forward to the possibility of working together and will be in touch soon.
              </p>
              
              <p style="margin: 0 0 5px 0; font-size: 15px; color: #2C2C2C;">Best regards,</p>
              <p style="margin: 0 0 20px 0; font-size: 15px; font-weight: 600; color: #667eea;">The Cloud Sol Team</p>
            </td>
          </tr>
          
          <!-- Signature -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="border-top: 1px solid #E0E6ED; padding-top: 20px;">
                <p style="margin: 0 0 8px 0; font-size: 15px; font-weight: 600; color: #2C2C2C;">Cloud Solutions & Digital Transformation</p>
                <p style="margin: 0 0 4px 0; font-size: 14px; color: #5F6368;">
                  <a href="mailto:tech.thecloudsol@gmail.com" style="color: #667eea; text-decoration: none;">tech.thecloudsol@gmail.com</a>
                </p>
                <p style="margin: 0 0 20px 0; font-size: 14px;">
                  <a href="https://www.thecloudsol.com" style="color: #667eea; text-decoration: none;">www.thecloudsol.com</a>
                </p>
                
                <!-- Social Links -->
                <div style="margin-top: 16px; text-align: center;">
                  <a href="https://www.linkedin.com/company/thecloudsol" target="_blank" style="display: inline-block; text-decoration: none; color: #667eea; font-size: 14px; background-color: #F0F7FF; padding: 10px 20px; border-radius: 4px; margin-right: 10px;">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style="width: 16px; height: 16px; margin-right: 8px; vertical-align: middle;">
                    LinkedIn
                  </a>
                  <a href="https://www.thecloudsol.com" target="_blank" style="display: inline-block; text-decoration: none; color: #667eea; font-size: 14px; background-color: #F0F7FF; padding: 10px 20px; border-radius: 4px;">
                    🌐 Visit Website
                  </a>
                </div>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; text-align: center; font-size: 12px; color: #70757A; background-color: #F8F9FA; border-top: 1px solid #E0E6ED;">
              <p style="margin: 0 0 8px 0;">© ${new Date().getFullYear()} The Cloud Sol. All rights reserved.</p>
              <p style="margin: 0; font-size: 11px; color: #9AA0A6;">This is an automated message. Please do not reply to this email.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    };

    if (isDev) {
      devEmails.push(userMailOptions);
    }

    // Send all emails in parallel
    console.log('Starting quote email sending process...');
    const [adminResults, userResult] = await Promise.all([
      Promise.all(adminMailPromises),
      transporter.sendMail(userMailOptions)
    ]);
    
    console.log(`Admin quote emails sent to ${RECIPIENT_EMAILS.length} recipients`);
    console.log('User quote email sent:', userResult.messageId);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Quote emails sent successfully',
      adminEmailIds: adminResults.map((r: SentMessageInfo) => r.messageId),
      userEmailId: userResult.messageId,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send quote request';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error('Error in quote form submission:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? errorStack : undefined
      },
      { status: 500 }
    );
  }
}

// Health check endpoint (optional)
export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    message: 'Quote API is running',
    timestamp: new Date().toISOString()
  });
}
