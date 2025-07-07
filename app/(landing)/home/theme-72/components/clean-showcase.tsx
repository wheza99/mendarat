import React from 'react';

export default function CleanShowcase() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A minimalist e-commerce solution with clean design and seamless user experience.',
      image: '🛒',
      color: 'blue'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure and intuitive banking application with holographic UI elements.',
      image: '🏦',
      color: 'purple'
    },
    {
      title: 'Design System',
      category: 'UI/UX Design',
      description: 'Comprehensive design system with holographic components and minimal aesthetics.',
      image: '🎨',
      color: 'pink'
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Holographic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean White Base */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Subtle Holographic Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:150px_1px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:1px_150px]"></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 left-1/5 w-12 h-12 border border-gray-200/30 rounded-lg animate-holographic-float"></div>
        <div className="absolute top-1/3 right-1/5 w-8 h-8 border border-gray-200/30 rounded-full animate-holographic-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-gray-200/30 rounded-lg animate-holographic-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></div>
            <span className="text-xs font-light text-gray-600 tracking-wider">
              SHOWCASE
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            <span className="block">Clean</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest projects that showcase the perfect balance of 
            minimalist design and holographic innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-holographic-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Holographic Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-400/5 to-${project.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                <div className="text-6xl">{project.image}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Project Content */}
              <div className="relative z-10 p-8">
                <div className="mb-4">
                  <div className="text-sm font-light text-gray-500 mb-2 tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Holographic Accent */}
                <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-${project.color}-400 to-${project.color}-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Holographic Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed', color: 'blue' },
              { number: '50+', label: 'Happy Clients', color: 'purple' },
              { number: '99.9%', label: 'Client Satisfaction', color: 'pink' },
              { number: '24/7', label: 'Support Available', color: 'blue' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-4xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2 animate-holographic-glow`}>
                  {stat.number}
                </div>
                <div className="text-sm font-light text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-left">
              <div className="text-sm font-light text-gray-500 mb-1">READY TO START YOUR PROJECT?</div>
              <div className="text-lg font-medium text-gray-900">Let's create something amazing together</div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Project
            </button>
          </div>
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-holographic-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 