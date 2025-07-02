'use client';

import theme34Copy from '../copy';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Matrix */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Neon circuit lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400/40 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 mb-6 tracking-wider">
            {theme34Copy.contact.title}
          </h2>
          <div className="text-green-400 font-mono text-lg border-l-2 border-green-400 pl-4 inline-block">
            {theme34Copy.contact.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black border-2 border-green-400 relative overflow-hidden">
            <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b-2 border-green-400">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-green-400 font-mono text-sm ml-4">contact_form.exe</span>
            </div>
            
            <div className="p-8">
              <div className="text-green-400 font-mono text-sm mb-6">
                $ ./initialize_contact_protocol.sh
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    {'>'} name_input:
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-black border-2 border-gray-700 text-green-400 font-mono px-4 py-3 focus:outline-none focus:border-green-400 transition-colors duration-300"
                    placeholder="Enter your name..."
                  />
                </div>
                
                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    {'>'} email_address:
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-black border-2 border-gray-700 text-green-400 font-mono px-4 py-3 focus:outline-none focus:border-green-400 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    {'>'} message_buffer:
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full bg-black border-2 border-gray-700 text-green-400 font-mono px-4 py-3 focus:outline-none focus:border-green-400 transition-colors duration-300 resize-none"
                    placeholder="Describe your project requirements..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="group relative w-full px-6 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono font-bold text-lg hover:bg-green-400 hover:text-black transition-all duration-300 uppercase tracking-wider"
                >
                  <span className="relative z-10">TRANSMIT_DATA</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black border-2 border-cyan-400 p-8">
              <h3 className="text-2xl font-black font-mono text-cyan-400 mb-6 tracking-wider">
                SYSTEM_INFO
              </h3>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">email_server:</span>
                  <span className="text-cyan-400">contact@cyberdev.exe</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">phone_line:</span>
                  <span className="text-cyan-400">+1 (555) CYBER-01</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">location:</span>
                  <span className="text-cyan-400">Neo Tokyo, 2077</span>
                </div>
              </div>
            </div>

            {/* Network Status */}
            <div className="bg-black border-2 border-pink-400 p-8">
              <h3 className="text-2xl font-black font-mono text-pink-400 mb-6 tracking-wider">
                NETWORK_STATUS
              </h3>
              
              <div className="space-y-4">
                {[
                  { service: "AI_NEURAL_NET", status: "ONLINE", ping: "12ms" },
                  { service: "BLOCKCHAIN_NODE", status: "ACTIVE", ping: "8ms" },
                  { service: "QUANTUM_CORE", status: "STANDBY", ping: "25ms" },
                  { service: "SECURITY_GRID", status: "SECURED", ping: "5ms" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between font-mono text-sm">
                    <span className="text-gray-300">{item.service}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">{item.status}</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-gray-400">{item.ping}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Protocols */}
            <div className="bg-black border-2 border-green-400 p-8">
              <h3 className="text-2xl font-black font-mono text-green-400 mb-6 tracking-wider">
                SOCIAL_PROTOCOLS
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "GITHUB", handle: "@cyberdev" },
                  { name: "TWITTER", handle: "@cyber_exe" },
                  { name: "LINKEDIN", handle: "/cyberdev" },
                  { name: "DISCORD", handle: "CyberDev#2077" }
                ].map((social, index) => (
                  <button 
                    key={index}
                    className="bg-gray-900 border border-gray-700 p-3 hover:border-green-400 hover:bg-gray-800 transition-all duration-300 group"
                  >
                    <div className="text-green-400 font-mono text-xs group-hover:text-cyan-400 transition-colors duration-300">
                      {social.name}
                    </div>
                    <div className="text-gray-400 font-mono text-xs">
                      {social.handle}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="mt-16 text-center">
          <div className="bg-black border-2 border-green-400 px-8 py-4 inline-block font-mono text-green-400">
            <span className="animate-pulse">{'>'}</span> connection_established: READY_FOR_TRANSMISSION
          </div>
        </div>
      </div>
    </section>
  );
} 