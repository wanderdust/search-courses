const path = require("path");
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;
var nodemailer = require('nodemailer');


const { getVisibleCourses } = require("./selectors/courses");
const { updateInterval } = require("./updater/updateInterval");


app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get("/api/courseslist", (req, res) => {
    const textFilter = req.query.text;
    
    getVisibleCourses(textFilter).then((courses) => {
        const hasFoundResults = courses.length > 0;
    
        res.send({courseList: courses, hasFoundResults});
    }).catch((error) => {
        console.log(error);
    });
});

app.post("/api/contactus", (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pablol03@ucm.es',
            pass: process.env.EMAIL_PASS
        }
    });

    var mailOptions = {
        from: `${req.body.email}`,
        to: 'pablo.lopez.santori@gmail.com',
        subject: 'Course Search - Contact us',
        text: `${req.body.text}`,
        html: `<h3>${req.body.name}</h3> <p>${req.body.text}</p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(400).send({email_sent: false});
        } else {
            res.status(200).send({email_sent: true});
        }
    }); 
});

updateInterval();

//Always send index.html regardless of the route.
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log(`Server is up!`);
});

module.exports = { app };