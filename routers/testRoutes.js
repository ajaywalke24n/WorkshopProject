const express = require('express');
const testcontrollers = require('../controllers/testcontrollers');
const router = express.Router();

router.get('/test1', testcontrollers);

module.exports = router;