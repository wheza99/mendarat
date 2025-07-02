"use client";

import { useState, useEffect, useRef } from "react";
import { cosmicCopy } from "../copy";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(cosmicCopy.stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    cosmicCopy.stats.forEach((stat, index) => {
      const target = parseInt(stat.number.replace(/,/g, ''));
      const duration = 3000;
      const increment = target / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 50);
    });
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'stellar-blue':
        return {
          bg: 'bg-blue-500',
          text: 'text-blue-400',
          glow: 'shadow-blue-500/50',
          border: 'border-blue-400'
        };
      case 'nebula-purple':
        return {
          bg: 'bg-purple-500',
          text: 'text-purple-400',
          glow: 'shadow-purple-500/50',
          border: 'border-purple-400'
        };
      case 'cosmic-pink':
        return {
          bg: 'bg-pink-500',
          text: 'text-pink-400',
          glow: 'shadow-pink-500/50',
          border: 'border-pink-400'
        };
      case 'stellar-white':
        return {
          bg: 'bg-white',
          text: 'text-white',
          glow: 'shadow-white/50',
          border: 'border-white'
        };
      default:
        return {
          bg: 'bg-cyan-500',
          text: 'text-cyan-400',
          glow: 'shadow-cyan-500/50',
          border: 'border-cyan-400'
        };
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black via-indigo-950/50 to-purple-950/30 relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Floating Stars */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-64 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6">
              MISSION STATISTICS
            </h2>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
          
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
            Our cosmic journey measured in light years, discoveries, and stellar achievements across the universe.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cosmicCopy.stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <div className="group relative">
                  {/* Main Stat Card */}
                  <div className={`bg-gray-900/50 backdrop-blur-sm border ${colors.border} p-8 relative overflow-hidden hover:${colors.glow} hover:shadow-2xl transition-all duration-500`}>
                    {/* Orbital Ring */}
                    <div className={`absolute inset-0 border-2 ${colors.border} rounded-full opacity-20 animate-spin-slow`} style={{ transform: 'scale(1.5)' }}></div>
                    
                    {/* Number Display */}
                    <div className="relative z-10 mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className={`text-5xl md:text-6xl font-black ${colors.text} leading-none`}>
                          {formatNumber(counters[index])}
                        </span>
                        <span className={`text-lg font-bold ${colors.text} ml-2 opacity-80`}>
                          {stat.unit}
                        </span>
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="relative z-10">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center leading-tight">
                        {stat.label}
                      </h3>
                    </div>
                    
                    {/* Cosmic Particles */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-2 h-2 ${colors.bg} rounded-full animate-ping`}></div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-1 h-1 ${colors.bg} rounded-full animate-ping`} style={{ animationDelay: '1s' }}></div>
                    </div>
                    
                    {/* Constellation Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
                      <path
                        d={`M 20 ${20 + index * 10} L 80 ${40 + index * 15} L 120 ${30 + index * 12} L 180 ${50 + index * 8}`}
                        stroke={colors.text.replace('text-', '')}
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="2,4"
                        className="animate-pulse"
                      />
                    </svg>
                    
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${colors.text.replace('text-', '')}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                  
                  {/* Orbital Trail */}
                  <div className={`absolute inset-0 border ${colors.border} opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-ping`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Cosmic Divider */}
        <div className="mt-20 flex items-center justify-center gap-8">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="w-20 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 