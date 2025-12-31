// Load environment variables
import { config } from 'dotenv';
config({ path: '.env' });

const getRequiredEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const emailConfig = {
  service: 'gmail',
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
  from: process.env.SMTP_FROM || 'The Cloud Sol <tech.thecloudsol@gmail.com>',
  companyName: process.env.COMPANY_NAME || 'The Cloud Sol',
  companyAddress: process.env.COMPANY_ADDRESS || 'Your Company Address',
  companyPhone: process.env.COMPANY_PHONE || '+1 234 567 890',
  companyWebsite: process.env.COMPANY_WEBSITE || 'https://thecloudsol.com',
  companyLogoUrl: process.env.COMPANY_LOGO_URL || 'https://thecloudsol.com/logo.png',
  tls: {
    rejectUnauthorized: process.env.NODE_ENV !== 'production' // Only for development, remove in production
  }
};

// Validate required configuration
if (!emailConfig.auth.user || !emailConfig.auth.pass) {
  console.error('SMTP configuration is incomplete. Please check your .env file');
  console.error('SMTP_USER:', emailConfig.auth.user ? '***' : 'MISSING');
  console.error('SMTP_PASS:', emailConfig.auth.pass ? '***' : 'MISSING');
}
