"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { statsSectionCopy } from "../copy";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counters, setCounters] = useState(
    statsSectionCopy.stats.map(() => 0)
  );

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

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-900 to-slate-900 overflow-hidden">
      {/* Ocean field background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-slate-900/20" />
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-cyan-400 font-semibold tracking-wider">
                {statsSectionCopy.subtitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {statsSectionCopy.heading1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {statsSectionCopy.heading2}
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {statsSectionCopy.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              {statsSectionCopy.buttonText}
            </motion.button>

            {/* Stats */}
            <div ref={ref} className="grid grid-cols-2 gap-8 mt-12">
              {statsSectionCopy.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                    {/* Ocean wave effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                          style={{
                            top: `${30 + i * 20}%`,
                          }}
                          animate={{
                            x: ["-100%", "100%"],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5 + index * 0.3,
                          }}
                        />
                      ))}
                    </div>

                    <div className="relative z-10 text-center">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                        {counters[index]}
                        {stat.suffix}
                      </div>
                      <div className="text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>

                    {/* Floating bubbles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [0, -15, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={statsSectionCopy.image}
                alt={statsSectionCopy.imageAlt}
                className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Ocean overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              
              {/* Floating ocean particles */}
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Ocean current lines */}
              <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                    style={{
                      top: `${25 + i * 20}%`,
                    }}
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ocean depth background lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
              style={{
                top: `${15 + i * 15}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                opacity: [0, 0.3, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;