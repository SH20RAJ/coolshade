'use client';
import { useEffect, useState } from 'react';

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Traveler',
    feedback: "Cool Shade helped me discover amazing local spots and experiences I would never have found on my own. The community feedback was incredibly helpful!",
    image: 'https://randomuser.me/api/portraits/men/32.jpg', // Example image URL
  },
  {
    id: 2,
    name: 'Samantha Lee',
    role: 'Local Artisan',
    feedback: "It's fantastic to see our local crafts getting the attention they deserve. Cool Shade has been a great platform for us to connect with travelers.",
    image: 'https://randomuser.me/api/portraits/women/45.jpg', // Example image URL
  },
  {
    id: 3,
    name: 'Raj Patel',
    role: 'Cultural Enthusiast',
    feedback: "The recommendations and local insights on Cool Shade have made my trips so much more enriching. Highly recommended for anyone wanting a deeper cultural experience.",
    image: 'https://randomuser.me/api/portraits/men/58.jpg', // Example image URL
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elementTop = document.getElementById('testimonials')?.offsetTop || 0;
      if (scrollTop + window.innerHeight > elementTop) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-bold text-center mb-8">What Our Users Say</h2>
        <div className="flex space-x-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg min-w-[300px] hover:shadow-xl transition-shadow  hover:scale-105 duration-1000 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  ⭐️⭐️⭐️⭐️⭐️
                </div>
              </div>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
