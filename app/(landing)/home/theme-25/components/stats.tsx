"use client";

import React, { useEffect, useState, useRef } from 'react';
import copy from '../copy';

export default function Stats() {
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    copy.stats.achievements.forEach((achievement, index) => {
      const target = achievement.number === "∞" ? 999 : 
                    achievement.number.includes("%") ? 
                    parseInt(achievement.number.replace("%", "")) :
                    parseInt(achievement.number.replace("+", ""));

      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [index]: current }));
      }, 20);
    });
  }, [isVisible]);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          border: 'border-cyan-500/30 hover:border-cyan-500/60',
          bg: 'bg-cyan-500/5 hover:bg-cyan-500/10',
          text: 'text-cyan-400',
          glow: 'shadow-cyan-500/20 hover:shadow-cyan-500/40',
          number: 'text-cyan-300'
        };
      case 'magenta':
        return {
          border: 'border-pink-500/30 hover:border-pink-500/60',
          bg: 'bg-pink-500/5 hover:bg-pink-500/10',
          text: 'text-pink-400',
          glow: 'shadow-pink-500/20 hover:shadow-pink-500/40',
          number: 'text-pink-300'
        };
      case 'green':
        return {
          border: 'border-green-500/30 hover:border-green-500/60',
          bg: 'bg-green-500/5 hover:bg-green-500/10',
          text: 'text-green-400',
          glow: 'shadow-green-500/20 hover:shadow-green-500/40',
          number: 'text-green-300'
        };
      case 'purple':
        return {
          border: 'border-purple-500/30 hover:border-purple-500/60',
          bg: 'bg-purple-500/5 hover:bg-purple-500/10',
          text: 'text-purple-400',
          glow: 'shadow-purple-500/20 hover:shadow-purple-500/40',
          number: 'text-purple-300'
        };
      default:
        return {
          border: 'border-cyan-500/30 hover:border-cyan-500/60',
          bg: 'bg-cyan-500/5 hover:bg-cyan-500/10',
          text: 'text-cyan-400',
          glow: 'shadow-cyan-500/20 hover:shadow-cyan-500/40',
          number: 'text-cyan-300'
        };
    }
  };

  const formatNumber = (num: number, original: string) => {
    if (original === "∞") return "∞";
    if (original.includes("%")) return Math.round(num) + "%";
    if (original.includes("+")) return Math.round(num) + "+";
    return Math.round(num).toLocaleString();
  };

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,255,255,0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255,0,255,0.1) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Animated Border Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 font-mono tracking-wider">
              {copy.stats.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {copy.stats.subtitle}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.stats.achievements.map((achievement, index) => {
              const colors = getColorClasses(achievement.color);
              const currentValue = counters[index] || 0;
              
              return (
                <div
                  key={index}
                  className={`relative p-6 border-2 ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-500 hover:scale-105 group shadow-lg ${colors.glow}`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Corner Brackets */}
                  <div className={`absolute top-1 left-1 w-4 h-4 border-l-2 border-t-2 ${colors.border.split(' ')[0]} opacity-60`} />
                  <div className={`absolute top-1 right-1 w-4 h-4 border-r-2 border-t-2 ${colors.border.split(' ')[0]} opacity-60`} />
                  <div className={`absolute bottom-1 left-1 w-4 h-4 border-l-2 border-b-2 ${colors.border.split(' ')[0]} opacity-60`} />
                  <div className={`absolute bottom-1 right-1 w-4 h-4 border-r-2 border-b-2 ${colors.border.split(' ')[0]} opacity-60`} />

                  {/* Icon */}
                  <div className="text-4xl mb-4 filter drop-shadow-lg">
                    <span 
                      className="block transform group-hover:scale-110 transition-transform duration-300"
                      style={{
                        filter: `drop-shadow(0 0 10px ${achievement.color === 'cyan' ? '#00ffff' : 
                                 achievement.color === 'magenta' ? '#ff00ff' : 
                                 achievement.color === 'green' ? '#00ff00' : '#8b5cf6'})`
                      }}
                    >
                      {achievement.icon}
                    </span>
                  </div>

                  {/* Number */}
                  <div className={`text-4xl md:text-5xl font-black font-mono mb-2 ${colors.number}`}>
                    <span 
                      className="block transform group-hover:scale-105 transition-transform duration-300"
                      style={{
                        textShadow: `0 0 20px ${achievement.color === 'cyan' ? '#00ffff' : 
                                    achievement.color === 'magenta' ? '#ff00ff' : 
                                    achievement.color === 'green' ? '#00ff00' : '#8b5cf6'}`
                      }}
                    >
                      {formatNumber(currentValue, achievement.number)}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className={`text-lg font-bold mb-3 ${colors.text} font-mono tracking-wide`}>
                    {achievement.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div 
                      className={`absolute w-full h-px bg-gradient-to-r from-transparent via-${achievement.color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{
                        animation: 'scan-horizontal 2s linear infinite',
                        boxShadow: `0 0 10px ${achievement.color === 'cyan' ? '#00ffff' : 
                                   achievement.color === 'magenta' ? '#ff00ff' : 
                                   achievement.color === 'green' ? '#00ff00' : '#8b5cf6'}`
                      }}
                    />
                  </div>

                  {/* Glitch Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-red-500 transform translate-x-1 translate-y-1 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-blue-500 transform -translate-x-1 -translate-y-1 mix-blend-multiply" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-horizontal {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
} 