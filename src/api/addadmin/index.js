const express = require('express');
const router = express.Router();
const controller = require('./addadmin.controller');

router.get('/', controller.getAddAdmin);
router.put('/:id', controller.putAddAdmin);
router.save('/', controller.saveAddAdmin);
router.delete('/:id', controller.deleteAddAdmin);

module.exports = router;