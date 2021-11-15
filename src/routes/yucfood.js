const yucfoodController = require('../controllers/yucfood');
const express = require('express');
const router = express.Router();

router.get('/get-yucfood', yucfoodController.getyucfood);
router.get('/get-yucfood/:id_yucatan_food', yucfoodController.getyucfoodID);
router.post('/add-yucfood/', yucfoodController.addyucafood);
router.delete('/add-yucfood/:id_yucatan_food', yucfoodController.deleteyucafood);



module.exports = router;