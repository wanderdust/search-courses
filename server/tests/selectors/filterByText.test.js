const { FilterByText } = require("../../selectors/filterByText");
const { courses } = require("../fixtures/courses");

let filterByText;

beforeEach(() => {
    filterByText = new FilterByText(courses, "angular");
});

test("should filter by text and sort by keywords matched", () => {
    
    const sortedByRelevance = filterByText.sortedByRelevance;

    expect(sortedByRelevance).toEqual([
        courses[0],
        courses[2]
    ]);
});


test("should split the keywords individually", () => {
    const text = "World history";

    const keywords = filterByText.keywords(text);

    expect(keywords).toEqual([
        "World", "history"
    ]);
});

test("should split the keywords individually and omit AND and OF", () => {
    const text = "History oF Art And Math";

    const keywords = filterByText.keywords(text);

    expect(keywords).toEqual([
        "History", "Art", "Math"
    ]);
});

test("should retrun only the courses with the matching words", () => {
    const keywords = ["GUACAMOLE"];
    const matchingCourses = filterByText.matchingCourses(courses, keywords);

    expect(matchingCourses).toEqual([
        courses[1],
        courses[2]
    ]);
});

test("should return the number of keywordMatches in the course", () => {
    const keywords = ["GUACAMOLE", "cheese"];
    //Matching keywords in the title count double.
    const courses = [{
        title: "Advanced Java and cheese",
        description: "some cheese description guacamole and nachos with cheese",
        price: "50",
        duration: "",
        urlToCourse: "some_url",
        platform: "udemy",
        uid: 2
    }];

    const keywordMatches = filterByText.keywordsMatchedPerCourse(courses, keywords);

    expect(keywordMatches[0].numberOfKeywordsMatched).toBe(5);
});

test("should sort the result by the amount of keyowords matched", () => {
    const testCourses = [
        {numberOfKeywordsMatched: 1},
        {numberOfKeywordsMatched: 15},
        {numberOfKeywordsMatched: 9}
    ];
    const sortedByRelevance = filterByText.sortByRelevance(testCourses);

    expect(sortedByRelevance).toEqual([
        {numberOfKeywordsMatched: 15},
        {numberOfKeywordsMatched: 9},
        {numberOfKeywordsMatched: 1}
    ])
});