/*
* shallow lets us test components using regular javascript.
* It only renders the given component.
*/
import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

const startLogout = jest.fn();

test("should render header correctly", () => {
    // const wrapper = shallow(<Header startLogout={startLogout} />);
    // expect(wrapper).toMatchSnapshot();
});