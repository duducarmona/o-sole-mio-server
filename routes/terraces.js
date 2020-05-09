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

module.exports = router;
