import {getVisiblePagesLinks, getCurrentPagination} from "../../selectors/pagesLinks";
import { longCourseList } from "../fixtures/courses"

test("should return an array with the pages number", () => {
    const pages = getVisiblePagesLinks(longCourseList);

    expect(pages).toEqual([1, 2]);
});

test("should return an empty array if no parameters are passed", () => {
    const pages = getVisiblePagesLinks();

    expect(pages).toEqual([]);
});

test("should return an array with only 4 visible numbers, with currentPage in the middle", () => {
    const allPages = [1, 2, 3, 4, 5, 6, 7, 8];
    const currentPage = 1;
    const visiblePagination = [1, 2, 3, 4];

    const result = getCurrentPagination(allPages, currentPage);
    expect(result).toEqual(visiblePagination);
});

test("should return the same array if the pagination is less than length 4", () => {
    const allPages = [1, 2, 3, 4];
    const currentPage = 4;

    const result = getCurrentPagination(allPages, currentPage);
    expect(result).toEqual(allPages);
});

test("should return the same array if the pagination is less than length 4", () => {
    const allPages = [1, 2];
    const currentPage = 1;

    const result = getCurrentPagination(allPages, currentPage);
    expect(result).toEqual(allPages);
});

test("should return empty array if length is 0", () => {
    const allPages = [];
    const currentPage = 1;

    const result = getCurrentPagination(allPages, currentPage);
    expect(result).toEqual(allPages);
});