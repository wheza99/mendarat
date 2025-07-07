import React from 'react';

export default function GlitchShowcase() {
  const showcases = [
    {
      title: "Holographic Prototype",
      description: "Our latest holographic prototype featuring advanced cyberpunk precision and color harmony.",
      image: "🎨",
      specs: ["99.9% Precision", "RGB Harmony", "Cyberpunk Design"],
      color: "emerald"
    },
    {
      title: "Cyberpunk Collection",
      description: "Classic cyberpunk design elements with contemporary holographic aesthetics and geometric elegance.",
      image: "✨",
      specs: ["2024 Style", "Modern Integration", "Geometric Patterns"],
      color: "teal"
    },
    {
      title: "Holographic Animation Suite",
      description: "Dynamic holographic animations with smooth transitions and geometric precision for modern applications.",
      image: "⚡",
      specs: ["60 FPS", "Smooth Transitions", "Holographic Effects"],
      color: "cyan"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#10b981_0%,transparent_50%)] bg-[length:100px_100px] animate-holographic-grid"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-emerald-800/80 to-teal-800/80 backdrop-blur-xl border border-emerald-400 rounded-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-2 animate-holographic-pulse"></div>
            <span className="text-sm font-bold text-emerald-400 tracking-wider">
              GLITCH SHOWCASE
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Cyberpunk</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our latest cyberpunk innovations and holographic marvels. 
            Each showcase represents the perfect fusion of geometric precision and holographic aesthetics.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {showcases.map((showcase, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-emerald-800/60 to-teal-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-holographic-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Showcase Image */}
              <div className="relative mb-6">
                <div className={`w-24 h-24 bg-gradient-to-br from-${showcase.color}-400 to-${showcase.color}-600 rounded-xl flex items-center justify-center text-4xl shadow-lg animate-holographic-pulse`}>
                  {showcase.image}
                </div>
                <div className={`absolute -top-4 -right-4 w-8 h-8 border-2 border-${showcase.color}-400 rounded-lg animate-holographic-spin`}></div>
                <div className={`absolute -bottom-4 -left-4 w-6 h-6 border-2 border-${showcase.color}-400 rounded-lg animate-holographic-pulse`}></div>
              </div>

              {/* Showcase Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {showcase.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {showcase.description}
                </p>

                {/* Specs List */}
                <div className="space-y-2 mb-6">
                  {showcase.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r from-${showcase.color}-400 to-${showcase.color}-600 rounded-full mr-3 animate-holographic-pulse`}></div>
                      <span className="text-sm text-gray-300 font-light">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <button className={`group/btn relative px-6 py-3 bg-gradient-to-r from-${showcase.color}-400 to-${showcase.color}-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-${showcase.color}-400`}>
                  <span className="relative z-10">View Details</span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-${showcase.color}-600 to-${showcase.color}-800 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                </button>
              </div>

              {/* Hover Effects */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${showcase.color}-400/5 to-${showcase.color}-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Holographic Particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-${showcase.color}-400 rounded-full animate-holographic-particle`}
                    style={{
                      left: `${i * 3}px`,
                      top: `${i * 3}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '99.9%', label: 'Precision', color: 'emerald' },
            { number: '50K', label: 'Holograms', color: 'teal' },
            { number: '60 FPS', label: 'Animation', color: 'cyan' },
            { number: '24/7', label: 'Hologram Power', color: 'emerald' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2 animate-holographic-glow`}>
                {stat.number}
              </div>
              <div className="text-sm font-light text-gray-400 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-12 h-12 border-2 border-emerald-400 rounded-lg animate-holographic-pulse"></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 border-2 border-teal-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-8 w-12 h-12 border-2 border-cyan-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-8 w-12 h-12 border-2 border-emerald-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Holographic Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent animate-holographic-scan"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-teal-400/10 to-transparent animate-holographic-scan" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
} 