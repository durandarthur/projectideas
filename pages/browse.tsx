import { Stack, TextField} from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useContext, useState } from "react";
import Header from "../components/Header";
import { Purple } from "../src/theme";
import { knex } from "knex";
import config from "../src/knexConfig";
import Link from "next/link";
import TagSearchBar from "../components/TagSearchBar";
import { ThemeContext } from "../components/ThemeContextProvider";


export async function getServerSideProps() {
	const db = knex(config);

	return {
		props: {
			posts: await db("post").select("postid", "posttitle", "posttags"),
		},
	};
}

interface Post {
	postid: number,
	posttitle: string,
	posttags: string //change if needed to string[]
}

function Browse({ posts }: { posts:Post[] }) {
	// const [theme, setTheme] = useState<Object>(purple);
	const { theme, setTheme } = useContext(ThemeContext);
	const [titleInput, setTitleInput] = useState("");
	const [tagsInput, setTagsInput] = useState([""]);
	
	
	const filteredPosts = posts.filter((element) => {
		if (titleInput === '') {
			return element;
		}
		else {
			return element.posttitle.toLowerCase().includes(titleInput);
		}
	}).filter((element) => {
		const tags: string[] = JSON.parse("[" + element.posttags.replace("{","").replace("}","") + "]");
		if (tagsInput === ['']) {
			return element;
		}
		else {
			// check if every tag in the search input is in the corresponding post
			return tagsInput.every(el => tags.includes(el));
		}
	})
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
					onChange={(e) => setTitleInput(e.target.value.toLowerCase())}
					variant="outlined"
					value={titleInput}
					placeholder="Keywords"
					sx={{ borderRadius: "10px 10px 0 0", mt: "10px" }}
					inputProps={{
						style: { fontSize: "5vmin", borderRadius: "10px 10px 0 0" },
					}}
				></TextField>
				<TagSearchBar setTagsInput={setTagsInput} font_size="3vmin" />
				<Box sx={{
					height: "60vh",
					width: "75%",
					backgroundColor: theme.palette.primary.main,
					overflowY: "scroll",
					textOverflow: "ellipsis",
				}}>
					<Stack sx={{ width: "100%" }}>
						{filteredPosts.map((item: Post) => (
							// link to view the post by its id, using dynamic routing
							<Link key={item.postid} href={`/view/${item.postid}`}> 
								<Box
									key={item.postid}
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
									{item.posttitle}
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
