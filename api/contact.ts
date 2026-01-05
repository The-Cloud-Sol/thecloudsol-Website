import nodemailer from 'nodemailer';
import type { SentMessageInfo } from 'nodemailer';

/* =======================
   Types
======================= */
interface EmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  designation?: string;
  message: string;
  type?: 'contact' | 'quote';
}

interface MailOptions {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

/* =======================
   Environment & Config
======================= */
const isDev = process.env.NODE_ENV !== 'production';

const CONFIG = {
  SENDER_EMAIL: process.env.SMTP_USER || 'tech.thecloudsol@gmail.com',
  RECIPIENT_EMAILS: [
    process.env.COMPANY_EMAIL || 'tech.thecloudsol@gmail.com'
  ],
  COMPANY_LOGO_URL:
    process.env.COMPANY_LOGO_URL ||
    'https://thecloudsol.com/logo.png',
  SMTP: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // Always false for port 587, true only for 465
    auth: {
      user: process.env.SMTP_USER || 'tech.thecloudsol@gmail.com',
      pass: process.env.SMTP_PASSWORD || 'oeoj hpht hrot nwnn'
    }
  }
};

/* =======================
   Transporter
======================= */
const transporter = nodemailer.createTransport({
  ...CONFIG.SMTP,
  connectionTimeout: 10000,
  socketTimeout: 30000
});

/* =======================
   Handler
======================= */
export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = req.body as EmailData;

    const {
      name,
      email,
      phone,
      company,
      designation,
      message,
      type = 'contact'
    } = body;

    if (!name || !email || !message) {
      return res.status(400).json(
        { success: false, error: 'Missing required fields' }
      );
    }

    await transporter.verify();

    /* =======================
       ADMIN EMAIL
    ======================= */
    const adminMailPromises = CONFIG.RECIPIENT_EMAILS.map(
      (recipient) =>
        transporter.sendMail({
          from: `The Cloud Sol <${CONFIG.SENDER_EMAIL}>`,
          to: recipient,
          replyTo: email,
          subject: `New ${type === 'quote' ? 'Quote Request' : 'Website Inquiry'} | ${name} | The Cloud Sol`,
          text: `
New Inquiry Received

Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}
Designation: ${designation || 'N/A'}

Message:
${message}

Submitted via The Cloud Sol website.
          `,
          html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            background-color: #f8fafc;
            padding: 20px;
            min-height: 100vh;
        }
        
        .container {
            max-width: 650px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
        }
        
        .header {
            background-color: #4f46e5;
            padding: 30px;
            text-align: center;
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
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            border-radius: 50%;
            margin-bottom: 25px;
            position: relative;
            box-shadow: 0 20px 40px rgba(239, 68, 68, 0.4);
            animation: pulse 2s infinite;
        }
        
        .alert-icon::before {
            content: '🚨';
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
            color: #991b1b;
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
        
        .message-box {
            background: linear-gradient(135deg, #ffffff 0%, #fef2f2 100%);
            border-left: 6px solid #ef4444;
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
            color: #ef4444;
            opacity: 0.3;
            font-family: Georgia, serif;
        }
        
        .message-box::after {
            content: '"';
            position: absolute;
            bottom: -20px;
            right: 15px;
            font-size: 48px;
            color: #ef4444;
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
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
            box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(239, 68, 68, 0.5);
        }
        
        .btn-secondary {
            background: white;
            color: #ef4444;
            border: 2px solid #ef4444;
            box-shadow: 0 4px 15px rgba(239, 68, 68, 0.2);
        }
        
        .btn-secondary:hover {
            background: #ef4444;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
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
                <h1 style="color: #ffffff; font-size: 32px; font-weight: 700; text-align: center; margin: 0 0 15px 0; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); letter-spacing: -0.5px;">TheCloudSol</h1>
                <h1>New Contact Form Submission <span style="display: inline-block; background: #ef4444; color: white; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-left: 10px;">HIGH PRIORITY</span></h1>
                <p class="header-subtitle">Cloud Solutions & Digital Transformation</p>
            </div>
        </div>
        <div class="content">
            <div style="text-align: center; margin-bottom: 35px;">
                <div style="font-size: 48px; margin-bottom: 20px;">🚨</div>
                <p style="font-size: 18px; color: #475569; line-height: 1.7; max-width: 550px; margin: 0 auto;">
                    Someone has contacted you through your website. This inquiry requires your immediate attention to provide excellent customer service.
                </p>
            </div>

            <div class="details-box">
                <div class="detail-item">
                    <span class="detail-label"><span style="margin-right: 10px; font-size: 20px;">👤</span> Name:</span>
                    <span class="detail-value">${name}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label"><span style="margin-right: 10px; font-size: 20px;">📧</span> Email:</span>
                    <span class="detail-value">
                        <a href="mailto:${email}" style="color: #ef4444; text-decoration: none; font-weight: 600;">${email}</a>
                    </span>
                </div>
                
                ${phone ? `
                <div class="detail-item">
                    <span class="detail-label"><span style="margin-right: 10px; font-size: 20px;">📱</span> Phone:</span>
                    <span class="detail-value">
                        <a href="tel:${phone}" style="color: #ef4444; text-decoration: none; font-weight: 600;">${phone}</a>
                    </span>
                </div>
                ` : ''}
                
                ${company ? `
                <div class="detail-item">
                    <span class="detail-label"><span style="margin-right: 10px; font-size: 20px;">🏢</span> Company:</span>
                    <span class="detail-value">${company}</span>
                </div>
                ` : ''}
                
                ${designation ? `
                <div class="detail-item">
                    <span class="detail-label"><span style="margin-right: 10px; font-size: 20px;">💼</span> Designation:</span>
                    <span class="detail-value">${designation}</span>
                </div>
                ` : ''}
                
                <div style="margin-bottom: 0;">
                    <div style="font-weight: 700; color: #991b1b; margin-bottom: 15px; display: flex; align-items: center; font-size: 16px;">
                        <span style="margin-right: 10px; font-size: 20px;">💬</span> Message:
                    </div>
                    <div class="message-box">${message}</div>
                </div>
            </div>

            <div class="action-required">
                <h3>Action Required</h3>
                <p>Please respond to this inquiry as soon as possible to provide excellent customer service and convert this lead into a potential client.</p>
                <div class="action-buttons">
                    <a href="mailto:${email}" class="btn btn-primary">Reply Now</a>
                    ${phone ? `<a href="tel:${phone}" class="btn btn-secondary">Call Client</a>` : ''}
                </div>
            </div>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} The Cloud Sol. All rights reserved.</p>
            <p style="font-size: 13px; opacity: 0.9;">You're receiving this email because someone contacted you through The Cloud Sol's website.</p>
        </div>
    </div>
</body>
</html>`
        })
    );

    /* =======================
       USER EMAIL
    ======================= */
    const userMail = transporter.sendMail({
      from: `The Cloud Sol <${CONFIG.SENDER_EMAIL}>`,
      to: email,
      subject: `Thank You for Contacting The Cloud Sol${company ? ' | ' + company : ''}`,
      text: `
Hello ${name},

Thank you for contacting The Cloud Sol.
We have received your message and our team will get back to you within 24–48 business hours.

Best regards,
The Cloud Sol Team
www.thecloudsol.com
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting The Cloud Sol</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            background-color: #f8fafc;
            padding: 20px;
            min-height: 100vh;
        }
        
        .container {
            max-width: 650px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
        }
        
        .header {
            background-color: #4f46e5;
            padding: 30px;
            text-align: center;
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
            width: 90px;
            height: 90px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            margin-bottom: 25px;
            position: relative;
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
        }
        
        .welcome-icon::before {
            content: '🎉';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 45px;
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
        
        .details-title {
            font-size: 18px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .details-title::before {
            content: '📝';
            margin-right: 8px;
        }
        
        .message-content {
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
            padding: 25px;
            border-radius: 16px;
            border-left: 6px solid #667eea;
            font-style: italic;
            color: #374151;
            font-size: 16px;
            line-height: 1.8;
            position: relative;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
        }
        
        .message-content::before {
            content: '"';
            position: absolute;
            top: 10px;
            left: 15px;
            font-size: 48px;
            color: #667eea;
            opacity: 0.3;
            font-family: Georgia, serif;
        }
        
        .message-content::after {
            content: '"';
            position: absolute;
            bottom: -20px;
            right: 15px;
            font-size: 48px;
            color: #667eea;
            opacity: 0.3;
            font-family: Georgia, serif;
        }
        
        .next-steps {
            margin: 30px 0;
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
            border-radius: 20px;
            padding: 30px;
            border: 2px solid #a7f3d0;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15);
        }
        
        .next-steps h3 {
            color: #065f46;
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 700;
            display: flex;
            align-items: center;
        }
        
        .next-steps h3::before {
            content: '🎯';
            margin-right: 12px;
            font-size: 24px;
        }
        
        .next-steps ul {
            list-style: none;
            padding: 0;
        }
        
        .next-steps li {
            padding: 15px 0;
            padding-left: 40px;
            position: relative;
            color: #374151;
            font-size: 16px;
            font-weight: 500;
            background: linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.05) 100%);
            margin-bottom: 10px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .next-steps li:hover {
            background: linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
            transform: translateX(5px);
        }
        
        .next-steps li::before {
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
        
        .resources {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #fcd34d;
            border-radius: 20px;
            padding: 30px;
            margin: 30px 0;
            box-shadow: 0 8px 25px rgba(251, 191, 36, 0.15);
            position: relative;
            overflow: hidden;
        }
        
        .resources::before {
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
        
        .resources h3 {
            color: #92400e;
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 700;
            display: flex;
            align-items: center;
            position: relative;
            z-index: 1;
        }
        
        .resources h3::before {
            content: '🚀';
            margin-right: 12px;
            font-size: 24px;
        }
        
        .resources ul {
            list-style: none;
            padding: 0;
            position: relative;
            z-index: 1;
        }
        
        .resources li {
            margin-bottom: 15px;
        }
        
        .resources a {
            color: #92400e;
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            padding: 12px 24px;
            background: white;
            border-radius: 12px;
            border: 2px solid #fcd34d;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(251, 191, 36, 0.2);
            font-size: 15px;
        }
        
        .resources a:hover {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(251, 191, 36, 0.3);
        }
        
        .signature {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
        }
        
        .signature p {
            color: #64748b;
            margin-bottom: 5px;
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
            margin: 30px 0;
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
                <h1 style="color: #ffffff; font-size: 32px; font-weight: 700; text-align: center; margin: 0 0 15px 0; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); letter-spacing: -0.5px;">TheCloudSol</h1>
                <h1>Dear ${name},</h1>
                <p class="header-subtitle">Cloud Solutions & Digital Transformation</p>
            </div>
        </div>
        <div class="content">
            <div style="text-align: center; margin-bottom: 35px;">
                <div style="font-size: 48px; margin-bottom: 20px;">🎉</div>
                <p style="font-size: 18px; color: #475569; line-height: 1.7; max-width: 520px; margin: 0 auto;">
                    Thank you for reaching out to <strong style="color: #667eea;">The Cloud Sol</strong>! We've received your message and our team will get back to you within 24-48 hours.
                </p>
            </div>

            <div class="details-box">
                <div class="details-title">Your Message Summary</div>
                <div class="message-content">
                    "${message}"
                </div>
            </div>

            <div class="next-steps">
                <h3>What Happens Next?</h3>
                <ul>
                    <li>Our team is reviewing your inquiry</li>
                    <li>We'll prepare a personalized response</li>
                    <li>You'll hear from us within 24-48 hours</li>
                    <li>We'll provide solutions tailored to your needs</li>
                </ul>
            </div>

            <div class="resources">
                <h3>Helpful Resources</h3>
                <ul>
                    <li><a href="https://www.thecloudsol.com/services">Our Services</a></li>
                    <li><a href="https://www.thecloudsol.com/blog">Latest Blog Posts</a></li>
                    <li><a href="https://www.thecloudsol.com/faq">Frequently Asked Questions</a></li>
                </ul>
            </div>

            <div class="signature">
                <p>We look forward to assisting you with your cloud solutions!</p>
                <p><strong>Warm regards,</strong></p>
                <p><strong>The Cloud Sol Team</strong></p>
            </div>

            <div style="text-align: center;">
                <a href="https://www.thecloudsol.com" class="cta-button">Visit Our Website</a>
            </div>
        </div>
        <div class="footer">
            <p>  ${new Date().getFullYear()} The Cloud Sol. All rights reserved.</p>
            <p style="font-size: 13px; opacity: 0.9;">You're receiving this email because you contacted The Cloud Sol.</p>
        </div>
    </div>
</body>
</html>`
    });

    // Send all emails in parallel
    const [adminResults, userResult] = await Promise.all([
      Promise.all(adminMailPromises),
      userMail
    ]);

    return res.status(200).json({
      success: true,
      adminEmailIds: adminResults.map(
        (r: SentMessageInfo) => r.messageId
      ),
      userEmailId: userResult.messageId
    });
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'Failed to send email'
      }
    );
  }
}
