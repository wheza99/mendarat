'use client';

import { copy } from '../copy';

export default function Projects() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ocean Projects Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-800/25 to-teal-700/20"></div>
        
        {/* Project Portfolio Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="projectWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="projectWave2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 150 Q 400 100 800 150 T 1600 180 Q 1800 160 2000 180 L 2000 0 L 0 0 Z"
            fill="url(#projectWave1)" 
            className="animate-ocean-wave"
          />
          <path 
            d="M 0 250 Q 500 200 1000 240 T 2000 260 L 2000 0 L 0 0 Z"
            fill="url(#projectWave2)" 
            className="animate-ocean-wave"
            style={{ animationDelay: '3s' }}
          />
        </svg>
        
        {/* Floating Project Elements */}
        <div className="absolute top-16 left-24 w-6 h-6 bg-blue-400/25 rounded-full animate-ocean-float"></div>
        <div className="absolute top-48 right-20 w-8 h-8 bg-teal-400/20 rounded-full animate-ocean-drift"></div>
        <div className="absolute bottom-24 left-32 w-5 h-5 bg-cyan-400/30 rounded-full animate-ocean-bubble"></div>
        <div className="absolute bottom-56 right-36 w-7 h-7 bg-green-400/15 rounded-full animate-ocean-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-300 to-teal-400 bg-clip-text text-transparent">
            {copy.projects.title}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {copy.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.projects.items.map((project, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Card */}
              <div className="relative bg-gradient-to-br from-blue-900/60 via-teal-800/50 to-cyan-700/60 backdrop-blur-sm border border-blue-400/30 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Ocean Depth Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Floating Bubbles on Image */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400/60 rounded-full group-hover:animate-ocean-float"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-400/50 rounded-full group-hover:animate-ocean-drift"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 relative z-10">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-blue-200 mb-4 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-blue-800/50 text-blue-200 rounded-full border border-blue-600/30 group-hover:bg-teal-800/50 group-hover:text-teal-200 group-hover:border-teal-600/30 transition-all duration-300"
                        style={{ transitionDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Ocean Current Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ocean-wave"></div>
                
                {/* Project Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-teal-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/10 group-hover:to-teal-500/5 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}