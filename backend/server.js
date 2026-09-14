const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio backend is running' });
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  console.log(`[Contact Form Submission] From: ${name} <${email}>`);
  console.log(`Message: ${message}`);

  // In production, integrate Nodemailer, SendGrid, or AWS SES here
  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out! Your message has been received.',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on http://localhost:${PORT}`);
});
