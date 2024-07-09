const studentModel = require('../models/studentModel');

const getStudent = async (req, res) => {
    try{
        const rollNo = req.body.rollNo || req.query.rollNo;
        const student = await studentModel.findOne({rollNo: rollNo});
        if(!student) {
            return res.status(200).send({
                message: 'Student Not found',
                success: false,
                student
            })
        }
        if(!student?.isAvailable) {
            return res.status(200).send({
                message: 'Student is Already Assigned',
                success: false, 
                student
            })
        }
        return res.status(200).send({
            message: 'Student details fetched',
            success: true,
            student
        })
    }
    catch(error) {
        return res.status(500).send({
            message: 'Internal Server Error',
            success: false
        })
    }
}
const changeLabel = async (req, res) => {
    try {
        const student = await studentModel.findOne({rollNo: req.query.rollNo});
        student.isAvailable = !student.isAvailable;
        await student.save();
        return res.status(200).send({
            message: 'State of student is changed',
            success: true
        })
    }
    catch(error) {
        return res.status(500).send({
            message: 'Internal Server Error',
            success: false
        })
    }
}
const addStudent = async (req, res) => {
    try{
        const student1 = await studentModel.findOne({rollNo: req.body.rollNo});
        if(student1) {
            return res.status(200).send({
                message: 'Student Already Present',
                success: true
            })
        }
        const student = await studentModel(req.body);
        await student.save();
        return res.status(200).send({
            message: 'New Student has Been added',
            success: true,
            student
        })
    }
    catch(error) {
        return res.status(500).send({
            message: 'Internal Server Error',
            success: false
        })
    }
}
const editStudent = async (req, res) => {
    try{
        const temp = await studentModel.findOne({rollNo: req.body.rollNo});
        if(!temp) {
            return res.status.send({
                message: 'Invalid Student',
                success: false
            })
        }
        Object.assign(temp, req.body);
        const student = await temp.save();
        return res.status(200).send({
            message: 'Students Edited successfully',
            success: true,
            student
        })
    }
    catch(error) {
        return res.status(500).send({
            message: 'Internal Server Error',
            success: false
        })
    }
}
const removeStudent = async (req, res) => {
    try{
        const student = await studentModel.findOne({rollNo: req.body.rollNo});
        if(!student) {
            return res.status.send({
                message: 'Invalid Student',
                success: false
            });
        }
        await studentModel.findOneAndDelete({rollNo: req.body.rollNo});
        return res.status(200).send({
            message: 'Students Removed successfully',
            success: true, 
            student
        })
    }
    catch(error) {
        return res.status(500).send({
            message: 'Internal Server Error',
            success: false
        })
    }
}
module.exports = {getStudent, addStudent, editStudent, removeStudent, changeLabel};