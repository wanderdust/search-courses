const path = require("path");
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;
const { database } = require("./firebase/firebase");


const { getVisibleCourses } = require("./selectors/courses");
const { updateInterval } = require("./updater/updateInterval");
const { sendEmail } = require("./utils/sendEmail")


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

app.get("/api/course/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    
    database.ref(`courses/${courseId}`).once("value").then((snapshot) => {
        res.status(200).send({course: snapshot.val()});
    });
});

//Sends an email to me.
app.post("/api/contactus", (req, res) => {
   sendEmail(req, res);
});

//Updates the database
//updateInterval();

//Always send index.html regardless of the route.
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log(`Server is up!`);
});

module.exports = { app };