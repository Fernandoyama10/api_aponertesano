const rolesController = require('../controllers/roles');
const express = require('express');
const router = express.Router();

router.get('/get-roles', rolesController.getroles );
router.post('/add-roles', rolesController.addrole );

module.exports = router;