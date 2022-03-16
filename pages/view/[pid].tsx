import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { GetServerSidePropsContext, NextPage } from "next";
import { Fragment } from "react";
import Header from "../../components/Header";
import TagBarFixed from "../../components/TagBarFixed";
import theme from "../../src/theme";
import { knex } from "knex";
import config from "../../src/knexConfig";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
    pid: string
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { params } = context
	const { pid } = params as IParams
	const db = knex(config);

	return {
		props: {
			posts: await db("post").select().where({ postid: parseInt(pid) }),
		},
	};
}

const View: NextPage = ({ posts }: any) => {
	const posttags: string[] = JSON.parse("[" + posts[0].posttags.replace("{","").replace("}","") + "]");
	// console.log(posttags);
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
				{/* limit number of characters on the text fields, so you can't fill the database */}
				<TextField
					disabled={true}
					value={posts[0].posttitle}
					variant="outlined"
					placeholder="Idea title"
					sx={{ borderRadius: "10px 10px 0 0", mt: "10px" }}
					inputProps={{
						style: { fontSize: "5vmin", borderRadius: "10px 10px 0 0" },
					}}
				></TextField>
				<TextField
					multiline
					disabled={true}
					value={posts[0].posttext}
					rows={15}
					sx={{
						height: "75%",
						borderBottom: `0.01px solid ${theme.palette.secondary.main}`,
						borderTop: `0.01px solid ${theme.palette.secondary.main}`,
					}}
					variant="outlined"
					placeholder="Idea description"
					inputProps={{
						style: { fontSize: "3vmin", borderRadius: "0", height: "100%" },
					}}
				></TextField>
				<TagBarFixed value={posttags} border_radius="0 0 10px 10px" font_size="3vmin" />
			</Box>
		</Fragment>
	);
};

export default View;
