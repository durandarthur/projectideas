import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { tagOptions } from "../src/tags";
import { purple } from "../src/theme";

interface tagSearchProps {
	border_radius?: string;
	font_size?: string | number;
	setTagsInput: any;
}

export default function TagSearchBar(props: tagSearchProps) {
	const [theme, setTheme] = useState<Object>(purple);
	return (
		<Autocomplete
			onChange={(e, value) => props.setTagsInput(value)} //this part works
			multiple
			id="tags"
			name="tags"
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
			}}
			options={tagOptions}
			getOptionLabel={(option) => option}
			renderInput={(params) => (
				<TextField
					{...params}
					name="tags-standard"
					variant="standard"
					placeholder="Add Tags"
					sx={{
						fontSize: "3vmin",
						padding: "10px",
					}}
				/>
			)}
		/>
	);
}
