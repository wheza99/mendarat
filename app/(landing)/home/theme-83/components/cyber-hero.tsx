import React from 'react';

export default function CyberHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#00ffff_20%,transparent_40%)] bg-[length:200px_200px] animate-cyber-grid"></div>
        
        {/* Floating Neon Elements */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`neon-${i}`}
            className="absolute animate-cyber-float"
            style={{
              left: `${10 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-16 h-16 border border-${['cyan', 'pink', 'purple'][i % 3]}-400 rounded-sm animate-cyber-spin shadow-lg shadow-${['cyan', 'pink', 'purple'][i % 3]}-400/50`}></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Cyber Badge */}
        <div className="inline-block mb-8 px-6 py-3 border border-cyan-400 rounded-sm bg-black/50 backdrop-blur-sm">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">CYBERPUNK 2077</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white">
          <span className="text-cyan-400">FUTURE</span>
          <br />
          <span className="text-pink-400">IS NOW</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
          Experience the next generation of digital innovation with cutting-edge technology and neon aesthetics
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-bold rounded-sm hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
            EXPLORE NOW
          </button>
          <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-sm hover:bg-cyan-400 hover:text-black transition-all duration-300">
            LEARN MORE
          </button>
        </div>

        {/* Cyber Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "99.9%", label: "UPTIME", color: "cyan" },
            { number: "10K+", label: "USERS", color: "pink" },
            { number: "24/7", label: "SUPPORT", color: "purple" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-mono text-sm tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cyber Corner Decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border border-cyan-400 rounded-sm animate-cyber-pulse"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border border-pink-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border border-purple-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border border-cyan-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 