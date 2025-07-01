"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/outline";

interface HeroProps {
  businessData: BusinessData;
}

export default function Hero({ businessData }: HeroProps) {
  const backgroundImage = businessData.metadata.background || businessData.metadata.banner || businessData.img;
  
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Business Logo */}
            {businessData.img && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <img 
                  src={businessData.img} 
                  alt={businessData.name}
                  className="h-20 w-auto mx-auto object-contain"
                />
              </motion.div>
            )}

            {/* Business Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">{businessData.name}</span>
            </h1>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center"
            >
              <span className={`inline-block px-6 py-2 rounded-full text-sm font-medium tracking-wider ${
                businessData.status === 'published' 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-gray-600 text-white'
              }`}>
                {businessData.status === 'published' ? 'BUSINESS AKTIF' : 'TIDAK AKTIF'}
              </span>
            </motion.div>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
              {businessData.metadata.description}
            </p>

            {/* Announcement */}
            {businessData.metadata.announcement && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="max-w-2xl mx-auto p-4 bg-amber-500/20 border border-amber-500/30 rounded-lg backdrop-blur-sm"
              >
                <p className="text-amber-100 text-sm font-medium">
                  📢 {businessData.metadata.announcement}
                </p>
              </motion.div>
            )}

            {/* Currency & Language Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center space-x-8 text-gray-300"
            >
              <div className="flex items-center space-x-2">
                <span className="text-amber-500">💰</span>
                <span className="text-sm">{businessData.currency}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-amber-500">🌐</span>
                <span className="text-sm">{businessData.language === 'en' ? 'English' : businessData.language}</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <div className="mt-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-amber-500 text-white px-8 py-4 text-base font-medium tracking-wider hover:bg-amber-600 transition-colors duration-300"
              >
                HUBUNGI KAMI
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 pb-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToNextSection}
        >
          <span className="text-white text-sm mb-2">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDownIcon className="h-6 w-6 text-amber-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 