"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real app, you'd handle login logic here
		console.log("Login attempted with:", email, password);
		router.push("/");
	};

	return (
		<div className="flex justify-center items-center min-h-screen">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-2xl">Login to Student Portal</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit}
						className="space-y-4"
					>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<Button
							type="submit"
							className="w-full"
						>
							Login
						</Button>
					</form>
					<div className="mt-4 text-center">
						<Link
							href="/signup"
							className="text-neutral-900 hover:underline dark:text-neutral-50"
						>
							No account? Sign up
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
