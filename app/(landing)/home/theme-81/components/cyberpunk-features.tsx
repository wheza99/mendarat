import React from 'react';

export default function CyberpunkFeatures() {
  const features = [
    {
      icon: '◢',
      title: 'NEON NOIR AESTHETICS',
      description: 'Classic film noir elements with modern neon cyberpunk effects',
      gradient: 'from-gray-400 to-cyan-400'
    },
    {
      icon: '◣',
      title: 'CYBERPUNK TECHNOLOGY',
      description: 'Advanced futuristic technology with dark elegant design',
      gradient: 'from-cyan-400 to-blue-400'
    },
    {
      icon: '◤',
      title: 'DARK FUTURE DESIGN',
      description: 'Sophisticated dark aesthetics with neon highlights',
      gradient: 'from-blue-400 to-gray-400'
    },
    {
      icon: '◥',
      title: 'NOIR ELEGANCE',
      description: 'Timeless film noir style with cyberpunk innovation',
      gradient: 'from-gray-400 to-blue-400'
    },
    {
      icon: '◢',
      title: 'NEON HIGHLIGHTS',
      description: 'Vibrant neon effects against dark backgrounds',
      gradient: 'from-cyan-400 to-gray-400'
    },
    {
      icon: '◣',
      title: 'FUTURISTIC NOIR',
      description: 'Classic noir reimagined for the cyberpunk future',
      gradient: 'from-blue-400 to-cyan-400'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Noir Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#6b7280_0%,transparent_50%)] bg-[length:150px_150px] animate-noir-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:250px_250px] animate-noir-flow"></div>
      </div>

      {/* Noir Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-gray-400 rounded-lg animate-noir-pulse"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-4 border-cyan-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-blue-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-gray-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-gray-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            CYBERPUNK FEATURES
          </div>
          <div className="text-xl text-gray-300 font-light">
            Where Dark Elegance Meets Neon Innovation
          </div>
          
          {/* Noir Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-12 h-1 bg-gradient-to-r from-gray-400 to-cyan-400"></div>
            <div className="mx-4 w-3 h-3 border-2 border-blue-400 rotate-45 animate-noir-spin"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Feature Card */}
              <div className="relative bg-gradient-to-br from-gray-100/50 to-cyan-100/50 backdrop-blur-xl border border-gray-300/30 rounded-lg p-8 h-full hover:border-gray-400/60 transition-all duration-300 transform hover:scale-105">
                {/* Noir Corner Decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-2 border-gray-400 rounded-sm animate-noir-pulse"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-cyan-400 rounded-sm animate-noir-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-blue-400 rounded-sm animate-noir-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-gray-400 rounded-sm animate-noir-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Feature Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Noir Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gray-400/50 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-400/0 via-gray-400/20 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-noir-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Noir Center Element */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-gray-400 rounded-lg animate-noir-pulse"></div>
            <div className="absolute inset-2 w-16 h-16 border-4 border-cyan-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-4 w-8 h-8 border-4 border-blue-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Floating Noir Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-noir-float"
              style={{
                left: `${15 + (i % 3) * 35}%`,
                top: `${25 + Math.floor(i / 3) * 30}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${10 + Math.random() * 6}s`
              }}
            >
              <div className={`w-6 h-6 border-2 border-${['gray', 'cyan', 'blue'][i % 3]}-400 rounded-sm animate-noir-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 