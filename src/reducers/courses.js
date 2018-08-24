const coursesReducerDefaultState = {
    courseList: [],
    hasFoundResults: true
};

const coursesReducer = (state = coursesReducerDefaultState, action) => {
    switch(action.type) {
        case "SET_COURSES":
            return {
                ...state,
                courseList: action.courseList,
            };
        case "SET_HAS_FOUND_RESULTS":
            return {
                ...state,
                hasFoundResults: action.hasFoundResults
            }
        default: 
            return state;
    }
};

export default coursesReducer;