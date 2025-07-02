"use client";

import React, { useState } from 'react';
import copy from '../copy';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Systems");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All Systems" 
    ? copy.projects.projects 
    : copy.projects.projects.filter(project => project.category === activeCategory);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          border: 'border-cyan-500',
          bg: 'bg-cyan-500/10',
          text: 'text-cyan-400',
          glow: 'shadow-cyan-500/50'
        };
      case 'magenta':
        return {
          border: 'border-pink-500',
          bg: 'bg-pink-500/10',
          text: 'text-pink-400',
          glow: 'shadow-pink-500/50'
        };
      case 'green':
        return {
          border: 'border-green-500',
          bg: 'bg-green-500/10',
          text: 'text-green-400',
          glow: 'shadow-green-500/50'
        };
      case 'purple':
        return {
          border: 'border-purple-500',
          bg: 'bg-purple-500/10',
          text: 'text-purple-400',
          glow: 'shadow-purple-500/50'
        };
      default:
        return {
          border: 'border-cyan-500',
          bg: 'bg-cyan-500/10',
          text: 'text-cyan-400',
          glow: 'shadow-cyan-500/50'
        };
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Digital Rain Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-cyan-500/10 to-purple-500/10" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '2px',
              height: '20px',
              background: 'linear-gradient(to bottom, transparent, #00ff00, transparent)',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Animated Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 font-mono tracking-wider">
              {copy.projects.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {copy.projects.subtitle}
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {copy.projects.categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 border-2 font-mono text-sm transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/25'
                      : 'border-gray-600 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                  style={{
                    background: activeCategory === category 
                      ? 'linear-gradient(135deg, rgba(0,255,255,0.1) 0%, rgba(0,255,255,0.05) 100%)'
                      : 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const colors = getColorClasses(project.color);
              const isHovered = hoveredProject === index;
              
              return (
                <div
                  key={project.id}
                  className={`relative group cursor-pointer transition-all duration-500 hover:scale-105`}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Card */}
                  <div 
                    className={`relative border-2 ${colors.border} bg-black/80 backdrop-blur-sm overflow-hidden shadow-xl ${colors.glow}`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                      {/* Holographic Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Scanning Lines */}
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-full h-px bg-gradient-to-r from-transparent via-${project.color}-400 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                            style={{
                              top: `${20 * i}%`,
                              animation: isHovered ? `scan-horizontal ${2 + i * 0.3}s linear infinite` : 'none',
                              animationDelay: `${i * 0.2}s`,
                              boxShadow: `0 0 10px ${project.color === 'cyan' ? '#00ffff' : 
                                         project.color === 'magenta' ? '#ff00ff' : 
                                         project.color === 'green' ? '#00ff00' : '#8b5cf6'}`
                            }}
                          />
                        ))}
                      </div>

                      {/* Project Icon/Symbol */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                          {project.category === 'AI Projects' ? '🤖' :
                           project.category === 'Blockchain' ? '⛓️' :
                           project.category === 'VR/AR' ? '🥽' :
                           project.category === 'Web Apps' ? '🌐' : '💻'}
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 ${colors.bg} ${colors.border} border text-xs font-mono ${colors.text}`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title and Year */}
                      <div className="flex justify-between items-start mb-3">
                        <h3 className={`text-xl font-bold ${colors.text} font-mono tracking-wide group-hover:text-white transition-colors duration-300`}>
                          {project.title}
                        </h3>
                        <span className="text-gray-500 text-sm font-mono">{project.year}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-800 text-gray-400 text-xs font-mono border border-gray-700 group-hover:border-gray-600 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Category */}
                      <div className={`text-xs font-mono ${colors.text} opacity-80`}>
                        {project.category}
                      </div>
                    </div>

                    {/* Corner Brackets */}
                    <div className={`absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 ${colors.border} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 ${colors.border} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 ${colors.border} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 ${colors.border} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Glitch Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-red-500 transform translate-x-1 translate-y-1 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-blue-500 transform -translate-x-1 -translate-y-1 mix-blend-multiply" />
                    </div>
                  </div>

                  {/* Floating Particles */}
                  {isHovered && (
                    <>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
} 