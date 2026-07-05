import { useContext } from "react";
import { UserInfoContext } from "./context";

export const useUserInfo = () => {
    return useContext(UserInfoContext);
}