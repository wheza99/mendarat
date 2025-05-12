"use client";

import { clientsSectionCopy } from "../copy";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("clients-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="clients-section" className="py-24 relative overflow-hidden">
      {/* Background with Gradient and Organic Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white"></div>
        
        {/* Organic Blob Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-500">
            <path fill="currentColor" d="M45.3,-59.1C58.9,-47.4,70.2,-32.7,75.9,-15.3C81.6,2.1,81.7,22.2,73.1,37.8C64.6,53.4,47.5,64.4,29.8,70.8C12.1,77.1,-6.2,78.7,-23.4,73.5C-40.6,68.3,-56.8,56.3,-67.1,40.1C-77.4,23.9,-81.8,3.5,-77.8,-14.8C-73.8,-33.1,-61.3,-49.4,-46.3,-60.8C-31.3,-72.2,-13.9,-78.8,1.9,-81.1C17.7,-83.5,31.7,-70.7,45.3,-59.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-pink-500">
            <path fill="currentColor" d="M48.2,-64.8C62.7,-53.3,74.9,-39.2,79.2,-23.1C83.5,-7,79.9,11.1,72.1,26.7C64.3,42.3,52.2,55.3,37.6,63.8C23,72.3,5.9,76.2,-11.7,75.1C-29.3,74,-47.5,67.9,-60.9,55.5C-74.3,43.1,-83,24.4,-84.3,5.1C-85.7,-14.2,-79.7,-34.1,-67.5,-47.9C-55.3,-61.7,-36.8,-69.5,-19.4,-73.9C-2,-78.3,14.4,-79.4,29.9,-76.1C45.5,-72.8,60.1,-65.1,48.2,-64.8Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              {clientsSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {clientsSectionCopy.description}
          </motion.p>
        </div>

        {/* Clients Grid - Curved Glassmorphism Cards */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tl from-purple-400/10 to-pink-400/10 blur-2xl"></div>
          
          {/* Clients Grid with Staggered Animation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clientsSectionCopy.clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="group"
              >
                <div className="relative h-40 bg-white/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-purple-200/50 hover:-translate-y-2">
                  {/* Curved Top */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-t-2xl"></div>
                  
                  {/* Client Logo Container */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={120}
                        height={60}
                        className="max-h-12 w-auto object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Testimonial Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl relative overflow-hidden"
        >
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-purple-200">
            <svg
              className="h-16 w-16 transform -rotate-180"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          
          {/* Featured Testimonial */}
          <div className="relative pl-12 pr-4">
            <p className="text-xl text-gray-700 italic mb-6">
              "Working with this team has been transformative for our brand. Their ability to translate our vision into a cohesive spatial experience exceeded our expectations and has significantly elevated our customer engagement."
            </p>
            
            <div className="flex items-center">
              <div className="mr-4 relative">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="CEO Portrait"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                {/* Decorative Circle */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                <p className="text-sm text-purple-600">CEO, Artisan Collective</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-gradient-to-tl from-purple-100/30 to-pink-100/30"></div>
        </motion.div>
      </div>
    </section>
  );
}
