'use client'
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Text Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
              Empower & Explore Together
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
              Whether you want to help others or explore India{"'"}s vast heritage, Cool Shade is the place to begin.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
              {/* Button for Helpers */}
              <motion.a
                href="/join"
                className="flex items-center justify-center px-8 py-3 text-lg font-semibold text-black bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-500"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                Join
              </motion.a>
              {/* Button for Explorers */}
              <motion.a
                href="/explore"
                className="mt-4 sm:mt-0 flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gray-900 rounded-full shadow-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-800"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                Explore
              </motion.a>
            </div>
          </motion.div>

          {/* Image or Illustration Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-12 lg:mt-0"
          >
            <img
              className="w-full h-auto max-w-md mx-auto"
              src="./medium.webp"
              alt="Cool Shade Illustration"
            />
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay for Extra Style */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 to-blue-600 opacity-50 z-0"></div>

      {/* Background Animation */}
      <motion.div
        className="absolute -top-10 -right-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
