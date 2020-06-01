/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const terraceSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
  },
	name: {
		type: String,
		required: true,
  },
  description: String,
  address: { type: String, required: true },
  lng: Number,
  lat: Number,
	phone: String,
  email: String,
  picture: String,
  freeTables: Number,
  beerPrice: Number,
  bestTapa: String,
	type: { type: String, enum: ['bar', 'restaurant'] },
  liveMusic: Boolean,
  petFriendly: Boolean,
  menuPicture: String,
  sunAmount: Number,
  sunRegisterTime: Date,
  updates: Number
});

const Terrace = mongoose.model('Terrace', terraceSchema);

module.exports = Terrace;
