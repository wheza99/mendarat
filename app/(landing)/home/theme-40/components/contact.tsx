'use client';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-red-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-900/30 border border-red-500/30 rounded-full mb-8">
          <span className="text-xl">📡</span>
          <span className="font-mono text-red-300 tracking-wider uppercase text-sm">Join Mars Colony</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-8">
          Become a Mars Pioneer
        </h2>
        
        <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed mb-12">
          Apply to join the next generation of Mars colonists. We're looking for scientists, engineers, 
          medical professionals, and skilled technicians to help build humanity's future on the Red Planet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-red-800/20 border border-orange-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Application Form</h3>
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-2">Full Name</label>
                <input className="w-full px-4 py-3 bg-red-900/20 border border-orange-500/30 rounded-lg text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-red-900/20 border border-orange-500/30 rounded-lg text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none" placeholder="your.email@mars.com" />
              </div>
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-2">Specialization</label>
                <select className="w-full px-4 py-3 bg-red-900/20 border border-orange-500/30 rounded-lg text-white focus:border-orange-400 focus:outline-none">
                  <option>Select your field</option>
                  <option>Engineering</option>
                  <option>Medicine</option>
                  <option>Science</option>
                  <option>Technology</option>
                  <option>Agriculture</option>
                </select>
              </div>
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-red-900/20 border border-orange-500/30 rounded-lg text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none" placeholder="Tell us why you want to join Mars Colony..."></textarea>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
                Submit Application 🚀
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-red-800/20 border border-orange-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Mission Control</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">📍</span>
                  <span className="text-slate-300">Mars Colony Base, Sol Sector 7</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">📡</span>
                  <span className="text-slate-300">+1-MARS-COLONY</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✉️</span>
                  <span className="text-slate-300">recruitment@marscolony.space</span>
                </div>
              </div>
            </div>

            <div className="bg-red-800/20 border border-orange-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Requirements</h3>
              <ul className="space-y-2 text-left text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Age 25-45 years</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Advanced degree or equivalent</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Physical fitness clearance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>5+ years relevant experience</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <div className="text-orange-400 font-mono text-sm mb-2">Next Mission Launch</div>
              <div className="text-2xl font-bold text-orange-300">Sol 1,892</div>
              <div className="text-slate-400 text-sm">Applications close in 45 sols</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 