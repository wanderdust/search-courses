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

            console.log("khan academy", courses.length)
            
            return courses.map((course) => {
                const duration = course.children.length !== 0 ? `${course.children.length} classes` : "";

                const syllabus = course.children.map((child) => {
                    return `### ${child.title} \n${child.description}`
                }).join("\n");

                return {
                    available: true,
                    title: `${course.parent_title} - ${course.title}`,
                    shortSummary: course.description,
                    fullDescription: "",
                    price: 0,
                    showPrice: "Free",
                    duration,
                    urlToCourse: course.ka_url,
                    platform: "Khan Academy",
                    image: "/images/course-placeholder.png",
                    logo: "khan-academy-logo.png",
                    syllabus,
                    level: "",
                    difficulty: "",
                    aboutPlatform: 
                        `Khan Academy offers practice exercises, instructional videos,
                        and a personalized learning dashboard that empower learners to 
                        study at their own pace in and outside of the classroom.`,
                    certificate: false,
                    tags: ""
                }
            });
        })
        .catch((e) => {
            return [];
        });
};

module.exports = {
    getKhanAcademyCourses
};