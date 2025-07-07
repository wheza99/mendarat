import React from 'react';

export default function DecoShowcase() {
  const projects = [
    {
      title: 'Neon E-commerce',
      category: 'Web Application',
      description: 'Modern e-commerce platform with art deco design and neon gradient effects.',
      image: '🛍️',
      gradient: 'from-cyan-400 to-blue-500',
      tech: ['React', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Art Deco Dashboard',
      category: 'Admin Panel',
      description: 'Elegant admin dashboard featuring geometric patterns and neon color schemes.',
      image: '📊',
      gradient: 'from-purple-400 to-pink-500',
      tech: ['Vue.js', 'TypeScript', 'D3.js']
    },
    {
      title: 'Neon Mobile App',
      category: 'Mobile Application',
      description: 'Cross-platform mobile app with stunning neon visual effects and art deco UI.',
      image: '📱',
      gradient: 'from-pink-400 to-red-500',
      tech: ['React Native', 'Expo', 'Framer Motion']
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Art Deco Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Art Deco Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:180px_180px] animate-art-deco-scan"></div>
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:280px_280px] animate-art-deco-scan-reverse"></div>
        </div>

        {/* Floating Art Deco Elements */}
        <div className="absolute top-1/3 left-1/5 w-24 h-24 border-2 border-cyan-400 rotate-45 animate-neon-pulse"></div>
        <div className="absolute top-1/2 right-1/5 w-20 h-20 border-2 border-purple-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-pink-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-2 border-pink-400 rounded-lg shadow-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mr-2"></div>
            <span className="text-xs font-bold text-pink-400 tracking-wider">
              SHOWCASE
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Art Deco</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of stunning projects that showcase the perfect blend of 
            art deco elegance and neon gradient innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 to-purple-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-art-deco-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Art Deco Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-purple-700 flex items-center justify-center border-b-2 border-gray-600">
                <div className="text-6xl">{project.image}</div>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 mb-4 bg-gradient-to-br from-slate-700 to-purple-700 rounded-full border border-gray-500">
                  <span className="text-xs font-bold text-gray-300">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-gradient-to-br from-slate-700 to-purple-700 text-gray-300 rounded border border-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Art Deco Accent */}
                <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Art Deco Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '150+', label: 'Projects Completed', color: 'cyan' },
            { number: '50+', label: 'Happy Clients', color: 'purple' },
            { number: '5+', label: 'Years Experience', color: 'pink' },
            { number: '99%', label: 'Client Satisfaction', color: 'cyan' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-slate-700 to-purple-700 rounded-lg border-2 border-gray-500 group-hover:border-gray-400 transition-colors duration-300 flex items-center justify-center">
                  <span className={`text-2xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent`}>
                    {stat.number}
                  </span>
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 border-2 border-${stat.color}-400 rotate-45 animate-neon-pulse`} style={{ animationDelay: `${index * 0.2}s` }}></div>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{stat.label}</h4>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-2 border-gray-600 rounded-lg px-8 py-6 shadow-xl">
            <div className="text-left">
              <div className="text-sm font-light text-gray-400 mb-1">READY TO START YOUR PROJECT?</div>
              <div className="text-xl font-bold text-white">Let's Create Something Amazing</div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400">
              Start Project
            </button>
          </div>
        </div>
      </div>

      {/* Art Deco Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 border-2 border-${['cyan', 'purple', 'pink', 'cyan', 'purple', 'pink', 'cyan', 'purple', 'pink'][i]}-400 rotate-45 animate-neon-pulse`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 