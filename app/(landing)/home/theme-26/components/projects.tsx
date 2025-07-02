"use client";

import React, { useState } from 'react';
import copy from '../copy';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Tapes");

  const filteredProjects = activeCategory === "All Tapes" 
    ? copy.projects.projects 
    : copy.projects.projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6">
            {copy.projects.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8">{copy.projects.subtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {copy.projects.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 border font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'border-yellow-400 bg-yellow-400 text-black'
                    : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="border border-pink-400 bg-pink-500/10 hover:bg-pink-500/20 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-800 to-pink-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                  {project.category === 'Web Apps' ? '🌐' :
                   project.category === 'Mobile Games' ? '🎮' :
                   project.category === 'Branding' ? '✨' :
                   project.category === 'Videos' ? '📼' : '💻'}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-400 text-black text-xs font-bold">
                  {project.status}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-xs text-cyan-400">{project.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 