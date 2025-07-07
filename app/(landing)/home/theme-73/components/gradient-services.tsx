import React from 'react';

export default function GradientServices() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern web applications with art deco design principles and neon gradient aesthetics.',
      icon: '🌐',
      gradient: 'from-cyan-400 to-blue-500',
      features: ['Responsive Design', 'Performance Optimized', 'SEO Friendly']
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications with stunning neon visual effects.',
      icon: '📱',
      gradient: 'from-purple-400 to-pink-500',
      features: ['iOS & Android', 'Cross Platform', 'Native Performance']
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful user interfaces that combine art deco elegance with modern neon gradients.',
      icon: '🎨',
      gradient: 'from-pink-400 to-red-500',
      features: ['User Centered', 'Art Deco Style', 'Neon Gradients']
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Art Deco Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Art Deco Geometric Patterns */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:200px_200px] animate-art-deco-scan"></div>
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:300px_300px] animate-art-deco-scan-reverse"></div>
        </div>

        {/* Floating Art Deco Elements */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 border-2 border-cyan-400 rotate-45 animate-neon-pulse"></div>
        <div className="absolute top-1/3 right-1/6 w-16 h-16 border-2 border-purple-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-pink-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-2 border-purple-400 rounded-lg shadow-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"></div>
            <span className="text-xs font-bold text-purple-400 tracking-wider">
              SERVICES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Gradient</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional services crafted with art deco precision and neon gradient innovation. 
            Every project is a masterpiece of design and functionality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 to-purple-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-art-deco-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Art Deco Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-slate-700 to-purple-700 rounded-lg border-2 border-gray-500 group-hover:border-gray-400 transition-colors duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Art Deco Accent */}
                <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Art Deco Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-slate-800/60 to-purple-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-lg p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Our Art Deco Process</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Every project follows our proven art deco methodology, ensuring timeless design with modern neon innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision' },
              { step: '02', title: 'Design', desc: 'Art deco concepts & neon gradients' },
              { step: '03', title: 'Development', desc: 'Building with precision' },
              { step: '04', title: 'Launch', desc: 'Deploying your masterpiece' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-slate-700 to-purple-700 rounded-lg border-2 border-gray-500 group-hover:border-gray-400 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{process.step}</span>
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 border-2 border-${['cyan', 'purple', 'pink', 'cyan'][index]}-400 rotate-45 animate-neon-pulse`} style={{ animationDelay: `${index * 0.2}s` }}></div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{process.title}</h4>
                <p className="text-sm text-gray-400">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Art Deco Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-3">
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 border-2 border-${['cyan', 'purple', 'pink', 'cyan', 'purple', 'pink', 'cyan'][i]}-400 rotate-45 animate-neon-pulse`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 