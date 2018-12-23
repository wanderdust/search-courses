const path = require("path");
const bodyParser = require('body-parser');
const express = require("express");
const cors = require("cors");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;
const { database } = require("./firebase/firebase");


const { getVisibleCourses } = require("./selectors/courses");
const { updateInterval } = require("./updater/updateInterval");
const { sendEmail } = require("./utils/sendEmail");
const { getCoursesByProvider } = require("./selectors/courseByProvider");
const { forceSsl } = require("./middleware/forceSsl");

//Redirects http to https on production only.
if (process.env.NODE_ENV === 'production') {
    app.use(forceSsl);  
};

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(cors({origin: process.env.CORS_ORIGIN}));



//GET courses filtered by query.
app.get("/api/courseslist", (req, res) => {
    const textFilter = req.query.text;
    
    getVisibleCourses(textFilter).then((courses) => {
        const hasFoundResults = courses.length > 0;
    
        res.status(200).send({courseList: courses, hasFoundResults});
    }).catch((error) => {
        res.status(200).send({courseList: [], hasFoundResults: false, error});
        console.log("error")
    });
});

//GET a specific course by id.
app.get("/api/course/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    
    database.ref(`courses/${courseId}`).once("value").then((snapshot) => {
        res.status(200).send({course: snapshot.val()});
    });
});

//GET courses filtered by provider
app.get("/api/courses/:provider", (req, res) => {
    const provider = req.params.provider;

    getCoursesByProvider(provider)
        .then((courseList) => {
            res.status(200).send({coursesByProvider: courseList});
        })
        .catch((err) => {
            res.status(400).send({Error: "An error has ocurred"})
        });
})

//POST Sends an email to me.
app.post("/api/contactus", (req, res) => {
   sendEmail(req, res); 
});

//Always send index.html regardless of the route.
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

//Updates the database
updateInterval();



app.listen(port, () => {
    console.log(`Server is up!`);
});

module.exports = { app };