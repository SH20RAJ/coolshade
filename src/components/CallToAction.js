'use client';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center">
      <div className="container mx-auto px-4">
        <ParticlesBackground />
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Discover and Share India’s Rich Heritage?
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Join our community of explorers and locals to dive into the vibrant culture, heritage, and traditions of India. 
          Whether you’re a traveler seeking authentic experiences or a local wanting to showcase your culture, we have something for you.
        </motion.p>
        <motion.a
          href="/signup"
          className="inline-block bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}
