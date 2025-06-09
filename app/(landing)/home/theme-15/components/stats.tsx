"use client";

import { motion } from "framer-motion";
import { statsSectionCopy } from "../copy";
import { useEffect, useState } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-24 bg-white">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-slate-800 mb-6 tracking-tight">
            {statsSectionCopy.heading}
          </h2>
          <div className="w-16 h-px bg-blue-300 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
            {statsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {statsSectionCopy.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Minimal container */}
              <div className="relative p-8 bg-gradient-to-b from-slate-50 to-blue-50 border border-slate-200 group-hover:border-blue-300 transition-all duration-500 group-hover:shadow-lg">
                
                {/* Clean icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 mx-auto mb-8 relative"
                >
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    <div className="w-8 h-8 bg-white"></div>
                  </div>
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  {isVisible && (
                    <CountUpNumber 
                      end={parseInt(stat.number.replace(/[^\d]/g, ''))} 
                      suffix={stat.number.replace(/[\d]/g, '')}
                      duration={2}
                      delay={index * 0.1}
                    />
                  )}
                </motion.div>

                {/* Label */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  className="text-xl font-light text-slate-800 mb-4 tracking-wide"
                >
                  {stat.label}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                  className="text-slate-600 font-light text-sm leading-relaxed"
                >
                  {stat.description}
                </motion.p>

                {/* Minimal accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                  className="w-8 h-px bg-blue-400 mx-auto mt-6 origin-center"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom minimal element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
}

// Helper component for counting animation
function CountUpNumber({ end, suffix, duration, delay }: { 
  end: number; 
  suffix: string; 
  duration: number; 
  delay: number; 
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration * 60); // 60fps
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return (
    <span className="text-4xl md:text-5xl font-extralight text-blue-600">
      {count}{suffix}
    </span>
  );
} 