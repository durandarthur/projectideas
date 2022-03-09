import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useFormik } from "formik";
import { NextPage } from "next";
import { Fragment } from "react";
import Header from "../components/Header";
import TagBar from "../components/TagBar";
import theme from "../src/theme";

// export async function getServerSideProps() {
// 	// Fetch data from external API
// 	const res = await fetch("http://localhost:3000/api/post");
// 	const data = await res.json();

// 	// Pass data to the page via props
// 	return { props: { data } };
// }

type Values = {
	title: String;
	text: String;
	tags: String[];
};

const Submit: NextPage = () => {
	function handleSubmit(values: Values) {
		//don't use fetch and axios at the same time next time !
		axios
			.post("http://localhost:3000/api/post", {
				title: values.title,
				text: values.text,
				tags: values.tags,
			})
			.then((response) => {
				console.log(response);
			});
		// console.log(values);
	}

	const formik = useFormik({
		initialValues: {
			title: "",
			text: "",
			tags: [],
		},
		onSubmit: (values) => {
			handleSubmit(values);
		}
	});

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
				{/* <Formik
					
				>
					{({ values }) => ( */}
						<form onSubmit={formik.handleSubmit}>
							<TextField
								id="title"
								name="title"
								onChange={formik.handleChange}
								value={formik.values.title}
								variant="outlined"
								placeholder="Idea title"
								sx={{ borderRadius: "10px 10px 0 0", mt: "10px" }}
								inputProps={{
									style: { fontSize: "5vmin", borderRadius: "10px 10px 0 0" },
								}}
							></TextField>
							<TextField
								multiline
								id="text"
								name="text"
								onChange={formik.handleChange}
								value={formik.values.text}
								rows={15}
								sx={{
									height: "75%",
									borderBottom: `0.01px solid ${theme.palette.secondary.main}`,
									borderTop: `0.01px solid ${theme.palette.secondary.main}`,
								}}
								variant="outlined"
								placeholder="Idea description"
								inputProps={{
									style: {
										fontSize: "3vmin",
										borderRadius: "0",
										height: "100%",
									},
								}}
							></TextField>
							<TagBar handleChange={formik.handleChange} value={formik.values.tags} setFieldValue={formik.setFieldValue} border_radius="0 0 10px 10px" font_size="3vmin" />
							<Container
								sx={{
									display: "flex",
									justifyContent: "center",
									mt: "10px",
									mb: "10px",
									".MuiButton-root": {
										fontSize: 20,
										fontWeight: "bold",
										borderRadius: "10px",
										padding: "0.7rem 4rem",
									},
								}}
							>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									sx={{ mr: "10px" }}
								>
									SUBMIT
								</Button>
								<Button variant="outlined" color="primary">
									CANCEL
								</Button>
							</Container>
						</form>
					{/* )}
					{/* limit number of characters on the text fields, so you can't fill the database
				</Formik> */}
			</Box>
		</Fragment>
	);
};

export default Submit;
