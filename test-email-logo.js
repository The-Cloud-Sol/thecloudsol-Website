// Test email functionality
import { sendContactFormEmail } from './src/lib/email/email.service.js';

const testData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '+1234567890',
  message: 'This is a test message to verify email templates are working correctly with the logo fix.'
};

console.log('Testing email functionality...');

sendContactFormEmail(testData)
  .then(result => {
    console.log('Email test result:', result);
    if (result.success) {
      console.log('✅ Email sent successfully!');
    } else {
      console.log('❌ Email failed:', result.error);
    }
  })
  .catch(error => {
    console.error('❌ Test failed:', error);
  });
