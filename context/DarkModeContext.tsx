"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

interface DarkModeContextProps {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(
	undefined
);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
		console.log("HELLO");
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => {
	const context = useContext(DarkModeContext);
	if (!context) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}
	return context;
};
