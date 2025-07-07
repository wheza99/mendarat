import React from 'react';

export default function ArtShowcase() {
  const showcaseData = {
    title: {
      main: "ART SHOWCASE",
      description: "Explore our collection of Art Deco inspired designs with neon gradient aesthetics"
    },
    projects: [
      {
        title: "DECO LUXURY",
        category: "Art Deco",
        description: "Luxury brand design with classic Art Deco elements and neon gradients",
        color: "purple"
      },
      {
        title: "NEON FUTURE",
        category: "Futuristic",
        description: "Modern interface design combining neon aesthetics with Art Deco geometry",
        color: "pink"
      },
      {
        title: "GRADIENT ELEGANCE",
        category: "Elegant",
        description: "Sophisticated design system with smooth gradient transitions",
        color: "orange"
      },
      {
        title: "DECO MINIMAL",
        category: "Minimalist",
        description: "Clean Art Deco design with subtle neon accent elements",
        color: "purple"
      },
      {
        title: "NEON BOLD",
        category: "Bold",
        description: "Bold typography and geometric patterns with neon color schemes",
        color: "pink"
      },
      {
        title: "GRADIENT HARMONY",
        category: "Harmonious",
        description: "Balanced design with harmonious color gradients and Art Deco elements",
        color: "orange"
      }
    ],
    stats: [
      { number: '100+', label: 'PROJECTS', color: 'purple' },
      { number: '50+', label: 'CLIENTS', color: 'pink' },
      { number: '5+', label: 'YEARS', color: 'orange' }
    ]
  };

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
              {showcaseData.title.main}
            </span>
          </h2>
          
          <p className="text-xl text-orange-300 max-w-3xl mx-auto font-light">
            {showcaseData.title.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {showcaseData.projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className={`bg-gradient-to-br from-${project.color}-800/90 to-${project.color}-900/90 backdrop-blur-xl border border-${project.color}-400 rounded-lg p-8 shadow-2xl hover:shadow-${project.color}-500/25 transition-all duration-500 transform hover:scale-105 h-full`}>
                {/* Project Category */}
                <div className={`inline-block px-3 py-1 bg-${project.color}-400/20 border border-${project.color}-400 rounded-full text-xs text-${project.color}-300 font-light mb-4`}>
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
                
                {/* Project Icon */}
                <div className={`text-4xl text-${project.color}-300 animate-deco-pulse`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {['◆', '◇', '◆', '◇', '◆', '◇'][index]}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseData.stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className={`bg-gradient-to-br from-${stat.color}-800/90 to-${stat.color}-900/90 backdrop-blur-xl border border-${stat.color}-400 rounded-lg p-8 shadow-2xl hover:shadow-${stat.color}-500/25 transition-all duration-300 transform hover:scale-105`}>
                  <div className={`text-4xl font-bold text-${stat.color}-300 mb-2 animate-deco-pulse`} style={{ animationDelay: `${index * 0.2}s` }}>
                    {stat.number}
                  </div>
                  <div className={`text-sm text-${stat.color}-400 font-light tracking-wider`}>
                    {stat.label}
                  </div>
                </div>
                
                {/* Deco Corner Elements */}
                <div className={`absolute -top-2 -left-2 w-4 h-4 border-2 border-${stat.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 0.5}s` }}></div>
                <div className={`absolute -top-2 -right-2 w-4 h-4 border-2 border-${stat.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 1}s` }}></div>
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 border-2 border-${stat.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 1.5}s` }}></div>
                <div className={`absolute -bottom-2 -right-2 w-4 h-4 border-2 border-${stat.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 2}s` }}></div>
              </div>
            ))}
          </div>
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
              animationDelay: `${i * 0.15}s`,
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