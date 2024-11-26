"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner"; // Assuming you're using the 'sonner' library for alerts
import { FaHistory, FaAtom, FaPen } from "react-icons/fa"; // Example icons for categories
import Image from "next/image"; // Assuming you're using Next.js

export default function Books() {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(100);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const books = [
		{
			id: 1,
			title: "Introduction to Calculus",
			price: 49.99,
			category: "Science",
			image: "/images/calculus.jpg", // Replace with your actual image paths
		},
		{
			id: 2,
			title: "World History: A Comprehensive Guide",
			price: 39.99,
			category: "History",
			image: "/images/history.jpg",
		},
		{
			id: 3,
			title: "Advanced Physics",
			price: 54.99,
			category: "Science",
			image: "/images/physics.jpg",
		},
		{
			id: 4,
			title: "English Literature Anthology",
			price: 29.99,
			category: "Literature",
			image: "/images/literature.jpg",
		},
		{
			id: 5,
			title: "Chemistry in Depth",
			price: 44.99,
			category: "Science",
			image: "/images/chemistry.jpg",
		},
		{
			id: 6,
			title: "Modern World History",
			price: 34.99,
			category: "History",
			image: "/images/modern_history.jpg",
		},
		{
			id: 7,
			title: "Shakespeare's Works",
			price: 24.99,
			category: "Literature",
			image: "/images/shakespeare.jpg",
		},
		{
			id: 8,
			title: "Biology: The Essentials",
			price: 59.99,
			category: "Science",
			image: "/images/biology.jpg",
		},
	];

	type Book = {
		id: number;
		title: string;
		price: number;
		category: string;
		image: string;
	};

	// Filter books based on search term, price range, and category
	const filteredBooks = books.filter((book) => {
		const matchesSearch = book.title
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesPrice = book.price >= minPrice && book.price <= maxPrice;
		const matchesCategory = selectedCategory
			? book.category === selectedCategory
			: true;
		return matchesSearch && matchesPrice && matchesCategory;
	});

	const handleAddToCart = (book: Book) => {
		toast(`✅ ${book.title} added to cart!`);
	};

	return (
		<div className="flex space-x-6">
			{/* Filters Section */}
			<div className="w-1/4 space-y-6">
				<h1 className="text-3xl font-bold">Books & Materials</h1>

				{/* Search Bar */}
				<div className="mb-4">
					<Input
						type="text"
						placeholder="Search books..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				{/* Price Filter */}
				<div className="mb-4">
					<Slider
						min={0}
						max={100}
						value={[minPrice, maxPrice]}
						onValueChange={(value: [number, number]) => {
							setMinPrice(value[0]);
							setMaxPrice(value[1]);
						}}
					/>
				</div>
				<div className="flex justify-between">
					<span>Price: ${minPrice}</span>
					<span>to ${maxPrice}</span>
				</div>

				{/* Category Filters */}
				<div className="mb-4">
					<h2 className="text-xl font-semibold mb-2">Categories</h2>
					<div className="flex flex-col space-y-2">
						<Button
							variant={selectedCategory === "Science" ? "secondary" : "default"}
							onClick={() => setSelectedCategory("Science")}
							className="flex items-center space-x-2"
						>
							<FaAtom />
							<span>Science</span>
						</Button>
						<Button
							variant={selectedCategory === "History" ? "secondary" : "default"}
							onClick={() => setSelectedCategory("History")}
							className="flex items-center space-x-2"
						>
							<FaHistory />
							<span>History</span>
						</Button>
						<Button
							variant={
								selectedCategory === "Literature" ? "secondary" : "default"
							}
							onClick={() => setSelectedCategory("Literature")}
							className="flex items-center space-x-2"
						>
							<FaPen />
							<span>Literature</span>
						</Button>
					</div>
				</div>
			</div>

			{/* Books Grid */}
			<div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredBooks.map((book) => (
					<Card
						key={book.id}
						className="w-full h-full flex flex-col"
					>
						<CardHeader className="h-40 overflow-hidden">
							<Image
								src={book.image}
								alt={book.title}
								width={300}
								height={150}
								className="w-full h-full object-cover rounded-t-lg"
							/>
						</CardHeader>
						<CardContent className="flex-1 p-4 flex flex-col justify-between space-y-4">
							<CardTitle className="text-center text-lg font-semibold">
								{book.title}
							</CardTitle>
							<div className="flex justify-between items-center">
								<span className="text-lg font-bold">${book.price}</span>
								<Button onClick={() => handleAddToCart(book)}>
									Add to Cart
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
