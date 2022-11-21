const express = require('express');
const router = express.Router();
const controller = require('./addvendor.controller');

router.get('/', controller.getAddVendor);
router.put('/:id', controller.putAddVendor);
router.save('/', controller.saveAddVendor);
router.delete('/:id', controller.deleteAddVendor);

module.exports = router;