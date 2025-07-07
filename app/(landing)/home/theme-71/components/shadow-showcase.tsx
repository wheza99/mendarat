import React from 'react';

export default function ShadowShowcase() {
  const projects = [
    {
      title: "NEON CITY DASHBOARD",
      description: "A dark, neon-lit interface for monitoring urban infrastructure in real-time.",
      category: "Web Application",
      color: "red",
      stats: { users: "50K+", uptime: "99.9%", performance: "A+" }
    },
    {
      title: "SHADOW NETWORK PROTOCOL",
      description: "Secure communication system that operates invisibly in the digital shadows.",
      category: "Security System",
      color: "blue",
      stats: { users: "100K+", uptime: "99.99%", performance: "A+" }
    },
    {
      title: "DARK MATRIX ANALYTICS",
      description: "Advanced data visualization platform that reveals hidden patterns in darkness.",
      category: "Analytics Platform",
      color: "red",
      stats: { users: "25K+", uptime: "99.8%", performance: "A" }
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Noir Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>
        
        {/* Shadow Silhouettes */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute w-24 h-48 bg-black/40 animate-noir-shadow"
              style={{
                left: `${15 + i * 15}%`,
                bottom: '0',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-noir-fade-in">
            <span className="text-white">SHADOW</span>
            <span className="text-red-500 animate-noir-flicker"> SHOWCASE</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto animate-noir-fade-in-delayed">
            Projects that thrive in the darkness, illuminated only by the glow of neon and the spark of innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-black/70 border border-gray-800 rounded-lg p-8 hover:border-red-500/50 transition-all duration-500 animate-noir-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 text-xs font-mono border border-${project.color}-500 text-${project.color}-500 rounded-full mb-4 animate-noir-pulse`}>
                  {project.category}
                </div>
                
                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 ${
                  project.color === 'red' ? 'text-red-500' : 'text-blue-500'
                } animate-noir-flicker`}>
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className={`text-lg font-bold text-${project.color}-500 animate-noir-count`}>
                      {project.stats.users}
                    </div>
                    <div className="text-xs text-gray-500 font-mono">USERS</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold text-${project.color === 'red' ? 'blue' : 'red'}-500 animate-noir-count`}>
                      {project.stats.uptime}
                    </div>
                    <div className="text-xs text-gray-500 font-mono">UPTIME</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white animate-noir-count">
                      {project.stats.performance}
                    </div>
                    <div className="text-xs text-gray-500 font-mono">RATING</div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className={`w-full px-6 py-3 border-2 border-${project.color}-500 text-${project.color}-500 hover:bg-${project.color}-500 hover:text-black font-bold rounded-lg transition-all duration-300 animate-noir-pulse`}>
                  VIEW PROJECT
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-noir-fade-in-delayed">
          <div className="inline-flex items-center space-x-4 text-gray-500 font-mono text-sm mb-8 animate-noir-flicker">
            <span>MORE PROJECTS IN THE SHADOWS</span>
            <span className="w-2 h-2 bg-red-500 rounded-full animate-noir-pulse"></span>
            <span>NEON LIGHTS AWAIT</span>
          </div>
          <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-300 animate-noir-pulse border border-red-400">
            EXPLORE ALL PROJECTS
          </button>
        </div>
      </div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-noir-float ${
              i % 4 === 0 ? 'bg-red-500' : i % 4 === 1 ? 'bg-blue-500' : i % 4 === 2 ? 'bg-white' : 'bg-gray-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 