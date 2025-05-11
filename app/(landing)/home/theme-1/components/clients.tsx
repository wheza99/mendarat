"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Client logos with more realistic SVG-based logos
  const clients = [
    {
      name: "My House",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      ),
    },
    {
      name: "Leaf",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path
            fillRule="evenodd"
            d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Cube",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
        </svg>
      ),
    },
    {
      name: "Bolt",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Star",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 mx-auto"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

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
