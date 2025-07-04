export default function LuminescentCore() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Core Visualization */}
        <div className="relative mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Luminescent Core
              </span>
            </h2>
            <p className="text-xl text-teal-200/70 max-w-3xl mx-auto">
              At the heart of our bioluminescent ecosystem lies a pulsating core of pure bio-energy.
            </p>
          </div>

          {/* Central Core */}
          <div className="relative mx-auto w-80 h-80 mb-16">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-bio-spiral"></div>
            <div className="absolute inset-4 rounded-full border border-teal-400/40 animate-bio-spiral" style={{ animationDelay: '1s', animationDirection: 'reverse' }}></div>
            <div className="absolute inset-8 rounded-full border border-blue-400/50 animate-bio-spiral" style={{ animationDelay: '2s' }}></div>
            
            {/* Core Center */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-sm animate-bio-pulse">
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-teal-400/30 to-blue-400/30 animate-bio-glow">
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-300/40 to-teal-300/40 animate-bio-crystal flex items-center justify-center">
                  <span className="text-6xl font-bold bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
                    ◦
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Particles Around Core */}
            <div className="absolute top-8 left-16 w-4 h-4 bg-cyan-400 rounded-full animate-bio-float opacity-80"></div>
            <div className="absolute top-16 right-8 w-3 h-3 bg-teal-400 rounded-full animate-bio-drift opacity-70"></div>
            <div className="absolute bottom-12 left-8 w-5 h-5 bg-blue-400 rounded-full animate-bio-glow opacity-60"></div>
            <div className="absolute bottom-8 right-16 w-2 h-2 bg-cyan-300 rounded-full animate-bio-pulse opacity-90"></div>
          </div>

          {/* Core Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 p-8 rounded-2xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-6 text-cyan-300">Energy Output</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200/70">Photon Emission</span>
                  <span className="text-cyan-400 font-mono">10^15 photons/s</span>
                </div>
                <div className="w-full bg-cyan-900/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-400 h-2 rounded-full animate-bio-progress" style={{ width: '95%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200/70">Wavelength Range</span>
                  <span className="text-cyan-400 font-mono">450-550nm</span>
                </div>
                <div className="w-full bg-cyan-900/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-400 h-2 rounded-full animate-bio-progress" style={{ width: '88%', animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-8 rounded-2xl border border-teal-500/20">
              <h3 className="text-2xl font-bold mb-6 text-teal-300">Bio Resonance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-teal-200/70">Cellular Sync</span>
                  <span className="text-teal-400 font-mono">99.7%</span>
                </div>
                <div className="w-full bg-teal-900/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-400 h-2 rounded-full animate-bio-progress" style={{ width: '97%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-200/70">Network Latency</span>
                  <span className="text-teal-400 font-mono">0.03ms</span>
                </div>
                <div className="w-full bg-teal-900/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-400 h-2 rounded-full animate-bio-progress" style={{ width: '92%', animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 