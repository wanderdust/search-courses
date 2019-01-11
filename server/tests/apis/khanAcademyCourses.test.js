const {getKhanAcademyCourses} = require("../../apis/khanAcademyCourses");

test("should return formatted data from Khan Academy api request", async () => {
    const khanAcademyCourses = await getKhanAcademyCourses();
    expect(khanAcademyCourses).toBeDefined();
}, 20000);


test("should handle error from Khan Academy api request", async () => {
    const khanAcademyCourses = await getKhanAcademyCourses("https://www.udacity.com/public-api/v0/course");
    expect(khanAcademyCourses).toEqual([]);
}, 20000);