"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import copy from '../copy';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating Sakura Petals Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Sakura petal class
    class SakuraPetal {
      x: number = 0;
      y: number = -20;
      size: number = 10;
      speedX: number = 0;
      speedY: number = 1;
      rotation: number = 0;
      rotationSpeed: number = 0;
      opacity: number = 0.5;

      constructor() {
        this.x = canvas ? Math.random() * canvas.width : 0;
        this.y = -20;
        this.size = Math.random() * 15 + 8;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 3 + 1;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
        this.opacity = Math.random() * 0.8 + 0.2;
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Reset petal when it goes off screen
        if (this.y > canvas.height + 20) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
        }

        if (this.x > canvas.width + 20) {
          this.x = -20;
        } else if (this.x < -20) {
          this.x = canvas.width + 20;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);

        // Draw sakura petal shape
        ctx.fillStyle = '#FFB7C5';
        ctx.beginPath();
        
        // Create petal shape using curves
        ctx.moveTo(0, -this.size);
        ctx.quadraticCurveTo(this.size * 0.6, -this.size * 0.3, this.size * 0.3, 0);
        ctx.quadraticCurveTo(this.size * 0.6, this.size * 0.3, 0, this.size * 0.7);
        ctx.quadraticCurveTo(-this.size * 0.6, this.size * 0.3, -this.size * 0.3, 0);
        ctx.quadraticCurveTo(-this.size * 0.6, -this.size * 0.3, 0, -this.size);
        
        ctx.fill();

        // Add lighter center
        ctx.fillStyle = '#FFCCCB';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.3, this.size * 0.2, 0, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
      }
    }

    // Create petals
    const petals: SakuraPetal[] = [];
    for (let i = 0; i < 35; i++) {
      petals.push(new SakuraPetal());
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      petals.forEach(petal => {
        petal.update();
        petal.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-stone-50 flex items-center overflow-hidden">
      {/* Floating Sakura Petals Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: 'transparent' }}
      />

      {/* Japanese Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="zen-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Bamboo Pattern */}
              <line x1="40" y1="0" x2="40" y2="120" stroke="#2C2C2C" strokeWidth="3" />
              <line x1="80" y1="0" x2="80" y2="120" stroke="#2C2C2C" strokeWidth="2" />
              
              {/* Bamboo Nodes */}
              <rect x="35" y="30" width="10" height="3" fill="#2C2C2C" />
              <rect x="35" y="90" width="10" height="3" fill="#2C2C2C" />
              <rect x="75" y="20" width="10" height="2" fill="#2C2C2C" />
              <rect x="75" y="60" width="10" height="2" fill="#2C2C2C" />
              <rect x="75" y="100" width="10" height="2" fill="#2C2C2C" />

              {/* Cherry Blossom */}
              <circle cx="60" cy="60" r="12" fill="none" stroke="#FFB7C5" strokeWidth="1" opacity="0.6" />
              <circle cx="60" cy="60" r="3" fill="#FFB7C5" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zen-pattern)" />
        </svg>
      </div>

      {/* Large Japanese Character Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span 
          className="text-[40rem] font-light text-stone-200/20 select-none"
          style={{ writingMode: 'vertical-rl' }}
        >
          {copy.hero.backgroundText}
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Side */}
            <div className="space-y-8">
              {/* Japanese Title with Translation */}
              <div className="space-y-4">
                <h1 className="text-8xl md:text-9xl font-light text-stone-800 tracking-wider">
                  {copy.hero.title}
                </h1>
                <p className="text-xl text-stone-600 font-light tracking-wide">
                  {copy.hero.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-stone-700 leading-relaxed max-w-lg">
                {copy.hero.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {copy.hero.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-pink-300 rounded-full group-hover:bg-pink-400 transition-colors duration-300"></div>
                    <span className="text-stone-600 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-4 rounded-none font-light tracking-wide transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  {copy.hero.cta}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-stone-300 text-stone-700 hover:bg-stone-50 px-8 py-4 rounded-none font-light tracking-wide transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  {copy.hero.secondaryCta}
                </Button>
              </div>
            </div>

            {/* Visual Side - Zen Garden Illustration */}
            <div className="relative">
              {/* Zen Circle - Enso */}
              <div className="relative w-96 h-96 mx-auto">
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 384 384" 
                  className="animate-pulse"
                >
                  {/* Enso Circle */}
                  <circle
                    cx="192"
                    cy="192"
                    r="180"
                    fill="none"
                    stroke="#2C2C2C"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray="1130"
                    strokeDashoffset="100"
                    opacity="0.8"
                    className="animate-pulse"
                  />
                  
                  {/* Inner Elements */}
                  <g opacity="0.6">
                    {/* Bamboo Stems */}
                    <line x1="120" y1="80" x2="120" y2="300" stroke="#9CAF88" strokeWidth="8" strokeLinecap="round" />
                    <line x1="150" y1="60" x2="150" y2="320" stroke="#9CAF88" strokeWidth="6" strokeLinecap="round" />
                    <line x1="180" y1="70" x2="180" y2="310" stroke="#9CAF88" strokeWidth="4" strokeLinecap="round" />
                    
                    {/* Bamboo Nodes */}
                    <rect x="115" y="120" width="10" height="6" fill="#708B5C" rx="3" />
                    <rect x="115" y="200" width="10" height="6" fill="#708B5C" rx="3" />
                    <rect x="115" y="280" width="10" height="6" fill="#708B5C" rx="3" />
                    
                    {/* Cherry Blossoms */}
                    <g transform="translate(250, 150)">
                      {[0, 72, 144, 216, 288].map((angle, i) => (
                        <g key={i} transform={`rotate(${angle})`}>
                          <ellipse rx="8" ry="4" fill="#FFB7C5" opacity="0.8" />
                        </g>
                      ))}
                      <circle r="3" fill="#FF9FAD" />
                    </g>
                    
                    <g transform="translate(280, 220)">
                      {[0, 72, 144, 216, 288].map((angle, i) => (
                        <g key={i} transform={`rotate(${angle})`}>
                          <ellipse rx="6" ry="3" fill="#FFB7C5" opacity="0.7" />
                        </g>
                      ))}
                      <circle r="2" fill="#FF9FAD" />
                    </g>
                  </g>
                </svg>

                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Zen Stones */}
                  <div className="absolute bottom-20 left-16 w-8 h-6 bg-stone-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-16 left-24 w-6 h-4 bg-stone-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-12 left-20 w-4 h-3 bg-stone-600 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              {/* Corner Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-stone-300 opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-stone-300 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ripple Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-30">
        <svg width="200" height="100" viewBox="0 0 200 100">
          <g className="animate-pulse">
            <ellipse cx="100" cy="80" rx="40" ry="8" fill="none" stroke="#FFB7C5" strokeWidth="1" />
            <ellipse cx="100" cy="80" rx="60" ry="12" fill="none" stroke="#FFB7C5" strokeWidth="1" opacity="0.7" />
            <ellipse cx="100" cy="80" rx="80" ry="16" fill="none" stroke="#FFB7C5" strokeWidth="1" opacity="0.4" />
          </g>
        </svg>
      </div>
    </section>
  );
} 