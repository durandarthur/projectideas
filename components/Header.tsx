import { Toolbar, Link } from "@mui/material";
import React from "react";
import PaletteIcon from '@mui/icons-material/Palette';
import theme from "../src/theme";

function Header() {

  return (
    <Toolbar sx={{ backgroundColor: theme.palette.primary.main, ">a": { pr: "20px", color: "white" } }}>
      <Link href="/" sx={{ color: theme.palette.secondary.main+"!important", fontWeight: "bold", fontSize: "1.5rem", textDecoration: "none" }}>projectideas</Link>
      <Link href="/submit">Post</Link>
      <Link href="/browse">Browse</Link>
      <Link href="/about">About</Link>
      <PaletteIcon sx={{ color: theme.palette.secondary.main, ml: "auto" }}></PaletteIcon>
    </Toolbar>
  );
}

export default Header;
