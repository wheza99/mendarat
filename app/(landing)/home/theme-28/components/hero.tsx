"use client";

import { useState, useEffect, useRef } from "react";
import { cosmicCopy } from "../copy";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Star field animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const stars: Array<{x: number, y: number, size: number, opacity: number, speed: number}> = [];
    
    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1
      });
    }
    
    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        
        // Slow drift
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -5;
          star.x = Math.random() * canvas.width;
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-black">
      {/* Animated Star Field */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 z-10">
        {/* Nebula Effect */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Cosmic Elements */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-64 left-64 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className={`transform transition-all duration-2000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>
                
                {/* Subtitle with Glow */}
                <div className="mb-6">
                  <span className="inline-block text-cyan-400 text-lg font-bold tracking-[0.3em] uppercase">
                    {cosmicCopy.hero.subtitle}
                  </span>
                </div>

                {/* Main Title with Cosmic Effect */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-8">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-300">
                    {cosmicCopy.hero.title.split(' ')[0]}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 transform translate-x-4">
                    {cosmicCopy.hero.title.split(' ')[1]}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 transform translate-x-8">
                    {cosmicCopy.hero.title.split(' ')[2]}
                  </span>
                </h1>

                {/* Description */}
                <div className="max-w-2xl mb-12">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                    {cosmicCopy.hero.description}
                  </p>
                </div>

                {/* CTA Buttons with Cosmic Glow */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="group relative px-12 py-6 text-lg font-bold uppercase tracking-wider overflow-hidden">
                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                      {cosmicCopy.hero.cta}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"></div>
                  </button>
                  
                  <button className="group relative px-12 py-6 text-lg font-bold uppercase tracking-wider border-2 border-cyan-400 text-cyan-400 hover:text-white overflow-hidden">
                    <span className="relative z-10">{cosmicCopy.hero.secondaryCta}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-500"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Cosmic Elements */}
            <div className="lg:col-span-5">
              <div className={`transform transition-all duration-2000 delay-500 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}>
                <div className="relative">
                  {/* Central Planet */}
                  <div className="relative w-80 h-80 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full"></div>
                    <div className="absolute inset-8 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 rounded-full"></div>
                    
                    {/* Planet Rings */}
                    <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin-reverse" style={{ transform: 'rotateX(60deg)' }}></div>
                    <div className="absolute inset-4 border border-purple-400/20 rounded-full animate-spin-slow" style={{ transform: 'rotateX(60deg)' }}></div>
                  </div>
                  
                  {/* Orbiting Elements */}
                  <div className="absolute top-20 -right-10 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-20 -left-10 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce"></div>
                  <div className="absolute top-40 -left-20 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
                  
                  {/* Constellation Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <path
                      d="M 50 50 L 150 100 L 250 80 L 350 120"
                      stroke="rgba(99, 102, 241, 0.3)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                    <path
                      d="M 80 300 L 180 250 L 280 280 L 320 200"
                      stroke="rgba(168, 85, 247, 0.3)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="3,7"
                      className="animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cosmic Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    </section>
  );
} 