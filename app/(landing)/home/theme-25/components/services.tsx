"use client";

import React, { useState } from 'react';
import copy from '../copy';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          border: 'border-cyan-500/30 hover:border-cyan-500',
          bg: 'bg-cyan-500/5 hover:bg-cyan-500/10',
          text: 'text-cyan-400',
          glow: 'hover:shadow-cyan-500/50',
          accent: 'bg-cyan-500'
        };
      case 'magenta':
        return {
          border: 'border-pink-500/30 hover:border-pink-500',
          bg: 'bg-pink-500/5 hover:bg-pink-500/10',
          text: 'text-pink-400',
          glow: 'hover:shadow-pink-500/50',
          accent: 'bg-pink-500'
        };
      case 'green':
        return {
          border: 'border-green-500/30 hover:border-green-500',
          bg: 'bg-green-500/5 hover:bg-green-500/10',
          text: 'text-green-400',
          glow: 'hover:shadow-green-500/50',
          accent: 'bg-green-500'
        };
      case 'purple':
        return {
          border: 'border-purple-500/30 hover:border-purple-500',
          bg: 'bg-purple-500/5 hover:bg-purple-500/10',
          text: 'text-purple-400',
          glow: 'hover:shadow-purple-500/50',
          accent: 'bg-purple-500'
        };
      default:
        return {
          border: 'border-cyan-500/30 hover:border-cyan-500',
          bg: 'bg-cyan-500/5 hover:bg-cyan-500/10',
          text: 'text-cyan-400',
          glow: 'hover:shadow-cyan-500/50',
          accent: 'bg-cyan-500'
        };
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Circuit Board Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 L80 40 L60 40 L60 80 L40 80 L40 60 L20 60 Z" 
                    stroke="rgba(0,255,255,0.3)" strokeWidth="1" fill="none" />
              <circle cx="20" cy="20" r="3" fill="rgba(255,0,255,0.5)" />
              <circle cx="80" cy="80" r="3" fill="rgba(0,255,0,0.5)" />
              <rect x="35" y="35" width="10" height="10" fill="rgba(255,255,0,0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Animated Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 font-mono tracking-wider">
              {copy.services.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {copy.services.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {copy.services.services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={index}
                  className={`relative p-6 border-2 ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-500 hover:scale-105 group shadow-xl ${colors.glow}`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Glitch Effect Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-red-500 transform translate-x-2 translate-y-1 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-blue-500 transform -translate-x-1 -translate-y-2 mix-blend-multiply" />
                  </div>

                  {/* Corner Brackets */}
                  <div className={`absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 ${colors.border.split(' ')[0]} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 ${colors.border.split(' ')[0]} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 ${colors.border.split(' ')[0]} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 ${colors.border.split(' ')[0]} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Category Badge */}
                  <div className={`inline-block px-3 py-1 ${colors.accent} text-black text-xs font-bold font-mono mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.category}
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-4 ${colors.text} font-mono tracking-wide group-hover:text-white transition-colors duration-300`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center space-x-3 text-sm group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <div 
                          className={`w-2 h-2 ${colors.accent} rounded-full animate-pulse`}
                          style={{
                            animationDelay: `${featureIndex * 0.2}s`,
                            boxShadow: `0 0 8px ${service.color === 'cyan' ? '#00ffff' : 
                                       service.color === 'magenta' ? '#ff00ff' : 
                                       service.color === 'green' ? '#00ff00' : '#8b5cf6'}`
                          }}
                        />
                        <span className="text-gray-400 font-mono">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div 
                      className={`absolute w-full h-px bg-gradient-to-r from-transparent via-${service.color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{
                        animation: isHovered ? 'scan-vertical 2s linear infinite' : 'none',
                        boxShadow: `0 0 10px ${service.color === 'cyan' ? '#00ffff' : 
                                   service.color === 'magenta' ? '#ff00ff' : 
                                   service.color === 'green' ? '#00ff00' : '#8b5cf6'}`
                      }}
                    />
                  </div>

                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-vertical {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
} 