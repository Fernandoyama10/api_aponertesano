const usersController = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.get('/get-users', usersController.getusers);
router.get('/get-users/:id_user', usersController.getByID);
router.get('/login/:email', usersController.login);

router.post('/register', usersController.register);

router.get('/getUserData/:id_user', usersController.getUserData);


module.exports = router;
