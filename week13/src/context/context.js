import { createContext } from "react";
import { theme } from "../theme/theme";

const ThemeColorcontext = createContext(theme.blueTheme); // 기본값 blueTheme
const UserInfoContext = createContext();

export {ThemeColorcontext, UserInfoContext};