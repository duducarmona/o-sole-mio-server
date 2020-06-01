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
    lng,
    lat,
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
    freeTables = 0,
    updates = 0, 
  } = req.body;
  
	Terrace.create({
		name,
    userId,
    description,
    address,
    lng,
    lat,
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
    freeTables,
    updates
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

// GET /terraces/:id
router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Terrace.findById(id)
    .then(terrace => {
      res.json(terrace);
    })
    .catch(next);
});

// PUT /terraces/:id
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { 
    name, 
    description,
    address,
    lng,
    lat,
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
    sunRegisterTime
  } = req.body;

  Terrace.findByIdAndUpdate(id, {
    name,
    description,
    address,
    lng,
    lat,
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
    sunRegisterTime
  })
  .then(terraceUpdated => {
    if (terraceUpdated) {
      res.json(terraceUpdated);
    } else {
      res.status(404).json('not found');
    }
  })
  .catch(next);
});

// PUT /terraces/:id/updates
router.put('/:id/updates', (req, res, next) => {
  const { id } = req.params;
  const { 
    sunAmount,
    freeTables,
    updates,
    sunRegisterTime
  } = req.body;

  Terrace.findByIdAndUpdate(id, {
    sunAmount,
    freeTables,
    updates: updates + 1,
    sunRegisterTime
  })
  .then(terraceUpdated => {
    if (terraceUpdated) {
      res.json(terraceUpdated);
    } else {
      res.status(404).json('not found');
    }
  })
  .catch(next);
});

module.exports = router;
