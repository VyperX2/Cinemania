import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				text: "#fde7e7",
				background: "#050505",
				primary: "#b32100",
				secondary: "#1a1a19",
				accent: "#ff542e",
			},
			fontSize: {
				sm: "0.750rem",
				base: "1rem",
				xl: "1.333rem",
				"2xl": "1.777rem",
				"3xl": "2.369rem",
				"4xl": "3.158rem",
				"5xl": "4.210rem",
			},
			fontFamily: {
				heading: "Mitr",
				body: "Biryani",
			},
			fontWeight: {
				normal: "400",
				bold: "700",
			},
		},
	},
	plugins: [],
};
export default config;
