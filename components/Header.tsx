import CircleIcon from "@mui/icons-material/Circle";
import PaletteIcon from "@mui/icons-material/Palette";
import { Card, Link, Popover, Toolbar } from "@mui/material";
import { amber, green, indigo, pink, purple, red } from "@mui/material/colors";
import React, { useState, useEffect, useContext } from "react";
import {
  Amber,
  Green,
  Indigo,
  Pink,
  Purple,
  Red,
  Theme,
  colorThemes,
} from "../src/theme";
import { ThemeContext } from "../src/themeContext";

function Header() {
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);

  // const colorThemes = new Map<string, Theme>([
  // 	["Amber", Amber],
  // 	["Green", Green],
  // 	["Indigo", Indigo],
  // 	["Pink", Pink],
  // 	["Purple", Purple],
  // 	["Red", Red]
  // ])

  // const [theme, setTheme] = useState(Purple);

  // useEffect(() => { //useEffect to avoid "localStorage not defined" issue
  // 	if (localStorage.getItem('theme'))
  // 		setTheme(colorThemes.get(localStorage.getItem('theme')!) ?? Purple);
  // }, [])

  const { theme, setTheme } = useContext(ThemeContext);

  function changeTheme(newTheme: string) {
    setTheme(colorThemes.get(newTheme!)!);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <Toolbar
      sx={{
        backgroundColor: theme?.palette.primary.main,
        ">a": { pr: "20px", color: "white" },
      }}
    >
      <Link
        href="/"
        sx={{
          color: theme?.palette.primary.dark + "!important",
          fontWeight: "bold",
          fontSize: "1.5rem",
          textDecoration: "none",
        }}
      >
        projectideas
      </Link>
      <Link href="/submit">Post</Link>
      <Link href="/browse">Browse</Link>
      <Link href="/about">About</Link>
      {/* <LightModeIcon
				id="paletteIcon"
				sx={{
					color: theme.palette.primary.dark,
					ml: "auto",
					cursor: "pointer",
				}}
			></LightModeIcon> */}
      <PaletteIcon
        id="paletteIcon"
        onClick={(e) => {
          setThemePickerOpen(true);
          if (anchorEl === null) setAnchorEl(e.currentTarget);
        }}
        sx={{
          color: theme?.palette.primary.dark,
          ml: "auto",
          cursor: "pointer",
        }}
      ></PaletteIcon>
      <Popover
        open={themePickerOpen}
        onClose={() => setThemePickerOpen(false)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Card
          sx={{
            backgroundColor: theme?.palette.primary.dark,
            ">div": {
              display: "flex",
              ">svg": { m: "20px", cursor: "pointer", fontSize: "5vmin" },
            },
          }}
        >
          <div style={{ display: "flex" }}>
            <CircleIcon
              sx={{ color: red[500] }}
              onClick={() => changeTheme("Red")}
            />
            <CircleIcon
              sx={{ color: pink[500] }}
              onClick={() => changeTheme("Pink")}
            />
            <CircleIcon
              sx={{ color: purple[400] }}
              onClick={() => changeTheme("Purple")}
            />
          </div>
          <div style={{ display: "flex" }}>
            <CircleIcon
              sx={{ color: indigo[500] }}
              onClick={() => changeTheme("Indigo")}
            />
            <CircleIcon
              sx={{ color: green[500] }}
              onClick={() => changeTheme("Green")}
            />
            <CircleIcon
              sx={{ color: amber[500] }}
              onClick={() => changeTheme("Amber")}
            />
          </div>
        </Card>
      </Popover>
    </Toolbar>
  );
}

export default Header;
