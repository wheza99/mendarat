"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import copy from '../copy';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  type: 'leaf' | 'spore' | 'pollen';
}

interface Branch {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  growth: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [isGrowing, setIsGrowing] = useState(false);

  // Generate organic floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 8 + 4,
          opacity: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 2 + 1,
          type: ['leaf', 'spore', 'pollen'][Math.floor(Math.random() * 3)] as 'leaf' | 'spore' | 'pollen'
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);

    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  // Generate growing branches
  useEffect(() => {
    const generateBranches = () => {
      const newBranches: Branch[] = [];
      for (let i = 0; i < 8; i++) {
        newBranches.push({
          id: i,
          x1: Math.random() * window.innerWidth,
          y1: window.innerHeight + 50,
          x2: Math.random() * window.innerWidth,
          y2: Math.random() * window.innerHeight * 0.5,
          growth: 0
        });
      }
      setBranches(newBranches);
    };

    generateBranches();
    
    // Start growing animation
    const growTimer = setTimeout(() => {
      setIsGrowing(true);
    }, 1000);

    return () => clearTimeout(growTimer);
  }, []);

  // Animate particle floating
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        const newY = particle.y - particle.speed;
        return {
          ...particle,
          x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.5,
          y: newY < -20 ? window.innerHeight + 20 : newY
        };
      }));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const getParticleEmoji = (type: string) => {
    switch (type) {
      case 'leaf': return '🍃';
      case 'spore': return '🌿';
      case 'pollen': return '✨';
      default: return '🌱';
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-25 to-lime-50 overflow-hidden">
      {/* Organic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="organic-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="20" fill="#0F5132" opacity="0.1" />
              <path d="M60,60 Q80,40 100,60 Q80,80 60,60" fill="#52734D" opacity="0.15" />
              <ellipse cx="90" cy="90" rx="15" ry="25" fill="#87A96B" opacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic-pattern)" />
        </svg>
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-lg transition-all duration-1000 ease-out animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              transform: `scale(${1 + Math.sin(Date.now() * 0.002 + particle.id) * 0.1})`
            }}
          >
            {getParticleEmoji(particle.type)}
          </div>
        ))}
      </div>

      {/* Growing Branches */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          {branches.map((branch) => (
            <line
              key={branch.id}
              x1={branch.x1}
              y1={branch.y1}
              x2={branch.x2}
              y2={branch.y2}
              stroke="#0F5132"
              strokeWidth="2"
              opacity="0.3"
              className={`transition-all duration-3000 ease-out ${isGrowing ? 'animate-pulse' : ''}`}
              style={{
                strokeDasharray: '200',
                strokeDashoffset: isGrowing ? '0' : '200',
                transition: 'stroke-dashoffset 3s ease-out'
              }}
            />
          ))}
        </svg>
      </div>

      {/* Organic Blob Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-24 h-40 bg-emerald-300 rounded-full opacity-15 animate-bounce" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-lime-200 rounded-full opacity-25" 
           style={{ 
             borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
             animation: 'organic-morph 6s ease-in-out infinite alternate'
           }}></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Growing Badge */}
            <div className="flex justify-center animate-bounce" style={{ animationDuration: '2s' }}>
              <Badge className="bg-green-100 text-green-800 border-green-200 px-6 py-2 text-sm font-medium rounded-full hover:bg-green-200 transition-colors duration-300">
                {copy.hero.badge}
              </Badge>
            </div>

            {/* Main Title with Growing Effect */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-900 leading-tight">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {copy.hero.title.split(' ').slice(0, 2).join(' ')}
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-fade-in-up" 
                      style={{ animationDelay: '0.4s' }}>
                  {copy.hero.title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-green-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" 
               style={{ animationDelay: '0.6s' }}>
              {copy.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" 
                 style={{ animationDelay: '0.8s' }}>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <span className="mr-2">{copy.hero.primaryCta}</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">🌱</span>
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group">
                <span className="mr-2">{copy.hero.secondaryCta}</span>
                <span className="inline-block transition-transform group-hover:rotate-12">🌿</span>
              </Button>
            </div>

            {/* Trusted By */}
            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <p className="text-sm text-green-600 mb-4">{copy.hero.trustedBy}</p>
              <div className="flex items-center justify-center space-x-2 opacity-60">
                {['🌱', '🌿', '🌳', '🍃', '🌺'].map((emoji, index) => (
                  <span key={index} className="text-2xl animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}>
                    {emoji}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Breathing Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-green-50/20 to-transparent animate-pulse pointer-events-none" 
           style={{ animationDuration: '4s' }}></div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes organic-morph {
          0% {
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
            transform: rotate(0deg) scale(1);
          }
          50% {
            border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
            transform: rotate(360deg) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
} 