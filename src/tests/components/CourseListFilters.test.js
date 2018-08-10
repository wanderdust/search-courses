import React from "react";
import { shallow } from "enzyme";
import { CourseListFilters } from "../../components/CourseListFilters";
import { defaultFilters, filters } from "../fixtures/filters";

let sortByRelevance, sortByCheapest, sortByExpensive, wrapper;

beforeEach(() => {
    sortByRelevance = jest.fn();
    sortByCheapest = jest.fn();
    sortByExpensive = jest.fn();
    wrapper = shallow(
        <CourseListFilters
            filters={defaultFilters}
            sortByRelevance={sortByRelevance}
            sortByCheapest={sortByCheapest}
            sortByExpensive={sortByExpensive}
        />);
});

test("should render CourseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should set the cheapest_first", () => {
    const value = "cheapest_first";

    wrapper.find("select").simulate("change", {
        target: { value }
    });

    expect(sortByCheapest).toHaveBeenCalled();
});

test("should set the expensive_first", () => {
    const value = "expensive_first";

    wrapper.find("select").simulate("change", {
        target: { value }
    });

    expect(sortByExpensive).toHaveBeenCalled();
});