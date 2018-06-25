class FilterByText {
    constructor (courses = [], text = "") {
        const keywords = this.keywords(text);
        const matchingCourses = this.matchingCourses(courses, keywords);
        const keywordsMatchedPerCourse = this.keywordsMatchedPerCourse(matchingCourses, keywords);
        this.sortedByRelevance = this.sortByRelevance(keywordsMatchedPerCourse);
    }

    keywords (text) {
        return text.split(" ").filter((keyword) => {
            const lowerCaseKeyword = keyword.toLowerCase();

            return keyword.length > 0 && lowerCaseKeyword !== "and" && lowerCaseKeyword !== "of";
        });
    }

    matchingCourses (courses, keywords) {
        return courses.filter((course) => {
            
            const containsKeyword = keywords.map((keyword) => {
                const titleMatch = new RegExp("\\b" + keyword.toLowerCase() + "\\b").test(course.title.toLowerCase());
                const bodyMatch = new RegExp("\\b" + keyword.toLowerCase() + "\\b").test(course.description.toLowerCase());
                const isIndianSpecific = course.title.toLowerCase().includes("india");
        
                return !isIndianSpecific && titleMatch || bodyMatch;
            });

            return containsKeyword.includes(true);
        });
    }

    keywordsMatchedPerCourse (matchingCourses, keywords) {
        return matchingCourses.map((course) => {
    
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
            };
        });
    }

    sortByRelevance (keywordsMatchedPerCourse) {
        return keywordsMatchedPerCourse.sort((a, b) => b.numberOfKeywordsMatched - a.numberOfKeywordsMatched);
    }
};

module.exports = { FilterByText };