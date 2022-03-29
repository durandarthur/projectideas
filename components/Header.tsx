import { Toolbar, Link, Card, Popover } from "@mui/material";
import React, { useState } from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import theme from "../src/theme";

function Header() {
	const [themePickerOpen, setThemePickerOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
	
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
						if (anchorEl === null)
							setAnchorEl(e.currentTarget);
					}
				}
				sx={{ color: theme.palette.secondary.main, ml: "auto" }}
			>
			</PaletteIcon>
			<Popover
					open={themePickerOpen}
					onClose={() => setThemePickerOpen(false)}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
				>
				The content of the Popover.
				</Popover>
		</Toolbar>
	);
}

export default Header;
