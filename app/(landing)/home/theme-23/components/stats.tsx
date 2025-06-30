"use client";

import React, { useEffect, useState } from 'react';
import copy from '../copy';

export default function Stats() {
  const [counters, setCounters] = useState<{ [key: string]: number }>({});

  // Animation counters
  useEffect(() => {
    const animateCounters = () => {
      copy.stats.achievements.forEach((stat, index) => {
        const targetValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
        let currentValue = 0;
        const increment = targetValue / 60; // 60 frames animation
        
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
        }, 16); // 60fps
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

    const statsSection = document.getElementById('stats-section');
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
      id="stats-section" 
      className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden"
    >
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="growth-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="#ffffff" opacity="0.3" />
              <circle cx="150" cy="100" r="15" fill="#ffffff" opacity="0.2" />
              <circle cx="100" cy="150" r="25" fill="#ffffff" opacity="0.15" />
              <path d="M0,100 Q50,80 100,100 T200,100" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#growth-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {copy.stats.title}
            </h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              {copy.stats.subtitle}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.stats.achievements.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105"
              >
                {/* Growth Status Indicator */}
                <div className="absolute -top-3 -right-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-xs">🌱</span>
                  </div>
                </div>

                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center text-3xl group-hover:bg-white/30 transition-colors">
                    {stat.icon}
                  </div>
                </div>

                {/* Animated Counter */}
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                    {formatStatValue(stat, counters[index] || 0)}
                  </div>
                  <h3 className="text-xl font-semibold text-green-100 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-green-200 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Growth Progress Bar */}
                <div className="mt-6">
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-400 to-green-300 rounded-full transition-all duration-2000 ease-out"
                      style={{ 
                        width: counters[index] ? '100%' : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-white/40 rounded-bl-lg" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr-lg" />

                {/* Floating Growth Particle */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="w-2 h-2 bg-green-300 rounded-full opacity-60 animate-bounce"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Growth Callout */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
              <span className="text-green-100 font-medium">Growth Status:</span>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-green-300 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-white font-semibold ml-3">Flourishing</span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: '1s' }}>🌿</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 