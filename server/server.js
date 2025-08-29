const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Rejection:', err.message);
  process.exit(1);
});

mongoose.connect(process.env.MONGO_URI, {
  // Only allow self-signed certs in development (optional)
  tls: process.env.NODE_ENV === 'development',
  tlsAllowInvalidCertificates: process.env.NODE_ENV === 'development',
})
.then(() => {
  console.log('✅ MongoDB connected');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection failed.');
  console.error(err.message);
  process.exit(1);
});
