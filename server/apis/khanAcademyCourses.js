const uid = require("uid");
const axios = require("axios");

const getKhanAcademyCourses = (testUrl) => {
    const url = testUrl || "https://www.khanacademy.org/api/v1/topictree";

    return axios.get(url, {
            timeout: 15000
        })
        .then((res) => {
            const topics = res.data.children.slice(0, 5).map((topic) => {
                return topic.children.map((course) => ({
                    ...course,
                    parent_title: topic.title
                }));
            });
            const courses = [].concat(...topics);

            return courses.map((course) => {
                return {
                    title: `${course.parent_title} - ${course.title}`,
                    description: course.description,
                    price: 0,
                    duration: "",
                    urlToCourse: course.ka_url,
                    platform: "Khan Academy",
                    uid: uid()
                }
            });
        })
        .catch((e) => {
            console.log("unable to fetch khan academy data");
            return [];
        });
};

module.exports = {
    getKhanAcademyCourses
};