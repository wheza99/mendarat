"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BusinessData } from "../../page";
import Image from "next/image";
import Link from "next/link";

// Particle animation component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-500 rounded-full opacity-70"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [
              Math.random() * 0.5 + 0.1,
              Math.random() * 0.8 + 0.2,
              Math.random() * 0.5 + 0.1,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Grid background
const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-full border-r border-cyan-500/20" />
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-12 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-full border-b border-cyan-500/20" />
        ))}
      </div>
    </div>
  );
};

// Digital noise effect
const DigitalNoise = () => {
  const [noisePattern, setNoisePattern] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const generateNoise = () => {
      const newPattern = [];
      for (let i = 0; i < 20; i++) {
        newPattern.push(
          <motion.div
            key={i}
            className="absolute bg-cyan-400/10"
            initial={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 5 + 1,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: Math.random() * 2 + 0.5,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
            }}
          />
        );
      }
      setNoisePattern(newPattern);
    };

    generateNoise();
    // Regenerate noise every 5 seconds
    const interval = setInterval(generateNoise, 5000);
    return () => clearInterval(interval);
  }, []);

  return <div className="absolute inset-0 z-0 overflow-hidden">{noisePattern}</div>;
};

interface HeroProps {
  data: BusinessData;
}

export default function Hero({ data }: HeroProps) {
  const backgroundImage = data.metadata?.banner || "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent" />
      </div>

      {/* Digital effects */}
      <GridBackground />
      <ParticleField />
      <DigitalNoise />

      {/* Glowing accent lines */}
      <motion.div
        className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.6, scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.6, scaleX: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 bg-gray-900/20 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {data.logo && (
                <Image
                  src={data.logo}
                  alt={data.name}
                  width={40}
                  height={40}
                  className="rounded-lg border border-cyan-500/30"
                />
              )}
              <div>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  {data.name}
                </h1>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#stats" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm">
                {data.menu.leftpane || "SERVICES"}
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm">
                {data.menu.bottompane || "PROJECTS"}
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm">
                {data.menu.rightpane || "CONTACT"}
              </Link>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 bg-transparent border border-cyan-500 text-cyan-400 font-mono text-sm rounded-md relative overflow-hidden group"
            >
              <span className="relative z-10">CONNECT</span>
              <motion.span
                className="absolute inset-0 bg-cyan-500/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "center" }}
              />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Content container */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto">
          {/* Animated tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-cyan-400 font-mono tracking-widest text-sm md:text-base"
          >
            DIGITAL HORIZON • {data.location}
          </motion.div>

          {/* Main heading with digital glitch effect */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter"
            >
              <span className="block relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  {data.name.split(' ')[0]}
                </span>
                <motion.span
                  className="absolute top-0 left-0 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 opacity-70"
                  animate={{
                    x: [0, -3, 0, 2, 0],
                    opacity: [0.7, 0, 0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                >
                  {data.name.split(' ')[0]}
                </motion.span>
              </span>
              <span className="block mt-2 text-white">
                {data.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">EXPLORE SERVICES</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "center" }}
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-bold rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">VIEW PORTFOLIO</span>
              <motion.div
                className="absolute inset-0 bg-purple-500/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "center" }}
              />
            </motion.button>
          </motion.div>

          {/* Announcement Banner */}
          {data.metadata?.announcement && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm"
            >
              <p className="text-cyan-300 text-center font-mono text-sm">
                {data.metadata.announcement}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-cyan-400 font-mono text-xs">INITIATE</span>
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 