import { createContext } from "react";
import { Purple, Theme } from "./theme";

export const ThemeContext = createContext({ 
    theme: Purple,
    setTheme: (t: Theme) => {} 
});