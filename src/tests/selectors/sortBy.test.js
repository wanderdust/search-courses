import sortBy from "../../selectors/sortBy";
import { longCourseList } from "../fixtures/courses";

const testCourses = [
    {
        title: "Most expensive course",
        summary: "some summary",
        price: "900.05",
        duration: "2",
        urlToCourse: "some_url",
        platform: "udacity",
        id: "6",
        numberOfKeywordsMatched: 1
    },
    {
        title: "Cheapest course",
        summary: "some summary",
        price: "0",
        duration: "2",
        urlToCourse: "some_url",
        platform: "udacity",
        id: "6",
        numberOfKeywordsMatched: 50
    }
];

const finalCourseList = longCourseList.concat(testCourses);

test("should return an array with the cheapest courses first", () => {
    const sortedCourses = sortBy(finalCourseList, "cheapest_first");

    expect(sortedCourses[0]).toEqual(testCourses[1]);
    expect(sortedCourses[sortedCourses.length - 1]).toEqual(testCourses[0]);
});


test("should return an array with the most expensive courses first", () => {
    const sortedCourses = sortBy(finalCourseList, "expensive_first");

    expect(sortedCourses[0]).toEqual(testCourses[0]);
    expect(sortedCourses[sortedCourses.length - 1]).toEqual(testCourses[1]);
});

test("should return an array with the most relevant courses first", () => {
    const sortedCourses = sortBy(finalCourseList, "relevance");

    expect(sortedCourses[0]).toEqual(testCourses[1]);
});