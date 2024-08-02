import "@/styles/globals.css";
import type { Metadata } from "next";
import { Footer, Menu } from "@/components";

export const metadata: Metadata = {
	title: "Bella",
	description: "Bella Resume",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Menu />
				{children}
				<Footer />
			</body>
		</html>
	);
}
