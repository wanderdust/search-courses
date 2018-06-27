import currentPageCourses from "../../selectors/currentPageCourses";
import { longCourseList } from "../fixtures/courses"

test("should return the current page courses given a page number", () => {
    const pageTwo = currentPageCourses(longCourseList, 2);
    const pageOne = currentPageCourses(longCourseList, 1);
    const firstPageCourses = longCourseList.slice(0, 12);

    expect(pageTwo).toEqual([
        longCourseList[12],
        longCourseList[13]
    ]);

    expect(pageOne).toEqual([
        ...firstPageCourses
    ]);
});