const caloriesController = require('../controllers/calories'); 
const express = require('express');
const router = express.Router();

router.get('/calories/:date_r/:id_user', caloriesController.caloriesdata);
router.get('/caloriesget/:id_user', caloriesController.caloriesget);


module.exports = router;