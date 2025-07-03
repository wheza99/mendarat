'use client';

export default function Contact() {
  return (
    <section className="py-32 px-6 relative">
      {/* Terminal Background */}
      <div className="absolute inset-0">
        {/* Scanlines */}
        <div className="absolute inset-0 opacity-20" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.1) 2px, rgba(6, 182, 212, 0.1) 4px)'
        }} />
        
        {/* Terminal glitch effects */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400/10 h-px"
            style={{
              left: '0%',
              width: '100%',
              top: `${Math.random() * 100}%`,
              animation: `glitch-line ${0.1 + Math.random() * 0.2}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 neon-glow">
            ESTABLISH <span className="text-cyan-400">CONNECTION</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8 cyber-pulse" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interface with our neural network through secure quantum-encrypted channels
          </p>
        </div>

        {/* Terminal Window */}
        <div className="relative border-2 border-cyan-400/50 bg-black/80 cyber-pulse">
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-400/30 bg-gradient-to-r from-black/60 to-gray-900/60">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              <div className="text-cyan-400 font-mono text-sm">
                contact_terminal.exe
              </div>
            </div>
            <div className="text-gray-400 font-mono text-xs">
              SECURE_CONNECTION: TRUE
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8">
            {/* Terminal Prompt */}
            <div className="font-mono text-cyan-400 text-sm mb-6">
              <div className="mb-2">&gt; INITIALIZING CONTACT PROTOCOL...</div>
              <div className="mb-2">&gt; QUANTUM ENCRYPTION: [ENABLED]</div>
              <div className="mb-2">&gt; NEURAL LINK STATUS: [READY]</div>
              <div className="mb-4">&gt; AWAITING USER INPUT...</div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    &gt; IDENTITY_MATRIX:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your handle..."
                    className="w-full px-4 py-3 bg-black/60 border border-cyan-400/30 rounded-lg text-white font-mono focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    &gt; COMM_CHANNEL:
                  </label>
                  <input
                    type="email"
                    placeholder="neural.link@cyberspace.net"
                    className="w-full px-4 py-3 bg-black/60 border border-cyan-400/30 rounded-lg text-white font-mono focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <label className="block text-cyan-400 font-mono text-sm mb-2">
                  &gt; TRANSMISSION_TYPE:
                </label>
                <select className="w-full px-4 py-3 bg-black/60 border border-cyan-400/30 rounded-lg text-white font-mono focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300">
                  <option value="">Select protocol...</option>
                  <option value="collaboration">COLLABORATION_REQUEST</option>
                  <option value="consultation">CONSULTATION_NEEDED</option>
                  <option value="project">PROJECT_PROPOSAL</option>
                  <option value="support">TECH_SUPPORT</option>
                  <option value="partnership">PARTNERSHIP_INQUIRY</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-cyan-400 font-mono text-sm mb-2">
                  &gt; DATA_PAYLOAD:
                </label>
                <textarea
                  rows={6}
                  placeholder="Enter your encrypted message here...&#10;&#10;// Use quantum-safe encoding&#10;// Maximum payload: 4096 bytes&#10;// End transmission with EOF"
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-400/30 rounded-lg text-white font-mono focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-xl text-black overflow-hidden cyber-pulse hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">TRANSMIT DATA</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                {/* Security Notice */}
                <div className="mt-6 p-4 border border-green-400/30 bg-green-400/5 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-green-400 font-mono text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>QUANTUM_ENCRYPTION_ACTIVE</span>
                  </div>
                  <div className="text-gray-400 font-mono text-xs mt-2">
                    All transmissions are secured with 2048-bit quantum encryption
                  </div>
                </div>
              </div>
            </form>

            {/* Terminal Footer */}
            <div className="mt-8 pt-6 border-t border-cyan-400/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 border border-cyan-400/20 bg-black/40">
                  <div className="text-cyan-400 font-mono text-sm mb-2">RESPONSE_TIME</div>
                  <div className="text-white font-bold">&lt; 24 HRS</div>
                </div>
                <div className="p-4 border border-purple-400/20 bg-black/40">
                  <div className="text-purple-400 font-mono text-sm mb-2">UPTIME</div>
                  <div className="text-white font-bold">99.97%</div>
                </div>
                <div className="p-4 border border-green-400/20 bg-black/40">
                  <div className="text-green-400 font-mono text-sm mb-2">SECURITY_LVL</div>
                  <div className="text-white font-bold">QUANTUM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              method: "NEURAL_LINK",
              address: "neural.interface@cyber.net",
              status: "ACTIVE",
              icon: "🧠"
            },
            {
              method: "QUANTUM_COMM",
              address: "q-entangled.channel.7742",
              status: "STANDBY",
              icon: "⚛️"
            },
            {
              method: "HOLO_CONFERENCE",
              address: "holo.meeting.room.46",
              status: "AVAILABLE",
              icon: "🔮"
            }
          ].map((contact, index) => (
            <div
              key={contact.method}
              className="group p-6 border border-cyan-400/20 bg-black/40 hover:border-cyan-400/50 transition-all duration-500 text-center cyber-pulse"
              style={{
                animation: `clean-slide 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h3 className="text-cyan-400 font-mono font-bold mb-2">
                {contact.method}
              </h3>
              <div className="text-gray-300 font-mono text-sm mb-2">
                {contact.address}
              </div>
              <div className={`text-xs font-mono px-2 py-1 rounded ${
                contact.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                contact.status === 'STANDBY' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {contact.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glitch Effect Styles */}
      <style jsx>{`
        @keyframes glitch-line {
          0%, 90%, 100% {
            opacity: 0;
            transform: scaleX(0);
          }
          91%, 99% {
            opacity: 1;
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}