const interfoodController = require('../controllers/interfood');
const express = require('express');
const router = express.Router();

router.post('/register', interfoodController.registerfood);
router.delete('/deletefood/:id_meal', interfoodController.deleteFood);
router.post('/deletecalories', interfoodController.deleteCalories);
module.exports = router;