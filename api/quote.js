const nodemailer = require('nodemailer');

// Create transporter using SMTP
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { name, email, phone, company, designation, details, selectedServices } = req.body;

    // Validate required fields
    if (!name || !email || !details) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields: name, email, details' 
      });
    }

    // Create email content
    const emailContent = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Designation:</strong> ${designation || 'Not provided'}</p>
      <hr>
      <h3>Services Needed:</h3>
      <p>${selectedServices && selectedServices.length > 0 ? selectedServices.join(', ') : 'Not specified'}</p>
      <hr>
      <h3>Project Details:</h3>
      <p>${details}</p>
      <hr>
      <p><small>Sent from: The Cloud Sol Website</small>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER,
      subject: `Quote Request from ${name}`,
      html: emailContent,
      text: `
        New Quote Request
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        Designation: ${designation || 'Not provided'}
        
        Services Needed:
        ${selectedServices && selectedServices.length > 0 ? selectedServices.join(', ') : 'Not specified'}
        
        Project Details:
        ${details}
        
        Sent from: The Cloud Sol Website
      `,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Quote request sent successfully!' 
    });

  } catch (error) {
    console.error('Quote form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send quote request. Please try again.' 
    });
  }
}
