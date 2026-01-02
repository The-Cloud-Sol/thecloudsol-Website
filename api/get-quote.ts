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
    const { name, email, phone, company, designation, services, details } = req.body as {
      name: string;
      email: string;
      phone: string;
      company: string;
      designation?: string;
      services: string[];
      details: string;
    };

    // Validation
    if (!name || !email || !phone || !company || !services || !details) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const formData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company.trim(),
      designation: designation?.trim() || '',
      services: services || [],
      details: details.trim()
    };

    console.log("Quote Request Submission:", formData);

    // TODO: Send email using nodemailer
    // await sendQuoteFormEmail(formData);

    return res.status(200).json({
      success: true,
      message: "Quote request submitted successfully"
    });

  } catch (error) {
    console.error("Quote form error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit quote request. Please try again."
    });
  }
}
