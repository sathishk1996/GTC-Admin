const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/', controller.getUser);
router.put('/:id', controller.putUser);
router.save('/', controller.saveUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;