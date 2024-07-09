const nodemailer = require('nodemailer');
const Email = async (req, res) => {
    try {
        const email = req.body.email||req.query.email;
        const total = req.body.total||req.query.total;
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'novarov52@gmail.com',
                pass: 'elkmcmyiskixeids'
            }
        })
        const mailOptions = {
            from:'novarov52@gmail.com',
            to:email,
            subject:'Marks Assigned',
            text:`Your Total marks Assigned are ${total}, This is an informative email Pls don\'t reply`
        }
        const temp = await transporter.sendMail(mailOptions);
        return res.status(200).send({
            message:'done',
            success:true,
            temp
        })
    }
    catch(error) {
        // console.log(error);
        return res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error
        })
    }
}
module.exports = Email;