import React from 'react';

export default function ArtShowcase() {
  const showcases = [
    {
      title: 'GEOMETRIC PATTERNS',
      description: 'Classic Art Deco geometric designs with modern neon effects',
      icon: '◢',
      gradient: 'from-purple-400 to-pink-400',
      animation: 'animate-deco-morph-1'
    },
    {
      title: 'NEON GRADIENTS',
      description: 'Vibrant color transitions that create stunning visual depth',
      icon: '◣',
      gradient: 'from-pink-400 to-orange-400',
      animation: 'animate-deco-morph-2'
    },
    {
      title: 'MODERN AESTHETICS',
      description: 'Contemporary design principles with classic Art Deco elegance',
      icon: '◤',
      gradient: 'from-orange-400 to-purple-400',
      animation: 'animate-deco-morph-3'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Deco Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#a855f7_0%,transparent_50%)] bg-[length:160px_160px] animate-deco-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:240px_240px] animate-deco-flow"></div>
      </div>

      {/* Deco Corner Elements */}
      <div className="absolute top-0 left-0 w-36 h-36 border-4 border-purple-400 rounded-lg animate-deco-pulse"></div>
      <div className="absolute top-0 right-0 w-36 h-36 border-4 border-pink-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-36 h-36 border-4 border-orange-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 border-4 border-purple-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            ART SHOWCASE
          </div>
          <div className="text-xl text-purple-300 font-light">
            Transforming Design Through Art Deco Innovation
          </div>
          
          {/* Deco Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-14 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-orange-400 rotate-45 animate-deco-spin"></div>
            <div className="w-14 h-1 bg-gradient-to-r from-pink-400 to-orange-400"></div>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {showcases.map((showcase, index) => (
            <div key={index} className="group relative">
              {/* Showcase Card */}
              <div className="relative bg-gradient-to-br from-purple-100/70 to-pink-100/70 backdrop-blur-xl border border-purple-300/50 rounded-lg p-8 h-full hover:border-purple-400/80 transition-all duration-300 transform hover:scale-105">
                {/* Deco Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-deco-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-pink-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-orange-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Showcase Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${showcase.gradient} rounded-lg text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 ${showcase.animation}`}>
                    {showcase.icon}
                  </div>
                </div>

                {/* Showcase Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {showcase.title}
                  </h3>
                  <p className="text-purple-600 leading-relaxed">
                    {showcase.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${showcase.gradient} rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Deco Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-400/60 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/0 via-purple-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-deco-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Deco Center Morph */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-purple-100/80 to-pink-100/80 backdrop-blur-xl border border-purple-300/50 rounded-lg p-12 max-w-5xl">
            {/* Deco Corner Decorations */}
            <div className="absolute top-8 left-8 w-12 h-12 border-3 border-purple-400 rounded-lg animate-deco-pulse"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-3 border-pink-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-3 border-orange-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-3 border-purple-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                ART DECO
              </span>
              <span className="text-gray-800"> SHOWCASE </span>
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
            </h3>
            
            <p className="text-lg text-purple-600 mb-8 leading-relaxed">
              Watch as classic Art Deco transforms into modern neon art. Our showcase demonstrates 
              the perfect balance between timeless elegance and contemporary innovation.
            </p>

            {/* Deco Morphing Elements */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className={`w-16 h-16 border-4 border-${['purple', 'pink', 'orange', 'purple', 'pink'][i]}-400 rounded-lg animate-deco-morph`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>

            {/* Deco Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { feature: 'GEOMETRIC PRECISION', color: 'purple' },
                { feature: 'NEON GRADIENTS', color: 'pink' },
                { feature: 'MODERN AESTHETICS', color: 'orange' }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className={`bg-gradient-to-br from-${item.color}-100/50 to-${item.color}-200/50 backdrop-blur-xl border border-${item.color}-300/50 rounded-lg p-4 hover:border-${item.color}-400 transition-all duration-300`}>
                    <div className={`text-sm font-bold text-${item.color}-600 uppercase tracking-wider`}>
                      {item.feature}
                    </div>
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Deco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-deco-float"
              style={{
                left: `${8 + (i % 5) * 20}%`,
                top: `${15 + Math.floor(i / 5) * 30}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${14 + Math.random() * 10}s`
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