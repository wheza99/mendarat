'use client';

export default function QuantumContact() {
  return (
    <section className="py-32 px-6 relative">
      {/* Quantum Contact Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top center, rgba(139, 92, 246, 0.5), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(34, 197, 94, 0.3), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.4), transparent 55%)
              `
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            <span className="block">QUANTUM</span>
            <span className="block -mt-2">CONTACT</span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full animate-aurora-flow" />
            <div className="w-12 h-12 border-2 border-purple-400 rounded-full bg-purple-400/20 backdrop-blur-sm flex items-center justify-center animate-aurora-spin">
              <span className="text-purple-400 text-lg">📡</span>
            </div>
            <div className="w-16 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-aurora-wave" />
            <div className="w-8 h-8 border border-pink-400 rounded-full bg-pink-400/20 backdrop-blur-sm animate-aurora-drift" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full animate-aurora-flow" style={{ animationDelay: '2s' }} />
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Connect with our quantum communication portal and initiate aurora field synchronization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="border-4 border-purple-400/30 bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">📡 QUANTUM COMMUNICATION PORTAL</h3>
                <p className="text-slate-400">Transmit your message through quantum field frequencies</p>
              </div>
              
              {/* Contact Form */}
              <form className="space-y-6">
                {/* Quantum Identity */}
                <div>
                  <label className="block text-emerald-300 text-sm font-medium mb-2">
                    ⚛ Quantum Identity
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your quantum signature..."
                    className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-xl text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                {/* Energy Frequency */}
                <div>
                  <label className="block text-emerald-300 text-sm font-medium mb-2">
                    📡 Communication Frequency
                  </label>
                  <input 
                    type="email" 
                    placeholder="quantum.email@aurora.field"
                    className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-xl text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                {/* Field Classification */}
                <div>
                  <label className="block text-emerald-300 text-sm font-medium mb-2">
                    🌌 Field Classification
                  </label>
                  <select className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors duration-300">
                    <option value="">Select quantum field type...</option>
                    <option value="aurora">Aurora Borealis Research</option>
                    <option value="quantum">Quantum Field Dynamics</option>
                    <option value="cosmic">Cosmic Energy Systems</option>
                    <option value="particle">Particle Physics Lab</option>
                    <option value="enterprise">Enterprise Solutions</option>
                  </select>
                </div>
                
                {/* Quantum Message */}
                <div>
                  <label className="block text-emerald-300 text-sm font-medium mb-2">
                    ✦ Quantum Message
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Transmit your quantum data through aurora field..."
                    className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-xl text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>
                
                {/* Quantum Verification */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="quantum-terms" className="w-4 h-4 text-purple-400 rounded" />
                    <label htmlFor="quantum-terms" className="text-slate-300 text-sm">
                      I agree to quantum field <span className="text-purple-300">entanglement protocols</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="aurora-sync" className="w-4 h-4 text-emerald-400 rounded" />
                    <label htmlFor="aurora-sync" className="text-slate-300 text-sm">
                      Enable aurora field <span className="text-emerald-300">synchronization</span>
                    </label>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-3">
                    <span>📡 TRANSMIT QUANTUM MESSAGE</span>
                    <div className="w-5 h-5 border-2 border-white/50 rounded-full animate-spin"></div>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & Status */}
          <div className="space-y-8">
            {/* Quantum Contact Methods */}
            <div className="border-4 border-emerald-400/30 bg-emerald-950/20 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-emerald-300 mb-6">🌌 QUANTUM CONTACT METHODS</h3>
              
              <div className="space-y-6">
                {/* Aurora Field Communication */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-emerald-400 rounded-full bg-emerald-400/20 flex items-center justify-center">
                    <span className="text-emerald-400">🌌</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Aurora Field Direct</h4>
                    <p className="text-slate-400 text-sm">quantum@aurora-field.cosmic</p>
                  </div>
                </div>
                
                {/* Quantum Frequency */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-purple-400 rounded-full bg-purple-400/20 flex items-center justify-center">
                    <span className="text-purple-400">📡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Quantum Frequency</h4>
                    <p className="text-slate-400 text-sm">+1 (555) QUANTUM</p>
                  </div>
                </div>
                
                {/* Particle Laboratory */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-pink-400 rounded-full bg-pink-400/20 flex items-center justify-center">
                    <span className="text-pink-400">⚛</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Particle Laboratory</h4>
                    <p className="text-slate-400 text-sm">Aurora Research Facility, Cosmic Sector 49</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Field Activity Status */}
            <div className="border-4 border-cyan-400/30 bg-cyan-950/20 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">✦ FIELD ACTIVITY STATUS</h3>
              
              <div className="space-y-4">
                {/* Network Statistics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">24.7K</div>
                    <div className="text-xs text-slate-400">Active Connections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">99.9%</div>
                    <div className="text-xs text-slate-400">Field Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">2.847M</div>
                    <div className="text-xs text-slate-400">Quantum Messages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">∞ Hz</div>
                    <div className="text-xs text-slate-400">Frequency Range</div>
                  </div>
                </div>
                
                {/* Live Activity Feed */}
                <div className="mt-6 p-4 bg-black/40 border border-slate-700 rounded-xl">
                  <h4 className="text-cyan-300 font-medium mb-3">📡 Live Activity Feed</h4>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400">[07:23:47] Quantum sync:</span>
                      <span className="text-emerald-400">CONNECTED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">[07:23:52] Aurora field:</span>
                      <span className="text-purple-400">ACTIVE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">[07:24:01] Particle flow:</span>
                      <span className="text-pink-400">OPTIMAL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">[07:24:15] Field coherence:</span>
                      <span className="text-cyan-400">99.7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Action Buttons */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10 flex items-center gap-3">
                <span>📡 ESTABLISH CONNECTION</span>
                <div className="w-5 h-5 border-2 border-white/50 rounded-full animate-spin"></div>
              </span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-purple-400/50 text-purple-300 rounded-full font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300">
              <span className="flex items-center gap-3">
                <span>⚛ CHECK FIELD STATUS</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}