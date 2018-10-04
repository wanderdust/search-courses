const {getKhanAcademyCourses} = require("../../apis/khanAcademyCourses");

test("should return formatted data from Khan Academy api request", async () => {
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
    const khanAcademyCourses = await getKhanAcademyCourses();
    expect(khanAcademyCourses[0]).toEqual(data);
}, 20000);


test("should handle error from Khan Academy api request", async () => {
    const khanAcademyCourses = await getKhanAcademyCourses("https://www.udacity.com/public-api/v0/course");
    expect(khanAcademyCourses).toEqual([]);
}, 20000);