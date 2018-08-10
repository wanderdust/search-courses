export const setSearchQuery = (searchQuery = "") => ({
    type: "SET_SEARCH_QUERY",
    searchQuery
});

export const setCurrentCategory = (currentCategory = "") => ({
    type: "SET_CURRENT_CATEGORY",
    currentCategory
});

export const setCurrentPage = (currentPage = 1) => ({
    type: "SET_CURRENT_PAGE",
    currentPage
});

export const sortByRelevance = () => ({
    type: "SORT_BY_RELEVANCE"
});

export const sortByCheapest = () => ({
    type: "SORT_BY_CHEAPEST"
});

export const sortByExpensive = () => ({
    type: "SORT_BY_EXPENSIVE"
});