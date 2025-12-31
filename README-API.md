# The Cloud Sol - API Documentation

## Email Service Setup

This project includes a complete email service for handling contact forms and quote requests.

## Server Setup

### Prerequisites
- Node.js 18+ 
- NPM or Yarn
- Gmail account with App Password enabled

### Installation
```bash
# Install dependencies
npm install

# Start the email server
npm run server:dev
```

The server will run on `http://localhost:3001`

### Environment Variables
Make sure your `.env` file contains:
```env
# Server Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM="The Cloud Sol <your-email@gmail.com>"

# Company Information
COMPANY_NAME="The Cloud Sol"
COMPANY_ADDRESS="Your Address"
COMPANY_PHONE="Your Phone"
COMPANY_WEBSITE="https://www.thecloudsol.com"
```

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (234) 567-890",
  "company": "Company Name",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

### POST /api/quote
Handles quote request submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (234) 567-890",
  "company": "Company Name",
  "companySize": "51-200",
  "timeline": "3-6m",
  "budget": "5 - 10 lac",
  "selectedServices": ["microsoft365", "azure"],
  "details": "Project description here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Quote request submitted successfully"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Email Templates

The system uses Handlebars templates located in `src/emails/templates/`:

- `base.hbs` - Base template with styling
- `contact-confirmation.hbs` - Sent to user after contact form submission
- `contact-to-company.hbs` - Sent to company when contact form is submitted
- `quote-confirmation.hbs` - Sent to user after quote request
- `quote-to-company.hbs` - Sent to company when quote request is submitted

## Frontend Integration

The React components (`Contact.tsx` and `Quote.tsx`) are already configured to communicate with the API endpoints.

## Testing

You can test the email service using the provided test script:
```bash
node test-email.js
```

## Security Features

- Rate limiting (10 requests per 15 minutes per IP)
- Input validation and sanitization
- CORS protection
- Error handling for production environments

## Development

For development with hot reload:
```bash
npm run server:dev
```

For production:
```bash
npm run server
```
