import React from 'react';

export default function HolographicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Holographic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Holographic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#6366f1_20%,transparent_40%)] bg-[length:300px_300px] animate-holographic-grid"></div>
        
        {/* Floating Holographic Elements */}
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={`hologram-${i}`}
            className="absolute animate-holographic-float"
            style={{
              left: `${10 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-16 h-16 border-2 border-${['indigo', 'purple', 'pink'][i % 3]}-400/50 rounded-full animate-holographic-spin shadow-lg shadow-${['indigo', 'purple', 'pink'][i % 3]}-400/30 backdrop-blur-sm`}></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Holographic Badge */}
        <div className="inline-block mb-8 px-6 py-3 border border-indigo-400/50 rounded-2xl bg-indigo-800/20 backdrop-blur-sm">
          <span className="text-indigo-300 font-mono text-sm tracking-wider">HOLOGRAPHIC FUTURE</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white font-mono">
          <span className="text-indigo-400">FUTURE</span>
          <br />
          <span className="text-purple-400">IS NOW</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
          Experience the next generation of holographic technology with advanced glassmorphism design
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-indigo-400/30 transition-all duration-300 transform hover:scale-105 border border-indigo-400/50 backdrop-blur-sm">
            EXPLORE NOW
          </button>
          <button className="px-8 py-4 border border-purple-400/50 text-purple-400 font-bold rounded-2xl hover:bg-purple-400/20 transition-all duration-300 backdrop-blur-sm">
            LEARN MORE
          </button>
        </div>

        {/* Holographic Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "99.9%", label: "ACCURACY", color: "indigo" },
            { number: "10K+", label: "USERS", color: "purple" },
            { number: "24/7", label: "SUPPORT", color: "pink" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 border border-indigo-400/30 rounded-2xl bg-indigo-800/20 backdrop-blur-sm">
              <div className={`text-4xl font-bold text-${stat.color}-400 mb-2 font-mono`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-mono text-sm tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Corner Decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-2 border-purple-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-pink-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 