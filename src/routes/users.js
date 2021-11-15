const usersController = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.get('/get-users', usersController.getusers);
router.get('/get-users/:id_user', usersController.getByID);
router.get('/login/:email', usersController.login);
router.post('/register', usersController.register);
router.get('/logindata/:email', usersController.logindata);

//WEB
router.post('/registerWEB', usersController.registerweb);
router.delete('/delete-users/:id_user', usersController.deleteuser);
router.put('/update-users/:id_user', usersController.updateuser);



module.exports = router;
