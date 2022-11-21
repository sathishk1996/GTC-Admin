const express = require('express');
const router = express.Router();
const controller = require('./vendor.controller');

router.get('/', controller.getVendor);
router.put('/:id', controller.putVendor);
router.save('/', controller.saveVendor);
router.delete('/:id', controller.deleteVendor);

module.exports = router;