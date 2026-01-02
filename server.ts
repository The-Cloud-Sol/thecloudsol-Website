import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { sendContactFormEmail, sendQuoteFormEmail } from './src/lib/email/email.service';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Dynamic CORS configuration for different environments
const getAllowedOrigins = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const frontendUrl = process.env.FRONTEND_URL;
  
  if (isProduction && frontendUrl) {
    // Production: Use the specific frontend URL
    return [frontendUrl];
  } else if (!isProduction) {
    // Development: Allow localhost
    return [
      'http://localhost:8080',
      'http://localhost:5173',
      'http://localhost:3000',
      'http://127.0.0.1:8080',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:3000'
    ];
  }
  
  // Fallback
  return ['http://localhost:8080'];
};

// Enhanced CORS configuration
const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    const allowedOrigins = getAllowedOrigins();
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`CORS blocked origin: ${origin}`);
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

// Rate limiting - more lenient in development
const limiter = rateLimit({
  windowMs: process.env.NODE_ENV === 'production' ? 15 * 60 * 1000 : 5 * 60 * 1000, // 15 min prod, 5 min dev
  max: process.env.NODE_ENV === 'production' ? 10 : 50, // 10 requests prod, 50 requests dev
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(limiter);
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address'
      });
    }

    const formData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      company: company?.trim() || '',
      message: message.trim()
    };

    // Send emails
    await sendContactFormEmail(formData);

    res.json({
      success: true,
      message: 'Contact form submitted successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit contact form. Please try again.'
    });
  }
});

// Quote form endpoint
app.post('/api/quote', async (req, res) => {
  try {
    const { 
      name, 
      email, 
      phone, 
      company, 
      designation,
      selectedServices, 
      details 
    } = req.body;

    // Validation
    if (!name || !email || !phone || !company || !details) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, phone, company, and project description are required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address'
      });
    }

    const formData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company.trim(),
      designation: designation?.trim() || '',
      services: selectedServices || [],
      message: details.trim()
    };

    // Send emails
    await sendQuoteFormEmail(formData);

    res.json({
      success: true,
      message: 'Quote request submitted successfully'
    });

  } catch (error) {
    console.error('Quote form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit quote request. Please try again.'
    });
  }
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const environment = isProduction ? 'Production' : 'Development';
  
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${environment}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  
  if (!isProduction) {
    console.log(`🌐 Development URLs:`);
    console.log(`   - Frontend: ${process.env.FRONTEND_URL || 'http://localhost:8080'}`);
    console.log(`   - Backend: http://localhost:${PORT}`);
  }
  
  // Log allowed origins for debugging
  const allowedOrigins = getAllowedOrigins();
  console.log(`🔓 Allowed CORS origins: ${allowedOrigins.join(', ')}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully');
  process.exit(0);
});
