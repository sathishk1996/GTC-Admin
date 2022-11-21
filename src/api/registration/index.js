const express = require('express');
const router = express.Router();
const controller = require('./registration.controller');

router.get('/', controller.getReg);
router.put('/:id', controller.putReg);
router.save('/', controller.saveReg);
router.delete('/:id', controller.deleteReg);

module.exports = router;