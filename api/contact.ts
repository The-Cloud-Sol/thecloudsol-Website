import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers for all origins
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ 
      success: false,
      message: "Method Not Allowed" 
    });
  }

  try {
    const { name, email, phone, company, message } = req.body as {
      name: string;
      email: string;
      phone?: string;
      company?: string;
      message: string;
    };

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required fields"
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address"
      });
    }

    const formData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      company: company?.trim() || '',
      message: message.trim()
    };

    console.log("Contact Form Submission:", formData);

    // TODO: Send email using nodemailer
    // await sendContactFormEmail(formData);

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully"
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit contact form. Please try again."
    });
  }
}
