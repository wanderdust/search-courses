const filterByText = (courses = [], text = "") => {
    const keywords = text.split(" ").filter((keyword) => {
        return keyword.length > 0 && keyword !== "and" && keyword !== "of";
    });

    return courses.filter((course) => {
        
        const containsKeyword = keywords.map((keyword) => {
            const titleMatch = new RegExp("\\b" + keyword.toLowerCase() + "\\b").test(course.title.toLowerCase());
            const bodyMatch = new RegExp("\\b" + keyword.toLowerCase() + "\\b").test(course.description.toLowerCase());
            const isIndianSpecific = course.title.toLowerCase().includes("india");

            return !isIndianSpecific && titleMatch || bodyMatch;
        });
        return containsKeyword.includes(true);

    }).map((course) => {
        const numberOfKeywordsMatched = keywords.map((keyword) => {

            const titleMatches = course.title.split(" ").map((word) => (
                new RegExp("\\b" + keyword.toLowerCase() + "\\b").test(word.toLowerCase()) ? 2 : 0
            ));
            const bodyMatches = course.description.split(" ").map((word) => (
                new RegExp("\\b" + keyword.toLowerCase() + "\\b").test(word.toLowerCase()) ? 1 : 0
            ));

            return titleMatches.concat(bodyMatches).reduce((accumulator, currentValue) => accumulator + currentValue);

        }).reduce((accumulator, currentValue) => (
            accumulator + currentValue
        ));

        return {
            ...course,
            numberOfKeywordsMatched
        }
    }).sort((a, b) => b.numberOfKeywordsMatched - a.numberOfKeywordsMatched);
};

module.exports = { filterByText };