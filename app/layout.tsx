import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/context/ThemeContext";

export const metadata: Metadata = {
	title: "Cinemania",
	description: "Explore the world of Cinemania, your premier destination for movie enthusiasts. Immerse yourself in a diverse collection of blockbuster hits, timeless classics, and indie gems. From Hollywood's latest releases to hidden treasures, Cinemania offers a curated cinematic experience tailored for every film lover. Discover, watch, and enjoy the best in entertainment, all conveniently at your fingertips.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="dark:bg-background dark:text-text ">
				<ThemeProvider>
					<Navbar />
					<main className="dark:bg-background dark:text-text ">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
