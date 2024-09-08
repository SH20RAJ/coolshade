"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";
import DisqusComment from "@/components/DisqusComments";
import TourGuides from "@/components/explore/TourGuides";
import { EventsNearMe } from "@/components/events-near-me";
import PeopleNearMe from "@/components/explore/PeopleNearMe";
import BuyLocalProducts from "@/components/explore/BuyLocalProducts";
import RentHotel from "@/components/explore/RentHotel";
import Link from "next/link";

export default function PlaceShowcasePage() {
  const place = {
    id: 1,
    name: "Science City",
    location: "Science museum in Kolkata, West Bengal",
    phone: "+91 12345 67890",
    wiki: "https://en.wikipedia.org/wiki/Science_City,_Kolkata",
    googleSearch: "https://www.google.com/search?q=Science+City+Kolkata",
    logo: "https://sciencecitykolkata.org.in/wp-content/uploads/2020/02/logo.png",
    image:
      "https://sciencecitykolkata.org.in/wp-content/uploads/2020/02/Outdoor-Science-Park_2.jpg",
    reviews: [
      { user: "John Doe", comment: "Amazing place!", rating: 5 },
      { user: "Jane Smith", comment: "Very educational.", rating: 4 },
    ],
    media: [
      "https://lh3.googleusercontent.com/p/AF1QipNebyxdRvlVoMS-CVtO8Hyc0ZO6NuqKON97nV4p=s1360-w1360-h1020",
      "https://sciencecitykolkata.org.in/wp-content/uploads/2024/04/5-Combined-Rates-for-Entry-to-Science-City-and-the-Picnic-Park-w.e.f.-01.04.2024-1-1.png",
      "https://sciencecitykolkata.org.in/wp-content/uploads/2020/02/banner.jpg",
      "https://sciencecitykolkata.org.in/wp-content/uploads/2020/02/st-gallery3-final300.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTrvrfPXBpQmn3eZu3oEhIUOGiOtojkY5XQ&s",
    ],
    about:
      "Science City is a science museum in Kolkata, West Bengal, India. It is a popular destination for families and students seeking an educational and entertaining experience. The museum features interactive exhibits, educational programs, and a planetarium. It is known for its hands-on approach to learning about science and technology. Science City is a great place to visit for both locals and tourists alike.",
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
          <AvatarImage src={place.logo} alt={place.name} />
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
              className={`w-6 h-6 ${
                i < 4 ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Add Review & Comments */}
        <div className="mt-6 space-x-4">
          <Button variant="outline">Add a Review</Button>
          <Button variant="outline">View Comments</Button>
        </div>
      </motion.div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-500 text-lg">{place.about}</p>
		<Link target="_blank" href={place.wiki}><Button variant="link">See More</Button></Link>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1880805.1012373697!2d85.54875345706893!3d22.970567561629977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276a208cb6793%3A0x676bbf22d04354e8!2sScience%20City!5e0!3m2!1sen!2sin!4v1725762769348!5m2!1sen!2sin"
          width={"100%"}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-10">
        <TourGuides />
      </div>

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

      <div className="mt-10">
        <EventsNearMe />
      </div>

      <div className="mt-10">
        <PeopleNearMe />
      </div>

      <div className="mt-10">
        <BuyLocalProducts />
      </div>

	  <div className="mt-10">
        <RentHotel />
      </div>

      {/* Disqus Comments */}

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Comments/Reviews</h2>
        <DisqusComment id={place.id} />
      </div>
    </div>
  );
}
