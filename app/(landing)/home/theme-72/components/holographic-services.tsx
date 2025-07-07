import React from 'react';

export default function HolographicServices() {
  const services = [
    {
      title: 'Web Development',
      description: 'Clean, modern websites built with cutting-edge technology and minimalist design principles.',
      icon: '💻',
      features: ['Responsive Design', 'Performance Optimized', 'SEO Friendly'],
      color: 'blue'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications with intuitive user experiences.',
      icon: '📱',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance'],
      color: 'purple'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality seamlessly.',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping'],
      color: 'pink'
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Holographic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean White Base */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Holographic Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:300px_300px] animate-holographic-scan"></div>
        </div>

        {/* Floating Holographic Prisms */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-lg animate-holographic-float"></div>
        <div className="absolute top-1/3 right-1/6 w-16 h-16 bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10 rounded-full animate-holographic-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-pink-400/10 via-blue-400/10 to-purple-400/10 rounded-lg animate-holographic-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></div>
            <span className="text-xs font-light text-gray-600 tracking-wider">
              SERVICES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            <span className="block">Holographic</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge digital solutions with a minimalist approach. 
            Clean code, beautiful design, exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-holographic-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Holographic Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-400/5 to-${service.color}-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Holographic Accent */}
                <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-${service.color}-400 to-${service.color}-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Holographic Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Process</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results with minimal complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
              { step: '02', title: 'Design', description: 'Creating clean, minimalist solutions' },
              { step: '03', title: 'Development', description: 'Building with cutting-edge technology' },
              { step: '04', title: 'Launch', description: 'Deploying and optimizing for success' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center group-hover:border-gray-300 transition-colors duration-300">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {process.step}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-gray-200 to-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {process.title}
                </h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {Array.from({ length: 7 }, (_, i) => (
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