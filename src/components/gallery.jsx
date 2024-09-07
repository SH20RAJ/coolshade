"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

export default function PlaceShowcasePage() {
	const place = {
		id: 1,
		name: "Science City",
		location: "Science museum in Kolkata, West Bengal",
		phone: "+91 12345 67890",
		wiki: "https://en.wikipedia.org/wiki/Science_City,_Kolkata",
		googleSearch: "https://www.google.com/search?q=Science+City+Kolkata",
		image: "https://lh3.googleusercontent.com/p/AF1QipNebyxdRvlVoMS-CVtO8Hyc0ZO6NuqKON97nV4p=s1360-w1360-h1020",
		reviews: [
			{ user: "John Doe", comment: "Amazing place!", rating: 5 },
			{ user: "Jane Smith", comment: "Very educational.", rating: 4 },
		],
		media: [
			"https://lh3.googleusercontent.com/p/AF1QipNebyxdRvlVoMS-CVtO8Hyc0ZO6NuqKON97nV4p=s1360-w1360-h1020",
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/1200px-Victoria_Memorial_situated_in_Kolkata.jpg",
		],
	};

	// State to handle modal view
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
			{/* Showcase Header */}
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="flex flex-col items-center text-center"
			>
				<Avatar className="w-32 h-32">
					<AvatarImage src={place.image} alt={place.name} />
					<AvatarFallback>{place.name[0]}</AvatarFallback>
				</Avatar>
				<motion.img
					src={place.image}
					alt={place.name}
					className="w-full h-64 object-cover rounded-lg shadow-lg mt-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
				/>
				<h1 className="text-4xl font-extrabold mt-6">{place.name}</h1>
				<p className="text-gray-500 mt-2 text-lg">{place.location}</p>
				<p className="text-gray-500 text-lg">Phone: {place.phone}</p>

				{/* Action Buttons */}
				<div className="flex space-x-4 mt-6">
					<Button variant="link" href={place.wiki}>
						Wikipedia
					</Button>
					<Button variant="link" href={place.googleSearch}>
						Google Search
					</Button>
				</div>

				{/* Star Ratings */}
				<div className="flex space-x-1 mt-4">
					{[...Array(5)].map((_, i) => (
						<StarIcon
							key={i}
							className={`w-6 h-6 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
						/>
					))}
				</div>

				{/* Add Review & Comments */}
				<div className="mt-6 space-x-4">
					<Button variant="outline">Add a Review</Button>
					<Button variant="outline">View Comments</Button>
				</div>
			</motion.div>

			{/* Modern Media Gallery */}
			<div className="mt-10">
				<h2 className="text-2xl font-bold mb-4">Media Gallery</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{place.media.map((mediaUrl, index) => (
						<motion.div
							key={index}
							className="relative group overflow-hidden rounded-lg shadow-lg"
							whileHover={{ scale: 1.02 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							onClick={() => setSelectedImage(mediaUrl)}
						>
							<img
								src={mediaUrl}
								alt={`media-${index}`}
								className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
								<p className="text-white text-lg font-bold">View Image</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Image Modal */}
			{selectedImage && (
				<div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
					<div className="relative">
						<img
							src={selectedImage}
							alt="Selected"
							className="w-auto max-h-[80vh] rounded-lg shadow-lg"
						/>
						<Button
							variant="link"
							className="absolute top-4 right-4 text-white text-2xl"
							onClick={() => setSelectedImage(null)}
						>
							&times;
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}
