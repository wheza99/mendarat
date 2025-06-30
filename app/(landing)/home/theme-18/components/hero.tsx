"use client";

import { useEffect, useState, useRef } from "react";
import { heroSectionCopy } from "../copy";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse tracking for holographic effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        color: ["#FF00FF", "#00F5FF", "#FF1493", "#00FFFF"][Math.floor(Math.random() * 4)],
        alpha: Math.random() * 0.8 + 0.2
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ opacity: 0.6 }}
      />

      {/* Holographic gradient background */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            #FF00FF 0%, 
            #00F5FF 25%, 
            #FF1493 50%, 
            #00FFFF 75%, 
            transparent 100%)`
        }}
      />

      {/* Neon grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neon-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" />
              <path d="M30 0v60M0 30h60" stroke="url(#neon-gradient)" strokeWidth="1" />
            </pattern>
            <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00F5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF1493" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#neon-grid)" />
        </svg>
      </div>

      {/* Floating kanji characters */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 text-6xl font-bold text-pink-500/30 animate-pulse">未</div>
        <div className="absolute top-40 right-32 text-4xl font-bold text-cyan-400/30 animate-bounce">来</div>
        <div className="absolute bottom-40 left-1/4 text-5xl font-bold text-purple-400/30 animate-pulse">夜</div>
        <div className="absolute top-1/3 right-20 text-3xl font-bold text-magenta-400/30 animate-bounce">光</div>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main heading with neon glow */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-8xl md:text-9xl font-black mb-4 leading-none">
              <span 
                className="block bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse"
                style={{
                  textShadow: '0 0 30px #FF00FF, 0 0 60px #00F5FF, 0 0 90px #FF1493',
                  filter: 'drop-shadow(0 0 10px #FF00FF)'
                }}
              >
                {heroSectionCopy.heading1}
              </span>
              <span 
                className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
                style={{
                  textShadow: '0 0 30px #00F5FF, 0 0 60px #FF1493, 0 0 90px #00FFFF',
                  filter: 'drop-shadow(0 0 10px #00F5FF)'
                }}
              >
                {heroSectionCopy.heading2}
              </span>
            </h1>
          </div>

          {/* Tagline with holographic effect */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl font-light text-white/90 mb-6 tracking-wide">
              {heroSectionCopy.tagline}
            </p>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              {heroSectionCopy.description}
            </p>
          </div>

          {/* CTA Buttons with neon effects */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                className="group relative px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-pink-500 to-cyan-400 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#FF00FF]"
                style={{
                  boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)'
                }}
              >
                <span className="relative z-10">{heroSectionCopy.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group relative px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-400 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_#00F5FF]">
                <span className="relative z-10">{heroSectionCopy.secondaryCta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <div className="w-6 h-10 border-2 border-cyan-400 rounded-full mb-2 relative">
                  <div className="w-1 h-3 bg-gradient-to-b from-pink-500 to-cyan-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-bounce" />
                </div>
                <p className="text-sm text-gray-400 font-light tracking-wider">SCROLL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Neon corner frames */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-pink-500 opacity-60" style={{ boxShadow: '0 0 10px #FF1493' }} />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-400 opacity-60" style={{ boxShadow: '0 0 10px #00F5FF' }} />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-purple-500 opacity-60" style={{ boxShadow: '0 0 10px #8B5CF6' }} />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-pink-500 opacity-60" style={{ boxShadow: '0 0 10px #FF1493' }} />
    </section>
  );
} 