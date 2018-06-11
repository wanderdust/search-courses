import axios from "axios";

export const setCourses = (courses) => ({
    type: "SET_COURSES",
    courses
});

export const startSetCourses = () => {
    return (dispatch, getState) => {
        return axios.get("/courseslist")
            .then((response) => {
                dispatch(setCourses(response.data));
            })
            .catch((e) => {
                console.log(e);
            });
    };
};