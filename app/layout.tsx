import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Student Portal",
	description: "A comprehensive portal for student activities and services",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<Toaster position="top-left" />
				<main className="container mx-auto p-4">{children}</main>
			</body>
		</html>
	);
}
