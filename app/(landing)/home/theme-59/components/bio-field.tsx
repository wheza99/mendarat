export default function BioField() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Bioluminescent Field
            </span>
          </h2>
          <p className="text-xl text-cyan-200/70 max-w-3xl mx-auto">
            Experience the magical glow of underwater life forms that illuminate the darkness of the deep ocean.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plankton Networks */}
          <div className="group relative bg-gradient-to-br from-cyan-900/20 to-teal-900/20 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 animate-bio-float">
            <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-bio-pulse"></div>
            <div className="text-4xl mb-4">🦠</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Plankton Networks</h3>
            <p className="text-cyan-200/70 leading-relaxed">
              Microscopic organisms creating vast interconnected networks of bioluminescent communication.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bio-pulse"></div>
              <span className="text-sm text-cyan-300/60">Active Colonies: ∞</span>
            </div>
          </div>

          {/* Jellyfish Clouds */}
          <div className="group relative bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-8 rounded-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-500 animate-bio-drift">
            <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full animate-bio-glow"></div>
            <div className="text-4xl mb-4">🪼</div>
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Jellyfish Clouds</h3>
            <p className="text-teal-200/70 leading-relaxed">
              Ethereal jellyfish formations that pulse with synchronized bioluminescent patterns.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bio-glow"></div>
              <span className="text-sm text-teal-300/60">Pulse Rate: 0.5Hz</span>
            </div>
          </div>

          {/* Deep Coral */}
          <div className="group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 animate-bio-spiral">
            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-bio-crystal"></div>
            <div className="text-4xl mb-4">🪸</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Deep Coral</h3>
            <p className="text-blue-200/70 leading-relaxed">
              Ancient coral structures that emit soft bioluminescent signals from the abyss.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bio-crystal"></div>
              <span className="text-sm text-blue-300/60">Age: 10,000+ years</span>
            </div>
          </div>
        </div>

        {/* Bio Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent mb-2 animate-bio-count">
              95%
            </div>
            <div className="text-cyan-300/60 text-sm">Bio Efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-2 animate-bio-count" style={{ animationDelay: '0.5s' }}>
              2.4M
            </div>
            <div className="text-teal-300/60 text-sm">Active Organisms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2 animate-bio-count" style={{ animationDelay: '1s' }}>
              500nm
            </div>
            <div className="text-blue-300/60 text-sm">Peak Wavelength</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent mb-2 animate-bio-count" style={{ animationDelay: '1.5s' }}>
              24/7
            </div>
            <div className="text-cyan-300/60 text-sm">Luminosity</div>
          </div>
        </div>
      </div>
    </section>
  );
} 