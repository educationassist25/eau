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
      user: 'education.assist25@gmail.com',       // Replace with your email
      pass: 'cyhm zrmj oaui rknl'           // Use an app password if using Gmail
    }
  });

  const mailOptions = {
    from: email,
    to: 'education.assist25@gmail.com',           // Where you want to receive messages
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send message.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


