"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { StarIcon, BadgeCheckIcon } from "lucide-react";
import { Gallery } from "@/components/gallery";

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

	const touristGuides = [
		{
			id: 1,
			name: "Amit Roy",
			rating: 4.5,
			badges: ["Experienced", "Certified"],
			phone: "+91 98765 43210",
			image: "https://randomuser.me/api/portraits/men/32.jpg",
		},
		{
			id: 2,
			name: "Priya Gupta",
			rating: 4.8,
			badges: ["Top Guide", "Local Expert"],
			phone: "+91 98765 67890",
			image: "https://randomuser.me/api/portraits/women/44.jpg",
		},
	];

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
					<Link href={place.wiki}>
						<Button variant="link">Wikipedia</Button>
					</Link>
					<Link href={place.googleSearch}>
						<Button variant="link">Google Search</Button>
					</Link>
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

			{/* Media Gallery */}
			<div className="mt-10">
				<h2 className="text-2xl font-bold mb-4">Media Gallery</h2>
				<div className="flex overflow-x-auto space-x-4">
					{place.media.map((mediaUrl, index) => (
						<motion.div
							key={index}
							className="min-w-[300px] h-[200px] rounded-lg overflow-hidden shadow-lg"
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<img
								src={mediaUrl}
								alt={`media-${index}`}
								className="w-full h-full object-cover"
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* Tourist Guides Section */}
			<div className="mt-10">
				<h2 className="text-2xl font-bold mb-6">Tourist Guides</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{touristGuides.map((guide) => (
						<motion.div
							key={guide.id}
							className="bg-white p-6 rounded-lg shadow-lg text-center"
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<Avatar className="w-24 h-24 mx-auto">
								<AvatarImage src={guide.image} alt={guide.name} />
								<AvatarFallback>{guide.name[0]}</AvatarFallback>
							</Avatar>
							<h3 className="text-xl font-bold mt-4">{guide.name}</h3>
							<p className="text-gray-600">Phone: {guide.phone}</p>
							{/* Star Ratings */}
							<div className="flex justify-center mt-2">
								{[...Array(5)].map((_, i) => (
									<StarIcon
										key={i}
										className={`w-5 h-5 ${i < Math.floor(guide.rating) ? "text-yellow-400" : "text-gray-300"}`}
									/>
								))}
								<span className="text-gray-500 ml-2">({guide.rating})</span>
							</div>

							{/* Badges */}
							<div className="flex justify-center space-x-2 mt-4">
								{guide.badges.map((badge, index) => (
									<span key={index} className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
										<BadgeCheckIcon className="w-4 h-4 mr-1" />
										{badge}
									</span>
								))}
							</div>

							{/* Contact Button */}
							<Button variant="outline" className="mt-6">
								Contact Guide
							</Button>
						</motion.div>
					))}
				</div>
			</div>

      <Gallery />

      {/* <Reviews /> */}
      {/* <Map /> */}
		</div>
	);
}
