const express = require('express');
const { getStudent, addStudent, editStudent, removeStudent, changeLabel } = require('../controllers/studentController');

const router = express.Router();

router.get('/get-student', getStudent);
router.post('/add-student', addStudent);
router.post('/edit-student', editStudent);
router.post('/remove-student', removeStudent);
router.get('/change-label', changeLabel);

module.exports = router;