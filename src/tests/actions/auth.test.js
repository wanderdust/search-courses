import configureMockStore from "redux-mock-store";
import { login, logout } from "../../actions/auth";

test("should create the correct login action", () => {
    const uid = "123abc";
    const action = login(uid);
    expect(action).toEqual({
        type: "LOGIN", 
        uid
    });
});

test("should create the correct logout action", () => {
    const action = logout();
    expect(action).toEqual({
        type: "LOGOUT" 
    });
});

