import React from 'react';

export default function GreenContact() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100">
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 800" fill="none">
          <defs>
            <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          <path d="M0,400 Q250,200 500,350 Q750,500 1000,300" 
                stroke="url(#contactGradient)" 
                strokeWidth="4" 
                fill="none" 
                className="animate-organic-flow" />
          <path d="M0,500 Q300,300 600,450 Q900,600 1000,400" 
                stroke="url(#contactGradient)" 
                strokeWidth="3" 
                fill="none" 
                className="animate-organic-flow-reverse" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-2">
            🌿 CONNECT WITH NATURE
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent mb-6">
            GROW TOGETHER
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Let's cultivate something beautiful together. Reach out and watch our partnership flourish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm border border-emerald-200/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">🌱 PLANT YOUR MESSAGE</h3>
              
              <form className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-green-700 mb-2">Your Name (Gardener)</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-2xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 focus:bg-white/80"
                    placeholder="Enter your name..."
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-green-700 mb-2">Email (Digital Seed)</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-2xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 focus:bg-white/80"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-green-700 mb-2">Project Type (Ecosystem)</label>
                  <select className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-2xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 focus:bg-white/80">
                    <option>🌱 Startup Growth</option>
                    <option>🌿 Business Expansion</option>
                    <option>🌳 Enterprise Transformation</option>
                    <option>🌍 Global Initiative</option>
                  </select>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-green-700 mb-2">Message (Growth Vision)</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-white/50 border border-emerald-200 rounded-2xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 focus:bg-white/80 resize-none"
                    placeholder="Tell us about your vision and how we can help it grow..."
                  ></textarea>
                </div>
                
                <button className="group w-full py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25">
                  <span className="relative z-10 flex items-center justify-center">
                    🌱 PLANT MESSAGE
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-lime-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm border border-emerald-200/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">🌍 GROW WITH US</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "🌱",
                    title: "Seed Your Project",
                    description: "Start small, think big. Every forest begins with a single seed."
                  },
                  {
                    icon: "🌿",
                    title: "Nurture Growth",
                    description: "We provide the environment, resources, and care for sustainable development."
                  },
                  {
                    icon: "🌳",
                    title: "Flourish Together",
                    description: "Watch your digital ecosystem thrive and support the planet's future."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="text-3xl group-hover:animate-organic-bounce">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-green-700 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-emerald-200/50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-emerald-700 mb-4">🌿 ORGANIC CONNECTIONS</h3>
              
              <div className="space-y-4">
                {[
                  { label: "Email Forest", value: "grow@organictech.eco", icon: "📧" },
                  { label: "Phone Garden", value: "+1 (555) NATURE", icon: "📞" },
                  { label: "Location Ecosystem", value: "Green Valley, Earth", icon: "📍" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/40 rounded-xl border border-emerald-100">
                    <div className="text-xl">{contact.icon}</div>
                    <div>
                      <div className="text-xs text-gray-500">{contact.label}</div>
                      <div className="font-medium text-green-700">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-organic-float-contact"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          >
            <div className="text-sm opacity-40">
              {['🌱', '🌿', '🍃', '💧', '🌾'][Math.floor(Math.random() * 5)]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 