const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Tour = require('../models/Tour'); // so we can get user-created tours
const auth = require('../middleware/authMiddleware');

// ✅ Get current user profile
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Update current user profile
router.put('/me', auth, async (req, res) => {
  const updates = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.user, updates, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Update failed' });
  }
});

// ✅ Delete user account
router.delete('/me', auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user);
    res.json({ message: 'Account deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Deletion failed' });
  }
});

// ✅ Get tours created by the current user
router.get('/my-tours', auth, async (req, res) => {
  try {
    const tours = await Tour.find({ createdBy: req.user });
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch your tours' });
  }
});

module.exports = router;
