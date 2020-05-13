/* eslint-disable prettier/prettier */
const express = require('express');
const Review = require('../models/Review');

const router = express.Router();

// GET /terraces/:id/reviews
router.get('/:terraceId', (req, res, next) => {
  const { terraceId } = req.params;
  
  Review.find({ terraceId })
    .then(reviews => {
      res.json(reviews);
    })
    .catch(next);
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

module.exports = router;