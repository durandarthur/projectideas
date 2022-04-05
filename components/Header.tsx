import { Toolbar, Link, Card, Popover } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React, { useContext, useState } from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Amber, Green, Indigo, Pink, Purple, Red } from "../src/theme";
import { amber, green, indigo, pink, purple, red } from "@mui/material/colors";
import { ThemeContext } from "./ThemeContextProvider";

function Header() {
	const [themePickerOpen, setThemePickerOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
	// const [theme, setTheme] = useState(purple);
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<Toolbar
			sx={{
				backgroundColor: theme.palette.primary.main,
				">a": { pr: "20px", color: "white" },
			}}
		>
			<Link
				href="/"
				sx={{
					color: theme.palette.primary.dark + "!important",
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
					color: theme.palette.primary.dark,
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
						backgroundColor: theme.palette.primary.dark,
						">div": {
							display: "flex",
							">svg": { m: "20px", cursor: "pointer", fontSize: "5vmin" },
						},
					}}
				>
					<div style={{ display: "flex" }}>
						<CircleIcon
							sx={{ color: red[500] }}
							onClick={() => setTheme(Red)}
						/>
						<CircleIcon
							sx={{ color: pink[500] }}
							onClick={() => setTheme(Pink)}
						/>
						<CircleIcon
							sx={{ color: purple[400] }}
							onClick={() => setTheme(Purple)}
						/>
					</div>
					<div style={{ display: "flex" }}>
						<CircleIcon
							sx={{ color: indigo[500] }}
							onClick={() => setTheme(Indigo)}
						/>
						<CircleIcon
							sx={{ color: green[500] }}
							onClick={() => setTheme(Green)}
						/>
						<CircleIcon
							sx={{ color: amber[500] }}
							onClick={() => setTheme(Amber)}
						/>
					</div>
				</Card>
			</Popover>
		</Toolbar>
	);
}

export default Header;
