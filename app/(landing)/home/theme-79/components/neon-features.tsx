import React from 'react';

export default function NeonFeatures() {
  const features = [
    {
      icon: '◢',
      title: 'ART DECO ELEMENTS',
      description: 'Classic geometric patterns and symmetrical designs with modern neon effects',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: '◣',
      title: 'NEON GRADIENTS',
      description: 'Vibrant color transitions that create stunning visual depth and elegance',
      gradient: 'from-pink-400 to-orange-400'
    },
    {
      icon: '◤',
      title: 'GEOMETRIC PRECISION',
      description: 'Perfect symmetry and mathematical beauty in every design element',
      gradient: 'from-orange-400 to-purple-400'
    },
    {
      icon: '◥',
      title: 'MODERN AESTHETICS',
      description: 'Contemporary design principles seamlessly integrated with classic Art Deco',
      gradient: 'from-purple-400 to-orange-400'
    },
    {
      icon: '◢',
      title: 'VIBRANT COLORS',
      description: 'Bold, energetic color palette that creates an engaging visual experience',
      gradient: 'from-pink-400 to-purple-400'
    },
    {
      icon: '◣',
      title: 'TIMELESS DESIGN',
      description: 'Classic Art Deco principles reimagined for the modern digital age',
      gradient: 'from-orange-400 to-pink-400'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Deco Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#a855f7_0%,transparent_50%)] bg-[length:150px_150px] animate-deco-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:250px_250px] animate-deco-flow"></div>
      </div>

      {/* Deco Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-purple-400 rounded-lg animate-deco-pulse"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-4 border-pink-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-orange-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-purple-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            NEON FEATURES
          </div>
          <div className="text-xl text-purple-300 font-light">
            Where Classic Meets Contemporary
          </div>
          
          {/* Deco Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="mx-4 w-3 h-3 border-2 border-orange-400 rotate-45 animate-deco-spin"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-orange-400"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Feature Card */}
              <div className="relative bg-gradient-to-br from-purple-100/50 to-pink-100/50 backdrop-blur-xl border border-purple-300/30 rounded-lg p-8 h-full hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105">
                {/* Deco Corner Decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-2 border-purple-400 rounded-sm animate-deco-pulse"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-pink-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-orange-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-purple-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Feature Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-purple-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Deco Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-400/50 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-deco-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Deco Center Element */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-purple-400 rounded-lg animate-deco-pulse"></div>
            <div className="absolute inset-2 w-16 h-16 border-4 border-pink-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-4 w-8 h-8 border-4 border-orange-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Floating Deco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-deco-float"
              style={{
                left: `${15 + (i % 3) * 35}%`,
                top: `${25 + Math.floor(i / 3) * 30}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${10 + Math.random() * 6}s`
              }}
            >
              <div className={`w-6 h-6 border-2 border-${['purple', 'pink', 'orange'][i % 3]}-400 rounded-sm animate-deco-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 