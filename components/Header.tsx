import { Toolbar, Link, Card } from "@mui/material";
import React, { useState } from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import theme from "../src/theme";

function Header() {
	const [cardOpen, setCardOpen] = useState("none");
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
				onClick={() =>
					cardOpen === "none" ? setCardOpen("flex") : setCardOpen("none")
				}
				sx={{ color: theme.palette.secondary.main, ml: "auto" }}
			></PaletteIcon>
			<Card sx={{ display: cardOpen, width: "15vw" }}>test</Card>
		</Toolbar>
	);
}

export default Header;
