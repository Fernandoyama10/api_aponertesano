const interfoodController = require('../controllers/interfood');
const express = require('express');
const router = express.Router();

router.post('/register', interfoodController.registerfood);

module.exports = router;