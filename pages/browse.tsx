import { Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { Fragment } from "react";
import Header from "../components/Header";
import theme from "../src/theme";
import { Knex, knex } from "knex";
import Link from "next/link";
import TagSearchBar from "../components/TagSearchBar";

const config: Knex.Config = {
	client: "pg",
	connection: {
		host: "127.0.0.1",
		port: 5432,
		user: "postgres",
		database: "projectideas",
	},
	//asyncStackTraces: true,
	//debug: true,
};

export async function getServerSideProps() {
	const db = knex(config);

	return {
		props: {
			posts: await db("post").select(),
		},
	};
}

const Browse: NextPage = ({ posts }: any) => {
	return (
		<Fragment>
			<Header />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "calc(100vh - 64px)",
					backgroundColor: theme.palette.primary.dark,
					">.MuiTextField-root": {
						width: "75%",
						backgroundColor: theme.palette.primary.main,
						borderRadius: "0",
						"input, textarea": {
							color: theme.palette.secondary.light,
							"&::placeholder": { color: theme.palette.primary.dark },
						},
						">.MuiInputBase-multiline": {
							borderRadius: "0",
							height: "100%",
							padding: "10px 10px 0 10px",
							lineHeight: 1,
							">.MuiInputBase-inputMultiline": {
								height: "100%",
							},
						},
						":first-child": {
							borderRadius: "10px 10px 0 0",
						},
					},
				}}
			>
				<TextField
					variant="outlined"
					placeholder="Keywords"
					sx={{ borderRadius: "10px 10px 0 0", mt: "10px" }}
					inputProps={{
						style: { fontSize: "5vmin", borderRadius: "10px 10px 0 0" },
					}}
				></TextField>
				<TagSearchBar font_size="3vmin" />
				<Box sx={{
					height: "60vh",
					width: "75%",
					backgroundColor: theme.palette.primary.main,
					overflowY: "scroll",
					textOverflow: "ellipsis",
				}}>
					<Stack sx={{ width: "100%" }}>
						{console.log(posts)}
						{posts.map((post: any) => (
							//console.log(post),
							<Link href="#">
								<Box
									key={post.postid}
									sx={{
										backgroundColor: theme.palette.primary.main,
										color: theme.palette.secondary.light,
										width: "100%",
										fontSize: 40,
										display: "flex",
										justifyContent: "center",
										"&:hover": {
											backgroundColor: theme.palette.primary.light,
											cursor: "pointer",
										},
									}}
								>
									{post.posttitle}
								</Box>
							</Link>
						))}
					</Stack>
				</Box>
			</Box>
		</Fragment>
	);
};

export default Browse;
