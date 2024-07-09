const express = require('express');
const { viewAll, assigned, notAssigned } = require('../controllers/viewController');

const router = express.Router();

router.get('/view-all', viewAll);
router.get('/assigned', assigned);
router.get('/not-assigned', notAssigned);

module.exports = router;