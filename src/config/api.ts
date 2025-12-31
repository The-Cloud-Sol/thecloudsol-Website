// API Configuration for different environments
export const API_CONFIG = {
  // Production: Use Netlify functions or external API
  production: {
    contact: '/.netlify/functions/contact',
    quote: '/.netlify/functions/quote',
  },
  // Development: Use local server
  development: {
    contact: 'http://localhost:3001/api/contact',
    quote: 'http://localhost:3001/api/quote',
  },
  // Fallback for static sites
  fallback: {
    contact: 'mailto:tech.thecloudsol@gmail.com',
    quote: 'mailto:tech.thecloudsol@gmail.com',
  }
};

export const getApiUrl = (endpoint: 'contact' | 'quote') => {
  const environment = import.meta.env.MODE || 'development';
  const config = API_CONFIG[environment as keyof typeof API_CONFIG] || API_CONFIG.fallback;
  
  return config[endpoint];
};

// For static deployment, we'll use email fallback
export const useEmailFallback = () => {
  const environment = import.meta.env.MODE || 'development';
  return environment === 'production' && !import.meta.env.VITE_API_ENABLED;
};
