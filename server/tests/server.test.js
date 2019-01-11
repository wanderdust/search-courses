const request = require("supertest");
const {app} = require("../server");

describe("GET /api/courselist", () => {
    test("should return an array with the courses", (done) => {
        request(app)
            .get("/api/courseslist")
            .expect(200)
            .expect((res) => {
                expect(typeof res.body).toBe("object");
            })
            .end(done)
    }, 20000);
});

describe("GET /api/course/:id", () => {
    test("should return the course", (done) => {
        request(app)
            .get("/api/course/1")
            .expect(200)
            .expect((res) => {
                expect(res.body.course.fullDescription).toBe("this course is from test data. Angular");
            })
            .end(done)
    }, 20000);
});