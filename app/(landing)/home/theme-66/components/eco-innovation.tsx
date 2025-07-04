import React from 'react';

export default function EcoInnovation() {
  const innovations = [
    {
      icon: "🌱",
      title: "BIO-INSPIRED AI",
      description: "Artificial intelligence that learns from nature's billions of years of evolution and optimization.",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: "🔋",
      title: "ORGANIC ENERGY",
      description: "Revolutionary energy systems that harness and store power using bio-mimetic processes.",
      color: "from-green-500 to-lime-600"
    },
    {
      icon: "🌿",
      title: "LIVING MATERIALS",
      description: "Self-healing, adaptive materials inspired by plant growth and natural regeneration.",
      color: "from-lime-500 to-emerald-600"
    },
    {
      icon: "🌍",
      title: "EARTH HARMONY",
      description: "Technology that works in perfect balance with natural ecosystems and planetary health.",
      color: "from-green-600 to-emerald-700"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-green-50 to-lime-50">
        {/* Organic Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            <defs>
              <pattern id="organicPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#059669" opacity="0.5"/>
                <path d="M10,20 Q20,10 30,20 Q20,30 10,20" fill="#10b981" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#organicPattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative">
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-2">
              🌿 SUSTAINABLE INNOVATION
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent mb-6">
              ECO BREAKTHROUGH
            </h2>
            <div className="absolute inset-0 text-5xl sm:text-6xl font-bold text-emerald-100/50 blur-lg animate-organic-glow">
              ECO BREAKTHROUGH
            </div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Pioneering the future where technology grows naturally, sustainably, and intelligently
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/70 backdrop-blur-sm border border-emerald-200/50 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:scale-105"
            >
              {/* Organic Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${innovation.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:animate-organic-bounce">
                  {innovation.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-emerald-700 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {innovation.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  {innovation.description}
                </p>

                {/* Growth Indicator */}
                <div className="mt-6 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-organic-pulse"></div>
                  <div className="text-sm text-emerald-600 font-medium">Growing Innovation</div>
                </div>
              </div>

              {/* Organic Border Decoration */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-emerald-300/50 rounded-tl-2xl group-hover:border-emerald-500/70 transition-colors duration-300"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-emerald-300/50 rounded-tr-2xl group-hover:border-emerald-500/70 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-emerald-300/50 rounded-bl-2xl group-hover:border-emerald-500/70 transition-colors duration-300"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-emerald-300/50 rounded-br-2xl group-hover:border-emerald-500/70 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Innovation Metrics */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/50">
          <h3 className="text-3xl font-bold text-center text-emerald-700 mb-8">GROWTH METRICS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "200%", label: "EFFICIENCY BOOST", trend: "↗️" },
              { metric: "Zero", label: "CARBON FOOTPRINT", trend: "🌱" },
              { metric: "∞", label: "RENEWABLE CYCLES", trend: "♻️" },
              { metric: "100%", label: "BIO-COMPATIBLE", trend: "🌿" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="text-4xl font-bold text-emerald-600 group-hover:text-green-600 transition-colors duration-300 animate-organic-pulse">
                    {item.metric}
                  </div>
                  <div className="absolute inset-0 text-4xl font-bold text-emerald-200/50 blur-sm animate-organic-glow">
                    {item.metric}
                  </div>
                </div>
                <div className="text-2xl mb-2 group-hover:animate-organic-bounce">
                  {item.trend}
                </div>
                <div className="text-sm text-gray-600 font-semibold tracking-wider uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group relative px-12 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25">
            <span className="relative z-10 flex items-center">
              🌱 JOIN THE ECO REVOLUTION
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-lime-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Floating Organic Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-organic-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          >
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-400/30 to-green-500/30 rounded-full backdrop-blur-sm"></div>
          </div>
        ))}
      </div>
    </section>
  );
} 