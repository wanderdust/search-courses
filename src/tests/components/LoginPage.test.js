import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

const startLogin = jest.fn();

test("should render LoginPage correctly", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test("should call login on button click", () => {
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find("button").simulate("click");
    expect(startLogin).toHaveBeenCalled();
})