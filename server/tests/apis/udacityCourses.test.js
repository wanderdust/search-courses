const { getUdacityCourses } = require("../../apis/udacityCourses");

test("should return formatted data from udacity api request", async () => {
    const udacityCourses = await getUdacityCourses(undefined, "degrees");
    expect(udacityCourses).toBeDefined();
}, 20000);


test("should handle error from udacity api request", async () => {
    const udacityCourses = await getUdacityCourses("https://www.udacity.com/public-api/v1/catalog");
    expect(udacityCourses).toEqual([]);
}, 20000);