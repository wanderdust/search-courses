import React from "react";
import { shallow } from "enzyme";
import { DropdownForm } from "../../components/DropdownForm";
import DropdownMenu, { NestedDropdownMenu } from "react-dd-menu";
import testCategories from "../fixtures/categories";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<DropdownForm categories={testCategories}/>);
});

test("should render DropDownForm correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should close Dropdown", () => {
    wrapper.setState({isMenuOpen: true});
    wrapper.find(DropdownMenu).prop("close")();
    expect(wrapper.state("isMenuOpen")).toBe(false);
});