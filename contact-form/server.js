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

  // Configure Gmail SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'education.assist25@gmail.com', // your Gmail
      pass: 'cyhmzrmjoaurknl'                // your Gmail App Password
    }
  });

  // Verify SMTP connection
  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ SMTP connection failed:', error.message);
    } else {
      console.log('✅ SMTP server is ready to send emails');
    }
  });

  // Email options
  const mailOptions = {
    from: 'education.assist25@gmail.com', // must match authenticated user
    to: 'education.assist25@gmail.com',   // where you want to receive emails
    subject: `New Contact Form Submission from ${name}`,
    text: `From: ${name} <${email}>\n\nMessage:\n${message}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
    console.log('📨 Message ID:', info.messageId);
    console.log('🔗 Preview URL (if using Ethereal):', nodemailer.getTestMessageUrl(info));
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    res.status(500).send('Failed to send message.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
