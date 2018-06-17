const {getUdacityCourses} = require("../../apis/udacityCourses");

test("should return formatted data from udacity api request", async () => {
    const data = {
        title: expect.anything(),
        expected_learning: expect.anything(),
        image: expect.anything(),
        summary: expect.anything(),
        price: expect.anything(),
        duration: expect.anything() 
    }
    const udacityCourses = await getUdacityCourses();
    expect(udacityCourses[0]).toEqual(data);
}, 20000);


test("should handle error from udacity api request", async () => {
    const udacityCourses = await getUdacityCourses("https://www.udacity.com/public-api/v0/course");
    expect(udacityCourses).toEqual([]);
}, 20000);