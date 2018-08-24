import axios from "axios";
import { setCurrentPage } from "./filters";

export const setCourses = (courses = {courseList: [], hasFoundResults: true }) => ({
    type: "SET_COURSES",
    courses
});

export const startSetCourses = (textFilter) => {
    return (dispatch, getState) => {
        dispatch(setCurrentPage(1));
        
        return axios.get("/courseslist", {
            params: {
                text: textFilter
            }
        })
        .then((response) => {
            dispatch(setCourses(response.data));
        })
        .catch((e) => {
            console.log(e);
        });
    };
};