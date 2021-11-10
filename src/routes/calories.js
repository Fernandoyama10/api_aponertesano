const caloriesController = require('../controllers/calories'); 
const express = require('express');
const router = express.Router();

router.post('/calories', caloriesController.registerfood);

module.exports = router;