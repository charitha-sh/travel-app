const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');
const auth = require('../middleware/authMiddleware');

// @route   GET /api/tours
// @desc    Get all tours
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find().sort({ createdAt: -1 });
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/tours/:id
// @desc    Get single tour by ID
router.get('/:id', async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) return res.status(404).json({ message: 'Tour not found' });
    res.json(tour);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/tours
// @desc    Create a new tour (protected)
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, location, price, image, duration } = req.body;
    const newTour = new Tour({
      title,
      description,
      location,
      price,
      image,
      duration,
      createdBy: req.user // user ID from token
    });
    const savedTour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create tour' });
  }
});

// @route   DELETE /api/tours/:id
// @desc    Delete a tour (protected)
router.delete('/:id', auth, async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) return res.status(404).json({ message: 'Tour not found' });

    // Optional: only allow creator to delete
    if (tour.createdBy.toString() !== req.user) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await tour.remove();
    res.json({ message: 'Tour deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete tour' });
  }
});

module.exports = router;
