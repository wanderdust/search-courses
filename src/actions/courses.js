import axios from "axios";
import { setCurrentPage } from "./filters";

export const setCourses = (courseList = []) => ({
    type: "SET_COURSES",
    courseList
});

export const setHasFoundResults = (hasFoundResults = true) => ({
    type: "SET_HAS_FOUND_RESULTS",
    hasFoundResults
})

export const startSetCourses = (textFilter) => {
    return (dispatch, getState) => {
        dispatch(setCurrentPage(1));
        dispatch(setCourses([]));
        dispatch(setHasFoundResults("pending"));
        
        return axios.get("/api/courseslist", {
            params: {
                text: textFilter
            }
        })
        .then((response) => {
            dispatch(setCourses(response.data.courseList));
            dispatch(setHasFoundResults(response.data.hasFoundResults));
        })
        .catch((e) => {
            console.log(e);
        });
    };
};