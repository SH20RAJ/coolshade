"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css"; // Make sure your UI library supports dialog styling

export default function YouTubeVideoModal() {
	// State to manage the modal visibility
	const [isOpen, setIsOpen] = useState(false);

	// Function to open and close the modal
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	// YouTube video ID (can be dynamic)
	const videoId = "dQw4w9WgXcQ"; // Example YouTube video ID

	return (
		<div className="container mx-auto text-center">
			{/* Button to open modal */}
			<Button onClick={openModal} variant="primary">
				Watch Video
			</Button>

			{/* Dialog component for the modal */}
			<Dialog isOpen={isOpen} onDismiss={closeModal} className="relative z-50">
				<DialogOverlay className="fixed inset-0 bg-black bg-opacity-75 z-40" />
				<DialogContent
					aria-label="YouTube Video"
					className="relative bg-white p-0 z-50 rounded-lg shadow-lg max-w-3xl w-full"
				>
					{/* Close button */}
					<Button
						className="absolute top-2 right-2 bg-transparent text-xl text-gray-700"
						onClick={closeModal}
					>
						&times;
					</Button>

					{/* YouTube Embed */}
					<div className="aspect-w-16 aspect-h-9">
						<iframe
							width="100%"
							height="100%"
							src={`https://www.youtube.com/embed/${videoId}`}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
