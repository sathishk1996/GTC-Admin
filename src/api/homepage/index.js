const express = require('express');
const router = express.Router();
const controller = require('./homepage.controller');

router.get('/', controller.getHomePage);
router.put('/:id', controller.putHomePage);
router.save('/', controller.saveHomePage);
router.delete('/:id', controller.deleteHomePage);

module.exports = router;