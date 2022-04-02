import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useContext, useState } from "react";
import { Purple, Theme } from "../src/theme";
import { ThemeContextProvider } from "../components/ThemeContextProvider";
// import theme from "../src/theme";
// import { ThemeProvider } from "@mui/system";



function MyApp({ Component, pageProps }: AppProps) {
	// const [theme, setTheme] = useState<Theme>(Purple);
	// const state = useContext(AppContext);
	/*const state = {
		theme: theme,
		setTheme: setTheme
	}*/

	return (
		<ThemeContextProvider>
			<Component {...pageProps} /*theme={theme} setTheme={setTheme}*/ />
		</ThemeContextProvider>
	);
}

export default MyApp;
