/* eslint-disable prettier/prettier */
const express = require('express');
const Terrace = require('../models/Terrace');

const router = express.Router();

// POST /terraces
router.post('/', (req, res, next) => {
  const { 
    name, 
    userId, 
    description,
    address,
    phone,
    email,
    picture,
    beerPrice,
    bestTapa,
    type,
    liveMusic,
    petFriendly,
    menuPicture,
    sunAmount,
    sunRegisterTime,
    // starsNumber, 
  } = req.body;
  
	Terrace.create({
		name,
    userId,
    description,
    address,
    phone,
    email,
    picture,
    beerPrice,
    bestTapa,
    type,
    liveMusic,
    petFriendly,
    menuPicture,
    sunAmount,
    sunRegisterTime,
    // starsNumber
	})
		.then(terrace => {
			res.json(terrace);
		})
		.catch(next);
});

// GET /terraces
router.get('/', (req, res, next) => {
	Terrace.find()
		.then(terraces => {
			res.status(200).json(terraces);
		})
		.catch(next);
});

// DELETE /terraces/:id
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Terrace.findByIdAndDelete(id)
    .then(terrace => {
      res.json(terrace);
    })
    .catch(next);
});

module.exports = router;
