const {getUdacityCourses} = require("../../apis/udacityCourses");

test("should return formatted data from udacity api request", async () => {
    const data = {
        title: expect.anything(),
        shortSummary: expect.anything(),
        fullDescription: expect.anything(),
        price: 0,
        duration: expect.anything(),
        urlToCourse: expect.anything(),
        platform: expect.anything(),
        image: expect.anything(),
        logo: expect.anything(),
        syllabus: expect.anything(),
        level: expect.anything(),
        difficulty: expect.anything(),
        aboutPlatform: expect.anything(),
        certificate: expect.anything()
    }
    const udacityCourses = await getUdacityCourses();
    expect(udacityCourses[0]).toEqual(data);
}, 20000);


test("should handle error from udacity api request", async () => {
    const udacityCourses = await getUdacityCourses("https://www.udacity.com/public-api/v0/course");
    expect(udacityCourses).toEqual([]);
}, 20000);