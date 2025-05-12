"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Star field animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const stars: {x: number, y: number, radius: number, vx: number, vy: number}[] = [];
    
    // Create stars
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.random() * 0.05,
        vy: Math.random() * 0.05
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#E5E4E2';
        ctx.fill();
        
        // Move stars
        star.x += star.vx;
        star.y += star.vy;
        
        // Reset position if out of bounds
        if (star.x < 0 || star.x > canvas.width) star.x = Math.random() * canvas.width;
        if (star.y < 0 || star.y > canvas.height) star.y = Math.random() * canvas.height;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1A0B2E] text-white">
      {/* Star field background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Constellation decoration */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M100,200 L300,150 L500,300 L700,100 L900,250" 
                stroke="#E5E4E2" 
                strokeWidth="1" 
                fill="none" />
          <circle cx="100" cy="200" r="3" fill="#E5E4E2" />
          <circle cx="300" cy="150" r="3" fill="#E5E4E2" />
          <circle cx="500" cy="300" r="3" fill="#E5E4E2" />
          <circle cx="700" cy="100" r="3" fill="#E5E4E2" />
          <circle cx="900" cy="250" r="3" fill="#E5E4E2" />
        </svg>
      </div>
      
      {/* Orbital ring decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
        <div className="absolute inset-0 border border-[#E5E4E2] rounded-full"></div>
        <div className="absolute inset-[50px] border border-[#E5E4E2] rounded-full"></div>
        <div className="absolute inset-[100px] border border-[#E5E4E2] rounded-full"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mb-6 inline-block"
          >
            <div className="w-20 h-20 mx-auto relative">
              <div className="absolute inset-0 rounded-full border-2 border-[#E5E4E2] opacity-30"></div>
              <div className="absolute inset-[6px] rounded-full border border-[#E5E4E2] opacity-60"></div>
              <div className="absolute inset-[12px] rounded-full bg-gradient-to-br from-[#9370DB] to-[#1A0B2E]"></div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E5E4E2] to-[#9370DB]">
              Explore the Universe
            </span> 
            <span className="block mt-2 text-[#E5E4E2]">of Possibilities</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-[#E5E4E2]/80 mb-8 leading-relaxed"
          >
            Discover a cosmic approach to digital solutions that transcends ordinary boundaries.
            Our stellar team creates experiences that illuminate your brand's unique universe.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-transparent border border-[#E5E4E2] hover:bg-[#E5E4E2]/10 text-[#E5E4E2] rounded-full px-8 py-6 text-lg transition-all duration-300">
              Discover More
            </Button>
            <Button className="bg-gradient-to-r from-[#9370DB] to-[#7B68EE] hover:opacity-90 text-white rounded-full px-8 py-6 text-lg transition-all duration-300">
              Start Journey
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex items-center gap-2 text-sm text-[#E5E4E2]/60">
            <span>Scroll to explore</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
