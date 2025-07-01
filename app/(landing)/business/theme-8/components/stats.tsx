"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);

  return count;
};

export default function Stats() {
  const stats = [
    {
      value: 150,
      suffix: "+",
      label: "Proyek Selesai"
    },
    {
      value: 50,
      suffix: "+",
      label: "Klien Puas"
    },
    {
      value: 5,
      suffix: "",
      label: "Tahun Pengalaman"
    },
    {
      value: 24,
      suffix: "/7",
      label: "Dukungan Teknis"
    }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .03) 25%, rgba(255, 255, 255, .03) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .03) 75%, rgba(255, 255, 255, .03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .03) 25%, rgba(255, 255, 255, .03) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .03) 75%, rgba(255, 255, 255, .03) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}
      />

      {/* Horizontal neon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <p className="text-pink-400 font-bold tracking-widest text-sm mb-2">
                PENCAPAIAN KAMI
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                DIGITAL <span className="text-white">EXCELLENCE</span>
              </h2>
              <p className="text-blue-100 opacity-90 text-lg leading-relaxed">
                Selama bertahun-tahun, kami telah membantu berbagai bisnis bertransformasi ke era digital dengan solusi inovatif yang menggabungkan teknologi terdepan dengan desain yang memukau.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <button className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-md hover:bg-blue-900/30 transition-all duration-300 font-bold tracking-wide shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                PENDEKATAN KAMI
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg border border-pink-500/30 bg-black/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Digital Business Transformation"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500 opacity-80"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500 opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500 opacity-80"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-500 opacity-80"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Separate component for individual stat cards
function StatCard({ stat, index }: { stat: any; index: number }) {
  const count = useCountUp(stat.value, 2000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="relative p-6 rounded-lg border border-pink-500/20 bg-black/30 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-blue-600/10 rounded-lg transform group-hover:scale-105 transition-all duration-300 -m-1 blur-sm opacity-0 group-hover:opacity-100"></div>
        
        <div className="relative z-10">
          <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-2">
            {count}{stat.suffix}
          </div>
          <div className="text-blue-100 opacity-80 font-medium tracking-wide">
            {stat.label}
          </div>
        </div>
        
        {/* Horizontal line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-pink-500/50 to-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </motion.div>
  );
} 