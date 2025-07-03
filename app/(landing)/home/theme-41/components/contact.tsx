export default function Contact() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/30 to-black" />
      
      {/* Cyber elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `data-flow ${4 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            {['CONNECT', 'TRANSMIT', 'INTERFACE', 'LINK'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 cyber-glitch">
            NEURAL LINK
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hologram-flicker">
            Establish a direct connection to our quantum communication network. 
            Your transmission will be encrypted and processed instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-black/80 border-2 border-cyan-400 rounded-xl p-8 backdrop-blur-sm">
            {/* Form header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-cyan-400/30">
              <div className="w-4 h-4 bg-cyan-400 rounded-full neon-pulse" />
              <span className="text-cyan-400 font-mono font-bold">TRANSMISSION_PROTOCOL_V5.0</span>
            </div>

            <form className="space-y-6">
              {/* Name field */}
              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-2 neon-pulse">
                  IDENTITY_CODE:
                </label>
                <input
                  type="text"
                  placeholder="Enter your neural ID..."
                  className="w-full bg-gray-900/50 border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors duration-300 hologram-flicker"
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-sm font-mono text-pink-400 mb-2 neon-pulse">
                  COMM_CHANNEL:
                </label>
                <input
                  type="email"
                  placeholder="quantum@cybernet.link"
                  className="w-full bg-gray-900/50 border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-mono focus:border-pink-400 focus:outline-none transition-colors duration-300 hologram-flicker"
                />
              </div>

              {/* Subject field */}
              <div>
                <label className="block text-sm font-mono text-purple-400 mb-2 neon-pulse">
                  DATA_PACKAGE_TYPE:
                </label>
                <select className="w-full bg-gray-900/50 border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-mono focus:border-purple-400 focus:outline-none transition-colors duration-300">
                  <option>GENERAL_INQUIRY</option>
                  <option>NEURAL_INTERFACE_REQUEST</option>
                  <option>QUANTUM_COLLABORATION</option>
                  <option>SECURITY_BREACH_REPORT</option>
                  <option>SYSTEM_ENHANCEMENT</option>
                </select>
              </div>

              {/* Message field */}
              <div>
                <label className="block text-sm font-mono text-green-400 mb-2 neon-pulse">
                  MESSAGE_PAYLOAD:
                </label>
                <textarea
                  rows={5}
                  placeholder="Transmit your data package here... Encryption protocols will secure your message during quantum transfer."
                  className="w-full bg-gray-900/50 border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-mono focus:border-green-400 focus:outline-none transition-colors duration-300 resize-none hologram-flicker"
                />
              </div>

              {/* Encryption level */}
              <div className="flex items-center justify-between p-4 bg-gray-900/30 border border-yellow-400/30 rounded-lg">
                <span className="text-yellow-400 font-mono text-sm neon-pulse">ENCRYPTION_LEVEL:</span>
                <span className="text-white font-mono">QUANTUM_SECURE</span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 font-mono">INITIATE_TRANSMISSION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>

            {/* Status indicator */}
            <div className="mt-6 flex items-center gap-3 text-sm font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full neon-pulse" />
              <span className="text-green-400">TRANSMISSION_READY</span>
            </div>
          </div>

          {/* Contact Info & Additional */}
          <div className="space-y-8">
            {/* Direct channels */}
            <div className="bg-black/60 border border-pink-400/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6 neon-pulse">
                DIRECT_CHANNELS
              </h3>
              
              <div className="space-y-4">
                {[
                  { 
                    channel: "QUANTUM_COMM", 
                    address: "secure@cybernet.link", 
                    status: "24/7 ACTIVE",
                    color: "text-cyan-400"
                  },
                  { 
                    channel: "NEURAL_LINK", 
                    address: "+1-800-CYBORG", 
                    status: "PRIORITY",
                    color: "text-pink-400"
                  },
                  { 
                    channel: "HOLO_MEETING", 
                    address: "VR_CONFERENCE.cyber", 
                    status: "BY APPOINTMENT",
                    color: "text-purple-400"
                  },
                  { 
                    channel: "AI_ASSISTANT", 
                    address: "chat.cybernet.ai", 
                    status: "INSTANT",
                    color: "text-green-400"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg border border-gray-600 hover:border-cyan-400/50 transition-colors duration-300">
                    <div>
                      <div className={`font-mono font-bold text-sm ${contact.color} neon-pulse`}>
                        {contact.channel}
                      </div>
                      <div className="text-gray-300 text-xs font-mono">
                        {contact.address}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">
                      {contact.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Network stats */}
            <div className="bg-black/60 border border-green-400/30 rounded-xl p-6">
              <h3 className="text-green-400 font-bold mb-4 neon-pulse">NETWORK_STATUS</h3>
              <div className="space-y-3 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-cyan-400">&lt; 0.001ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime:</span>
                  <span className="text-green-400">99.99%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Encryption:</span>
                  <span className="text-purple-400">QUANTUM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AI Assistant:</span>
                  <span className="text-pink-400">ONLINE</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-black/60 border border-purple-400/30 rounded-xl p-6">
              <h3 className="text-purple-400 font-bold mb-4 neon-pulse">COORDINATES</h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="text-gray-300">CYBERNET_HQ_TOWER</div>
                <div className="text-gray-400">Sector 7, Neo Tokyo</div>
                <div className="text-gray-400">Digital District, Level 99</div>
                <div className="text-cyan-400">GPS: 35.6762°N, 139.6503°E</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16 p-6 bg-gray-900/30 border border-cyan-400/30 rounded-xl">
          <p className="text-gray-400 font-mono text-sm hologram-flicker">
            All transmissions are secured with quantum encryption. 
            Your data will be processed by our AI systems and routed to the appropriate neural network.
            <span className="text-cyan-400 neon-pulse"> CONNECTION_ESTABLISHED </span>
          </p>
        </div>
      </div>
    </section>
  );
} 