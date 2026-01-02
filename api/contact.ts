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
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
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

    // Debug: Log environment variables (without sensitive data)
    console.log('Environment check:', {
      NODE_ENV: process.env.NODE_ENV,
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER ? 'SET' : 'NOT_SET',
      SMTP_PASSWORD: process.env.SMTP_PASSWORD ? 'SET' : 'NOT_SET',
      COMPANY_EMAIL: process.env.COMPANY_EMAIL
    });

    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Missing SMTP credentials:', {
        SMTP_USER: !!process.env.SMTP_USER,
        SMTP_PASSWORD: !!process.env.SMTP_PASSWORD
      });
      return res.status(500).json({
        success: false,
        error: 'Email service configuration incomplete'
      });
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
          html: `<!DOCTYPE html>
<html>
<body style="margin:0;background:#F4F6FA;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" style="padding:30px">
<table width="600" style="background:#fff;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.08)">
<tr>
<td style="background:#0F172A;padding:24px;text-align:center">
<img src="${CONFIG.COMPANY_LOGO_URL}" width="60" alt="The Cloud Sol"/>
<h2 style="color:#fff;margin:12px 0 4px">New Website Inquiry</h2>
<p style="color:#CBD5E1;font-size:13px">The Cloud Sol Website</p>
</td>
</tr>
<tr>
<td style="padding:24px;color:#334155;font-size:14px">
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
${designation ? `<p><strong>Designation:</strong> ${designation}</p>` : ''}
<hr style="margin:20px 0"/>
<p style="white-space:pre-line">${message}</p>
</td>
</tr>
<tr>
<td style="background:#F1F5F9;padding:14px;text-align:center;font-size:12px;color:#64748B">
© ${new Date().getFullYear()} The Cloud Sol
</td>
</tr>
</table>
</td></tr>
</table>
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
      html: `<!DOCTYPE html>
<html>
<body style="margin:0;background:#F4F6FA;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" style="padding:30px">
<table width="600" style="background:#fff;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.08)">
<tr>
<td style="background:linear-gradient(135deg,#2563EB,#4F46E5);padding:30px;text-align:center">
<img src="${CONFIG.COMPANY_LOGO_URL}" width="70" alt="The Cloud Sol"/>
<h2 style="color:#fff;margin-top:12px">Thank You for Contacting Us</h2>
<p style="color:#E0E7FF">The Cloud Sol – Cloud Solutions & Digital Transformation</p>
</td>
</tr>
<tr>
<td style="padding:28px;color:#334155;font-size:15px">
<p>Hello <strong>${name}</strong>,</p>
<p>Thank you for reaching out to <strong>The Cloud Sol</strong>. We have received your message.</p>
<p>Our team will contact you within <strong>24–48 business hours</strong>.</p>
${type === 'quote' ? `
<div style="background:#FEF3C7;padding:16px;border-radius:6px;margin:20px 0">
<strong>Next Steps:</strong>
<ul>
<li>Requirement review</li>
<li>Consultation call</li>
<li>Custom quote</li>
</ul>
</div>` : ''}
<p>We look forward to working with you.</p>
<p>Best regards,<br/><strong>The Cloud Sol Team</strong></p>
</td>
</tr>
<tr>
<td style="background:#F1F5F9;padding:16px;text-align:center;font-size:12px;color:#64748B">
📧 tech.thecloudsol@gmail.com | 🌐 www.thecloudsol.com<br/>
© ${new Date().getFullYear()} The Cloud Sol
</td>
</tr>
</table>
</td></tr>
</table>
</body>
</html>`
    });

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
