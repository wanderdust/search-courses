import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { 
    setSearchQuery,
    setCurrentPage,
    setCurrentCategory,
    sortByCheapest,
    sortByExpensive,
    sortByRelevance
} from "../../actions/filters";

const createMockStore = configureMockStore([thunk]);

test("should create the correct setTextQuery action", () => {
    const searchQuery = "Hello world!"
    expect(setSearchQuery(searchQuery)).toEqual({
        type:"SET_SEARCH_QUERY",
        searchQuery
    });
});

test("should create the correct setCurrentCategory action", () => {
    const currentCategory = "Java";
    expect(setCurrentCategory(currentCategory)).toEqual({
        type:"SET_CURRENT_CATEGORY",
        currentCategory
    });
});

test("should create the correct setCurrentPage action", () => {
    const currentPage = 9;
    expect(setCurrentPage(currentPage)).toEqual({
        type:"SET_CURRENT_PAGE",
        currentPage
    });
});

test("should create the correct sortByRelevance action", () => {
    expect(sortByRelevance()).toEqual({
        type:"SORT_BY_RELEVANCE"
    });
});

test("should create the correct sortByCheapest action", () => {
    expect(sortByCheapest()).toEqual({
        type:"SORT_BY_CHEAPEST"
    });
});

test("should create the correct sortByExpensive action", () => {
    expect(sortByExpensive()).toEqual({
        type:"SORT_BY_EXPENSIVE"
    });
});