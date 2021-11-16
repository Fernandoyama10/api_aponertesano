const yucfoodController = require('../controllers/yucfood');
const express = require('express');
const router = express.Router();

router.get('/get-yucfood', yucfoodController.getyucfood);
router.get('/get-yucfood/:id_yucatan_food', yucfoodController.getyucfoodID);
router.post('/add-yucfood/', yucfoodController.addyucafood);
router.delete('/delete-yucfood/:id_yucatan_food', yucfoodController.deleteyucafood);
router.put('/update-yucfood/:id_yucatan_food', yucfoodController.updateyucafood);


module.exports = router;