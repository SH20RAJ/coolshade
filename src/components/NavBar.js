'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Link from 'next/link';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">
          <span className="text-yellow-400">Cool</span>Shade
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#" className="text-white text-lg hover:underline">
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#features" className="text-white text-lg hover:underline">
              Features
            </Link>
          </motion.div>
          {/* add faqs and testimonials */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#faqs" className="text-white text-lg hover:underline">
              FAQs
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#testimonials" className="text-white text-lg hover:underline">
              Testimonials
            </Link>
          </motion.div>
          {/* Buttons */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/join" className="px-4 py-2 text-black bg-yellow-400 rounded-full font-semibold hover:bg-yellow-300">
              Join as Helper
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/join" className="px-4 py-2 text-white bg-gray-900 rounded-full font-semibold hover:bg-gray-700">
              Explore as User
            </Link>
          </motion.div>
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
                    <li><Link href="#" className=" text-lg hover:underline">Home</Link></li>
                    <li><Link href="#features" className=" text-lg hover:underline">Features</Link></li>
                    <li><Link href="#faqs" className=" text-lg hover:underline">FAQs</Link></li>
                    <li><Link href="#testimonials" className=" text-lg hover:underline">Testimonials</Link></li>
                    <li>
                      <Link href="/join" className="block px-4 py-2 text-black bg-yellow-400 rounded-full font-semibold text-center hover:bg-yellow-300">
                        Join as Helper
                      </Link>
                    </li>
                    <li>
                      <Link href="/join" className="block px-4 py-2 text-white bg-gray-900 rounded-full font-semibold text-center hover:bg-gray-700">
                        Explore as User
                      </Link>
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
