import { Button, Container, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { ErrorMessage, useFormik } from "formik";
import { NextPage } from "next";
import { Fragment, useContext, useState } from "react";
import Header from "../components/Header";
import TagBar from "../components/TagBar";
import { Purple } from "../src/theme";
import * as Yup from "yup";
import { ThemeContext } from "../components/ThemeContextProvider";

type Values = {
	title: string;
	text: string;
	tags: string[];
};

const Submit: NextPage = () => {
	// const [theme, setTheme] = useState(purple);
	const { theme, setTheme } = useContext(ThemeContext);
	
	function handleSubmit(values: Values) {
		axios
			.post("http://localhost:3000/api/post", {
				title: values.title,
				text: values.text,
				tags: values.tags,
			})
			.then((response) => {
				console.log(response);
			});
	}

	const validationSchema = Yup.object({
		title: Yup.string()
			.max(60, "Title must be under 60 characters !")
			.required("Enter a title !"),
		text: Yup.string()
			.max(6000, "Description must be under 6000 characters !")
			.required("Enter a description !"),
	});

	// const formValidation = (event:any) => {
	// 	event.preventDefault();
	// 	if (formik.errors) {
	// 		console.log(formik.errors);
	// 		setOpen(true);
	// 	}
	// 	else {
	// 		formik.handleSubmit;
	// 	}

	// }

	const formik = useFormik({
		initialValues: {
			title: "",
			text: "",
			tags: [],
		},
		onSubmit: (values) => {
			handleSubmit(values);
			// alert(JSON.stringify(values, null, 2));
			// add redirect
		},
		validationSchema: validationSchema,
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
					form: {
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						".MuiTextField-root": {
							width: "75%",
							backgroundColor: theme.palette.primary.main,
							borderRadius: "0",
							"input, textarea": {
								color: theme.palette.secondary.light,
								"&::placeholder": { color: theme.palette.primary.dark },
							},
							".MuiInputBase-multiline": {
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
					},
				}}
			>
				<form onSubmit={formik.handleSubmit}>
					<TextField
						id="title"
						name="title"
						onChange={formik.handleChange}
						value={formik.values.title}
						variant="outlined"
						// placeholder={formik.errors.title && formik.touched.title ? formik.errors.title : "Title"}
						placeholder={"Title"}
						error={formik.touched.title && Boolean(formik.errors.title)}
						helperText={formik.touched.title && formik.errors.title}
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
						placeholder={"Description"}
						error={formik.touched.text && Boolean(formik.errors.text)}
						helperText={formik.touched.text && formik.errors.text}
						inputProps={{
							style: {
								fontSize: "3vmin",
								borderRadius: "0",
								height: "100%",
							},
						}}
					></TextField>
					<TagBar
						handleChange={formik.handleChange}
						value={formik.values.tags}
						setFieldValue={formik.setFieldValue}
						border_radius="0 0 10px 10px"
						font_size="3vmin"
					/>
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
						<Button variant="outlined" color="primary" href="/">
							CANCEL
						</Button>
					</Container>
				</form>
			</Box>
		</Fragment>
	);
};

export default Submit;
