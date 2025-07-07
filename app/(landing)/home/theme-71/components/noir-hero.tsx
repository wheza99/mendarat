import React from 'react';

export default function NoirHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Noir Background Elements */}
      <div className="absolute inset-0">
        {/* Film Noir Grain */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJub2lyIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNCIgaGVpZ2h0PSI0Ij4KICAgICAgPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2ZmMDAwMCIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbm9pcikiLz4KPC9zdmc+')]"></div>
        
        {/* Neon Street Lights */}
        <div className="absolute top-0 left-0 right-0 h-32">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute top-0 w-px h-32 bg-gradient-to-b from-red-500/50 to-transparent animate-noir-flicker"
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Hero Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-noir-fade-in">
            <span className="text-white">NEON</span>
            <span className="text-red-500 animate-noir-flicker"> NOIR</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-mono animate-noir-fade-in-delayed">
            WHERE SHADOWS MEET NEON LIGHTS
          </p>
        </div>

        {/* Hero Subtitle */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-noir-fade-in-delayed-2">
            Step into the dark underbelly of the digital age. Where every pixel tells a story, 
            and every shadow hides a secret. Welcome to the future of noir.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-noir-fade-in-delayed-3">
          <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-300 animate-noir-pulse border border-red-400">
            ENTER THE SHADOWS
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black font-bold rounded-lg transition-all duration-300 animate-noir-pulse">
            LEARN MORE
          </button>
        </div>

        {/* Noir Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-noir-fade-in-delayed-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2 animate-noir-count">99.9%</div>
            <div className="text-gray-400 font-mono">UPTIME</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2 animate-noir-count">24/7</div>
            <div className="text-gray-400 font-mono">SUPPORT</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2 animate-noir-count">∞</div>
            <div className="text-gray-400 font-mono">POSSIBILITIES</div>
          </div>
        </div>
      </div>

      {/* Noir Decorative Elements */}
      <div className="absolute bottom-10 left-10 text-red-500 font-mono text-sm animate-noir-flicker">
        <div>SYSTEM STATUS: ONLINE</div>
        <div className="text-xs text-gray-500">PROTOCOL: NOIR-71</div>
      </div>

      <div className="absolute bottom-10 right-10 text-blue-500 font-mono text-sm animate-noir-flicker">
        <div>NEON LEVEL: MAX</div>
        <div className="text-xs text-gray-500">SHADOW DEPTH: INFINITE</div>
      </div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-noir-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`blue-${i}`}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-noir-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${5 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 