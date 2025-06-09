"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { heroSectionCopy } from "../copy";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Bubble animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const bubbles: {x: number, y: number, radius: number, speed: number, opacity: number}[] = [];
    
    // Create bubbles
    for (let i = 0; i < 30; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        radius: Math.random() * 15 + 5,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw bubbles
      bubbles.forEach((bubble, index) => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        
        // Create gradient for bubble effect
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.radius/3, bubble.y - bubble.radius/3, 0,
          bubble.x, bubble.y, bubble.radius
        );
        gradient.addColorStop(0, `rgba(64, 224, 208, ${bubble.opacity})`);
        gradient.addColorStop(0.7, `rgba(72, 209, 204, ${bubble.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(95, 158, 160, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add bubble highlight
        ctx.beginPath();
        ctx.arc(bubble.x - bubble.radius/3, bubble.y - bubble.radius/3, bubble.radius/4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.8})`;
        ctx.fill();
        
        // Move bubble upward
        bubble.y -= bubble.speed;
        bubble.x += Math.sin(bubble.y * 0.01) * 0.5;
        
        // Reset bubble when it reaches top
        if (bubble.y < -bubble.radius) {
          bubble.y = canvas.height + bubble.radius;
          bubble.x = Math.random() * canvas.width;
        }
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#001a2e] via-[#003366] to-[#004080] text-white">
      {/* Animated bubbles background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Flowing water wave effect */}
      <div className="absolute bottom-0 left-0 right-0 opacity-30">
        <svg className="w-full h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            d="M0,60 C300,90 500,30 800,60 C1000,90 1100,30 1200,60 L1200,120 L0,120 Z"
            fill="rgba(64, 224, 208, 0.3)"
            animate={{
              d: [
                "M0,60 C300,90 500,30 800,60 C1000,90 1100,30 1200,60 L1200,120 L0,120 Z",
                "M0,70 C300,40 500,80 800,50 C1000,20 1100,80 1200,70 L1200,120 L0,120 Z",
                "M0,60 C300,90 500,30 800,60 C1000,90 1100,30 1200,60 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M0,80 C400,50 600,110 900,80 C1050,50 1150,110 1200,80 L1200,120 L0,120 Z"
            fill="rgba(72, 209, 204, 0.2)"
            animate={{
              d: [
                "M0,80 C400,50 600,110 900,80 C1050,50 1150,110 1200,80 L1200,120 L0,120 Z",
                "M0,90 C400,110 600,50 900,90 C1050,110 1150,50 1200,90 L1200,120 L0,120 Z",
                "M0,80 C400,50 600,110 900,80 C1050,50 1150,110 1200,80 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
      
      {/* Coral decorations */}
      <div className="absolute bottom-0 left-10 w-32 h-48 opacity-20">
        <svg viewBox="0 0 100 150" className="w-full h-full">
          <motion.path
            d="M20,150 Q15,120 25,100 Q35,80 20,60 Q10,40 30,20 Q40,10 35,0"
            stroke="#FF6B6B"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M40,150 Q45,125 35,105 Q25,85 40,65 Q50,45 30,25 Q20,15 25,5"
            stroke="#4ECDC4"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M60,150 Q55,130 65,110 Q75,90 60,70 Q50,50 70,30 Q80,20 75,10"
            stroke="#45B7D1"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-16 w-40 h-56 opacity-15">
        <svg viewBox="0 0 120 180" className="w-full h-full">
          <motion.ellipse
            cx="60" cy="160" rx="30" ry="50"
            fill="#FF6B6B"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.ellipse
            cx="35" cy="140" rx="20" ry="35"
            fill="#4ECDC4"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
          <motion.ellipse
            cx="85" cy="135" rx="25" ry="40"
            fill="#45B7D1"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-8 inline-block"
          >
            <div className="w-24 h-24 mx-auto relative">
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-[#40E0D0] opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-[4px] rounded-full border border-[#48D1CC] opacity-60"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[8px] rounded-full bg-gradient-to-br from-[#40E0D0] via-[#48D1CC] to-[#5F9EA0] flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl"
                >
                  🌊
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#87CEEB]">
              {heroSectionCopy.heading1}
            </span> 
            <span className="block mt-2 text-white">{heroSectionCopy.heading2}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl text-[#48D1CC] mb-4 font-medium tracking-wide"
          >
            {heroSectionCopy.tagline}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            {heroSectionCopy.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button className="bg-gradient-to-r from-[#40E0D0] to-[#48D1CC] hover:from-[#48D1CC] hover:to-[#40E0D0] text-white rounded-full px-10 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#40E0D0]/25">
              {heroSectionCopy.cta}
            </Button>
            <Button className="bg-transparent border-2 border-[#40E0D0] hover:bg-[#40E0D0]/10 text-[#40E0D0] rounded-full px-10 py-6 text-lg font-medium transition-all duration-300">
              {heroSectionCopy.exploreCta}
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-[#48D1CC]/80">
            <span className="text-sm font-medium">{heroSectionCopy.scrollText}</span>
            <motion.svg 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}