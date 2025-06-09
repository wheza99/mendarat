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
    <section id="stats-section" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
            {statsSectionCopy.heading}
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-300 text-xl font-light max-w-2xl mx-auto">
            {statsSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {statsSectionCopy.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group relative"
            >
              {/* Art Deco frame */}
              <div className="relative p-8 bg-gradient-to-b from-slate-800 to-slate-900 border border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-500">
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Art Deco diamond icon */}
                <motion.div
                  initial={{ scale: 0, rotate: 45 }}
                  whileInView={{ scale: 1, rotate: 45 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 mx-auto mb-6 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rotate-45 flex items-center justify-center group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                    <div className="w-8 h-8 bg-slate-900 rotate-45"></div>
                  </div>
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  {isVisible && (
                    <CountUpNumber 
                      end={parseInt(stat.number.replace(/[^\d]/g, ''))} 
                      suffix={stat.number.replace(/[\d]/g, '')}
                      duration={2}
                      delay={index * 0.2}
                    />
                  )}
                </motion.div>

                {/* Label */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                  className="text-xl font-light text-yellow-400 mb-4 tracking-wide"
                >
                  {stat.label}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                  viewport={{ once: true }}
                  className="text-slate-400 font-light text-sm leading-relaxed"
                >
                  {stat.description}
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                  className="w-12 h-px bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6 origin-center"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Art Deco ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <svg width="120" height="40" viewBox="0 0 120 40" className="text-yellow-400">
            <path d="M60 5 L80 20 L60 35 L40 20 Z" fill="currentColor" opacity="0.6" />
            <path d="M60 10 L70 20 L60 30 L50 20 Z" fill="currentColor" opacity="0.8" />
            <circle cx="60" cy="20" r="3" fill="currentColor" />
            <path d="M20 20 L35 20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <path d="M85 20 L100 20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          </svg>
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
    <span className="text-4xl md:text-5xl font-thin text-white">
      {count}{suffix}
    </span>
  );
} 