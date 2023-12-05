"use client";
import { ReactNode, createContext, useState } from "react";

interface ThemeContextProps {
	theme: string;
	switchDark: () => void;
	switchLight: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
	undefined
);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const switchDark = () => {
		setTheme("dark");
	};
	const switchLight = () => {
		setTheme("light");
	};

	return (
		<ThemeContext.Provider value={{ theme, switchDark, switchLight }}>
			<div className={`${theme}`}>{children}</div>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
