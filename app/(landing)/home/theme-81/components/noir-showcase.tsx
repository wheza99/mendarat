import React from 'react';

export default function NoirShowcase() {
  const showcases = [
    {
      title: 'FILM NOIR ELEMENTS',
      description: 'Classic film noir aesthetics with modern neon effects',
      icon: '◢',
      gradient: 'from-gray-400 to-cyan-400',
      animation: 'animate-noir-morph-1'
    },
    {
      title: 'CYBERPUNK TECHNOLOGY',
      description: 'Advanced futuristic technology with dark aesthetics',
      icon: '◣',
      gradient: 'from-cyan-400 to-blue-400',
      animation: 'animate-noir-morph-2'
    },
    {
      title: 'NEON HIGHLIGHTS',
      description: 'Vibrant neon effects against dark backgrounds',
      icon: '◤',
      gradient: 'from-blue-400 to-gray-400',
      animation: 'animate-noir-morph-3'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Noir Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#6b7280_0%,transparent_50%)] bg-[length:160px_160px] animate-noir-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:240px_240px] animate-noir-flow"></div>
      </div>

      {/* Noir Corner Elements */}
      <div className="absolute top-0 left-0 w-36 h-36 border-4 border-gray-400 rounded-lg animate-noir-pulse"></div>
      <div className="absolute top-0 right-0 w-36 h-36 border-4 border-cyan-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-36 h-36 border-4 border-blue-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 border-4 border-gray-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-gray-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            NOIR SHOWCASE
          </div>
          <div className="text-xl text-gray-300 font-light">
            Transforming Design Through Noir Innovation
          </div>
          
          {/* Noir Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-14 h-1 bg-gradient-to-r from-gray-400 to-cyan-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-blue-400 rotate-45 animate-noir-spin"></div>
            <div className="w-14 h-1 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {showcases.map((showcase, index) => (
            <div key={index} className="group relative">
              {/* Showcase Card */}
              <div className="relative bg-gradient-to-br from-gray-100/70 to-cyan-100/70 backdrop-blur-xl border border-gray-300/50 rounded-lg p-8 h-full hover:border-gray-400/80 transition-all duration-300 transform hover:scale-105">
                {/* Noir Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-gray-400 rounded-sm animate-noir-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-cyan-400 rounded-sm animate-noir-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-blue-400 rounded-sm animate-noir-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-gray-400 rounded-sm animate-noir-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Showcase Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${showcase.gradient} rounded-lg text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 ${showcase.animation}`}>
                    {showcase.icon}
                  </div>
                </div>

                {/* Showcase Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-600 transition-colors duration-300">
                    {showcase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {showcase.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${showcase.gradient} rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Noir Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gray-400/60 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-400/0 via-gray-400/30 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-noir-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Noir Center Morph */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-gray-100/80 to-cyan-100/80 backdrop-blur-xl border border-gray-300/50 rounded-lg p-12 max-w-5xl">
            {/* Noir Corner Decorations */}
            <div className="absolute top-8 left-8 w-12 h-12 border-3 border-gray-400 rounded-lg animate-noir-pulse"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-3 border-cyan-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-3 border-blue-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-3 border-gray-400 rounded-lg animate-noir-pulse" style={{ animationDelay: '1.5s' }}></div>

            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-gray-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                NEON NOIR
              </span>
              <span className="text-gray-800"> SHOWCASE </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-gray-400 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Watch as classic film noir transforms into modern cyberpunk technology. Our showcase demonstrates 
              the perfect balance between dark elegance and neon innovation.
            </p>

            {/* Noir Morphing Elements */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className={`w-16 h-16 border-4 border-${['gray', 'cyan', 'blue', 'gray', 'cyan'][i]}-400 rounded-lg animate-noir-morph`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>

            {/* Noir Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { feature: 'FILM NOIR ELEMENTS', color: 'gray' },
                { feature: 'CYBERPUNK TECH', color: 'cyan' },
                { feature: 'NEON HIGHLIGHTS', color: 'blue' }
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

        {/* Floating Noir Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-noir-float"
              style={{
                left: `${8 + (i % 5) * 20}%`,
                top: `${15 + Math.floor(i / 5) * 30}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${14 + Math.random() * 10}s`
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