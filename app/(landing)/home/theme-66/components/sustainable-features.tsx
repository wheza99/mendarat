import React from 'react';

export default function SustainableFeatures() {
  const features = [
    {
      category: "ENERGY",
      title: "Solar-Powered Architecture",
      description: "100% renewable energy systems that adapt to natural light cycles",
      benefit: "Zero carbon footprint",
      icon: "☀️",
      color: "from-yellow-400 to-amber-500"
    },
    {
      category: "MATERIALS",
      title: "Bio-Degradable Components",
      description: "Hardware that naturally decomposes back into earth-safe materials",
      benefit: "Circular lifecycle",
      icon: "🌱",
      color: "from-emerald-400 to-green-500"
    },
    {
      category: "EFFICIENCY",
      title: "Adaptive Resource Usage",
      description: "Smart systems that minimize waste through natural optimization",
      benefit: "90% less resource consumption",
      icon: "♻️",
      color: "from-green-400 to-emerald-500"
    },
    {
      category: "GROWTH",
      title: "Self-Expanding Networks",
      description: "Infrastructure that grows organically based on demand",
      benefit: "Infinite scalability",
      icon: "🌿",
      color: "from-lime-400 to-green-500"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-emerald-50 to-green-100">
        {/* Organic Wave Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" fill="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Flowing Wave Paths */}
          <path d="M0,400 Q300,200 600,350 Q900,500 1200,300" 
                stroke="url(#waveGradient)" 
                strokeWidth="3" 
                fill="none" 
                className="animate-organic-wave" />
          <path d="M0,500 Q200,300 500,450 Q800,600 1200,400" 
                stroke="url(#waveGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-organic-wave-reverse" />
          <path d="M0,300 Q400,100 800,250 Q1000,400 1200,200" 
                stroke="url(#waveGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-organic-wave-slow" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-semibold text-sm tracking-wider uppercase mb-2">
            🌍 SUSTAINABLE TECHNOLOGY
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 bg-clip-text text-transparent mb-6">
            ECO FEATURES
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Revolutionary features designed to heal the planet while advancing technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:scale-105"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Category Badge */}
                <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {feature.category}
                </div>
                
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:animate-organic-bounce">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-green-700 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {feature.description}
                </p>

                {/* Benefit Highlight */}
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-organic-pulse"></div>
                  <span className="text-green-600 font-semibold">{feature.benefit}</span>
                </div>
              </div>

              {/* Organic Corner Decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 opacity-30">
                <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                  <path d="M0,32 Q16,0 32,16 Q48,32 32,48 Q16,64 0,32" fill="currentColor" className="text-green-300" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30 rotate-180">
                <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                  <path d="M0,32 Q16,0 32,16 Q48,32 32,48 Q16,64 0,32" fill="currentColor" className="text-green-300" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Sustainability Metrics */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-green-200/50 mb-16">
          <h3 className="text-3xl font-bold text-center text-green-700 mb-8">PLANETARY IMPACT</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "50M",
                unit: "TONS CO₂",
                label: "CARBON SAVED",
                icon: "🌍"
              },
              {
                metric: "99.8%",
                unit: "EFFICIENCY",
                label: "ENERGY OPTIMIZATION",
                icon: "⚡"
              },
              {
                metric: "∞",
                unit: "LIFESPAN",
                label: "REGENERATIVE CYCLES",
                icon: "♻️"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:animate-organic-bounce">
                  {item.icon}
                </div>
                <div className="relative mb-4">
                  <div className="text-4xl font-bold text-green-600 group-hover:text-emerald-600 transition-colors duration-300">
                    {item.metric}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{item.unit}</div>
                </div>
                <div className="text-sm text-gray-600 font-semibold tracking-wider uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eco Benefits Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: "🌱", title: "CARBON NEGATIVE", desc: "Removes more CO₂ than produced" },
            { icon: "💧", title: "WATER POSITIVE", desc: "Generates clean water as byproduct" },
            { icon: "🌿", title: "BIODIVERSITY BOOST", desc: "Supports ecosystem regeneration" },
            { icon: "🔄", title: "CIRCULAR DESIGN", desc: "Zero waste, infinite recycling" }
          ].map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/40 backdrop-blur-sm border border-green-200/40 rounded-2xl p-6 text-center hover:bg-white/60 transition-all duration-300"
            >
              <div className="text-3xl mb-3 group-hover:animate-organic-bounce">
                {benefit.icon}
              </div>
              <h4 className="text-sm font-bold text-green-700 mb-2">
                {benefit.title}
              </h4>
              <p className="text-xs text-gray-600">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group relative px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25">
            <span className="relative z-10 flex items-center">
              🌱 BUILD SUSTAINABLE FUTURE
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-lime-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Floating Eco Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-organic-float-eco"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          >
            <div className="w-4 h-4 bg-gradient-to-br from-green-400/40 to-emerald-500/40 rounded-full">
              <div className="w-2 h-2 bg-green-500/60 rounded-full animate-organic-pulse m-1"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 