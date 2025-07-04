export default function BioServices() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Bio Services
            </span>
          </h2>
          <p className="text-xl text-teal-200/70 max-w-3xl mx-auto">
            Harness the power of marine biology with our comprehensive suite of bioluminescent services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 animate-bio-float">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Aquatic Analytics</h3>
            <p className="text-cyan-200/70 leading-relaxed">
              Real-time monitoring and analysis of underwater ecosystems using bioluminescent sensors.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-8 rounded-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 animate-bio-drift">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Bio Computing</h3>
            <p className="text-teal-200/70 leading-relaxed">
              Revolutionary computing systems powered by marine organism neural networks and bioluminescence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 animate-bio-spiral">
            <div className="text-4xl mb-4">🗣️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Ocean Communication</h3>
            <p className="text-blue-200/70 leading-relaxed">
              Underwater communication networks using natural bioluminescent signals from marine life.
            </p>
          </div>
        </div>

        {/* Service Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent mb-2 animate-bio-count">
              500+
            </div>
            <div className="text-cyan-300/60 text-sm">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-2 animate-bio-count" style={{ animationDelay: '0.5s' }}>
              99.9%
            </div>
            <div className="text-teal-300/60 text-sm">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2 animate-bio-count" style={{ animationDelay: '1s' }}>
              24/7
            </div>
            <div className="text-blue-300/60 text-sm">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent mb-2 animate-bio-count" style={{ animationDelay: '1.5s' }}>
              ∞
            </div>
            <div className="text-cyan-300/60 text-sm">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
} 