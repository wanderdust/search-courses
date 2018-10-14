const nodemailer = require('nodemailer');

const verifyData = (req) => {
    const hasCorrectEmailFormat = /^.+@.+\..+$/.test(req.body.email);
    const isNameNotEmpty = !!req.body.name;
    const isBodyNotEmpty = !!req.body.text;

    return hasCorrectEmailFormat && isNameNotEmpty && isBodyNotEmpty;
}

const sendEmail =  (req, res) => {

    const isDataVerified = verifyData(req);


    if( isDataVerified ) {

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
    } else {
        res.status(400).send({email_sent: false});
    }
};

module.exports = {sendEmail};