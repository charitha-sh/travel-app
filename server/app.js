const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ✅ Routes
const authRoutes = require('./routes/auth');
const tourRoutes = require('./routes/tour');
const userRoutes = require('./routes/user'); 

app.use('/api/auth', authRoutes);   // Register/Login
app.use('/api/tours', tourRoutes);  // Tour CRUD
app.use('/api/user', userRoutes);   // 👈 User profile/dashboard

// ✅ Test route
app.get('/', (req, res) => {
  res.send('🌍 Travel App API is running');
});

// ✅ 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;
