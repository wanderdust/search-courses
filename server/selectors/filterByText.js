const filterByText = (courses = [], text = "") => {
    return courses.filter((course) => {
        const titleMatch = course.title.toLowerCase().includes(text.toLowerCase());
        const bodyMatch = course.summary.toLowerCase().includes(text.toLowerCase());
        const isIndianSpecific = course.title.toLowerCase().includes("india");

        return !isIndianSpecific && titleMatch || bodyMatch;
    });
};

module.exports = { filterByText };