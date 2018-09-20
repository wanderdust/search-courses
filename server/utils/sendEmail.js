const nodemailer = require('nodemailer');

const sendEmail =  (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pablol03@ucm.es',
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `${req.body.email}`,
        to: 'pablo.lopez.santori@gmail.com',
        subject: 'Course Search - Contact us',
        text: `${req.body.text}`,
        html: `<p>${req.body.email}</p> <h3>${req.body.name}</h3> <p>${req.body.text}</p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(400).send({email_sent: false});
        } else {
            res.status(200).send({email_sent: true});
        }
    }); 
};

module.exports = {sendEmail};