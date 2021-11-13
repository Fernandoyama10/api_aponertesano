const yucfoodController = require('../controllers/yucfood');
const express = require('express');
const router = express.Router();

router.get('/get-yucfood', yucfoodController.getyucfood);
router.get('/get-yucfood/:name', yucfoodController.getyucfoodName);
router.post('/get-records', yucfoodController.getFoodRecord);
router.post('/get-recordcalories', yucfoodController.getCaloriesRecord);
module.exports = router;