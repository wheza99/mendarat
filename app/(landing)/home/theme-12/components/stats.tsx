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
      <div className="container mx-auto px-6">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-4 tracking-tight">
            {statsSectionCopy.heading}
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
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
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Number with zen circle */}
              <div className="relative mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-24 h-24 mx-auto border border-stone-200 rounded-full flex items-center justify-center mb-4 group-hover:border-stone-300 transition-colors duration-300"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-light text-stone-700"
                  >
                    {isVisible && (
                      <CountUpNumber 
                        end={parseInt(stat.number.replace(/[^\d]/g, ''))} 
                        suffix={stat.number.replace(/[\d]/g, '')}
                        duration={1.5}
                        delay={index * 0.2}
                      />
                    )}
                  </motion.span>
                </motion.div>
                
                {/* Subtle accent dot */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-stone-400 rounded-full"
                />
              </div>

              {/* Label */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                viewport={{ once: true }}
                className="text-lg font-medium text-stone-800 mb-3 tracking-wide"
              >
                {stat.label}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                viewport={{ once: true }}
                className="text-stone-600 font-light text-sm leading-relaxed"
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

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

  return <>{count}{suffix}</>;
} 