// API Configuration for different environments
export const API_CONFIG = {
  // Production: Use Netlify functions or external API
  production: {
    contact: '/.netlify/functions/contact',
    quote: '/.netlify/functions/quote',
  },
  // Development: Use local server with SMTP
  development: {
    contact: 'http://localhost:3001/api/contact',
    quote: 'http://localhost:3001/api/quote',
  },
  // Static deployment: Use formspree or similar service
  fallback: {
    contact: 'https://formspree.io/f/xyz123', // Replace with your Formspree ID
    quote: 'https://formspree.io/f/abc456',   // Replace with your Formspree ID
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
  return environment === 'production' && !import.meta.env.VITE_HAS_BACKEND;
};

// SMTP Configuration (for reference)
export const SMTP_CONFIG = {
  host: import.meta.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(import.meta.env.SMTP_PORT || '587'),
  secure: import.meta.env.SMTP_SECURE === 'true',
  user: import.meta.env.SMTP_USER || 'tech.thecloudsol@gmail.com',
  pass: import.meta.env.SMTP_PASS || '',
  from: import.meta.env.SMTP_FROM || 'The Cloud Sol <tech.thecloudsol@gmail.com>',
};
