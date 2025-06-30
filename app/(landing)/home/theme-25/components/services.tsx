"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import copy from '../copy';

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-stone-50 to-pink-50 relative overflow-hidden">
      {/* Japanese Wave Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="400" height="200" patternUnits="userSpaceOnUse">
              {/* Traditional Japanese Wave */}
              <path 
                d="M0,100 Q100,50 200,100 T400,100" 
                stroke="#2C2C2C" 
                strokeWidth="2" 
                fill="none" 
                opacity="0.3"
              />
              <path 
                d="M0,120 Q100,70 200,120 T400,120" 
                stroke="#FFB7C5" 
                strokeWidth="1" 
                fill="none" 
                opacity="0.3"
              />
              
              {/* Cherry blossoms on wave */}
              <circle cx="100" cy="90" r="3" fill="#FFB7C5" opacity="0.4" />
              <circle cx="300" cy="90" r="3" fill="#FFB7C5" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-6xl font-light text-stone-800 tracking-wide">
              {copy.services.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
              {copy.services.subtitle}
            </p>
            
            {/* Traditional Japanese Decoration */}
            <div className="flex items-center justify-center space-x-6 pt-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-stone-300"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-stone-300"></div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {copy.services.services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white/90 backdrop-blur-sm p-8 border-2 transition-all duration-500 cursor-pointer ${
                  activeService === index 
                    ? 'border-pink-300 shadow-2xl -translate-y-4' 
                    : 'border-stone-200 hover:border-pink-200 hover:shadow-lg hover:-translate-y-2'
                }`}
                onClick={() => setActiveService(activeService === index ? null : index)}
              >
                {/* Service Category Badge */}
                <div className="absolute -top-3 left-6">
                  <Badge className="bg-stone-800 text-white px-3 py-1 text-xs font-light tracking-wide">
                    {service.category}
                  </Badge>
                </div>

                {/* Service Content */}
                <div className="space-y-6">
                  {/* Title with Icon */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-stone-800 tracking-wide leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Features - Expandable */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-stone-200 space-y-3">
                      <h4 className="text-sm font-medium text-stone-700 tracking-wide">
                        Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="flex items-center space-x-3 text-sm text-stone-600"
                          >
                            <div className="w-1 h-1 bg-pink-300 rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="text-xs text-stone-500 tracking-wide">
                      {activeService === index ? 'Click to minimize' : 'Click to explore'}
                    </div>
                    
                    <div 
                      className={`transform transition-transform duration-300 ${
                        activeService === index ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" className="text-stone-400">
                        <path 
                          d="M4 6l4 4 4-4" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    {/* Cherry blossom */}
                    <g transform="translate(12,12)">
                      {[0, 72, 144, 216, 288].map((angle, i) => (
                        <g key={i} transform={`rotate(${angle})`}>
                          <ellipse rx="4" ry="2" fill="#FFB7C5" opacity="0.6" />
                        </g>
                      ))}
                      <circle r="1.5" fill="#FF9FAD" />
                    </g>
                  </svg>
                </div>

                {/* Zen Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Meditation Dot */}
                <div 
                  className={`absolute -top-2 -left-2 w-4 h-4 bg-pink-300 rounded-full transition-all duration-500 ${
                    activeService === index 
                      ? 'opacity-100 animate-pulse' 
                      : 'opacity-0 group-hover:opacity-70'
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Bottom Zen Message */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-12 py-8 border border-stone-200">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">⛩️</div>
                <p className="text-stone-600 italic font-light tracking-wide">
                  "Simplicity is the ultimate sophistication"
                </p>
                <div className="text-2xl">🌸</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 