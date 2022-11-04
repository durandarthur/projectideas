import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useCookies } from "react-cookie";
import { tagOptions } from "../src/tags";
import { Purple, Theme } from "../src/theme";

// type Values = {
// 	title: String;
// 	text: String;
// 	tags: String[];
// };

interface tagProps {
	border_radius?: string;
	font_size?: string | number;
	handleChange: any;
	value: string[];
	setFieldValue: any;
}

export default function TagBar(props: tagProps) {
	// const [theme, setTheme] = useState(purple);
	// const { theme, setTheme } = useContext(ThemeContext);
	const [themeCookie, setThemeCookie] = useCookies();
	const theme: Theme = themeCookie && themeCookie['theme'] ? themeCookie['theme'] : Purple;

	return (
		<Autocomplete
			onChange={(e, value) => props.setFieldValue("tags", value)}
			multiple
			id="tags"
			name="tags"
			sx={{
				width: "75%",
				backgroundColor: theme?.palette.primary.main,
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
					color: theme?.palette.secondary.light,
					overflow: "visible",
				},
				".MuiInputBase-input": {
					fontSize: props.font_size,
					color: theme?.palette.primary.dark,
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
					onChange={props.handleChange}
					name="tags-standard"
					value={props.value}
					variant="standard"
					required={props.value.length === 0}
					placeholder="Tags"
					sx={{
						fontSize: "3vmin",
						padding: "10px",
					}}
				/>
			)}
		/>
	);
}
