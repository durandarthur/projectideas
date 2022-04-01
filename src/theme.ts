import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
export const purple = { // createTheme({
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
// });
