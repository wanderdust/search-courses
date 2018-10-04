import React from "react";
import { shallow } from "enzyme";
import { CourseSearchMain } from "../../components/CourseSearchMain";
import { setSearchQuery } from "../../actions/filters";

let wrapper, history, currentPage;

beforeEach(() => {
    currentPage = 7;
    history = { push: jest.fn() };
    wrapper = shallow(
        <CourseSearchMain
            currentPage={currentPage}
            setSearchQuery={setSearchQuery}
            history={history}
        />);
});

test("should render CourseSearchMain correctly", () => {
    expect(wrapper).toMatchSnapshot();
});


test("should handle onSubmit correctly", () => {
    const text = "Hello world";

    wrapper.find("Connect(CourseSearchForm)").prop("onSubmit")(text);
    expect(history.push).toHaveBeenCalled();
});