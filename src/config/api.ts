// API Configuration for different environments
export const API_CONFIG = {
  // Production: Use Netlify functions with nodemailer
  production: {
    contact: '/.netlify/functions/contact',
    quote: '/.netlify/functions/quote',
  },
  // Development: Use local server with SMTP
  development: {
    contact: 'http://localhost:3001/api/contact',
    quote: 'http://localhost:3001/api/quote',
  },
  // Static deployment fallback
  fallback: {
    contact: 'http://localhost:3001/api/contact',
    quote: 'http://localhost:3001/api/quote',
  }
};

export const getApiUrl = (endpoint: 'contact' | 'quote') => {
  const environment = import.meta.env.MODE || 'development';
  const config = API_CONFIG[environment as keyof typeof API_CONFIG] || API_CONFIG.fallback;
  
  return config[endpoint];
};

// SMTP Configuration (for development and production)
export const SMTP_CONFIG = {
  host: import.meta.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(import.meta.env.SMTP_PORT || '587'),
  secure: import.meta.env.SMTP_SECURE === 'true',
  user: import.meta.env.SMTP_USER || 'tech.thecloudsol@gmail.com',
  pass: import.meta.env.SMTP_PASS || '',
  from: import.meta.env.SMTP_FROM || 'The Cloud Sol <tech.thecloudsol@gmail.com>',
};
