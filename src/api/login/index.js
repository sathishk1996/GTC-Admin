const express = require('express');
const router = express.Router();
const controller = require('./login.controller');

router.get('/', controller.getLogin);
router.put('/:id', controller.putLogin);
router.save('/', controller.saveLogin);
router.delete('/:id', controller.deleteLogin);

module.exports = router;