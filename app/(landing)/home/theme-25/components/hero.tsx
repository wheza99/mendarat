"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import copy from '../copy';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [glitchIndex, setGlitchIndex] = useState(0);

  // Animated Neon Grid Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid animation variables
    let animationId: number;
    let time = 0;

    const drawGrid = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 50;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);
      
      // Draw animated grid lines
      ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 + Math.sin(time * 0.01) * 0.2})`;
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let i = 0; i <= cols; i++) {
        const x = i * gridSize;
        const opacity = 0.1 + Math.sin(time * 0.02 + i * 0.1) * 0.1;
        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let i = 0; i <= rows; i++) {
        const y = i * gridSize;
        const opacity = 0.1 + Math.sin(time * 0.02 + i * 0.1) * 0.1;
        ctx.strokeStyle = `rgba(255, 0, 255, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw random glowing dots
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = 2 + Math.sin(time * 0.01 + i) * 2;
        const hue = (time * 0.1 + i * 30) % 360;
        
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      
      time++;
      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Glitch text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchIndex(prev => (prev + 1) % copy.hero.glitchText.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Animated Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: 'transparent' }}
      />

      {/* Cyberpunk Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,0,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Neon Borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse" />
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 animate-pulse" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 animate-pulse" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Side */}
            <div className="space-y-8">
              {/* Glitch Title */}
              <div className="space-y-4">
                <div className="relative">
                  <h1 
                    className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-wider transform hover:scale-105 transition-transform duration-300"
                    style={{
                      textShadow: '0 0 30px rgba(0,255,255,0.5), 0 0 60px rgba(255,0,255,0.3)',
                      fontFamily: 'monospace'
                    }}
                  >
                    {copy.hero.title}
                  </h1>
                  
                  {/* Glitch Effect Overlay */}
                  <div className="absolute inset-0 text-8xl md:text-9xl font-black text-red-500 opacity-30 animate-pulse">
                    <span className="block transform translate-x-1 -translate-y-1">
                      {copy.hero.glitchText[glitchIndex]}
                    </span>
                  </div>
                </div>
                
                <p className="text-xl text-cyan-300 font-mono tracking-wide">
                  {copy.hero.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                {copy.hero.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {copy.hero.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 group p-3 rounded border border-cyan-500/20 bg-black/50 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse group-hover:bg-pink-400 transition-colors duration-300"></div>
                    <span className="text-gray-300 text-sm font-mono">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-black font-bold px-8 py-4 rounded-none border-2 border-cyan-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                  style={{
                    textShadow: '0 0 10px rgba(0,0,0,0.5)',
                    boxShadow: '0 0 20px rgba(0,255,255,0.3), inset 0 0 20px rgba(255,255,255,0.1)'
                  }}
                >
                  {copy.hero.cta}
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:text-pink-300 px-8 py-4 rounded-none font-mono transition-all duration-300 transform hover:scale-105"
                  style={{
                    boxShadow: '0 0 20px rgba(255,20,147,0.2)'
                  }}
                >
                  {copy.hero.secondaryCta}
                </Button>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              {/* Holographic Display */}
              <div className="relative w-full h-96 border-2 border-cyan-500/50 rounded-lg bg-black/30 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg" />
                
                {/* Scanning Lines */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div 
                    className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
                    style={{
                      animation: 'scan 3s linear infinite',
                      boxShadow: '0 0 20px rgba(0,255,255,0.8)'
                    }}
                  />
                </div>

                {/* Central Hologram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl animate-spin-slow">🌐</div>
                    <div className="text-cyan-400 font-mono text-lg">SYSTEM ONLINE</div>
                    <div className="flex justify-center space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                          style={{
                            animationDelay: `${i * 0.2}s`,
                            boxShadow: '0 0 10px rgba(0,255,0,0.8)'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-400" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-400" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-400" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full animate-bounce" 
                   style={{ boxShadow: '0 0 20px rgba(255,20,147,0.8)' }} />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-bounce" 
                   style={{ 
                     boxShadow: '0 0 20px rgba(0,255,255,0.8)',
                     animationDelay: '0.5s'
                   }} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
} 