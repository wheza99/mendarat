'use client';

export default function BiometricContact() {
  return (
    <section className="py-32 px-6 relative">
      {/* Biometric Background */}
      <div className="absolute inset-0">
        {/* DNA Helix Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 25% 25%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
                radial-gradient(ellipse at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                linear-gradient(45deg, rgba(34, 197, 94, 0.2) 0%, transparent 50%)
              `
            }}
          />
        </div>
        
        {/* Floating Bio Elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `organic-float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          >
            <div className={`w-4 h-4 rounded-full opacity-20 ${
              i % 5 === 0 ? 'bg-emerald-400' : 
              i % 5 === 1 ? 'bg-teal-400' : 
              i % 5 === 2 ? 'bg-green-400' : 
              i % 5 === 3 ? 'bg-cyan-400' : 'bg-lime-400'
            } animate-pulse`} 
            style={{ animationDelay: `${i * 0.15}s` }}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
            <span className="block">CONNECT</span>
            <span className="block -mt-2">NATURALLY</span>
          </h2>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse shadow-lg" />
            <div className="w-16 h-2 bg-gradient-to-r from-teal-400 to-green-400 rounded-full animate-bounce" />
            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full" />
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join the biomimetic revolution through nature's communication network
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="relative">
            <div className="border-4 border-emerald-200 bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
              {/* Form Header */}
              <div className="border-b-2 border-teal-200 pb-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
                    <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-600">
                    🧬 Bio-Communication Portal
                  </h3>
                </div>
                <p className="text-slate-600">Send your message through nature's network</p>
              </div>

              {/* Contact Form Fields */}
              <form className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-slate-700 font-semibold">
                    🌱 Your Natural Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your name..."
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-slate-700 font-semibold">
                    📧 Digital DNA Sequence
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-teal-200 rounded-2xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="your.email@ecosystem.com"
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="block text-slate-700 font-semibold">
                    🎯 Bio-Subject Classification
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-green-200 rounded-2xl focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <option>🔬 Research Collaboration</option>
                    <option>💼 Business Partnership</option>
                    <option>🌱 Innovation Project</option>
                    <option>🎓 Educational Inquiry</option>
                    <option>🌍 General Information</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-slate-700 font-semibold">
                    💭 Organic Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-cyan-200 rounded-2xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                    placeholder="Share your thoughts, ideas, or questions about biomimetic design..."
                  />
                </div>

                {/* Bio Verification */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="natural"
                      className="w-5 h-5 text-emerald-600 border-2 border-emerald-300 rounded focus:ring-emerald-100"
                    />
                    <label htmlFor="natural" className="text-slate-600">
                      I agree to communicate through nature's principles
                    </label>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="sustainable"
                      className="w-5 h-5 text-teal-600 border-2 border-teal-300 rounded focus:ring-teal-100"
                    />
                    <label htmlFor="sustainable" className="text-slate-600">
                      I support sustainable innovation practices
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  🚀 Send Bio-Message
                </button>
              </form>
            </div>
            
            {/* Form Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-transparent to-teal-100/30 rounded-3xl pointer-events-none blur-xl" />
          </div>

          {/* Contact Information & Bio Stats */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="border-2 border-emerald-200 bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6">🌿 Natural Communication</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-semibold text-slate-800">Bio-Mail</div>
                    <div className="text-slate-600">connect@biomimetic.nature</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-2xl border border-teal-200">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <div className="font-semibold text-slate-800">Ecosystem Location</div>
                    <div className="text-slate-600">Global Nature Network</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-200">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <div className="font-semibold text-slate-800">Response Time</div>
                    <div className="text-slate-600">As fast as nature's signals</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Statistics */}
            <div className="border-2 border-teal-200 bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-teal-600 mb-6">🔬 Bio-Network Stats</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">1,247</div>
                  <div className="text-slate-600 text-sm">Active Researchers</div>
                </div>
                
                <div className="text-center p-4 bg-teal-50 rounded-2xl border border-teal-200">
                  <div className="text-2xl font-bold text-teal-600 mb-1">847</div>
                  <div className="text-slate-600 text-sm">Bio-Innovations</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-2xl border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">98.7%</div>
                  <div className="text-slate-600 text-sm">Nature Accuracy</div>
                </div>
                
                <div className="text-center p-4 bg-cyan-50 rounded-2xl border border-cyan-200">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">∞</div>
                  <div className="text-slate-600 text-sm">Possibilities</div>
                </div>
              </div>
            </div>

            {/* Bio Network Visualization */}
            <div className="border-2 border-green-200 bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6">🌐 Network Activity</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">🧬 DNA Analysis</span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full animate-pulse" style={{ width: '78%' }} />
                    </div>
                  </div>
                  <span className="text-emerald-600 font-bold">78%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">🔬 Cell Research</span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-teal-100 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-400 rounded-full animate-pulse" style={{ width: '92%' }} />
                    </div>
                  </div>
                  <span className="text-teal-600 font-bold">92%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">🌱 Bio-Innovation</span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full animate-pulse" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <span className="text-green-600 font-bold">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 