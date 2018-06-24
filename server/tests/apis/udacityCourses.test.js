const {getUdacityCourses} = require("../../apis/udacityCourses");

test("should return formatted data from udacity api request", async () => {
    const data = {
        title: expect.anything(),
        description: expect.anything(),
        price: expect.anything(),
        duration: expect.anything(),
        urlToCourse: expect.anything(),
        platform: expect.anything(),
        uid: expect.anything()
    }
    const udacityCourses = await getUdacityCourses();
    expect(udacityCourses[0]).toEqual(data);
}, 20000);


test("should handle error from udacity api request", async () => {
    const udacityCourses = await getUdacityCourses("https://www.udacity.com/public-api/v0/course");
    expect(udacityCourses).toEqual([]);
}, 20000);