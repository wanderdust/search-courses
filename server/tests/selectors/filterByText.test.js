const { FilterByText } = require("../../selectors/filterByText");
const { courses } = require("../fixtures/courses");

test("should split the keywords individually", () => {
    const filterByText = new FilterByText(courses, "angular");
    const text = "World history";

    const keywords = filterByText.getKeywords(text);


    expect(keywords).toEqual([
        "World", "history"
    ]);
});

test("should split the keywords individually and omit AND and OF", () => {
    const filterByText = new FilterByText(courses, "angular");
    const text = "History oF Art And Math";

    const keywords = filterByText.getKeywords(text);

    expect(keywords).toEqual([
        "History", "Art", "Math"
    ]);
});

test("should retrun only the courses with the matching words", () => {
    const filterByText = new FilterByText(courses, "angular");
    const keywords = ["GUACAMOLE"];
    const matchingCourses = filterByText.findMatchingCourses(courses, keywords);

    expect(matchingCourses).toEqual([
        courses[1],
        courses[2]
    ]);
});

test("should return how relevant the course is depending on the keword matches in the course", () => {
    const filterByText = new FilterByText(courses, "angular");
    const keywords = ["GUACAMOLE", "cheese"];
    //Matching keywords in the title count double.
    const courses = [{
        title: "Advanced Java and cheese",
        fullDescription: "some cheese description guacamole and nachos with cheese",
        price: "50",
        duration: "",
        urlToCourse: "some_url",
        platform: "udemy",
        uid: 2,
        available: true,
        shortSummary: "This course is about learning anuglar and blah",
        image: "",
        logo: "udacity-logo.png",
        syllabus: "some long syllabus describing contents of the course",
        level: "begginer",
        difficulty: "easy",
        aboutPlatform: "This platform is blah blah",
        certificate: false,
        tags: "angular"
    }, {
        title: "Java",
        fullDescription: "some description guacamole and nachos with",
        price: "50",
        duration: "",
        urlToCourse: "some_url",
        platform: "udemy",
        uid: 2,
        available: true,
        shortSummary: "This course is about learning anuglar and blah",
        image: "",
        logo: "udacity-logo.png",
        syllabus: "some long syllabus describing contents of the course",
        level: "begginer",
        difficulty: "easy",
        aboutPlatform: "This platform is blah blah",
        certificate: false,
        tags: "angular"
    }];

    const setRelevance = filterByText.setRelevance(courses, keywords);

    expect(setRelevance[0].numberOfKeywordsMatched).toBe(8);
});


test("should add more relevance to courses that match 2 or more keywords", () => {
    const filterByText = new FilterByText(courses, "angular");
    const oneMatch = [2, 0];
    const twoMatches = [2, 2];
    const threeMatches = [1, 3, 4];
    const twoOutOfThreeMatches = [0, 1, 2];

    const checkDoubleMatchOne = filterByText.multipleKeywordsMatch(oneMatch);
    const checkDoubleMatchTwo = filterByText.multipleKeywordsMatch(twoMatches);
    const checkDoubleMatchThree = filterByText.multipleKeywordsMatch(threeMatches);
    const checkDoubleMatchFour = filterByText.multipleKeywordsMatch(twoOutOfThreeMatches);

    expect(checkDoubleMatchOne).toEqual([0]);
    expect(checkDoubleMatchTwo).toEqual([2]);
    expect(checkDoubleMatchThree).toEqual([3]);
    expect(checkDoubleMatchFour).toEqual([2]);
});