const rolesController = require('../controllers/roles');
const express = require('express');
const router = express.Router();

router.get('/get-roles', rolesController.getroles );
router.post('/add-roles', rolesController.addrole );
router.delete('/delete-roles/:id_role', rolesController.deleterol );
router.put('/update-roles/:id_role', rolesController.updateroles );

module.exports = router;