import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#8400ff",
      dark: "#4d2b90",
    },
    secondary: {
      main: "#420080",
      light: "#d7d7d7",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
