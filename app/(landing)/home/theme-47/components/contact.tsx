'use client';

export default function Contact() {
  return (
    <section className="py-32 px-6 relative">
      {/* Contact Background */}
      <div className="absolute inset-0">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full"
              style={{
                left: `${i * 5}%`,
                background: 'linear-gradient(to bottom, transparent, #00FFFF, transparent)',
                animation: `matrix-rain ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating Contact Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `retro-float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              color: ['#FF00FF', '#00FFFF', '#FFFF00', '#FF0080'][Math.floor(Math.random() * 4)]
            }}
          >
            {['@', '#', '&', '*', '+', '=', '%', '!'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 font-mono">
            <span className="neon-text-cyan">CONNECT</span>{" "}
            <span className="neon-text-pink">TO</span>{" "}
            <span className="neon-text-yellow">GRID</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="w-6 h-6 border-2 border-pink-400 rotate-45 neon-glow-pink" />
            <div className="w-6 h-1 bg-yellow-400 neon-glow-yellow" />
            <div className="w-6 h-6 border-2 border-cyan-400 rotate-45 neon-glow-cyan" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Send a transmission through the digital void
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Terminal */}
          <div className="order-2 lg:order-1">
            <div className="border-4 border-pink-400 bg-black p-6 retro-glow">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b-2 border-cyan-400 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  </div>
                  <h3 className="text-cyan-400 font-mono font-bold">CONTACT_TERMINAL.EXE</h3>
                </div>
                <div className="text-gray-400 font-mono text-sm">v47.0</div>
              </div>

              {/* Terminal Content */}
              <div className="space-y-4 font-mono text-sm">
                <div className="text-green-400">
                  &gt; INITIALIZING COMMUNICATION PROTOCOL...
                </div>
                <div className="text-cyan-400">
                  &gt; READY TO RECEIVE TRANSMISSION
                </div>
                <div className="text-yellow-400">
                  &gt; PLEASE ENTER YOUR DATA:
                </div>
                
                {/* Contact Form */}
                <form className="space-y-6 mt-8">
                  <div>
                    <label className="block text-pink-400 font-mono mb-2">
                      &gt; CALL_SIGN:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name..."
                      className="w-full bg-black border-2 border-cyan-400 px-4 py-3 text-cyan-400 font-mono focus:border-pink-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-400 font-mono mb-2">
                      &gt; TRANSMISSION_ID:
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@retronet.com"
                      className="w-full bg-black border-2 border-pink-400 px-4 py-3 text-pink-400 font-mono focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-yellow-400 font-mono mb-2">
                      &gt; MESSAGE_DATA:
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Enter your message to the grid..."
                      className="w-full bg-black border-2 border-yellow-400 px-4 py-3 text-yellow-400 font-mono focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 border-2 border-green-400 bg-black text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-mono font-bold retro-glow"
                  >
                    [ TRANSMIT TO GRID ]
                  </button>
                </form>
                
                <div className="mt-6 text-purple-400 text-center">
                  &gt; CONNECTION SECURED WITH 1987-BIT ENCRYPTION
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Panel */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Info Cards */}
              {[
                {
                  title: "DIGITAL_ADDRESS",
                  content: "hello@synthwave.retro",
                  icon: "📧",
                  color: "pink"
                },
                {
                  title: "PHONE_MATRIX",
                  content: "+1 (987) RETRO-47",
                  icon: "📞",
                  color: "cyan"
                },
                {
                  title: "LOCATION_GRID",
                  content: "Sector 7, Neon District",
                  icon: "📍",
                  color: "yellow"
                },
                {
                  title: "SOCIAL_NETWORKS",
                  content: "@synthwave47",
                  icon: "🌐",
                  color: "purple"
                }
              ].map((info, index) => (
                <div
                  key={info.title}
                  className="group"
                  style={{
                    animation: `retro-slide 0.8s ease-out forwards`,
                    animationDelay: `${index * 0.15}s`,
                    opacity: 0
                  }}
                >
                  <div className={`border-2 bg-black/80 p-6 retro-glow hover:scale-105 transition-all duration-300 ${
                    info.color === 'pink' ? 'border-pink-400' :
                    info.color === 'cyan' ? 'border-cyan-400' :
                    info.color === 'yellow' ? 'border-yellow-400' :
                    'border-purple-400'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`text-3xl p-3 border-2 ${
                        info.color === 'pink' ? 'border-pink-400 neon-glow-pink' :
                        info.color === 'cyan' ? 'border-cyan-400 neon-glow-cyan' :
                        info.color === 'yellow' ? 'border-yellow-400 neon-glow-yellow' :
                        'border-purple-400 neon-glow-purple'
                      }`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className={`font-mono font-bold mb-2 ${
                          info.color === 'pink' ? 'neon-text-pink' :
                          info.color === 'cyan' ? 'neon-text-cyan' :
                          info.color === 'yellow' ? 'neon-text-yellow' :
                          'text-purple-400'
                        }`}>
                          {info.title}
                        </h4>
                        <p className="text-gray-300 font-mono">{info.content}</p>
                      </div>
                    </div>
                    
                    {/* Corner Decorations */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-white/30" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-white/30" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-white/30" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-white/30" />
                  </div>
                </div>
              ))}
              
              {/* Response Time Display */}
              <div className="border-4 border-cyan-400 bg-black p-6 retro-glow">
                <h4 className="text-cyan-400 font-mono font-bold mb-4 text-center">
                  RESPONSE_TIME_MATRIX
                </h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-mono">EMAIL:</span>
                    <span className="text-green-400 font-mono">&lt; 24 HOURS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-mono">URGENT:</span>
                    <span className="text-yellow-400 font-mono">&lt; 2 HOURS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-mono">EMERGENCY:</span>
                    <span className="text-red-400 font-mono">INSTANT</span>
                  </div>
                </div>
                
                {/* Status Indicators */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="w-full h-2 bg-green-400 mb-1" />
                    <div className="text-green-400 font-mono text-xs">ONLINE</div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-2 bg-yellow-400 mb-1" />
                    <div className="text-yellow-400 font-mono text-xs">READY</div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-2 bg-cyan-400 mb-1 animate-pulse" />
                    <div className="text-cyan-400 font-mono text-xs">ACTIVE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-20 text-center">
          <div className="inline-block border-2 border-purple-400 bg-black/60 px-8 py-4 retro-glow">
            <p className="text-purple-400 font-mono">
              &gt; Thank you for visiting SYNTHWAVE_47.EXE
              <span className="animate-pulse ml-2">█</span>
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes matrix-rain {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
} 