const filtersDefaultState = {
    searchQuery: ""
};

const filtersReducer = (state = filtersDefaultState, action) => {
    switch(action.type) {
        case "SET_SEARCH_QUERY":
            return {
                ...state,
                searchQuery: action.searchQuery
            };
        default: 
            return state;
    }
};

export default filtersReducer;