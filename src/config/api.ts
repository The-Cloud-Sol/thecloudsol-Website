// API Configuration for different environments
export const API_CONFIG = {
  // Production: Use Web3Forms for static deployment (free, no setup needed)
  production: {
    contact: 'https://api.web3forms.com/submit',
    quote: 'https://api.web3forms.com/submit',
  },
  // Development: Use local server with SMTP
  development: {
    contact: 'http://localhost:3001/api/contact',
    quote: 'http://localhost:3001/api/quote',
  },
  // Static deployment fallback
  fallback: {
    contact: 'https://api.web3forms.com/submit',
    quote: 'https://api.web3forms.com/submit',
  }
};

export const getApiUrl = (endpoint: 'contact' | 'quote') => {
  const environment = import.meta.env.MODE || 'development';
  const config = API_CONFIG[environment as keyof typeof API_CONFIG] || API_CONFIG.fallback;
  
  return config[endpoint];
};

// For static deployment, check if we need fallback
export const useEmailFallback = () => {
  const environment = import.meta.env.MODE || 'development';
  return environment === 'production';
};

// Web3Forms Configuration (free service)
export const WEB3FORMS_CONFIG = {
  access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Get this from web3forms.com
  subject_prefix: {
    contact: 'New Contact Message - The Cloud Sol',
    quote: 'New Quote Request - The Cloud Sol',
  }
};

// SMTP Configuration (for development)
export const SMTP_CONFIG = {
  host: import.meta.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(import.meta.env.SMTP_PORT || '587'),
  secure: import.meta.env.SMTP_SECURE === 'true',
  user: import.meta.env.SMTP_USER || 'tech.thecloudsol@gmail.com',
  pass: import.meta.env.SMTP_PASS || '',
  from: import.meta.env.SMTP_FROM || 'The Cloud Sol <tech.thecloudsol@gmail.com>',
};
