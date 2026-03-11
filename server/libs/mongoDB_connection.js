const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to Atlas! 🎊');
  } catch (err) {
    console.error('Connection failed 😞', err);
    process.exit(1);
  }
}

module.exports = { connectDB };