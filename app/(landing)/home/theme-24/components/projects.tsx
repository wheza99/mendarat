"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import copy from '../copy';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Gardens');

  const filteredProjects = activeCategory === 'All Gardens' 
    ? copy.projects.projects 
    : copy.projects.projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 via-rose-50 to-pink-50 relative overflow-hidden">
      {/* Traditional Japanese Garden Pattern */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="garden-pattern" x="0" y="0" width="400" height="300" patternUnits="userSpaceOnUse">
              {/* Zen stones arrangement */}
              <ellipse cx="100" cy="150" rx="40" ry="25" fill="#D6D3D1" opacity="0.3" />
              <ellipse cx="300" cy="100" rx="35" ry="20" fill="#A8A29E" opacity="0.3" />
              <ellipse cx="200" cy="220" rx="45" ry="28" fill="#78716C" opacity="0.3" />
              
              {/* Bamboo groves */}
              <line x1="50" y1="50" x2="50" y2="250" stroke="#9CAF88" strokeWidth="4" opacity="0.4" />
              <line x1="350" y1="30" x2="350" y2="270" stroke="#9CAF88" strokeWidth="3" opacity="0.4" />
              
              {/* Cherry blossom branch */}
              <path d="M80,80 Q150,60 220,80" stroke="#FFB7C5" strokeWidth="2" fill="none" opacity="0.4" />
              <circle cx="120" cy="70" r="4" fill="#FFB7C5" opacity="0.5" />
              <circle cx="180" cy="75" r="3" fill="#FFB7C5" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#garden-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-6xl font-light text-stone-800 tracking-wide">
              {copy.projects.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
              {copy.projects.subtitle}
            </p>

            {/* Category Filter - Zen Style */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              {copy.projects.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 border-2 ${
                    activeCategory === category
                      ? 'bg-stone-800 text-white border-stone-800 shadow-lg'
                      : 'bg-white/80 text-stone-700 border-stone-200 hover:border-pink-200 hover:bg-pink-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/90 backdrop-blur-sm border-2 border-stone-200 hover:border-pink-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Project Image Area */}
                <div className="relative h-64 bg-gradient-to-br from-stone-100 to-pink-100 overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="text-4xl opacity-60">🖼️</div>
                      <div className="text-stone-500 text-sm font-light">
                        {project.title}
                      </div>
                    </div>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-stone-700 border border-stone-200 text-xs font-light">
                      {project.year}
                    </Badge>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} text-xs font-light`}>
                      {project.status}
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center space-y-2">
                      <div className="text-sm font-light tracking-wide">View Project</div>
                      <div className="w-8 h-px bg-pink-300 mx-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Category */}
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-stone-600 border-stone-300 text-xs font-light">
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-medium text-stone-800 tracking-wide group-hover:text-pink-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-light tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Zen Corner Decorations */}
                <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    {/* Minimalist cherry blossom */}
                    <g transform="translate(10,10)">
                      {[0, 90, 180, 270].map((angle, i) => (
                        <g key={i} transform={`rotate(${angle})`}>
                          <ellipse rx="3" ry="1.5" fill="#FFB7C5" opacity="0.7" />
                        </g>
                      ))}
                      <circle r="1" fill="#FF9FAD" />
                    </g>
                  </svg>
                </div>

                {/* Zen Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Bottom Philosophy Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm px-12 py-8 border border-stone-200">
              <div className="text-center space-y-2">
                <div className="text-3xl">🎋</div>
                <div className="text-xs text-stone-500 font-light tracking-wide">BAMBOO</div>
              </div>
              
              <div className="text-stone-600 italic font-light tracking-wide max-w-md">
                "Every project is a garden - carefully planned, mindfully executed, and designed to flourish over time"
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-3xl">🌸</div>
                <div className="text-xs text-stone-500 font-light tracking-wide">SAKURA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 