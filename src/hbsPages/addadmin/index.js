const express = require('express');
const router = express.Router();
const controller = require('./addadmin.controller');

router.get('/add', controller.addadmin);
router.get('/edit', controller.editadmin);
router.get('/', controller.getTask);

module.exports = router;