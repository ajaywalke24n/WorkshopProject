const testcontrollers = async (req, res) => {    
    try {
        console.log('tested');
        return res.status(200).send({
            message: 'Tested Ok',
            success: true
        })
    }
    catch(error) {
        return res.status(500).send({
            message: 'Internal Server Error',
            success: false
        })
    }
};
module.exports = testcontrollers;