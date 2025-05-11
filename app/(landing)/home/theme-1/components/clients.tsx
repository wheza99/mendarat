"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clientsSectionCopy } from '../copy';

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle the sliding animation
  useEffect(() => {
    // Set up a timer to change logos every 5 seconds
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);

        // After 1 second (the duration of the slide animation), update the index
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % clients.length);
          setIsAnimating(false);
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  // Generate client logos from the centralized copy
  const renderClientLogo = (client: typeof clientsSectionCopy.clients[0]) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 mx-auto"
      >
        {client.svgPaths.map((path, index) => (
          <path
            key={index}
            d={path}
            fillRule={client.fillRule as any}
            clipRule={client.clipRule as any}
          />
        ))}
      </svg>
    );
  };
  
  // Map client data from copy to include logos
  const clients = clientsSectionCopy.clients.map(client => ({
    name: client.name,
    logo: renderClientLogo(client)
  }));

  // Calculate which logos to display based on currentIndex
  const visibleLogos: number[] = [];
  for (let i = 0; i < 4; i++) {
    visibleLogos.push((currentIndex + i) % clients.length);
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Clients section with Framer Motion animation */}
        <div className="h-20 relative overflow-hidden">
          <div className="grid grid-cols-4 gap-12 absolute w-full">
            <AnimatePresence mode="popLayout">
              {clients.map((client, index) => {
                // Only render if this logo is one of the visible ones
                if (!visibleLogos.includes(index)) return null;

                // Get the position in the visible array (0-3)
                const position = visibleLogos.indexOf(index);

                return (
                  <motion.div
                    key={index}
                    className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center justify-center"
                    initial={{
                      x: position === 0 ? 0 : "100%",
                      opacity: position === 0 ? 0 : 1,
                    }}
                    animate={{
                      x:
                        isAnimating && position === 0
                          ? "-100%"
                          : `${position * 100}%`,
                      opacity: 1,
                    }}
                    exit={{
                      x: "-100%",
                      opacity: 0,
                      transition: { duration: 1 },
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      width: "calc(25% - 36px)",
                      left: 0,
                    }}
                  >
                    {client.logo}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
