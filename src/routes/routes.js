const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.get('/usuarios', controller.getUsuario);
router.post('/incluirUsuario', controller.incluirUsuario);
router.put('/alterarUsuario', controller.alterarUsuario);

module.exports=router;