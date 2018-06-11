import authReducer from "../../reducers/auth";

test("should set state to correct uid in authReducer when login", () => {
    const uid = "123abc";
    const action = {
        type: "LOGIN",
        uid
    }
    const state = authReducer({}, action);
    expect(state).toEqual({uid})
});

test("should set state to correct uid in authReducer when logout", () => {
    const action = {
        type: "LOGOUT"
    }
    const state = authReducer({uid: "blabla"}, action);
    expect(state).toEqual({});
});