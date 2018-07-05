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