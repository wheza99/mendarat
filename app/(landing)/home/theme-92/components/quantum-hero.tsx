import React from 'react';

export default function QuantumHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Quantum Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-950/30 to-cyan-950/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-conic from-lime-400/20 via-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Holographic Interference */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[linear-gradient(45deg,transparent_40%,rgba(34,197,94,0.1)_50%,transparent_60%)] animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Quantum Computing Core */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-2 w-28 h-28 border-2 border-cyan-400 border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
              <div className="absolute inset-4 w-24 h-24 border-2 border-lime-400 border-b-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-6 w-20 h-20 border-2 border-yellow-400 border-l-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
              <div className="absolute inset-8 w-16 h-16 bg-gradient-conic from-emerald-400 via-cyan-400 to-lime-400 rounded-full animate-pulse opacity-80"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-400 rounded-full animate-pulse shadow-2xl shadow-emerald-400/50"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white font-mono tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent animate-pulse">
              QUANTUM HOLOGRAM
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-emerald-300/80 mb-8 font-light tracking-widest font-mono">
            <span className="text-emerald-400">[COMPUTING]</span> • 
            <span className="text-cyan-400">[HOLOGRAPHIC]</span> • 
            <span className="text-lime-400">[QUANTUM]</span>
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-emerald-300/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the future of quantum computing visualization with holographic interfaces that transcend 
            the boundaries between digital and reality. Where quantum mechanics meets holographic projection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-400/50 text-emerald-300 font-semibold font-mono rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 hover:border-emerald-400">
              <span className="relative z-10">[INITIALIZE QUANTUM]</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative px-8 py-4 border-2 border-cyan-400/50 text-cyan-300 font-semibold font-mono rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-400">
              <span className="relative z-10">[ACCESS HOLOGRAM]</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-lime-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Quantum Data Stream */}
          <div className="mt-16 flex justify-center space-x-4">
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-transparent rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Quantum Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 border border-emerald-400/50 rounded-sm transform rotate-45 animate-bounce bg-emerald-400/10"></div>
      <div className="absolute top-40 right-20 w-3 h-3 border border-cyan-400/50 rounded-sm transform rotate-12 animate-bounce bg-cyan-400/10"></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 border border-lime-400/50 rounded-sm transform -rotate-45 animate-bounce bg-lime-400/10"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 border border-yellow-400/50 rounded-sm transform rotate-90 animate-bounce bg-yellow-400/10"></div>

      {/* Quantum Field Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-lime-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent animate-pulse"></div>
      </div>

      {/* Holographic Scanlines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"
            style={{
              top: `${15 + i * 15}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 