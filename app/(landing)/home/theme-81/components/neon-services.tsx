import React from 'react';

export default function NeonServices() {
  const services = [
    {
      title: 'NEON NOIR DESIGN',
      description: 'Classic film noir aesthetics with modern neon effects',
      icon: '◢',
      gradient: 'from-gray-400 via-cyan-400 to-blue-400',
      features: ['Film Noir Elements', 'Neon Highlights', 'Dark Elegance']
    },
    {
      title: 'CYBERPUNK TECHNOLOGY',
      description: 'Advanced futuristic technology with dark aesthetics',
      icon: '◣',
      gradient: 'from-cyan-400 via-blue-400 to-gray-400',
      features: ['Future Tech', 'Dark Design', 'Neon Innovation']
    },
    {
      title: 'DARK FUTURE SOLUTIONS',
      description: 'Sophisticated dark design with cyberpunk technology',
      icon: '◤',
      gradient: 'from-blue-400 via-gray-400 to-cyan-400',
      features: ['Dark Aesthetics', 'Future Solutions', 'Neon Technology']
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Noir Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#6b7280_0%,transparent_50%)] bg-[length:180px_180px] animate-noir-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:280px_280px] animate-noir-flow"></div>
      </div>

      {/* Noir Corner Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 border-4 border-gray-400 rounded-lg animate-noir-pulse"></div>
      <div className="absolute top-0 right-0 w-40 h-40 border-4 border-cyan-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 border-4 border-blue-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-4 border-gray-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-gray-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            NEON SERVICES
          </div>
          <div className="text-xl text-gray-300 font-light">
            Noir Elegance with Cyberpunk Innovation
          </div>
          
          {/* Noir Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-cyan-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-blue-400 rotate-45 animate-noir-spin"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-gray-100/60 to-cyan-100/60 backdrop-blur-xl border border-gray-300/40 rounded-lg p-8 h-full hover:border-gray-400/80 transition-all duration-300 transform hover:scale-105">
                {/* Noir Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-gray-400 rounded-sm animate-noir-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-cyan-400 rounded-sm animate-noir-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-blue-400 rounded-sm animate-noir-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-gray-400 rounded-sm animate-noir-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Service Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-lg text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-cyan-400 rounded-full"></div>
                        <span className="text-sm text-gray-600 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Noir Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gray-400/60 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-400/0 via-gray-400/30 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-noir-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Noir Center Showcase */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-gray-100/80 to-cyan-100/80 backdrop-blur-xl border border-gray-300/50 rounded-lg p-12 max-w-4xl">
            {/* Noir Corner Decorations */}
            <div className="absolute top-8 left-8 w-12 h-12 border-3 border-gray-400 rounded-lg animate-noir-pulse"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-3 border-cyan-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-3 border-blue-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-3 border-gray-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1.5s' }}></div>

            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-gray-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                NEON NOIR
              </span>
              <span className="text-gray-800"> MEETS </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-gray-400 bg-clip-text text-transparent">
                CYBERPUNK
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the perfect fusion of classic film noir elegance with cutting-edge cyberpunk technology. 
              Our designs combine timeless dark aesthetics with neon innovation.
            </p>

            {/* Noir Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '∞', label: 'POSSIBILITIES', color: 'gray' },
                { number: '2024', label: 'FUTURE TECH', color: 'cyan' },
                { number: '100%', label: 'NOIR STYLE', color: 'blue' }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className={`bg-gradient-to-br from-${stat.color}-100/50 to-${stat.color}-200/50 backdrop-blur-xl border border-${stat.color}-300/50 rounded-lg p-4 hover:border-${stat.color}-400 transition-all duration-300`}>
                    <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 font-light uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Noir Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-noir-float"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            >
              <div className={`w-8 h-8 border-2 border-${['gray', 'cyan', 'blue'][i % 3]}-400 rounded-sm animate-noir-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 