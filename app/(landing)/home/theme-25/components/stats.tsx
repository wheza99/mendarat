"use client";

import React, { useEffect, useState } from 'react';
import copy from '../copy';

export default function Stats() {
  const [counters, setCounters] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const animateCounters = () => {
      copy.stats.achievements.forEach((stat, index) => {
        const targetValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
        let currentValue = 0;
        const increment = targetValue / 120; // Slower, more zen-like animation
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [index]: Math.floor(currentValue)
          }));
        }, 25); // Slower timing for meditation effect
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById('zen-stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const formatStatValue = (stat: any, animatedValue: number) => {
    if (stat.number.includes('+')) return `${animatedValue}+`;
    if (stat.number.includes('%')) return `${animatedValue}%`;
    if (stat.number.includes('K')) return `${animatedValue}K`;
    return animatedValue.toString();
  };

  return (
    <section 
      id="zen-stats-section"
      className="py-20 bg-gradient-to-b from-stone-50 to-rose-50 relative overflow-hidden"
    >
      {/* Zen Garden Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="zen-stones" x="0" y="0" width="300" height="200" patternUnits="userSpaceOnUse">
              {/* Zen stones */}
              <ellipse cx="80" cy="100" rx="25" ry="15" fill="#D6D3D1" opacity="0.3" />
              <ellipse cx="220" cy="80" rx="20" ry="12" fill="#A8A29E" opacity="0.3" />
              <ellipse cx="150" cy="150" rx="30" ry="18" fill="#78716C" opacity="0.3" />
              
              {/* Ripples */}
              <circle cx="80" cy="100" r="35" fill="none" stroke="#FFB7C5" strokeWidth="1" opacity="0.2" />
              <circle cx="80" cy="100" r="50" fill="none" stroke="#FFB7C5" strokeWidth="1" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zen-stones)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-6xl font-light text-stone-800 mb-6 tracking-wide">
              {copy.stats.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
              {copy.stats.subtitle}
            </p>
            
            {/* Zen Divider */}
            <div className="flex items-center justify-center space-x-4 pt-6">
              <div className="w-8 h-px bg-stone-300"></div>
              <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
              <div className="w-8 h-px bg-stone-300"></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.stats.achievements.map((stat, index) => (
              <div
                key={index}
                className="group relative text-center space-y-6 p-8 bg-white/80 backdrop-blur-sm rounded-none border-l-4 border-pink-200 hover:border-pink-400 transition-all duration-500 hover:shadow-lg hover:-translate-y-2"
              >
                {/* Icon with Zen Circle */}
                <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                  {/* Enso circle background */}
                  <svg 
                    className="absolute inset-0 w-full h-full animate-pulse" 
                    viewBox="0 0 80 80"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke="#FFB7C5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="220"
                      strokeDashoffset="20"
                      opacity="0.6"
                    />
                  </svg>
                  
                  {/* Icon */}
                  <div className="relative z-10 text-3xl">
                    {stat.icon}
                  </div>
                </div>

                {/* Animated Counter */}
                <div className="space-y-3">
                  <div className="text-5xl md:text-6xl font-light text-stone-800 tracking-wide font-mono">
                    {formatStatValue(stat, counters[index] || 0)}
                  </div>
                  
                  <h3 className="text-xl font-medium text-stone-700 tracking-wide">
                    {stat.label}
                  </h3>
                  
                  <p className="text-stone-600 text-sm leading-relaxed px-2">
                    {stat.description}
                  </p>
                </div>

                {/* Meditation Progress Indicator */}
                <div className="relative pt-4">
                  <div className="h-px bg-stone-200 w-full">
                    <div 
                      className="h-px bg-gradient-to-r from-pink-300 to-stone-400 transition-all duration-2000 ease-out"
                      style={{ 
                        width: counters[index] ? '100%' : '0%',
                        transitionDelay: `${index * 300}ms`
                      }}
                    />
                  </div>
                  
                  {/* Zen dot */}
                  <div 
                    className="absolute top-0 w-2 h-2 bg-pink-400 rounded-full transform -translate-y-1/2 transition-all duration-2000 ease-out"
                    style={{ 
                      left: counters[index] ? '100%' : '0%',
                      transitionDelay: `${index * 300}ms`,
                      transform: 'translateY(-50%) translateX(-50%)'
                    }}
                  />
                </div>

                {/* Corner Zen Elements */}
                <div className="absolute top-3 right-3 w-3 h-3">
                  <div className="w-full h-full border-t border-r border-stone-300 opacity-40 group-hover:opacity-70 transition-opacity"></div>
                </div>
                <div className="absolute bottom-3 left-3 w-3 h-3">
                  <div className="w-full h-full border-b border-l border-stone-300 opacity-40 group-hover:opacity-70 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Zen Quote */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-6 bg-white/60 backdrop-blur-sm px-8 py-6 border border-stone-200">
              <div className="text-4xl opacity-60">🧘</div>
              <div className="text-stone-600 italic font-light tracking-wide">
                "The quieter you become, the more you are able to hear"
              </div>
              <div className="text-4xl opacity-60">🌸</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 