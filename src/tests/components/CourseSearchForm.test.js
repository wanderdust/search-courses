import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { CourseSearchForm } from "../../components/CourseSearchForm";
import { shallow } from "enzyme";
import { setSearchQuery } from "../../actions/filters";
import courses from "../fixtures/courses";

const uid = "this_is_my_test_uid";
const createMockStore = configureMockStore([thunk]);
let wrapper, onSubmit, store, searchQuery, setCurrentPage, setCurrentCategory;

beforeEach(() => {
    searchQuery = "Hello world";
    store = createMockStore();
    onSubmit = jest.fn();
    setCurrentPage=jest.fn();
    setCurrentCategory=jest.fn();
    wrapper = shallow(
        <CourseSearchForm
            searchQuery={searchQuery}
            onSubmit={onSubmit}
            setSearchQuery={setSearchQuery}
            setCurrentPage={setCurrentPage}
            setCurrentCategory={setCurrentCategory}
        />);
});

test("should render CourseSearchForm correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should call onTextChange with correct data", async () => {
    const text = "Hello world!";

    await store.dispatch(setSearchQuery(text));

    expect(store.getActions()[0]).toEqual({
        type: "SET_SEARCH_QUERY",
        searchQuery: text
    });
});

test("should handle on text change", () => {
    const value = "Hakuna Matata!";

    wrapper.setState({textFilter: value});
    wrapper.find("input").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("textFilter")).toBe(value);
});


test("should handle on submit correctly", async () => {
    const text = "Hello mama!";

    await store.dispatch(setSearchQuery(text));

    expect(store.getActions()[0]).toEqual({
        type: "SET_SEARCH_QUERY",
        searchQuery: text
    });

    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(onSubmit).toHaveBeenCalledWith(searchQuery);
});