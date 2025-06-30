"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import copy from '../copy';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Semua Ekosistem');

  const filteredProjects = activeCategory === 'Semua Ekosistem' 
    ? copy.projects.projects 
    : copy.projects.projects.filter(project => project.category === activeCategory);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Blooming': return '🌸';
      case 'Flourishing': return '🌿';
      case 'Thriving': return '🌳';
      case 'Growing': return '🌱';
      default: return '🌿';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Blooming': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Flourishing': return 'bg-green-100 text-green-800 border-green-200';
      case 'Thriving': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Growing': return 'bg-lime-100 text-lime-800 border-lime-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="project-pattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <path d="M150,100 Q200,150 150,200 Q100,150 150,100" fill="#0F5132" opacity="0.2" />
              <circle cx="100" cy="100" r="30" fill="#52734D" opacity="0.15" />
              <ellipse cx="200" cy="200" rx="25" ry="40" fill="#87A96B" opacity="0.18" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#project-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6">
              {copy.projects.title}
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto mb-8">
              {copy.projects.subtitle}
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {copy.projects.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-green-600 border border-green-200 hover:bg-green-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-200 hover:scale-105"
              >
                {/* Growth Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} font-medium`}>
                    <span className="mr-1">{getStatusIcon(project.status)}</span>
                    {project.status}
                  </Badge>
                </div>

                {/* Project Content */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <Badge variant="outline" className="text-green-600 border-green-300 mb-2">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-green-800 mb-4 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-green-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Growth Metrics */}
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-green-700 font-medium">Growth Impact:</span>
                      <span className="text-green-800 font-bold">{project.growth}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-3 h-2 bg-green-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Organic Corner Elements */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-green-400 rounded-tl-lg opacity-60"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-green-400 rounded-br-lg opacity-60"></div>

                {/* Hover Growth Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Growth Particle */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-70 animate-pulse group-hover:animate-bounce"></div>
              </div>
            ))}
          </div>

          {/* Bottom Growth Visualization */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-white px-8 py-4 rounded-full shadow-lg border border-green-100">
              <span className="text-green-600 font-medium">Project Ecosystem:</span>
              <div className="flex items-center space-x-2">
                {['🌱', '→', '🌿', '→', '🌳', '→', '🌸'].map((item, i) => (
                  <span 
                    key={i} 
                    className="text-lg transition-transform hover:scale-110" 
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
