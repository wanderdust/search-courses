import getVisiblePagesLinks from "../../selectors/pagesLinks";
import { longCourseList } from "../fixtures/courses"

test("should return an array with the pages number", () => {
    const pages = getVisiblePagesLinks(longCourseList);

    expect(pages).toEqual([1, 2]);
});

test("should return an empty array if no parameters are passed", () => {
    const pages = getVisiblePagesLinks();

    expect(pages).toEqual([]);
});