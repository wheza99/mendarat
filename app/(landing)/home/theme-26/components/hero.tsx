"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import copy from '../copy';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [glitchText, setGlitchText] = useState(copy.hero.title);

  // Synthwave Grid Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Synthwave gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(138, 43, 226, 0.8)'); // Purple
      gradient.addColorStop(0.3, 'rgba(255, 20, 147, 0.6)'); // Deep pink
      gradient.addColorStop(0.7, 'rgba(255, 105, 180, 0.4)'); // Hot pink
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)'); // Black
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Perspective grid
      const gridSize = 50;
      const perspective = canvas.height * 0.6;
      
      ctx.strokeStyle = '#ff00ff';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#ff00ff';
      ctx.shadowBlur = 10;

      // Horizontal lines (perspective)
      for (let i = 0; i < 20; i++) {
        const y = perspective + (i * gridSize);
        const scale = 1 - (i * 0.05);
        const width = canvas.width * scale;
        const x = (canvas.width - width) / 2;
        
        if (y < canvas.height) {
          ctx.globalAlpha = Math.max(0.1, 1 - (i * 0.1));
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + width, y);
          ctx.stroke();
        }
      }

      // Vertical lines
      ctx.strokeStyle = '#00ffff';
      ctx.shadowColor = '#00ffff';
      
      for (let i = -10; i <= 10; i++) {
        const x = canvas.width / 2 + (i * gridSize);
        ctx.globalAlpha = Math.max(0.1, 1 - (Math.abs(i) * 0.1));
        ctx.beginPath();
        ctx.moveTo(x, perspective);
        ctx.lineTo(x + (i * 20), canvas.height);
        ctx.stroke();
      }

      // Sun/Moon
      const sunY = canvas.height * 0.3 + Math.sin(time * 0.01) * 20;
      const sunSize = 80 + Math.sin(time * 0.02) * 10;
      
      const sunGradient = ctx.createRadialGradient(
        canvas.width / 2, sunY, 0,
        canvas.width / 2, sunY, sunSize
      );
      sunGradient.addColorStop(0, '#ffff00');
      sunGradient.addColorStop(0.3, '#ff8c00');
      sunGradient.addColorStop(0.7, '#ff1493');
      sunGradient.addColorStop(1, 'transparent');
      
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, sunY, sunSize, 0, Math.PI * 2);
      ctx.fill();

      // Palm trees silhouettes
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = '#000';
      
      // Left palm tree
      const leftX = canvas.width * 0.1;
      const treeHeight = canvas.height * 0.4;
      
      // Trunk
      ctx.fillRect(leftX - 5, canvas.height - treeHeight, 10, treeHeight);
      
      // Palm fronds
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const frondLength = 60 + Math.sin(time * 0.03 + i) * 10;
        ctx.save();
        ctx.translate(leftX, canvas.height - treeHeight);
        ctx.rotate(angle);
        ctx.fillRect(-3, -frondLength, 6, frondLength);
        ctx.restore();
      }

      // Right palm tree
      const rightX = canvas.width * 0.9;
      ctx.fillRect(rightX - 5, canvas.height - treeHeight * 0.8, 10, treeHeight * 0.8);
      
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const frondLength = 50 + Math.sin(time * 0.03 + i + Math.PI) * 8;
        ctx.save();
        ctx.translate(rightX, canvas.height - treeHeight * 0.8);
        ctx.rotate(angle);
        ctx.fillRect(-2, -frondLength, 4, frondLength);
        ctx.restore();
      }

      // Floating particles
      ctx.globalAlpha = 0.7;
      for (let i = 0; i < 20; i++) {
        const x = (canvas.width / 20) * i + Math.sin(time * 0.01 + i) * 30;
        const y = canvas.height * 0.2 + Math.sin(time * 0.02 + i * 0.5) * 50;
        const size = 2 + Math.sin(time * 0.03 + i) * 2;
        
        ctx.fillStyle = i % 3 === 0 ? '#ff00ff' : i % 3 === 1 ? '#00ffff' : '#ffff00';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      time++;
    };

    const animate = () => {
      drawGrid();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Glitch text effect
  useEffect(() => {
    const glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    const originalText = copy.hero.title;
    
    const glitchInterval = setInterval(() => {
      let glitched = '';
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += originalText[i];
        }
      }
      setGlitchText(glitched);
      
      setTimeout(() => setGlitchText(originalText), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Synthwave Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* VHS Scanlines Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
          zIndex: 2
        }}
      />

      {/* Background Text */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 3 }}
      >
        <div 
          className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500/20 to-pink-500/20 select-none"
          style={{
            fontSize: 'clamp(8rem, 20vw, 24rem)',
            fontFamily: 'monospace',
            textShadow: '0 0 100px rgba(255,0,255,0.3)',
            transform: 'rotate(-15deg)'
          }}
        >
          {copy.hero.backgroundText}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          {copy.hero.title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
          {copy.hero.subtitle}
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
          {copy.hero.description}
        </p>
        <div className="flex gap-6 justify-center">
          <Button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
            {copy.hero.primaryButton}
          </Button>
          <Button variant="outline" className="px-8 py-4 border-cyan-400 text-cyan-400">
            {copy.hero.secondaryButton}
          </Button>
        </div>
      </div>

      {/* Retro Elements */}
      <div className="mt-16 flex justify-center space-x-8 text-6xl opacity-60">
        <div className="animate-pulse" style={{ animationDelay: '0s' }}>🕹️</div>
        <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>📼</div>
        <div className="animate-pulse" style={{ animationDelay: '1s' }}>💾</div>
        <div className="animate-pulse" style={{ animationDelay: '1.5s' }}>📟</div>
      </div>

      {/* Chrome reflection effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
          animation: 'chrome-reflection 8s ease-in-out infinite',
          zIndex: 4
        }}
      />

      <style jsx>{`
        @keyframes chrome-reflection {
          0%, 100% { transform: translateX(-100%) skewX(-25deg); }
          50% { transform: translateX(100vw) skewX(-25deg); }
        }
      `}</style>
    </section>
  );
} 