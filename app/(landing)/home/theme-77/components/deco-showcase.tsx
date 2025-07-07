import React from 'react';

export default function DecoShowcase() {
  const showcases = [
    {
      title: 'GEOMETRIC PRECISION',
      description: 'Perfect symmetry and mathematical beauty in every element',
      icon: '◈',
      gradient: 'from-purple-400 to-pink-400',
      features: ['Symmetrical Design', 'Mathematical Beauty', 'Geometric Patterns']
    },
    {
      title: 'NEON ACCENTS',
      description: 'Vibrant neon effects that enhance classic Art Deco elements',
      icon: '◆',
      gradient: 'from-pink-400 to-cyan-400',
      features: ['Vibrant Colors', 'Modern Effects', 'Visual Impact']
    },
    {
      title: 'TIMELESS ELEGANCE',
      description: 'Classic Art Deco aesthetics with contemporary appeal',
      icon: '◇',
      gradient: 'from-cyan-400 to-purple-400',
      features: ['Classic Design', 'Modern Appeal', 'Timeless Beauty']
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#a855f7_0%,transparent_50%)] bg-[length:160px_160px] animate-art-deco-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-30deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:240px_240px] animate-art-deco-flow"></div>
      </div>

      {/* Art Deco Corner Elements */}
      <div className="absolute top-0 left-0 w-36 h-36 border-4 border-purple-400 rounded-lg animate-neon-pulse"></div>
      <div className="absolute top-0 right-0 w-36 h-36 border-4 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-36 h-36 border-4 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 border-4 border-purple-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            ART DECO SHOWCASE
          </div>
          <div className="text-xl text-purple-200 font-light">
            Where Classic Design Meets Modern Innovation
          </div>
          
          {/* Art Deco Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-14 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-cyan-400 rotate-45 animate-neon-spin"></div>
            <div className="w-14 h-1 bg-gradient-to-r from-pink-400 to-cyan-400"></div>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {showcases.map((showcase, index) => (
            <div key={index} className="group relative">
              {/* Showcase Card */}
              <div className="relative bg-gradient-to-br from-purple-900/70 to-pink-900/70 backdrop-blur-xl border border-purple-400/50 rounded-lg p-8 h-full hover:border-purple-400/90 transition-all duration-300 transform hover:scale-105">
                {/* Art Deco Corner Decorations */}
                <div className="absolute top-6 left-6 w-10 h-10 border-2 border-purple-400 rounded-sm animate-neon-pulse"></div>
                <div className="absolute top-6 right-6 w-10 h-10 border-2 border-pink-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-10 h-10 border-2 border-cyan-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-purple-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Showcase Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${showcase.gradient} rounded-lg text-white text-4xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {showcase.icon}
                  </div>
                </div>

                {/* Showcase Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {showcase.title}
                  </h3>
                  <p className="text-purple-200 mb-6 leading-relaxed">
                    {showcase.description}
                  </p>

                  {/* Showcase Features */}
                  <div className="space-y-3">
                    {showcase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-sm text-purple-200 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${showcase.gradient} rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>

              {/* Art Deco Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-400/70 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-art-deco-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Art Deco Center Gallery */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-xl border border-purple-400/60 rounded-lg p-16 max-w-5xl">
            {/* Art Deco Corner Decorations */}
            <div className="absolute top-12 left-12 w-16 h-16 border-3 border-purple-400 rounded-lg animate-neon-pulse"></div>
            <div className="absolute top-12 right-12 w-16 h-16 border-3 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-12 left-12 w-16 h-16 border-3 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-12 right-12 w-16 h-16 border-3 border-purple-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

            <h3 className="text-4xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                ART DECO
              </span>
              <span className="text-white"> GALLERY </span>
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                SHOWCASE
              </span>
            </h3>
            
            <p className="text-xl text-purple-200 mb-12 leading-relaxed">
              Discover the perfect harmony between classic Art Deco elegance and modern neon gradient technology. 
              Each design element showcases the timeless beauty of geometric precision enhanced by vibrant contemporary effects.
            </p>

            {/* Art Deco Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="group relative">
                  <div className={`bg-gradient-to-br from-${['purple', 'pink', 'cyan', 'purple'][i % 4]}-800/50 to-${['pink', 'cyan', 'purple', 'pink'][i % 4]}-900/50 backdrop-blur-xl border border-${['purple', 'pink', 'cyan', 'purple'][i % 4]}-400/50 rounded-lg p-6 hover:border-${['purple', 'pink', 'cyan', 'purple'][i % 4]}-400 transition-all duration-300`}>
                    <div className={`text-2xl font-bold text-${['purple', 'pink', 'cyan', 'purple'][i % 4]}-400 mb-2`}>
                      {['◈', '◆', '◇', '◉', '◊', '◈', '◆', '◇'][i]}
                    </div>
                    <div className="text-xs text-purple-200 font-light uppercase tracking-wider">
                      ART DECO {i + 1}
                    </div>
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${['purple', 'pink', 'cyan', 'purple'][i % 4]}-400 to-${['pink', 'cyan', 'purple', 'pink'][i % 4]}-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Art Deco Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10">EXPLORE GALLERY</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
              
              <button className="group relative px-10 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-purple-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">VIEW COLLECTION</span>
                <div className="absolute inset-0 bg-cyan-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Art Deco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-art-deco-float"
              style={{
                left: `${8 + (i % 5) * 20}%`,
                top: `${15 + Math.floor(i / 5) * 30}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${14 + Math.random() * 10}s`
              }}
            >
              <div className={`w-10 h-10 border-2 border-${['purple', 'pink', 'cyan'][i % 3]}-400 rounded-sm animate-neon-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 