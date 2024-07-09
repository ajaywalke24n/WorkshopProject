const studentModel = require('../models/studentModel');

const viewAll = async (req, res) => {
    try{
        const student = await studentModel.find();
        return res.status(200).send({
            message: 'Successful',
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
const assigned = async (req, res) => {
    try{
        const student = await studentModel.find({isAssigned: true});
        return res.status(200).send({
            message: 'Successful',
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
const notAssigned = async (req, res) => {
    try{
        const student = await studentModel.find({isAssigned: false});
        return res.status(200).send({
            message: 'Successful',
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
module.exports = {viewAll, assigned, notAssigned};