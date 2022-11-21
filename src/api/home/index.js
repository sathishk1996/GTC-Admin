const express = require('express');
const router = express.Router();
const controller = require('./home.controller');

router.get('/', controller.getHome);
router.put('/:id', controller.putHome);
router.save('/', controller.saveHome);
router.delete('/:id', controller.deleteHome);

module.exports = router;