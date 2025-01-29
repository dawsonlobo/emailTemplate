const { Resend } = require('resend'); // Note the { Resend } destructuring
const mjml = require('mjml');
const fs = require('fs');
const path = require('path');

// Initialize Resend with your API key
const resendClient = new Resend('re_aLzbVJhF_TX2gKNsjzrLttj6srf4d7n2B');

// Read your MJML template file
const mjmlTemplate = fs.readFileSync(path.join(__dirname, 'email-template.mjml'), 'utf8');

// Convert MJML to HTML
const htmlOutput = mjml(mjmlTemplate).html;

// Send the email using Resend
const sendEmail = async () => {
  try {
    const response = await resendClient.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rakshithaprabhu03@gmail.com',
      subject: 'Test Email from MJML Template',
      html: htmlOutput,
    });

    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

sendEmail();