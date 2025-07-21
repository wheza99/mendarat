'use client';

import { copy } from '../copy';

export default function Projects() {
  return (
    <section className="py-20 relative">
      {/* Digital Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(0, 255, 65, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.4) 3px, transparent 3px),
              radial-gradient(circle at 40% 60%, rgba(255, 0, 128, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 150px 150px, 80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {copy.projects.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {copy.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {copy.projects.items.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden border border-cyan-400/30 bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-green-400/50 transition-all duration-500 hover:scale-105"
            >
              {/* Cyber Frame */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-cyan-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-pink-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>

              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-green-900/20 via-cyan-900/20 to-pink-900/20 overflow-hidden">
                {/* Matrix Rain Effect */}
                <div className="absolute inset-0 opacity-30">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(
                          0deg,
                          transparent,
                          transparent 2px,
                          rgba(0, 255, 65, 0.3) 2px,
                          rgba(0, 255, 65, 0.3) 4px
                        )
                      `,
                      animation: 'matrix-rain 10s linear infinite'
                    }}
                  />
                </div>
                
                {/* Project Preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                    🖥️
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-8 relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-cyan-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm border border-cyan-400/30 text-cyan-400 rounded-full bg-cyan-400/10 group-hover:border-green-400/50 group-hover:text-green-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105">
                      View Project
                    </button>
                    <button className="px-6 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                      Live Demo
                    </button>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Pulse Border */}
              <div className="absolute inset-0 border border-green-400/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}