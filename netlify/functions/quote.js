const nodemailer = require('nodemailer');

// Create SMTP transporter using environment variables
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Validate required environment variables
const validateEnvironment = () => {
  const required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    return false;
  }
  return true;
};

// Validate request body
const validateRequestBody = (body) => {
  const required = ['name', 'email', 'details'];
  const missing = required.filter(field => !body[field] || body[field].trim() === '');
  
  if (missing.length > 0) {
    return {
      valid: false,
      message: `Missing required fields: ${missing.join(', ')}`
    };
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return {
      valid: false,
      message: 'Invalid email address'
    };
  }
  
  return { valid: true };
};

// Main handler function
exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  }

  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        success: false, 
        message: 'Method not allowed. Only POST requests are accepted.' 
      }),
    };
  }

  try {
    // Validate environment variables
    if (!validateEnvironment()) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: 'Server configuration error' 
        }),
      };
    }

    // Parse request body safely
    let requestBody;
    try {
      requestBody = JSON.parse(event.body);
    } catch (parseError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Invalid JSON in request body' 
        }),
      };
    }

    // Validate request body
    const validation = validateRequestBody(requestBody);
    if (!validation.valid) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: validation.message 
        }),
      };
    }

    // Create email transporter
    const transporter = createTransporter();

    // Prepare email content
    const emailContent = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_FROM, // Send to yourself
      replyTo: requestBody.email,
      subject: `New Quote Request from ${requestBody.name} - The Cloud Sol`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Quote Request
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${requestBody.name}</p>
            <p><strong>Email:</strong> ${requestBody.email}</p>
            ${requestBody.phone ? `<p><strong>Phone:</strong> ${requestBody.phone}</p>` : ''}
            ${requestBody.company ? `<p><strong>Company:</strong> ${requestBody.company}</p>` : ''}
            ${requestBody.designation ? `<p><strong>Designation:</strong> ${requestBody.designation}</p>` : ''}
          </div>
          
          ${requestBody.selectedServices && requestBody.selectedServices.length > 0 ? `
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Services Needed</h3>
            <ul style="margin: 0; padding-left: 20px;">
              ${requestBody.selectedServices.map(service => `<li style="margin-bottom: 5px;">${service}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${requestBody.details}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              This quote request was sent from The Cloud Sol website
            </p>
          </div>
        </div>
      `,
      text: `
        New Quote Request from ${requestBody.name}
        
        Contact Information:
        Name: ${requestBody.name}
        Email: ${requestBody.email}
        ${requestBody.phone ? `Phone: ${requestBody.phone}` : ''}
        ${requestBody.company ? `Company: ${requestBody.company}` : ''}
        ${requestBody.designation ? `Designation: ${requestBody.designation}` : ''}
        
        ${requestBody.selectedServices && requestBody.selectedServices.length > 0 ? `
        Services Needed:
        ${requestBody.selectedServices.map(service => `- ${service}`).join('\n')}
        ` : ''}
        
        Project Details:
        ${requestBody.details}
        
        ---
        This quote request was sent from The Cloud Sol website
      `
    };

    // Send email
    const info = await transporter.sendMail(emailContent);
    
    console.log('Quote email sent successfully:', info.messageId);

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Quote request sent successfully'
      }),
    };

  } catch (error) {
    console.error('Error sending quote email:', error);
    
    // Return error response
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: 'Failed to send quote request. Please try again later.' 
      }),
    };
  }
};
