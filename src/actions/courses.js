import axios from "axios";

export const setCourses = (courses = []) => ({
    type: "SET_COURSES",
    courses
});

export const startSetCourses = (textFilter) => {
    return (dispatch, getState) => {
        return axios.get("/courseslist", {
            params: {
                text: textFilter
            }
        })
        .then((response) => {
            dispatch(setCourses(response.data.courses));
        })
        .catch((e) => {
            console.log(e);
        });
    };
};