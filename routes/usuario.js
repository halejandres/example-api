const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario.controller');
const middleware = require('../middleware/jwt-middleware')

router.get('/', middleware, controller.getUsuario);

module.exports = router;