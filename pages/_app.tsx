import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useCookies, CookiesProvider } from "react-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { Amber, Green, Indigo, Pink, Purple, Red, Theme, colorThemes } from "../src/theme";
import { ThemeContext } from "../src/themeContext";

function MyApp({ Component, pageProps }: AppProps) {

	const [theme, setTheme] = useState(Purple);
	const value = { theme, setTheme };

	useEffect(() => { //useEffect to avoid "localStorage not defined" issue
		if (localStorage.getItem('theme'))
			setTheme(colorThemes.get(localStorage.getItem('theme')!) ?? Purple);
	}, [])

	return (
		<ThemeContext.Provider value={value}>
			<Component {...pageProps} />
		</ThemeContext.Provider>
	);
}

export default MyApp;
