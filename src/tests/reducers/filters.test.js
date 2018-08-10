import filtersReducer from "../../reducers/filters";
import { filters } from "../fixtures/filters";

test("should set the text query", () => {
    const searchQuery = "python";

    const action = {
        type: "SET_SEARCH_QUERY",
        searchQuery
    };
    const state = filtersReducer(filters, action);

    expect(state).toEqual({
        ...filters,
        searchQuery
    });
});


test("should set the currentPage", () => {
    const currentPage = 4;

    const action = {
        type: "SET_CURRENT_PAGE",
        currentPage
    };
    const state = filtersReducer(filters, action);

    expect(state).toEqual({
        ...filters,
        currentPage
    });
});

test("should set the currentCategory", () => {
    const currentCategory = "javascript";

    const action = {
        type: "SET_CURRENT_CATEGORY",
        currentCategory
    };
    const state = filtersReducer(filters, action);

    expect(state).toEqual({
        ...filters,
        currentCategory
    });
});

test("should set the sortBy by cheapest first", () => {
    const sortBy = "cheapest_first";

    const action = {
        type: "SORT_BY_CHEAPEST"
    };
    const state = filtersReducer(filters, action);

    expect(state).toEqual({
        ...filters,
        sortBy
    });
});

test("should set the sortBy by expensive first", () => {
    const sortBy = "expensive_first";

    const action = {
        type: "SORT_BY_EXPENSIVE"
    };
    const state = filtersReducer(filters, action);

    expect(state).toEqual({
        ...filters,
        sortBy
    });
});

test("should set the sortBy by relevance", () => {
    const sortBy = "relevance";

    const action = {
        type: "SORT_BY_RELEVANCE"
    };
    const state = filtersReducer(filters, action);

    expect(state).toEqual({
        ...filters,
        sortBy
    });
});