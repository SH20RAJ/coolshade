"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-12"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Cool Shade
            </h2>
            <p className="text-gray-400 mb-4">
              Explore India’s diverse heritage and culture through our
              interactive platform.
            </p>
            <div className="flex space-x-4"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and cultural
              insights.
            </p>
            <form
              action="#"
              method="post"
              className="flex flex-col sm:flex-row"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-gray-400 mb-2">
              Email:{" "}
              <Link
                href="mailto:info@shade.cool"
                className="hover:text-blue-400"
              >
                info@shade.cool
              </Link>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <Link href="tel:+1234567890" className="hover:text-blue-400">
                +123-456-7890
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 Cool Shade. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
