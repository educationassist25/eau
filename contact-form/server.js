const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// POST route to handle form submission
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'education.assist25@gmail.com', // Your Gmail address
      pass: 'cyhmzrmjoaurknl'               // Your Gmail App Password
    }
  });

  // Verify transporter setup
  transporter.verify((error, success) => {
    if (error) {
      console.error('Transporter verification failed:', error.message);
    } else {
      console.log('Server is ready to send emails');
    }
  });

  // Email options
  const mailOptions = {
    from: 'Your Email', // Use your own email to avoid spoofing
    to: 'education.assist25@gmail.com',   // Where you want to receive messages
    subject: `New Contact Form Submission from ${name}`,
    text: `From: ${name} <${email}>\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error('❌ Error sending email:', error.message, error.response);
    res.status(500).send('Failed to send message.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

