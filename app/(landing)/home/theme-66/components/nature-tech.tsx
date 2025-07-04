import React from 'react';

export default function NatureTech() {
  const techFeatures = [
    {
      title: "BIOMIMETIC ALGORITHMS",
      description: "Neural networks inspired by root systems",
      visual: "🌳",
      stats: "1000x faster"
    },
    {
      title: "PHOTOSYNTHETIC COMPUTING",
      description: "Solar-powered processors mimicking leaves",
      visual: "🍃",
      stats: "Zero emissions"
    },
    {
      title: "ADAPTIVE MATERIALS",
      description: "Self-healing surfaces like plant regeneration",
      visual: "🌿",
      stats: "Infinite lifespan"
    },
    {
      title: "SWARM INTELLIGENCE",
      description: "Distributed systems modeled after forests",
      visual: "🌲",
      stats: "100% uptime"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100">
        {/* Organic Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 600" fill="none">
          <defs>
            <radialGradient id="networkGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          
          {/* Network Connections */}
          {Array.from({ length: 8 }, (_, i) => (
            <g key={i}>
              <circle
                cx={100 + (i % 4) * 250}
                cy={100 + Math.floor(i / 4) * 200}
                r="4"
                fill="url(#networkGradient)"
                className="animate-organic-pulse"
                style={{animationDelay: `${i * 0.3}s`}}
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-2">
            🌿 BIOMIMETIC SYSTEMS
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 bg-clip-text text-transparent mb-6">
            NATURE.TECH
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Where billions of years of natural evolution meets cutting-edge technology
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {techFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:scale-105"
            >
              {/* Organic Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Visual Icon */}
                <div className="text-5xl mb-4 group-hover:animate-organic-bounce">
                  {feature.visual}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-emerald-700 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="text-xs text-emerald-600 font-semibold bg-emerald-100/50 px-2 py-1 rounded-full">
                    {feature.stats}
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-organic-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group relative px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25">
            <span className="relative z-10 flex items-center">
              🌱 EXPERIENCE NATURE TECH
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-lime-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-organic-float-nature"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <div className="text-lg opacity-40">
              {['🌱', '🌿', '🍃', '🌾'][Math.floor(Math.random() * 4)]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 