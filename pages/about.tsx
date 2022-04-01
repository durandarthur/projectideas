import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { Fragment } from "react";
import Header from "../components/Header";
import { purple } from "../src/theme";

const About: NextPage = () => {
	const [theme, setTheme] = useState(purple);
	return (
		<Fragment>
			<Header />
			<Box
				sx={{
					backgroundColor: theme.palette.primary.dark,
					height: "calc(100vh - 64px)",
					width: "100vw",
					display: "flex",
					alignItems: "center",
				}}
			>
				<Container
					sx={{
						color: theme.palette.secondary.light,
						fontWeight: "lighter",
						">h2": {
							fontSize: "7vmin",
						},
						">h3": {
							fontSize: "5vmin",
						},
						">p": {
							fontSize: "3vmin",
						},
					}}
				>
					<Typography gutterBottom variant="h2">
						What is projectideas.io ?
					</Typography>
					<Typography gutterBottom paragraph variant="h4">
						This website was made so innovative minds could share ideas for
						projects they would like to see realized, and so entrepreneurs could
						find good ideas for monetizable projects.
					</Typography>
					<Divider />
					<Typography gutterBottom variant="h2">
						So how does it work ?
					</Typography>
					<Typography gutterBottom variant="h3">
						&bull; Submitting an idea:
					</Typography>
					<Typography gutterBottom paragraph variant="h4">
						Go to the submit page, give your post a title, a description, some
						tags, and then click "Submit".
					</Typography>
					<Typography gutterBottom variant="h3">
						&bull; Looking for ideas:
					</Typography>
					<Typography gutterBottom paragraph variant="h4">
						Go to the browse page, enter some keywords, and/or some tags. The
						results will automatically be displayed.
					</Typography>
				</Container>
			</Box>
		</Fragment>
	);
};

export default About;
