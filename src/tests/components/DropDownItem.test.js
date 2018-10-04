import React from "react";
import { shallow } from "enzyme";
import { DropDownItem } from "../../components/DropDownItem";

const props = {
    tags: "test_tag",
    name: "test_name"
};
let wrapper, handleOnClick, startSetCourses, setCurrentCategory, history;

beforeEach(() => {
    history = {push: jest.fn()};
    wrapper = shallow(
            <DropDownItem
                {...props}
                handleOnClick={handleOnClick}
                startSetCourses={startSetCourses}
                setCurrentCategory={setCurrentCategory}
                history={history}
        />);
});

test("should render DropDownItem correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should call handleOnClick on button click", () => {
    wrapper.find("div").simulate("click");
    expect(history.push).toHaveBeenCalled();
});