import nodemailer from 'nodemailer';
import { emailConfig } from './config';
import { readFileSync } from 'fs';
import { join } from 'path';
import Handlebars from 'handlebars';

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: emailConfig.service,
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure, // true for 465, false for other ports
  auth: {
    user: emailConfig.auth.user,
    pass: emailConfig.auth.pass,
  },
  tls: emailConfig.tls,
  debug: process.env.NODE_ENV !== 'production', // show debug output in development
  logger: process.env.NODE_ENV !== 'production', // log output in development
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to take our messages');
  }
});

// Load email templates
const loadTemplate = (templateName: string, data: any): string => {
  try {
    const templatePath = join(process.cwd(), 'src', 'emails', 'templates', `${templateName}.hbs`);
    console.log(`Loading template from: ${templatePath}`);
    const templateSource = readFileSync(templatePath, 'utf8');
    const template = Handlebars.compile(templateSource);
    
    // Add helper functions and additional data
    Handlebars.registerHelper('currentDate', () => new Date().toLocaleDateString());
    Handlebars.registerHelper('currentYear', () => new Date().getFullYear());
    
    return template({ 
      ...data, 
      company: emailConfig,
      currentDate: new Date().toLocaleDateString(),
      currentYear: new Date().getFullYear()
    });
  } catch (error) {
    console.error(`Error loading template ${templateName}:`, error);
    throw new Error(`Failed to load email template: ${templateName}`);
  }
};

export const sendEmail = async (to: string, subject: string, templateName: string, data: any) => {
  console.log(`Preparing to send email to: ${to}, Subject: ${subject}`);
  
  try {
    const html = loadTemplate(templateName, data);
    
    const mailOptions = {
      from: emailConfig.from,
      to,
      subject,
      html,
      // Add message-id for better tracking
      headers: {
        'X-Mailer': 'The Cloud Sol Mailer',
      },
    };

    console.log('Sending email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      template: templateName,
    });

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent successfully:', {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
    });
    
    return { 
      success: true, 
      messageId: info.messageId,
      response: info.response,
    };
  } catch (error) {
    console.error('Error sending email:', {
      to,
      subject,
      templateName,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      details: process.env.NODE_ENV === 'development' ? error : undefined,
    };
  }
};

export const sendContactFormEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  // Send to company
  await sendEmail(
    'tech.thecloudsol@gmail.com',
    'New Contact Form Submission',
    'contact-to-company',
    { formData, type: 'Contact' }
  );

  // Send confirmation to user
  await sendEmail(
    formData.email,
    'Thank you for contacting The Cloud Sol',
    'contact-confirmation',
    { formData }
  );
};

export const sendQuoteFormEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  designation?: string;
  services?: string[];
  message: string;
}) => {
  // Send to company
  await sendEmail(
    'tech.thecloudsol@gmail.com',
    'New Quote Request',
    'quote-to-company',
    { formData, type: 'Quote' }
  );

  // Send confirmation to user
  await sendEmail(
    formData.email,
    'Thank you for your quote request',
    'quote-confirmation',
    { formData }
  );
};
