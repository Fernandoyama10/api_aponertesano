const caloriesController = require('../controllers/calories'); 
const express = require('express');
const router = express.Router();

router.get('/calories', caloriesController.caloriesdata);


module.exports = router;