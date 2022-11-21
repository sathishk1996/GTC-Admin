const express = require('express');
const router = express.Router();
const controller = require('./addproduct.controller');

router.get('/', controller.getAddProduct);
router.put('/:id', controller.putAddProduct);
router.save('/', controller.saveAddProduct);
router.delete('/:id', controller.deleteAddProduct);

module.exports = router;