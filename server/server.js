require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./libs/mongoDB_connection');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'TalentBridge LK API is running 🚀' });
});

// Start server after DB connection
async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} 🌐`);
  });
}

startServer();
