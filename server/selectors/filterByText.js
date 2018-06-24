const filterByText = (courses = [], text = "") => {
    return courses.filter((course) => {
        const keywords = text.split(" ").filter((e) => e.length > 0);
        
        const containsKeyword = keywords.map((keyword) => {
            const titleMatch = new RegExp("\\b" + keyword.toLowerCase() + "\\b").test(course.title.toLowerCase());
            const bodyMatch = new RegExp("\\b" + keyword.toLowerCase() + "\\b").test(course.description.toLowerCase());
            const isIndianSpecific = course.title.toLowerCase().includes("india");

            return !isIndianSpecific && titleMatch || bodyMatch;
        });

        return containsKeyword.includes(true);
    });
};

module.exports = { filterByText };