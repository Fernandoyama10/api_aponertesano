const usersController = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.get('/get-users', usersController.getusers);
router.get('/get-users/:id_user', usersController.getByID);
router.get('/get-infouser/:id_user', usersController.getByInfoUserID);
router.get('/login/:email', usersController.login);

router.post('/register', usersController.register);
router.put('/update', usersController.update);
router.post('/savefeedback', usersController.savefeedback);
router.get('/logindata/:email', usersController.logindata);
router.get('/refreshdata/:id_user', usersController.refreshdata);

module.exports = router;
