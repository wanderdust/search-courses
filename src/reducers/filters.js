const filtersDefaultState = {
    searchQuery: "",
    currentPage: 1,
    currentCategory: ""
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
        default: 
            return state;
    }
};

export default filtersReducer;