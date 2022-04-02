import { red } from "@mui/material/colors";
import { ThemeContext } from "@mui/styled-engine";
import { createContext } from "react";

export type Theme = {
  palette: {
    primary: {
      main: string,
      dark: string,
      light: string
    },
    secondary: {
      main: string,
      light: string
    },
    error: {
      main: string
    }
  }
}

// Create a theme instance.
export const Purple:Theme = { // createTheme({
  palette: {
    primary: {
      main: "#8400ff",
      dark: "#4d2b90",
      light: "#ab52ff",
    },
    secondary: {
      main: "#420080",
      light: "#d7d7d7",
    },
    error: {
      main: red.A400,
    },
  },
}

export const Red:Theme = { // createTheme({
  palette: {
    primary: {
      main: "#ff0000",
      dark: "#4d2b90",
      light: "#ab52ff",
    },
    secondary: {
      main: "#420080",
      light: "#d7d7d7",
    },
    error: {
      main: red.A400,
    },
  },
}