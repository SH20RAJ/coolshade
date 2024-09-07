'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">
          Cool Shade
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-white text-lg hover:underline"
          >
            Home
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-white text-lg hover:underline"
          >
            Features
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-white text-lg hover:underline"
          >
            About Us
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-white text-lg hover:underline"
          >
            Contact
          </motion.a>

          {/* Buttons */}
          <motion.a
            href="#"
            className="px-4 py-2 text-black bg-yellow-400 rounded-full font-semibold hover:bg-yellow-300"
            whileHover={{ scale: 1.05 }}
          >
            Join as Helper
          </motion.a>
          <motion.a
            href="#"
            className="px-4 py-2 text-white bg-gray-900 rounded-full font-semibold hover:bg-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            Explore as User
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-20">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                onClick={toggleSheet}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  // Close icon
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </SheetTrigger>

            <SheetContent>
              <SheetClose asChild>
                <button
                  type="button"
                  className="absolute top-4 right-4 text-white"
                  onClick={toggleSheet}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </SheetClose>
              <div className="p-4">
                <nav>
                  <ul className="flex flex-col space-y-4">
                    <li><a href="#" className=" text-lg hover:underline">Home</a></li>
                    <li><a href="#" className=" text-lg hover:underline">Features</a></li>
                    <li><a href="#" className=" text-lg hover:underline">About Us</a></li>
                    <li><a href="#" className=" text-lg hover:underline">Contact</a></li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-black bg-yellow-400 rounded-full font-semibold text-center hover:bg-yellow-300">
                        Join as Helper
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded-full font-semibold text-center hover:bg-gray-700">
                        Explore as User
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
