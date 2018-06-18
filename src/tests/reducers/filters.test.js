import filtersReducer from "../../reducers/filters";
import { filters } from "../fixtures/filters";

test("should set the text query", () => {
    const searchQuery = "python";

    const action = {
        type: "SET_SEARCH_QUERY",
        searchQuery
    };
    const state = filtersReducer({}, action);

    expect(state).toEqual({
        ...filters,
        searchQuery
    });
});