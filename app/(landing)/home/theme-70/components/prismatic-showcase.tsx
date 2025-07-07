import React from 'react';

export default function PrismaticShowcase() {
  const projects = [
    {
      title: 'Quantum Dashboard',
      description: 'A revolutionary dashboard with glassmorphism UI that adapts to user behavior.',
      image: '🎛️',
      category: 'Dashboard',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Holographic Portfolio',
      description: 'Interactive portfolio with 3D holographic elements and spatial navigation.',
      image: '🌟',
      category: 'Portfolio',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Crystal E-commerce',
      description: 'Transparent shopping experience with fluid animations and glassmorphism design.',
      image: '💎',
      category: 'E-commerce',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Neon Social App',
      description: 'Social platform with neon effects and glassmorphism components.',
      image: '📱',
      category: 'Social',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      title: 'Prismatic Analytics',
      description: 'Data visualization with prismatic effects and glassmorphism charts.',
      image: '📊',
      category: 'Analytics',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      title: 'Crystal CMS',
      description: 'Content management system with transparent interfaces and holographic previews.',
      image: '🔧',
      category: 'CMS',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section className="relative py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Prismatic Light Rays */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-glassmorphism-scan"
              style={{
                top: `${15 + i * 10}%`,
                left: `-20%`,
                right: `-20%`,
                transform: `rotate(${15 + i * 8}deg)`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>

        {/* Floating Crystal Shapes */}
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="absolute backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg animate-glassmorphism-float"
            style={{
              left: `${10 + (i % 5) * 18}%`,
              top: `${20 + Math.floor(i / 5) * 30}%`,
              width: `${50 + Math.random() * 40}px`,
              height: `${30 + Math.random() * 30}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-white/20 rounded-full text-sm font-medium text-white/90 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2 animate-glassmorphism-pulse"></div>
            PRISMATIC SHOWCASE
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="text-white">Projects</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore our collection of innovative projects that showcase the power of glassmorphism and holographic design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Prismatic Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-pink-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Category Badge */}
              <div className="relative z-10 mb-4">
                <span className="inline-block px-3 py-1 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/80">
                  {project.category}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative z-10 mb-6">
                <div className={`w-20 h-20 backdrop-blur-md bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                  {project.image}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* View Project Button */}
                <div className="inline-flex items-center text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">View Project</span>
                  <div className="w-4 h-4 border-2 border-white/50 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>

              {/* Prismatic Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-particle"
                    style={{
                      left: `${25 + i * 20}%`,
                      top: `${35 + i * 15}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${4 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="mr-2">View All Projects</span>
            <div className="w-4 h-4 border-2 border-white/50 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 