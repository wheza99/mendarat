"use client";

import { motion } from "framer-motion";
import { heroSectionCopy } from "../copy";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    const interval = setInterval(draw, 35);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-cyan-400">
      {/* Matrix rain background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-30"
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Neon border frames */}
      <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-cyan-400 opacity-60"></div>
      <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-cyan-400 opacity-60"></div>
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-cyan-400 opacity-60"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-cyan-400 opacity-60"></div>
      
      {/* Holographic scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 animate-pulse" style={{ top: '20%' }}></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 animate-pulse" style={{ top: '60%', animationDelay: '1s' }}></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 animate-pulse" style={{ top: '80%', animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotateZ: [0, 360],
            y: [-20, 20, -20],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-10 w-16 h-16 border border-cyan-400 rotate-45 opacity-30"
        />
        <motion.div
          animate={{ 
            rotateZ: [360, 0],
            x: [20, -20, 20],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-20 w-24 h-24 border border-cyan-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            rotateZ: [0, 180, 0],
            y: [10, -10, 10],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-20 h-20 border border-cyan-400 opacity-25"
        />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* System status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-mono text-sm text-green-400 mb-4 flex items-center justify-center lg:justify-start"
            >
              <span className="mr-2">SYSTEM_STATUS:</span>
              <span className="animate-pulse text-green-400">ONLINE</span>
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </motion.div>
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-cyan-400 font-mono text-sm tracking-widest mb-4"
            >
              {heroSectionCopy.tagline}
            </motion.div>
            
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none"
            >
              <span className="block text-white font-mono tracking-tighter">
                {heroSectionCopy.heading1}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-mono tracking-tighter">
                {heroSectionCopy.heading2}
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {heroSectionCopy.description}
            </motion.p>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary CTA */}
              <button className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-lg rounded-sm overflow-hidden group transition-all duration-300 hover:scale-105">
                <span className="relative z-10">{heroSectionCopy.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-cyan-400 animate-pulse"></div>
              </button>
              
              {/* Secondary CTA */}
              <button className="relative px-8 py-4 border border-cyan-400 text-cyan-400 font-mono text-lg rounded-sm overflow-hidden group transition-all duration-300 hover:text-black">
                <span className="relative z-10">{heroSectionCopy.exploreCta}</span>
                <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Holographic display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-96 h-96">
              {/* Holographic frame */}
              <div className="absolute inset-0 border-2 border-cyan-400 opacity-60 rounded-lg">
                <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
              </div>
              
              {/* Central hologram */}
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-8 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
              >
                <div className="text-6xl font-mono text-cyan-400 opacity-80">11</div>
              </motion.div>
              
              {/* Orbiting elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-cyan-400 rounded-full transform -translate-y-1/2 animate-pulse"></div>
                <div className="absolute top-1/2 right-0 w-3 h-3 bg-cyan-400 rounded-full transform -translate-y-1/2 animate-pulse"></div>
              </motion.div>
              
              {/* Data streams */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "linear"
                    }}
                    className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    style={{ top: `${20 + i * 20}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-cyan-400"
      >
        <span className="font-mono text-sm mb-2">{heroSectionCopy.scrollText}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
      
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0, 0.1, 0],
            x: [0, 2, -2, 0],
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="absolute inset-0 bg-red-500 mix-blend-screen"
        />
      </div>
    </section>
  );
}