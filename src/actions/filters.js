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