const express = require('express');
const router = express.Router();
const controller = require('./product.controller');

router.get('/', controller.getProduct);
router.put('/:id', controller.putProduct);
router.save('/', controller.saveProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;