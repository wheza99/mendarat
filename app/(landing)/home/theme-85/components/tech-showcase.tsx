import React from 'react';

export default function TechShowcase() {
  const showcaseItems = [
    {
      title: "Holographic Interface",
      description: "3D projection technology with gesture control",
      image: "🔮",
      color: "indigo"
    },
    {
      title: "Quantum Processor",
      description: "Next-generation computing with quantum bits",
      image: "⚛️",
      color: "purple"
    },
    {
      title: "Neural Network",
      description: "AI-powered brain-computer interface",
      image: "🧠",
      color: "pink"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border border-pink-400/50 rounded-2xl bg-pink-800/20 backdrop-blur-sm mb-6">
          <span className="text-pink-300 font-mono text-sm tracking-wider">SHOWCASE</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
          <span className="text-pink-400">TECH</span>
          <span className="text-indigo-400"> SHOWCASE</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover the latest in holographic and quantum technology
        </p>
      </div>

      {/* Showcase Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="relative group p-8 border border-pink-400/30 rounded-2xl bg-pink-800/20 backdrop-blur-sm hover:border-pink-400/50 transition-all duration-300"
            >
              {/* Glass Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-pink-400/50 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-indigo-400/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-purple-400/50 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-pink-400/50 rounded-br-2xl"></div>

              {/* Image/Icon */}
              <div className={`text-6xl mb-6 text-${item.color}-400 text-center`}>
                {item.image}
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold text-${item.color}-400 mb-4 font-mono text-center`}>
                {item.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {item.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-pink-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-pink-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-2 border-pink-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 