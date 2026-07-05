import { useReducer } from "react";
import { UserInfoContext } from "./context";

const userInfoReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER_INFO":
            return action.payload;
        
            default:
                return state;
    }
}

export const UserInfoProvider = ({children}) => {
    const [state, dispatch] = useReducer(userInfoReducer, {name: "", email: "", birth: "", gender: "",});

    return (
        <UserInfoContext.Provider value={{ state, dispatch }}>
            {children}
        </UserInfoContext.Provider>
    );
}
