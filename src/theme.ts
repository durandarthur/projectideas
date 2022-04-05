import { amber, green, grey, indigo, pink, purple, red } from "@mui/material/colors";
import { ThemeContext } from "@mui/styled-engine";
import { createContext } from "react";

const bgColor = grey[900];

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
      main: purple["A200"],
      // dark: "#4d2b90",
      dark: bgColor,
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
      main: red[500],
      dark: bgColor,
      light: red[300],
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

export const Pink:Theme = { // createTheme({
  palette: {
    primary: {
      main: pink[500],
      dark: bgColor,
      light: pink[300],
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

export const Indigo:Theme = { // createTheme({
  palette: {
    primary: {
      main: indigo[500],
      dark: bgColor,
      light: indigo[300],
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

export const Green:Theme = { // createTheme({
  palette: {
    primary: {
      main: green[500],
      dark: bgColor,
      light: green[300],
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

export const Amber:Theme = { // createTheme({
  palette: {
    primary: {
      main: amber[500],
      dark: bgColor,
      light: amber[300],
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