/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
  },
  terraceId: {
		type: Schema.Types.ObjectId,
		ref: 'Terrace',
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;