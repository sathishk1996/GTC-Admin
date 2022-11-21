const express = require('express');
const router = express.Router();
const controller = require('./admin.controller');

router.get('/', controller.getAdmin);
router.put('/:id', controller.putAdmin);
router.save('/', controller.saveAdmin);
router.delete('/:id', controller.deleteAdmin);

module.exports = router;