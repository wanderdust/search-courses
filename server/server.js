const path = require("path");
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

const { getVisibleCourses } = require("./selectors/courses");

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get("/courseslist", (req, res) => {
    const textFilter = req.query.text;

    console.log("fetching data...");
    
    getVisibleCourses(textFilter).then((courses) => {
        res.send({courses: courses});
    }).catch((error) => {
        console.log(error);
    });
});

//Always send index.html regardless of the route.
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = { app };