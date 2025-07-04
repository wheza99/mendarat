export default function OceanContact() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Dive Deeper
            </span>
          </h2>
          <p className="text-xl text-cyan-200/70 max-w-3xl mx-auto">
            Ready to explore the depths of bioluminescent technology? Contact our marine experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 p-8 rounded-2xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Send a Bio-Signal</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-cyan-200/70 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-cyan-900/30 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-300/50 focus:border-cyan-400 focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-cyan-200/70 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-cyan-900/30 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-300/50 focus:border-cyan-400 focus:outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-cyan-200/70 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-cyan-900/30 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-300/50 focus:border-cyan-400 focus:outline-none resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 transition-all duration-300 font-semibold text-white rounded-lg shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                Send Bio-Signal
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-6 rounded-xl border border-teal-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl animate-bio-pulse">
                  📧
                </div>
                <div>
                  <h4 className="text-xl font-bold text-teal-300">Email</h4>
                  <p className="text-teal-200/70">ocean@bioluminescent.dev</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-blue-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center text-white text-xl animate-bio-glow">
                  🌊
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-300">Deep Sea Station</h4>
                  <p className="text-blue-200/70">Mariana Trench, Pacific Ocean</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl animate-bio-crystal">
                  ⚡
                </div>
                <div>
                  <h4 className="text-xl font-bold text-cyan-300">Bio-Frequency</h4>
                  <p className="text-cyan-200/70">500.0 Hz - Active 24/7</p>
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-cyan-900/10 to-teal-900/10 rounded-xl border border-cyan-500/20">
              <h4 className="text-2xl font-bold mb-4 text-cyan-300">Response Time</h4>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent mb-2 animate-bio-count">
                &lt; 2h
              </div>
              <p className="text-cyan-200/60">Average response via bio-signals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 