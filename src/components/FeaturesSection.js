'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Discover Cool Shade</h2>
          <p className="mt-4 text-lg text-gray-600">Uncover the vibrant heritage and culture of India with our platform. Explore local specialties, engage with the community, and make your travel experiences unforgettable.</p>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4 h-16 w-16 bg-yellow-400 rounded-full">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Explore Local Flavors</h3>
            <p className="mt-2 text-gray-600">Discover unique food items, beverages, and delicacies from different regions of India, directly from locals who know the best spots.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4 h-16 w-16 bg-yellow-400 rounded-full">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Discover Hidden Gems</h3>
            <p className="mt-2 text-gray-600">Find off-the-beaten-path locations and attractions that aren't covered in typical travel guides, all recommended by locals.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4 h-16 w-16 bg-yellow-400 rounded-full">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Connect with Locals</h3>
            <p className="mt-2 text-gray-600">Engage with local communities and get authentic insights into cultural traditions and practices through interactive posts and discussions.</p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-white bg-yellow-500 rounded-full font-semibold text-lg transition-transform transform hover:scale-105"
          >
            Learn More
            <svg className="w-6 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
