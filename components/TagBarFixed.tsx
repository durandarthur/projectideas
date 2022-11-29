import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { tagOptions } from "../src/tags";
import { ThemeContext } from "../src/themeContext";

// type Values = {
// 	title: String;
// 	text: String;
// 	tags: String[];
// };

interface tagProps {
  border_radius?: string;
  font_size?: string | number;
  value: string[];
}

export default function TagBarFixed(props: tagProps) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Autocomplete
      multiple
      id="tags-readOnly"
      sx={{
        width: "75%",
        backgroundColor: theme?.palette.primary.main,
        borderRadius: props.border_radius,
        ".MuiInput-underline": {
          ".MuiChip-root": {
            fontSize: props.font_size,
            height: `calc(${props.font_size} * 1.5)`,
            marginRight: "15px",
          },
          "&::after": {
            borderBottom: "0px solid black",
          },
        },
        ".MuiChip-label": {
          color: theme?.palette.secondary.light,
          overflow: "visible",
        },
        ".MuiInputBase-input": {
          fontSize: props.font_size,
          color: theme?.palette.primary.dark,
        },
        ".MuiTextField-root": {
          width: "100%!important",
        },
      }}
      // disabled={true}
      options={tagOptions.map((option) => option)}
      // getOptionLabel={(option) => option}
      value={props.value}
      readOnly
      renderInput={(params) => (
        <TextField
          {...params}
          // name="tags-standard"
          // variant="standard"
          // placeholder={props.value.length == 0 ? "Enter some tags !" : "Tags"}
          sx={{
            fontSize: "3vmin",
            padding: "10px",
          }}
        />
      )}
    />
  );
}
