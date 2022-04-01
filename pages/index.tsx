import { Container, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import styles from "../styles/Home.module.css";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../components/Header";
import { purple } from "../src/theme";

const Home: NextPage = () => {
	const [theme, setTheme] = useState(purple);
	return (
		<Fragment>
			<Header />
			<Box
				sx={{
					display: "flex",
					height: "calc(100vh - 64px)",
					backgroundColor: theme.palette.primary.dark,
					">div": {
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						alignItems: "center",
						height: "calc(100vh - 64px)",
						">svg": {
							fontSize: 300,
							color: theme.palette.primary.main,
						},
						">p": {
							fontSize: 40,
							color: "white",
							fontWeight: "bold",
							mb: "5vh",
						},
						">a": {
							backgroundColor: theme.palette.primary.main,
							color: "white",
							p: "24px 80px",
							borderRadius: "10px",
							fontWeight: "bold",
							fontSize: "1.2rem",
						},
					},
				}}
			>
				<Container>
					<NoteAltOutlinedIcon />
					<Typography>Submit an idea.</Typography>
					<Link href="/submit">
						<a>SUBMIT</a>
					</Link>
				</Container>
				<Divider orientation="vertical" flexItem />
				<Container>
					<SearchIcon />
					<Typography>Browse ideas.</Typography>
					<Link href="/browse">BROWSE</Link>
				</Container>
			</Box>
		</Fragment>
	);
};

export default Home;
