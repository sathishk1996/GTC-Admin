const express = require('express');
const router = express.Router();
const controller = require('./forgotpsw.controller');

router.get('/', controller.getForgotPwd);
router.put('/:id', controller.putForgotPwd);
router.save('/', controller.saveForgotPwd);
router.delete('/:id', controller.deleteForgotPwd);

module.exports = router;