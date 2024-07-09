const express = require('express');
const Email = require('../controllers/emailController');
const router = express.Router();

router.get('/send-email', Email);

module.exports = router;