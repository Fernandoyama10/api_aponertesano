const usersController = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.get('/get-users', usersController.getusers);
router.get('/get-users/:id_user', usersController.getByID);
router.get('/get-infouser/:id_user', usersController.getByInfoUserID);
router.get('/login/:email', usersController.login);
<<<<<<< HEAD
router.post('/register', usersController.register);
router.put('/update', usersController.update);


=======

router.post('/register', usersController.register);
router.put('/update', usersController.update);
>>>>>>> parent of a871207 (Merge remote-tracking branch 'origin/Develop_D' into Develop_B)

router.get('/logindata/:email', usersController.logindata);


module.exports = router;
