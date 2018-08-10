const sortBy = (courses, sortBy) => {
    return courses.sort((a, b) => {
        if (sortBy === "cheapest_first") {
            return a.price > b.price ? 1 : -1;
        } else if (sortBy === "expensive_first") {
            return a.price < b.price ? 1 : -1;
        } else if (sortBy === "relevance") {
            return b.numberOfKeywordsMatched - a.numberOfKeywordsMatched; 
        }
    });
};

export default sortBy;