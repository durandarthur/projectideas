import { Button, Container, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { ErrorMessage, useFormik } from "formik";
import { NextPage } from "next";
import { Fragment, useState } from "react";
import Header from "../components/Header";
import TagBar from "../components/TagBar";
import theme from "../src/theme";
import * as Yup from "yup";

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

const modalBoxStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'white',
	border: '2px solid #000',
	// boxShadow: 24,
	p: 4,
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

	const validationSchema = Yup.object({
		title: Yup.string().max(60, 'Title must be under 60 characters !').required("Enter a title !"),
		text: Yup.string().max(6000, 'Description must be under 6000 characters !').required("Enter a description !"),
		tags: Yup.array().of(Yup.string().min(1)).required("Select at least one tag !") //doesnt work
	})

	const renderError = (message:string) => <p>{message}</p>;
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);

	const formik = useFormik({
		initialValues: {
			title: "",
			text: "",
			tags: [],
		},
		onSubmit: (values) => {
			if (values.tags.length > 0) {
				console.log("submitting");
				handleSubmit(values);
			}
			else {
				console.log("opening");
				setOpen(true);
			}
		},
		validationSchema: validationSchema
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
					"form": {
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
					}
				}}
			>
					<form onSubmit={formik.handleSubmit}>
						<TextField
							id="title"
							name="title"
							onChange={formik.handleChange}
							value={formik.values.title}
							variant="outlined"
							placeholder={formik.errors.title && formik.touched.title ? formik.errors.title : "Title"}
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
							placeholder={formik.errors.text && formik.touched.text ? formik.errors.text : "Description"}
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
							<Button variant="outlined" color="primary" href="/">
								CANCEL
							</Button>
							<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="Validation Error Modal"
							aria-describedby="The modal that pops up when one of the fields isn't filled."
							>
								<Box sx={modalBoxStyle}>
									<Typography id="modal-modal-title" variant="h6" component="h2">
									{/* Enter at least one tag ! */}
									{ formik.errors.title && formik.touched.title ? formik.errors.title : null }
									{ formik.errors.text && formik.touched.text ? formik.errors.text : null }
									{ formik.values.tags.length === 0 ? "Enter at least one tag !" : null }
									</Typography>
								</Box>
							</Modal>
						</Container>
					</form>
			</Box>
		</Fragment>
	);
};

export default Submit;
