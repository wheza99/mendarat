import React from 'react';

export default function PrismShowcase() {
  const showcaseItems = [
    {
      title: "Aurora Symphony",
      description: "Experience the dance of northern lights in digital form",
      icon: "🌌",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Glass Harmony",
      description: "Perfect balance of transparency and visual impact",
      icon: "💠",
      gradient: "from-cyan-400 to-teal-400"
    },
    {
      title: "Prismatic Wonder",
      description: "Colors that shift and flow like light through crystal",
      icon: "🔆",
      gradient: "from-pink-400 to-purple-400"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Prismatic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-conic from-purple-500/15 via-pink-500/15 to-cyan-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-conic from-cyan-500/15 via-teal-500/15 to-purple-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              PRISMATIC SHOWCASE
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Witness the spectacular fusion of aurora effects and crystal-clear design elements
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Prismatic Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Icon with Prismatic Glow */}
              <div className="text-7xl mb-8 text-center relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <span className="relative z-10">{item.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className={`text-2xl font-semibold mb-4 text-center bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent group-hover:from-white group-hover:to-white/80 transition-all duration-300`}>
                {item.title}
              </h3>
              
              <p className="text-white/70 text-center leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {item.description}
              </p>

              {/* Glass Reflection */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Aurora Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2 animate-pulse">∞</div>
            <div className="text-white/70">Aurora Colors</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text mb-2 animate-pulse">100%</div>
            <div className="text-white/70">Glass Clarity</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-2 animate-pulse">360°</div>
            <div className="text-white/70">Prismatic View</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text mb-2 animate-pulse">✨</div>
            <div className="text-white/70">Magic Factor</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/30 text-white font-semibold text-lg rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <span className="relative z-10">Experience the Aurora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Floating Prismatic Elements */}
      <div className="absolute top-20 right-10 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl animate-bounce transform rotate-45"></div>
      <div className="absolute bottom-20 left-10 w-8 h-8 bg-white/15 backdrop-blur-sm border border-white/25 rounded-lg animate-bounce transform -rotate-12"></div>
      <div className="absolute top-1/2 right-5 w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full animate-bounce"></div>
    </section>
  );
} 