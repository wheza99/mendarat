import React from 'react';

export default function RetroGrid() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black">
        {/* Main Perspective Grid */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffff00" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            {/* Horizontal Lines */}
            {Array.from({ length: 20 }, (_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 5}
                x2="100"
                y2={i * 5}
                stroke="url(#gridGradient)"
                strokeWidth="0.2"
                className="animate-retro-grid-pulse"
                style={{animationDelay: `${i * 0.1}s`}}
              />
            ))}
            
            {/* Vertical Lines */}
            {Array.from({ length: 20 }, (_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 5}
                y1="0"
                x2={i * 5}
                y2="100"
                stroke="url(#gridGradient)"
                strokeWidth="0.2"
                className="animate-retro-grid-pulse"
                style={{animationDelay: `${i * 0.1}s`}}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">
            RETRO GRID
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our digital matrix where every pixel tells a story of the future
          </p>
        </div>

        {/* Grid Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - 3D Grid Visualization */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-b from-purple-900/20 to-black/40 border border-cyan-400/30 rounded-lg overflow-hidden">
              {/* 3D Perspective Grid */}
              <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="perspectiveGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#00ffff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Perspective Grid Lines */}
                {Array.from({ length: 15 }, (_, i) => (
                  <g key={`perspective-${i}`}>
                    {/* Horizontal lines getting closer together */}
                    <line
                      x1="0"
                      y1={200 + (i * 5) * (1 - i * 0.05)}
                      x2="400"
                      y2={200 + (i * 5) * (1 - i * 0.05)}
                      stroke="url(#perspectiveGradient)"
                      strokeWidth="1"
                      className="animate-retro-perspective"
                      style={{animationDelay: `${i * 0.2}s`}}
                    />
                    
                    {/* Vertical lines converging to center */}
                    <line
                      x1={200 - (100 - i * 6)}
                      y1="300"
                      x2={200 - (100 - i * 10)}
                      y2="200"
                      stroke="url(#perspectiveGradient)"
                      strokeWidth="1"
                      className="animate-retro-perspective"
                      style={{animationDelay: `${i * 0.15}s`}}
                    />
                    <line
                      x1={200 + (100 - i * 6)}
                      y1="300"
                      x2={200 + (100 - i * 10)}
                      y2="200"
                      stroke="url(#perspectiveGradient)"
                      strokeWidth="1"
                      className="animate-retro-perspective"
                      style={{animationDelay: `${i * 0.15}s`}}
                    />
                  </g>
                ))}
                
                {/* Central horizon line */}
                <line
                  x1="0"
                  y1="200"
                  x2="400"
                  y2="200"
                  stroke="#ffff00"
                  strokeWidth="2"
                  className="animate-retro-pulse"
                />
              </svg>
              
              {/* Floating Elements */}
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 border border-cyan-400 animate-retro-float-3d"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                    transform: `perspective(500px) rotateX(${i * 45}deg)`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="space-y-8">
            {[
              {
                title: "MATRIX NAVIGATION",
                description: "Advanced pathfinding algorithms through our digital landscape with real-time optimization.",
                icon: "🎯"
              },
              {
                title: "GRID SYNCHRONIZATION",
                description: "Seamless integration between multiple digital realms and virtual environments.",
                icon: "⚡"
              },
              {
                title: "PERSPECTIVE SHIFT",
                description: "Dynamic viewing angles that adapt to your exploration needs and preferences.",
                icon: "🔄"
              },
              {
                title: "NEON PATHWAYS",
                description: "Illuminated routes through the cyberpunk landscape with enhanced visibility.",
                icon: "✨"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-purple-900/20 to-black/40 border border-cyan-400/20 rounded-lg hover:border-pink-500/40 transition-all duration-500"
              >
                <div className="text-3xl group-hover:animate-retro-bounce">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors duration-300 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block relative">
            <button className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold text-lg rounded-lg hover:scale-105 transition-transform duration-300">
              ENTER THE GRID
            </button>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg animate-retro-border-pulse opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Animated Grid Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-retro-grid-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 