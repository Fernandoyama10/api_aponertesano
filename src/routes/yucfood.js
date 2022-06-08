const yucfoodController = require('../controllers/yucfood');
const express = require('express');
const router = express.Router();

router.get('/get-responses', yucfoodController.getyucfood);
router.post('/sms/:clienteID', yucfoodController.getyucfoodName);
router.get('/get-records/:date_r/:id_user', yucfoodController.getFoodRecord);
router.get('/get-recordcalories/:date_r/:id_user', yucfoodController.getCaloriesRecord);
router.delete('/deletefood/:id_meal', yucfoodController.deleteFood);
router.post('/deletecalories', yucfoodController.deleteCalories);

module.exports = router;