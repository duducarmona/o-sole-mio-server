/* eslint-disable prettier/prettier */
const express = require('express');
const Review = require('../models/Review');
const User = require('../models/User');

const router = express.Router();

// GET /terraces/:id/reviews
router.get('/:terraceId', async (req, res, next) => {
  const { terraceId } = req.params;
  let reviews;

  try {
    reviews = await Review.find({ terraceId });
  } catch (error) {
    next(error);
  }

  try {
    await User.populate(reviews, {path: 'userId'});
  } catch (error) {
    next(error);
  }

  res.json(reviews);
});

// POST /reviews
router.post('/', (req, res, next) => {
  const {
    userId,
    terraceId,
    title,
    text,
    rating
  } = req.body;

  Review.create({
    userId,
    terraceId,
    title,
    text,
    rating
  })
    .then(review => {
      res.json(review);
    })
    .catch(next);
});

// DELETE /reviews/:id
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Review.findByIdAndDelete(id)
    .then(review => {
      res.json(review);
    })
    .catch(next);
});

// GET /reviews/:id/detail
router.get('/:id/detail', (req, res, next) => {
  const { id } = req.params;

  Review.findById(id)
    .then(review => {
      res.json(review);
    })
    .catch(next);
});

// PUT /reviews/:id
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { 
    title,
    text,
    rating
  } = req.body;

  Review.findByIdAndUpdate(id, {
    title,
    text,
    rating
  })
  .then(reviewUpdated => {
    if (reviewUpdated) {
      res.json(reviewUpdated);
    } else {
      res.status(404).json('not found');
    }
  })
  .catch(next);
});

module.exports = router;