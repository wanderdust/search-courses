const coursesReducerDefaultState = [];

const coursesReducer = (state = coursesReducerDefaultState, action) => {
    switch(action.type) {
        case "SET_COURSES":
            return action.courses;
        default: 
            return state;
    }
};

export default coursesReducer;