const filterByText = (courses = [], text = "") => {
    return courses.filter((course) => {
        const titleMatch = course.title.toLowerCase().includes(text.toLowerCase());
        const bodyMatch = course.summary.toLowerCase().includes(text.toLowerCase());

        return titleMatch || bodyMatch;
    });
};

module.exports = { filterByText };