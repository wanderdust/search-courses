import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setSearchQuery, setCurrentPage } from "../../actions/filters";

const createMockStore = configureMockStore([thunk]);

test("should create the correct setTextQuery action", () => {
    const searchQuery = "Hello world!"
    expect(setSearchQuery(searchQuery)).toEqual({
        type:"SET_SEARCH_QUERY",
        searchQuery
    });
});

test("should create the correct setCurrentPage action", () => {
    const currentPage = 9;
    expect(setCurrentPage(currentPage)).toEqual({
        type:"SET_CURRENT_PAGE",
        currentPage
    });
});