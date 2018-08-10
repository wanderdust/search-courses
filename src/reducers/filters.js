const filtersDefaultState = {
    searchQuery: "",
    currentPage: 1,
    currentCategory: "",
    sortBy: "relevance"
};

const filtersReducer = (state = filtersDefaultState, action) => {
    switch(action.type) {
        case "SET_SEARCH_QUERY":
            return {
                ...state,
                searchQuery: action.searchQuery
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            };
        case "SET_CURRENT_CATEGORY":
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        case "SORT_BY_RELEVANCE":
            return {
                ...state,
                sortBy: "relevance"
            }
        case "SORT_BY_CHEAPEST":
            return {
                ...state,
                sortBy: "cheapest_first"
            }
        case "SORT_BY_EXPENSIVE":
            return {
                ...state,
                sortBy: "expensive_first"
            }
        default: 
            return state;
    }
};

export default filtersReducer;