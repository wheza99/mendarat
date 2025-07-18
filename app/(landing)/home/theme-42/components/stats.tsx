"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { statsSectionCopy } from "../copy";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counters, setCounters] = useState(statsSectionCopy.stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      statsSectionCopy.stats.forEach((stat, index) => {
        const target = parseInt(stat.value);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 16);
      });
    }
  }, [isInView]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Gaming Current Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(147,51,234,0.1)_25%,transparent_25%),linear-gradient(-45deg,rgba(147,51,234,0.1)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(147,51,234,0.1)_75%),linear-gradient(-45deg,transparent_75%,rgba(147,51,234,0.1)_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]" />
      </div>

      {/* Digital Starfield */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gaming Current Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
            style={{
              left: 0,
              right: 0,
              top: `${(i + 1) * 12.5}%`,
              transform: `skewY(${-2 + Math.random() * 4}deg)`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Floating Gaming Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Digital Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-400" />
        <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-cyan-400" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400" />
        <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-cyan-400" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400" />
        <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-cyan-400" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400" />
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-cyan-400" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-purple-400 font-semibold tracking-wider uppercase">
                {statsSectionCopy.subtitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {statsSectionCopy.heading1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {statsSectionCopy.heading2}
              </span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {statsSectionCopy.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              {statsSectionCopy.buttonText}
            </motion.button>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <img
                src={statsSectionCopy.image}
                alt={statsSectionCopy.imageAlt}
                className="relative w-full h-96 object-cover rounded-2xl border border-white/10 group-hover:border-purple-400/50 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
            </div>

            {/* Stats Overlay */}
            <div ref={ref} className="absolute -bottom-8 -left-8 right-8">
              <div className="grid grid-cols-2 gap-4">
                {statsSectionCopy.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="text-3xl md:text-4xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                          {counters[index]}{stat.suffix}
                        </span>
                      </div>
                      <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                    
                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 border border-purple-400/50 rounded-2xl"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;