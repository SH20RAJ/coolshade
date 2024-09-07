"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  BookOpenIcon,
  CalendarIcon,
  DownloadIcon,
  GlobeIcon,
  HandHeartIcon,
  HeartIcon,
  HelpCircleIcon,
  MapIcon,
  ShieldCheckIcon,
  TrophyIcon,
  VibrateIcon,
  VideoIcon,
} from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    id: 1,
    title: "Interactive Map Integration",
    description:
      "Explore cultural spots, local eateries, and tourist attractions with dynamic maps. Create custom itineraries and guided tours.",
    icon: MapIcon,
  },
  {
    id: 2,
    title: "Real-time Updates",
    description:
      "Stay informed about live events, festivals, and weather tips to enhance your cultural experience.",
    icon: CalendarIcon,
  },
  {
    id: 3,
    title: "Multimedia Content",
    description:
      "Enjoy video blogs, documentaries, and audio guides showcasing cultural experiences and local traditions.",
    icon: VideoIcon,
  },
  {
    id: 4,
    title: "Local Artisan Support",
    description:
      "Discover and purchase traditional crafts and local products directly from artisans and small businesses.",
    icon: HandHeartIcon,
  },
  {
    id: 5,
    title: "Language Translation",
    description:
      "Overcome language barriers with automatic translations and a built-in cultural phrasebook.",
    icon: GlobeIcon,
  },
  {
    id: 6,
    title: "Virtual Reality Experiences",
    description:
      "Take virtual tours of historical sites and cultural events, bringing India’s heritage to your fingertips.",
    icon: VibrateIcon,
  },
  {
    id: 7,
    title: "Personalized Recommendations",
    description:
      "Get tailored suggestions for places to visit and things to do based on your preferences and activity.",
    icon: HeartIcon,
  },
  {
    id: 8,
    title: "Gamification and Achievements",
    description:
      "Earn badges and rewards by completing travel challenges, contributing content, and engaging with the platform.",
    icon: TrophyIcon,
  },
  {
    id: 9,
    title: "Crowdsourced Travel Assistance",
    description:
      "Receive real-time help from locals and access emergency assistance when needed.",
    icon: HelpCircleIcon,
  },
  {
    id: 10,
    title: "Cultural Education and Learning",
    description:
      "Participate in quizzes and learning modules to deepen your knowledge of Indian culture, history, and customs.",
    icon: BookOpenIcon,
  },
  {
    id: 11,
    title: "User Safety and Ethics",
    description:
      "Find verified guides and services, and learn about sustainable and ethical travel practices.",
    icon: ShieldCheckIcon,
  },
  {
    id: 12,
    title: "Offline Access",
    description:
      "Download essential information and maps for offline use, ensuring access even in areas with limited connectivity.",
    icon: DownloadIcon,
  },
];

const variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function Features() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".feature-card");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          controls.start({ opacity: 1, scale: 1 });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Explore Our Features
        </h2>
        <p className="text-center mb-12 text-white">
          Discover how Cool Shade enhances your cultural experience with these
          innovative features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="feature-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={controls}
              transition={{ duration: 0.5, delay: feature.id * 0.1 }}
            >
              <div className="flex items-center justify-center mb-4 text-indigo-500">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 mb-4">{feature.description}</p>
              <Button variant="link">
                <a href="#" className="text-blue-600 hover:underline">
                  Learn More
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
