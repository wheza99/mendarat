export default function WillowContact() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-6 animate-mystic-fade-in">
            Willow Contact
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto animate-mystic-fade-in" style={{ animationDelay: '0.3s' }}>
            Hubungi kami melalui saluran mistis yang terhubung dengan kearifan alam dan energi hutan kuno
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Nature Communication Form */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 animate-mystic-slide-in">
            <h3 className="text-2xl font-bold text-emerald-300 mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">🌿</span>
              Nature Transmission
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-emerald-400 font-medium mb-2">Forest Name</label>
                <input 
                  type="text" 
                  className="w-full bg-emerald-900/20 border border-emerald-500/30 rounded-xl px-4 py-3 text-emerald-100 placeholder-emerald-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                  placeholder="Masukkan nama forest Anda"
                />
              </div>
              
              <div>
                <label className="block text-emerald-400 font-medium mb-2">Spirit Email</label>
                <input 
                  type="email" 
                  className="w-full bg-emerald-900/20 border border-emerald-500/30 rounded-xl px-4 py-3 text-emerald-100 placeholder-emerald-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                  placeholder="name@forest.spirit"
                />
              </div>
              
              <div>
                <label className="block text-emerald-400 font-medium mb-2">Quest Type</label>
                <select className="w-full bg-emerald-900/20 border border-emerald-500/30 rounded-xl px-4 py-3 text-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300">
                  <option value="">Select your quest</option>
                  <option value="wisdom">Wisdom Seeking</option>
                  <option value="healing">Nature Healing</option>
                  <option value="magic">Magic Learning</option>
                  <option value="partnership">Forest Partnership</option>
                </select>
              </div>
              
              <div>
                <label className="block text-emerald-400 font-medium mb-2">Mystic Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-emerald-900/20 border border-emerald-500/30 rounded-xl px-4 py-3 text-emerald-100 placeholder-emerald-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none"
                  placeholder="Tulis pesan mistis Anda kepada forest..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
              >
                Send Forest Message 🌲
              </button>
            </form>
          </div>

          {/* Contact Channels & Info */}
          <div className="space-y-8">
            {/* Mystic Channels */}
            <div className="bg-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-green-300 mb-6">Mystic Channels</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-800/30 rounded-xl border border-green-500/20">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-mystic-pulse">
                    <span className="text-green-950 text-xl">🌿</span>
                  </div>
                  <div>
                    <div className="font-semibold text-green-300">Forest Telepathy</div>
                    <div className="text-green-400 text-sm">Instant spiritual connection</div>
                  </div>
                  <div className="ml-auto text-green-300">Active</div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-emerald-800/30 rounded-xl border border-emerald-500/20">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-mystic-pulse" style={{ animationDelay: '0.5s' }}>
                    <span className="text-emerald-950 text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold text-emerald-300">Spirit Email</div>
                    <div className="text-emerald-400 text-sm">contact@mystic-forest.id</div>
                  </div>
                  <div className="ml-auto text-emerald-300">24/7</div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-teal-800/30 rounded-xl border border-teal-500/20">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center animate-mystic-pulse" style={{ animationDelay: '1s' }}>
                    <span className="text-teal-950 text-xl">🔮</span>
                  </div>
                  <div>
                    <div className="font-semibold text-teal-300">Crystal Ball</div>
                    <div className="text-teal-400 text-sm">Mystical consultation</div>
                  </div>
                  <div className="ml-auto text-teal-300">By Appointment</div>
                </div>
              </div>
            </div>

            {/* Response Matrix */}
            <div className="bg-teal-900/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-teal-300 mb-6">Response Matrix</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-teal-400">🌱 Wisdom Seeking</span>
                  <span className="text-teal-300">Instant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400">🔮 Magic Learning</span>
                  <span className="text-teal-300">Within 1 hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400">🌿 Nature Healing</span>
                  <span className="text-teal-300">Same day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400">🤝 Forest Partnership</span>
                  <span className="text-teal-300">Within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Forest Network Status */}
            <div className="bg-lime-900/30 backdrop-blur-sm border border-lime-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-lime-300 mb-6">Forest Network Status</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-mystic-pulse">
                    <span className="text-emerald-950 font-bold text-xl">✓</span>
                  </div>
                  <div className="text-emerald-400 text-sm">Spirit Connection</div>
                  <div className="text-emerald-300 font-semibold">Active</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-mystic-pulse" style={{ animationDelay: '0.5s' }}>
                    <span className="text-green-950 font-bold text-xl">🌐</span>
                  </div>
                  <div className="text-green-400 text-sm">Forest Network</div>
                  <div className="text-green-300 font-semibold">Global</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-mystic-pulse" style={{ animationDelay: '1s' }}>
                    <span className="text-teal-950 font-bold text-xl">⚡</span>
                  </div>
                  <div className="text-teal-400 text-sm">Magic Response</div>
                  <div className="text-teal-300 font-semibold">Instant</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-mystic-pulse" style={{ animationDelay: '1.5s' }}>
                    <span className="text-lime-950 font-bold text-xl">🔮</span>
                  </div>
                  <div className="text-lime-400 text-sm">Wisdom Flow</div>
                  <div className="text-lime-300 font-semibold">Continuous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 