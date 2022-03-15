import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { tagOptions } from "../src/tags";
import theme from "../src/theme";

// type Values = {
// 	title: String;
// 	text: String;
// 	tags: String[];
// };

interface tagProps {
	border_radius?: string;
	font_size?: string | number;
	value: string[];
}

export default function TagBarFixed(props: tagProps) {
	
	return (
		<Autocomplete
			multiple
			id="tags"
			sx={{
				width: "75%",
				backgroundColor: theme.palette.primary.main,
				borderRadius: props.border_radius,
				".MuiInput-underline": {
					".MuiChip-root": {
						fontSize: props.font_size,
						height: `calc(${props.font_size} * 1.5)`,
						marginRight: "15px",
					},
					"&::after": {
						borderBottom: "0px solid black",
					},
				},
				".MuiChip-label": {
					color: theme.palette.secondary.light,
					overflow: "visible",
				},
				".MuiInputBase-input": {
					fontSize: props.font_size,
					color: theme.palette.primary.dark,
				},
				".MuiTextField-root": {
					width: "100%!important",
				}
			}}
			options={tagOptions}
			getOptionLabel={(option) => option}
			renderInput={(params) => (
				<TextField
					{...params}
					name="tags-standard"
					value={props.value}
					variant="standard"
                    disabled={true}
					// placeholder={props.value.length == 0 ? "Enter some tags !" : "Tags"}
					sx={{
						fontSize: "3vmin",
						padding: "10px",
					}}
				/>
			)}
		/>
	);
}