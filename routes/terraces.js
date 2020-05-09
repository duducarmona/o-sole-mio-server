/* eslint-disable prettier/prettier */
const express = require('express');
const Terrace = require('../models/Terrace');

const router = express.Router();

// POST /terraces
router.post('/', (req, res, next) => {
  const { name, userId, description } = req.body;
  
	Terrace.create({
		name,
    userId,
    description
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

module.exports = router;
