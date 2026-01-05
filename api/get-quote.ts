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
    secure: false, // Always false for port 587, true only for 465
    auth: {
      user: process.env.SMTP_USER || 'tech.thecloudsol@gmail.com',
      pass: process.env.SMTP_PASSWORD || 'oeoj hpht hrot nwnn'
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

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = req.body as QuoteData;
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
      return res.status(400).json(
        { success: false, error: 'Missing required fields' }
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
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Quote Request - High Value Opportunity</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
            background-attachment: fixed;
            padding: 20px;
            min-height: 100vh;
        }
        
        .container {
            max-width: 650px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2);
            position: relative;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse"><circle cx="12.5" cy="12.5" r="1.5" fill="rgba(255,255,255,0.15)"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.6;
        }
        
        .header-content {
            padding: 40px 30px 50px;
            position: relative;
            z-index: 2;
        }
        
        .logo {
            width: 90px;
            height: 90px;
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: 800;
            color: white;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .header h1 {
            color: white;
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .header-subtitle {
            color: rgba(255, 255, 255, 0.9);
            font-size: 18px;
            font-weight: 500;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .content {
            padding: 45px 40px;
            background: rgba(255, 255, 255, 0.8);
        }
        
        .footer {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #94a3b8;
            padding: 35px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .alert-icon {
            display: inline-block;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-radius: 50%;
            margin-bottom: 25px;
            position: relative;
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
            animation: pulse 2s infinite;
        }
        
        .alert-icon::before {
            content: '💰';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 50px;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .details-box {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            border: 2px solid transparent;
            border-radius: 20px;
            padding: 30px;
            margin: 30px 0;
            position: relative;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .details-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c);
            background-size: 300% 100%;
            animation: gradient-flow 4s ease-in-out infinite;
        }
        
        @keyframes gradient-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .detail-item {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(148, 163, 184, 0.2);
            display: flex;
            align-items: center;
        }
        
        .detail-item:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }
        
        .detail-label {
            font-weight: 700;
            color: #065f46;
            min-width: 130px;
            margin-right: 20px;
            display: flex;
            align-items: center;
            font-size: 16px;
        }
        
        .detail-value {
            flex: 1;
            color: #1e293b;
            font-size: 18px;
            font-weight: 600;
        }
        
        .services-list {
            background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
            border-left: 6px solid #10b981;
            padding: 25px;
            border-radius: 16px;
            margin-top: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }
        
        .services-list ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .services-list li {
            padding: 12px 0;
            color: #374151;
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: 500;
            background: linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.05) 100%);
            margin-bottom: 8px;
            border-radius: 8px;
            padding-left: 45px;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .services-list li:hover {
            background: linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
            transform: translateX(5px);
        }
        
        .services-list li::before {
            content: '✓';
            position: absolute;
            left: 15px;
            color: #10b981;
            font-weight: bold;
            font-size: 18px;
            background: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }
        
        .message-box {
            background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
            border-left: 6px solid #10b981;
            padding: 25px;
            border-radius: 16px;
            margin-top: 15px;
            font-style: italic;
            color: #374151;
            font-size: 16px;
            line-height: 1.8;
            position: relative;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }
        
        .message-box::before {
            content: '"';
            position: absolute;
            top: 10px;
            left: 15px;
            font-size: 48px;
            color: #10b981;
            opacity: 0.3;
            font-family: Georgia, serif;
        }
        
        .message-box::after {
            content: '"';
            position: absolute;
            bottom: -20px;
            right: 15px;
            font-size: 48px;
            color: #10b981;
            opacity: 0.3;
            font-family: Georgia, serif;
        }
        
        .action-required {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 3px solid #fcd34d;
            border-radius: 20px;
            padding: 35px;
            margin: 30px 0;
            box-shadow: 0 15px 50px rgba(251, 191, 36, 0.2);
            position: relative;
            overflow: hidden;
        }
        
        .action-required::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .action-required h3 {
            color: #92400e;
            margin-bottom: 20px;
            font-size: 22px;
            font-weight: 700;
            display: flex;
            align-items: center;
            position: relative;
            z-index: 1;
        }
        
        .action-required h3::before {
            content: '⚡';
            margin-right: 12px;
            font-size: 28px;
        }
        
        .action-required p {
            color: #78350f;
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 25px;
            position: relative;
            z-index: 1;
        }
        
        .action-buttons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .btn {
            display: inline-block;
            padding: 14px 28px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 15px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            margin: 0;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(16, 185, 129, 0.5);
        }
        
        .btn-secondary {
            background: white;
            color: #10b981;
            border: 2px solid #10b981;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);
        }
        
        .btn-secondary:hover {
            background: #10b981;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        }
        
        @media (max-width: 600px) {
            body {
                padding: 10px;
            }
            
            .container {
                border-radius: 16px;
            }
            
            .content {
                padding: 30px 25px;
            }
            
            .header-content {
                padding: 30px 20px 40px;
            }
            
            .header h1 {
                font-size: 26px;
            }
            
            .logo {
                width: 70px;
                height: 70px;
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-content">
                <div class="logo">CS</div>
                <h1>New Quote Request <span style="display: inline-block; background: #10b981; color: white; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-left: 10px;">HIGH VALUE</span></h1>
                <p class="header-subtitle">Cloud Solutions & Digital Transformation</p>
            </div>
        </div>
        <div class="content">
            <div style="text-align: center; margin-bottom: 35px;">
                <div class="alert-icon"></div>
                <p style="font-size: 18px; color: #475569; line-height: 1.7; max-width: 550px; margin: 0 auto;">
                    A potential client has requested a quote for your services. This is a high-value opportunity that requires immediate attention.
                </p>
            </div>

            <div class="details-box">
                <div class="detail-item">
                    <span class="detail-label"><span style="margin-right: 10px; font-size: 20px;">👤</span> Name:</span>
                    <span class="detail-value">${name}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label"><span style="margin-right: 10px; font-size: 20px;">🏢</span> Company:</span>
                    <span class="detail-value">${company}</span>
                </div>
                
                ${designation ? `
                <div class="detail-item">
                    <span class="detail-label"><span style="margin-right: 10px; font-size: 20px;">💼</span> Designation:</span>
                    <span class="detail-value">${designation}</span>
                </div>
                ` : ''}
                
                <div class="detail-item">
                    <span class="detail-label"><span style="margin-right: 10px; font-size: 20px;">📧</span> Email:</span>
                    <span class="detail-value">
                        <a href="mailto:${email}" style="color: #10b981; text-decoration: none; font-weight: 600;">${email}</a>
                    </span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label"><span style="margin-right: 10px; font-size: 20px;">📱</span> Phone:</span>
                    <span class="detail-value">
                        <a href="tel:${phone}" style="color: #10b981; text-decoration: none; font-weight: 600;">${phone}</a>
                    </span>
                </div>
                
                ${services && services.length > 0 ? `
                <div style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid #a7f3d0;">
                    <div style="font-weight: 700; color: #065f46; margin-bottom: 15px; display: flex; align-items: center; font-size: 16px;">
                        <span style="margin-right: 10px; font-size: 20px;">🛠️</span> Services Requested:
                    </div>
                    <div class="services-list">
                        <ul>
                            ${services.map(service => `<li>${service}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                ` : ''}
                
                <div style="margin-bottom: 0;">
                    <div style="font-weight: 700; color: #065f46; margin-bottom: 15px; display: flex; align-items: center; font-size: 16px;">
                        <span style="margin-right: 10px; font-size: 20px;">📄</span> Project Details:
                    </div>
                    <div class="message-box">${message}</div>
                </div>
            </div>

            <div class="action-required">
                <h3>Action Required</h3>
                <p>Please review this quote request and respond to client as soon as possible. This is a high-value opportunity that requires prompt attention.</p>
                <div class="action-buttons">
                    <a href="mailto:${email}" class="btn btn-primary">Reply Now</a>
                    <a href="tel:${phone}" class="btn btn-secondary">Call Client</a>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} The Cloud Sol. All rights reserved.</p>
            <p style="font-size: 13px; opacity: 0.9;">This email was sent from quote form on The Cloud Sol website.</p>
        </div>
    </div>
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
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Quote Request - The Cloud Sol</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
            background-attachment: fixed;
            padding: 20px;
            min-height: 100vh;
        }
        
        .container {
            max-width: 650px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2);
            position: relative;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse"><circle cx="12.5" cy="12.5" r="1.5" fill="rgba(255,255,255,0.15)"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.6;
        }
        
        .header-content {
            padding: 40px 30px 50px;
            position: relative;
            z-index: 2;
        }
        
        .logo {
            width: 90px;
            height: 90px;
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: 800;
            color: white;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .header h1 {
            color: white;
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .header-subtitle {
            color: rgba(255, 255, 255, 0.9);
            font-size: 18px;
            font-weight: 500;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .content {
            padding: 45px 40px;
            background: rgba(255, 255, 255, 0.8);
        }
        
        .footer {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #94a3b8;
            padding: 35px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .welcome-icon {
            display: inline-block;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-radius: 50%;
            margin-bottom: 20px;
            position: relative;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
        }
        
        .welcome-icon::before {
            content: '✨';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 40px;
        }
        
        .details-box {
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
            border: 2px solid #a7f3d0;
            border-radius: 24px;
            padding: 35px;
            margin: 35px 0;
            position: relative;
            overflow: hidden;
            box-shadow: 0 15px 50px rgba(16, 185, 129, 0.15);
        }
        
        .details-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #10b981, #059669, #047857, #10b981);
            background-size: 300% 100%;
            animation: gradient-flow 4s ease-in-out infinite;
        }
        
        @keyframes gradient-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .details-title {
            font-size: 22px;
            font-weight: 700;
            color: #065f46;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
        }
        
        .details-title::before {
            content: '📋';
            margin-right: 12px;
            font-size: 28px;
        }
        
        .message-content {
            background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
            border-left: 6px solid #10b981;
            padding: 25px;
            border-radius: 16px;
            font-style: italic;
            color: #374151;
            font-size: 16px;
            line-height: 1.8;
            position: relative;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }
        
        .message-content::before {
            content: '"';
            position: absolute;
            top: 10px;
            left: 15px;
            font-size: 48px;
            color: #10b981;
            opacity: 0.3;
            font-family: Georgia, serif;
        }
        
        .message-content::after {
            content: '"';
            position: absolute;
            bottom: -20px;
            right: 15px;
            font-size: 48px;
            color: #10b981;
            opacity: 0.3;
            font-family: Georgia, serif;
        }
        
        .next-steps {
            margin: 35px 0;
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #fcd34d;
            border-radius: 24px;
            padding: 35px;
            box-shadow: 0 15px 50px rgba(251, 191, 36, 0.2);
            position: relative;
            overflow: hidden;
        }
        
        .next-steps::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .next-steps h2 {
            color: #92400e;
            margin-bottom: 20px;
            font-size: 22px;
            font-weight: 700;
            display: flex;
            align-items: center;
            position: relative;
            z-index: 1;
        }
        
        .next-steps h2::before {
            content: '🎯';
            margin-right: 12px;
            font-size: 28px;
        }
        
        .next-steps ul {
            list-style: none;
            padding: 0;
            margin: 0;
            position: relative;
            z-index: 1;
        }
        
        .next-steps li {
            padding: 15px 0;
            padding-left: 40px;
            position: relative;
            color: #78350f;
            font-size: 16px;
            font-weight: 500;
            background: linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, 0.05) 100%);
            margin-bottom: 10px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .next-steps li::before {
            content: '1';
            position: absolute;
            left: 15px;
            color: #f59e0b;
            font-weight: bold;
            font-size: 18px;
            background: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
        }
        
        .next-steps li:nth-child(2)::before { content: '2'; }
        .next-steps li:nth-child(3)::before { content: '3'; }
        
        .resources {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border-radius: 20px;
            padding: 30px;
            margin: 35px 0;
            border: 1px solid #bae6fd;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }
        
        .resources h3 {
            color: #0369a1;
            margin-bottom: 15px;
            font-size: 20px;
            font-weight: 700;
            text-align: center;
        }
        
        .resources p {
            color: #475569;
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 0;
        }
        
        .signature {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid #e2e8f0;
            text-align: center;
        }
        
        .signature p {
            color: #64748b;
            margin-bottom: 10px;
            font-size: 16px;
        }
        
        .signature p:last-child {
            margin-bottom: 0;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            padding: 18px 40px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 16px;
            margin: 35px 0;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
            position: relative;
            overflow: hidden;
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
        }
        
        @media (max-width: 600px) {
            body {
                padding: 10px;
            }
            
            .container {
                border-radius: 16px;
            }
            
            .content {
                padding: 30px 25px;
            }
            
            .header-content {
                padding: 30px 20px 40px;
            }
            
            .header h1 {
                font-size: 26px;
            }
            
            .logo {
                width: 70px;
                height: 70px;
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-content">
                <div class="logo">CS</div>
                <h1>Dear ${name},</h1>
                <p class="header-subtitle">Cloud Solutions & Digital Transformation</p>
            </div>
        </div>
        <div class="content">
            <div style="text-align: center; margin-bottom: 30px;">
                <div class="welcome-icon"></div>
                <p style="font-size: 18px; color: #475569; line-height: 1.7; max-width: 500px; margin: 0 auto;">
                    Thank you for your interest in <strong style="color: #667eea;">The Cloud Sol</strong>'s services! We've received your quote request and our team is excited to work with you.
                </p>
            </div>

            <div class="details-box">
                <div class="details-title">Your Quote Request Summary</div>
                
                <div style="background: rgba(255, 255, 255, 0.7); border-radius: 16px; padding: 25px; margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #a7f3d0;">
                        <span style="font-weight: 700; color: #065f46; min-width: 120px; margin-right: 20px; display: flex; align-items: center;">
                            <span style="margin-right: 8px;">🏢</span> Company:
                        </span>
                        <span style="flex: 1; color: #1e293b; font-size: 16px; font-weight: 500;">${company}</span>
                    </div>
                    
                    ${services && services.length > 0 ? `
                    <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #a7f3d0;">
                        <div style="font-weight: 700; color: #065f46; margin-bottom: 15px; display: flex; align-items: center;">
                            <span style="margin-right: 8px;">🛠️</span> Services Requested:
                        </div>
                        <div style="background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%); border-left: 6px solid #10b981; padding: 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);">
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                ${services.map(service => `
                                <li style="padding: 12px 0; color: #374151; display: flex; align-items: center; font-size: 16px; font-weight: 500; background: linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.05) 100%); margin-bottom: 8px; border-radius: 8px; padding-left: 45px; position: relative; transition: all 0.3s ease;">
                                    <span style="position: absolute; left: 15px; color: #10b981; font-weight: bold; font-size: 18px; background: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);">✓</span>
                                    ${service}
                                </li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>

            <div class="next-steps">
                <h2>What Happens Next?</h2>
                <ul>
                    <li>Our team will carefully review your requirements</li>
                    <li>We'll contact you within 24-48 hours to discuss your project in detail</li>
                    <li>We'll provide a customized quote based on your specific needs</li>
                </ul>
            </div>

            <div style="text-align: center; margin: 40px 0;">
                <p style="color: #475569; font-size: 16px; margin-bottom: 25px; line-height: 1.7;">
                    If you have any additional questions or need to provide more details, feel free to reply to this email.
                </p>
                
                <div style="margin: 35px 0;">
                    <a href="https://www.thecloudsol.com/contact" class="cta-button">Contact Us</a>
                </div>
            </div>

            <div class="resources">
                <h3>Ready to Transform Your Business?</h3>
                <p style="color: #475569; font-size: 16px; line-height: 1.7; margin-bottom: 0;">
                    Thank you for considering <strong style="color: #667eea;">The Cloud Sol</strong> for your cloud solutions. We look forward to working with you and helping your business reach new heights!
                </p>
            </div>

            <div class="signature">
                <p style="color: #1e293b; font-weight: 700; font-size: 18px; margin-bottom: 5px;">Warm regards,</p>
                <p style="color: #1e293b; font-weight: 800; font-size: 20px;">The Cloud Sol Team</p>
            </div>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} The Cloud Sol. All rights reserved.</p>
            <p style="font-size: 13px; opacity: 0.9;">This is an automated message. Please do not reply to this email.</p>
        </div>
    </div>
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
    
    return res.status(200).json({ 
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
    return res.status(500).json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? errorStack : undefined
      }
    );
  }
}
