const caloriesController = require('../controllers/calories'); 
const express = require('express');
const router = express.Router();

router.get('/calories', caloriesController.caloriesdata);
router.get('/caloriesget/:id_user', caloriesController.caloriesget);


module.exports = router;