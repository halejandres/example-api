const express = require('express');
const router = express.Router();
const controller = require('../controllers/logro.controller');

router.get('/', controller.getLogro);
router.get('/:id', controller.getLogroById);

module.exports = router;