import { sendEmail } from './src/lib/email/email.service';

async function testEmail() {
  console.log('Starting email test...');
  
  try {
    const result = await sendEmail(
      'recipient@example.com', // Replace with your test email
      'Test Email from The Cloud Sol',
      'contact-confirmation',
      {
        formData: {
          name: 'Test User',
          email: 'test@example.com',
          phone: '1234567890',
          message: 'This is a test email from The Cloud Sol'
        }
      }
    );

    console.log('Email test result:', {
      success: result.success,
      messageId: result.messageId,
      error: (result as any).error
    });
  } catch (error) {
    console.error('Email test failed:', error);
  }
}

testEmail();
