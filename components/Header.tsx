import { Toolbar, Link, Card, Popover } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React, { useContext, useState } from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import { Purple, Red } from "../src/theme";
import { amber, green, indigo, pink, red } from "@mui/material/colors";
import { ThemeContext } from "./ThemeContextProvider";

function Header() {
	const [themePickerOpen, setThemePickerOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
	// const [theme, setTheme] = useState(purple);
	const { theme, setTheme } = useContext(ThemeContext);

	const handlePick = () => {
		setTheme(Red);
		console.log(theme);
	}

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
					color: theme.palette.secondary.main + "!important",
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
			<PaletteIcon
				id="paletteIcon"
				onClick={(e) => {
					setThemePickerOpen(true);
					if (anchorEl === null) setAnchorEl(e.currentTarget);
				}}
				sx={{
					color: theme.palette.secondary.main,
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
						<CircleIcon sx={{ color: red[500] }} onClick={handlePick}/>
						<CircleIcon sx={{ color: pink[500] }} />
						<CircleIcon sx={{ color: theme.palette.primary.main }} />
					</div>
					<div style={{ display: "flex" }}>
						<CircleIcon sx={{ color: indigo[500] }} />
						<CircleIcon sx={{ color: green[500] }} />
						<CircleIcon sx={{ color: amber[500] }} />
					</div>
				</Card>
			</Popover>
		</Toolbar>
	);
}

export default Header;
