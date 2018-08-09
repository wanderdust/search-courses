import React from "react";
import { shallow } from "enzyme";
import { CategoriesHeader } from "../../components/CategoriesHeader";


test("should render CategoriesHeader correctly", () => {
    const category = "Programming";
    const wrapper = shallow(<CategoriesHeader category={category}/>);

    expect(wrapper).toMatchSnapshot();
});