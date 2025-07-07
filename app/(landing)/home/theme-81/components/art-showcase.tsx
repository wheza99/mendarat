import React from 'react';

export default function ArtShowcase() {
  const projects = [
    {
      title: "DECO PORTAL",
      category: "Web Design",
      description: "Art Deco inspired landing page with neon gradient animations",
      color: "purple"
    },
    {
      title: "NEON DASHBOARD",
      category: "UI/UX",
      description: "Modern dashboard with Art Deco geometric patterns and neon gradients",
      color: "pink"
    },
    {
      title: "GRADIENT BRAND",
      category: "Branding",
      description: "Complete brand identity combining Art Deco elegance with neon innovation",
      color: "orange"
    },
    {
      title: "DECO APP",
      category: "Mobile",
      description: "Mobile application featuring Art Deco design principles with modern neon aesthetics",
      color: "purple"
    },
    {
      title: "NEON E-COMMERCE",
      category: "E-commerce",
      description: "Online store with Art Deco inspired layout and neon gradient product displays",
      color: "pink"
    },
    {
      title: "GRADIENT PORTFOLIO",
      category: "Portfolio",
      description: "Creative portfolio showcasing Art Deco design with neon gradient elements",
      color: "orange"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deco Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/50 via-transparent to-purple-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#f97316_0%,transparent_50%)] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-800/90 to-purple-800/90 backdrop-blur-xl border border-orange-400 rounded-lg px-6 py-3 shadow-2xl mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full animate-deco-pulse"></div>
            <span className="text-orange-300 font-light text-sm tracking-wider">SHOWCASE</span>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ART SHOWCASE
            </span>
          </h2>
          
          <p className="text-xl text-orange-300 max-w-3xl mx-auto font-light">
            Explore our collection of Art Deco inspired projects with modern neon gradient aesthetics
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className={`bg-gradient-to-br from-${project.color}-800/90 to-${project.color}-900/90 backdrop-blur-xl border border-${project.color}-400 rounded-lg p-6 shadow-2xl hover:shadow-${project.color}-500/25 transition-all duration-500 transform hover:scale-105`}>
                {/* Project Category */}
                <div className={`text-sm text-${project.color}-400 font-light tracking-wider mb-4`}>
                  {project.category}
                </div>
                
                {/* Project Title */}
                <h3 className={`text-2xl font-bold text-${project.color}-200 mb-4`}>
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className={`text-${project.color}-300 font-light leading-relaxed mb-6`}>
                  {project.description}
                </p>
                
                {/* Project Stats */}
                <div className="flex justify-between items-center">
                  <div className={`text-sm text-${project.color}-400`}>
                    <span className="font-semibold">2024</span> • Art Deco
                  </div>
                  <div className={`w-8 h-8 border-2 border-${project.color}-400 rounded-lg animate-deco-spin`}></div>
                </div>
                
                {/* Deco Corner Elements */}
                <div className={`absolute -top-2 -left-2 w-4 h-4 border-2 border-${project.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.1 + 0.5}s` }}></div>
                <div className={`absolute -top-2 -right-2 w-4 h-4 border-2 border-${project.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.1 + 1}s` }}></div>
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 border-2 border-${project.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.1 + 1.5}s` }}></div>
                <div className={`absolute -bottom-2 -right-2 w-4 h-4 border-2 border-${project.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.1 + 2}s` }}></div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-400/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Deco Stats Section */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: '50+', label: 'PROJECTS', color: 'purple' },
              { number: '100%', label: 'SATISFACTION', color: 'pink' },
              { number: '24/7', label: 'SUPPORT', color: 'orange' },
              { number: '∞', label: 'POSSIBILITIES', color: 'purple' }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className={`bg-gradient-to-br from-${stat.color}-800/90 to-${stat.color}-900/90 backdrop-blur-xl border border-${stat.color}-400 rounded-lg p-6 shadow-2xl hover:shadow-${stat.color}-500/25 transition-all duration-300 transform hover:scale-105`}>
                  <div className={`text-3xl font-bold text-${stat.color}-300 mb-2 animate-deco-pulse`} style={{ animationDelay: `${index * 0.2}s` }}>
                    {stat.number}
                  </div>
                  <div className={`text-sm text-${stat.color}-400 font-light tracking-wider`}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">VIEW ALL PROJECTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Deco Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={`floating-${i}`}
            className="absolute animate-deco-float"
            style={{
              left: `${8 + (i % 5) * 18}%`,
              top: `${20 + Math.floor(i / 5) * 30}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-4 h-4 border-2 border-${['purple', 'pink', 'orange'][i % 3]}-400 rounded-lg animate-deco-spin`}></div>
          </div>
        ))}
      </div>

      {/* Deco Rays */}
      <div className="absolute top-1/3 right-1/3 w-36 h-36">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute w-1 h-18 bg-gradient-to-t from-orange-400 to-transparent animate-deco-ray"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Deco Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-deco-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#a855f7', '#ec4899', '#f97316'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${8 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 