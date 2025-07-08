import React from 'react';

export default function HologramContact() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Quantum Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/30 to-black"></div>
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-conic from-emerald-500/15 via-cyan-500/15 to-lime-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-gradient-conic from-cyan-500/15 via-lime-500/15 to-yellow-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Holographic Communication Array */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(34,197,94,0.4)_25px,rgba(34,197,94,0.4)_26px,transparent_27px,transparent_74px,rgba(6,182,212,0.4)_75px,rgba(6,182,212,0.4)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(34,197,94,0.4)_25px,rgba(34,197,94,0.4)_26px,transparent_27px,transparent_74px,rgba(6,182,212,0.4)_75px,rgba(6,182,212,0.4)_76px,transparent_77px)] bg-[length:160px_160px] animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-mono">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
              [QUANTUM CONTACT]
            </span>
          </h2>
          <p className="text-xl text-emerald-300/70 max-w-3xl mx-auto font-light">
            Establish quantum entangled communication across all dimensions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-emerald-400/30 rounded-lg p-8">
            {/* Holographic Border Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-20"></div>
            
            <h3 className="text-2xl font-semibold mb-8 text-emerald-400 font-mono text-center">
              [INITIALIZE QUANTUM LINK]
            </h3>

            <form className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="ENTER QUANTUM IDENTITY"
                  className="w-full px-4 py-3 bg-black/50 border border-emerald-400/30 rounded-lg text-emerald-300 placeholder-emerald-400/50 font-mono text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                />
                <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-400 rounded-full animate-pulse m-3"></div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="QUANTUM EMAIL ADDRESS"
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-emerald-300 placeholder-cyan-400/50 font-mono text-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse m-3"></div>
              </div>

              {/* Subject Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="QUANTUM SUBJECT PROTOCOL"
                  className="w-full px-4 py-3 bg-black/50 border border-lime-400/30 rounded-lg text-emerald-300 placeholder-lime-400/50 font-mono text-sm focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-all duration-300"
                />
                <div className="absolute top-0 right-0 w-2 h-2 bg-lime-400 rounded-full animate-pulse m-3"></div>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  rows={6}
                  placeholder="TRANSMIT QUANTUM MESSAGE ACROSS DIMENSIONS..."
                  className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-emerald-300 placeholder-yellow-400/50 font-mono text-sm focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                ></textarea>
                <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-pulse m-3"></div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full relative px-6 py-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-lime-500/20 border-2 border-emerald-400/50 text-emerald-300 font-semibold font-mono rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 hover:border-emerald-400"
              >
                <span className="relative z-10">[TRANSMIT QUANTUM MESSAGE]</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-lime-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>

            {/* Quantum Processing Indicators */}
            <div className="absolute top-4 right-4 flex space-x-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
            </div>
          </div>

          {/* Contact Information & Quantum Portal */}
          <div className="space-y-8">
            {/* Quantum Communication Channels */}
            <div className="bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-cyan-400/30 rounded-lg p-8 relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/15 to-lime-500/15 opacity-20"></div>
              
              <h3 className="text-xl font-semibold mb-6 text-cyan-400 font-mono">
                [QUANTUM CHANNELS]
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300/80 font-mono text-sm">quantum@hologram.universe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300/80 font-mono text-sm">+1.∞.QUANTUM.LINK</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300/80 font-mono text-sm">Dimension ∞, Quantum Realm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300/80 font-mono text-sm">24/7 Quantum Support</span>
                </div>
              </div>
            </div>

            {/* Quantum Portal Visualization */}
            <div className="bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-lime-400/30 rounded-lg p-8 relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-lime-500/15 to-yellow-500/15 opacity-20"></div>
              
              <h3 className="text-xl font-semibold mb-6 text-lime-400 font-mono text-center">
                [DIMENSIONAL PORTAL]
              </h3>

              {/* Quantum Portal Animation */}
              <div className="relative flex justify-center items-center h-32">
                <div className="w-24 h-24 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute w-20 h-20 border-2 border-cyan-400 border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
                <div className="absolute w-16 h-16 border-2 border-lime-400 border-b-transparent rounded-full animate-spin"></div>
                <div className="absolute w-12 h-12 border-2 border-yellow-400 border-l-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
                <div className="absolute w-8 h-8 bg-gradient-conic from-emerald-400 via-cyan-400 to-lime-400 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              </div>

              <p className="text-emerald-300/70 text-center text-sm font-mono mt-4">
                Portal Status: [ACTIVE] • Dimensions Connected: [∞]
              </p>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-yellow-400/30 rounded-lg p-6 relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/15 to-emerald-500/15 opacity-20"></div>
              
              <div className="text-center">
                <h4 className="text-lg font-semibold text-yellow-400 font-mono mb-2">
                  [QUANTUM RESPONSE TIME]
                </h4>
                <div className="text-3xl font-bold text-emerald-400 font-mono animate-pulse">
                  ≤ 1 QUANTUM SECOND
                </div>
                <p className="text-emerald-300/70 text-xs font-mono mt-2">
                  Instantaneous across all parallel universes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Footer */}
        <div className="mt-16 text-center">
          <p className="text-emerald-300/50 text-sm font-mono">
            All communications are quantum encrypted and transmitted across multiple dimensions
          </p>
        </div>
      </div>

      {/* Floating Quantum Communication Nodes */}
      <div className="absolute top-20 left-5 w-3 h-3 border border-emerald-400/50 rounded-sm transform rotate-45 animate-bounce bg-emerald-400/20"></div>
      <div className="absolute bottom-20 right-5 w-4 h-4 border border-cyan-400/50 rounded-sm transform -rotate-30 animate-bounce bg-cyan-400/20"></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 border border-lime-400/50 rounded-sm transform rotate-60 animate-bounce bg-lime-400/20"></div>
      <div className="absolute bottom-1/3 left-10 w-3 h-3 border border-yellow-400/50 rounded-sm transform -rotate-45 animate-bounce bg-yellow-400/20"></div>
    </section>
  );
} 