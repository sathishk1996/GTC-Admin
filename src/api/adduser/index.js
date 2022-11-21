const express = require('express');
const router = express.Router();
const controller = require('./adduser.controller');

router.get('/', controller.getAddUser);
router.put('/:id', controller.putAddUser);
router.save('/', controller.saveAddUser);
router.delete('/:id', controller.deleteAddUser);

module.exports = router;