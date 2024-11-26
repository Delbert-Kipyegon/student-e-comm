"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
	const router = useRouter();

	const handleLogout = () => {
		// In a real app, you'd handle logout logic here
		console.log("User logged out");
		router.push("/login");
	};

	return (
		<header className="bg-neutral-900 text-neutral-50 shadow-md dark:bg-neutral-50 dark:text-neutral-900">
			<nav className="container mx-auto p-4 flex justify-between items-center">
				<Link
					href="/"
					className="text-2xl font-bold"
				>
					Student Portal
				</Link>
				<div className="space-x-4">
					<Link
						href="/"
						className="hover:underline"
					>
						Dashboard
					</Link>
					<Link
						href="/books"
						className="hover:underline"
					>
						Books
					</Link>
					<Button
						onClick={handleLogout}
						variant="secondary"
					>
						Logout
					</Button>
				</div>
			</nav>
		</header>
	);
}
