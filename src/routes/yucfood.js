const yucfoodController = require('../controllers/yucfood');
const express = require('express');
const router = express.Router();

router.get('/get-yucfood', yucfoodController.getyucfood);
router.get('/get-yucfood/:name', yucfoodController.getyucfoodName);
router.get('/get-records/:date_r/:id_user', yucfoodController.getFoodRecord);
router.get('/get-recordcalories/:date_r/:id_user', yucfoodController.getCaloriesRecord);

router.get('/get-yucfood/:id_yucatan_food', yucfoodController.getyucfoodID);
router.post('/add-yucfood/', yucfoodController.addyucafood);
router.delete('/delete-yucfood/:id_yucatan_food', yucfoodController.deleteyucafood);
router.put('/update-yucfood/:id_yucatan_food', yucfoodController.updateyucafood);
module.exports = router;