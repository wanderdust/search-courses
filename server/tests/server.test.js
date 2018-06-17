const request = require("supertest");
const {app} = require("../server");

describe("GET /courselist", () => {
    test("should return an array with the courses", (done) => {
        request(app)
            .get("/courseslist")
            .expect(200)
            .expect((res) => {
                expect(typeof res.body.courses).toBe("object");
            })
            .end(done)
    }, 20000)
});