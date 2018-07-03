const axios = require("axios");

const getKhanAcademyCourses = (testUrl) => {
    const url = testUrl || "https://www.khanacademy.org/api/v1/topictree";

    return axios.get(url, {
            timeout: 50000
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
                    platform: "Khan Academy"
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