const coursesReducerDefaultState = {
    courseList: [],
    hasFoundResults: true
};

const coursesReducer = (state = coursesReducerDefaultState, action) => {
    switch(action.type) {
        case "SET_COURSES":
            return {
                ...state,
                courseList: action.courses.courseList,
                hasFoundResults: action.courses.hasFoundResults
            };
        default: 
            return state;
    }
};

export default coursesReducer;