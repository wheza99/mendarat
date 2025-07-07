import React, { useState } from 'react';

export default function ArcadeContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-transparent to-purple-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-black/80 border-2 border-green-500 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="text-green-500 text-sm font-mono mb-2 animate-synthwave-glow">
              {'> INITIALIZING CONTACT_PROTOCOL.EXE'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent mb-4 animate-synthwave-chrome-text">
              ARCADE CONTACT
            </h2>
            <p className="text-white/80 leading-relaxed font-mono">
              Connect with our retro specialists. We're standing by to help you enter the synthwave dimension.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/80 border-2 border-pink-500 rounded-lg p-8 backdrop-blur-sm">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-synthwave-pulse"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-synthwave-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-synthwave-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="text-sm text-white/60 font-mono">CONTACT_TERMINAL_v1.0</div>
            </div>

            <div className="text-pink-500 text-sm mb-6 font-mono animate-synthwave-glow">
              {'> OPENING COMMUNICATION CHANNEL...'}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-cyan-400 text-sm font-mono mb-2">
                  RETRO_IDENTIFIER:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/60 border-2 border-cyan-400/50 rounded-lg p-4 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-purple-500 text-sm font-mono mb-2">
                  NEON_ADDRESS:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/60 border-2 border-purple-500/50 rounded-lg p-4 text-white font-mono focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-orange-500 text-sm font-mono mb-2">
                  SYNTHWAVE_MESSAGE:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full bg-black/60 border-2 border-orange-500/50 rounded-lg p-4 text-white font-mono focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your retro project..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-mono font-bold rounded-lg hover:from-pink-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
              </button>
            </form>

            {/* Terminal Output */}
            <div className="mt-6 bg-black/60 border border-green-500 rounded p-4">
              <div className="text-green-500 text-xs font-mono">
                {'> CONTACT_SYSTEM STATUS:'}
                <br />
                {'> ENCRYPTION: ENABLED'}
                <br />
                {'> SECURITY: MAXIMUM'}
                <br />
                {'> RESPONSE_TIME: <24H'}
                <br />
                <span className="animate-synthwave-pulse">{'> READY_TO_TRANSMIT_'}</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-black/80 border-2 border-cyan-400 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-cyan-400 text-sm font-mono mb-4 animate-synthwave-glow">
                {'> DIRECT_COMMUNICATION.EXE'}
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono animate-synthwave-glow">
                DIRECT CHANNELS
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-synthwave-pulse"></div>
                  <div className="font-mono">
                    <div className="text-white/60 text-sm">VOICE_CHANNEL:</div>
                    <div className="text-white">+1 (555) RETRO-80</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-synthwave-pulse"></div>
                  <div className="font-mono">
                    <div className="text-white/60 text-sm">DATA_STREAM:</div>
                    <div className="text-white">hello@synthwave.dev</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-synthwave-pulse"></div>
                  <div className="font-mono">
                    <div className="text-white/60 text-sm">LOCATION_NODE:</div>
                    <div className="text-white">Neon City, Cyber District</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Networks */}
            <div className="bg-black/80 border-2 border-purple-500 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-purple-500 text-sm font-mono mb-4 animate-synthwave-glow">
                {'> SOCIAL_NETWORKS.EXE'}
              </div>
              <h3 className="text-2xl font-bold text-purple-500 mb-6 font-mono animate-synthwave-glow">
                RETRO NETWORKS
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 border-2 border-pink-500/50 rounded-lg hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 font-mono">
                  <div className="text-pink-500 font-bold">RETRO_GRAM</div>
                  <div className="text-white/60 text-sm">@synthwave</div>
                </button>
                
                <button className="p-4 border-2 border-cyan-400/50 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 font-mono">
                  <div className="text-cyan-400 font-bold">NEON_TUBE</div>
                  <div className="text-white/60 text-sm">@retrowave</div>
                </button>
                
                <button className="p-4 border-2 border-orange-500/50 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 font-mono">
                  <div className="text-orange-500 font-bold">CYBER_LINK</div>
                  <div className="text-white/60 text-sm">@synthwave-dev</div>
                </button>
                
                <button className="p-4 border-2 border-green-500/50 rounded-lg hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 font-mono">
                  <div className="text-green-500 font-bold">RETRO_HUB</div>
                  <div className="text-white/60 text-sm">@synthwave-co</div>
                </button>
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-black/80 border-2 border-orange-500 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-orange-500 text-sm font-mono mb-4 animate-synthwave-glow">
                {'> SUPPORT_SCHEDULE.EXE'}
              </div>
              <h3 className="text-2xl font-bold text-orange-500 mb-6 font-mono animate-synthwave-glow">
                RETRO SUPPORT
              </h3>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-white/60">MON-FRI:</span>
                  <span className="text-white">9:00 - 18:00 NST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">WEEKEND:</span>
                  <span className="text-white">10:00 - 16:00 NST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">EMERGENCY:</span>
                  <span className="text-orange-500">24/7 AVAILABLE</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-black/40 border border-orange-500/50 rounded">
                <div className="text-orange-500 text-xs font-mono">
                  {'> NST = NEON STANDARD TIME'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <div className="bg-black/80 border-2 border-pink-500 rounded-lg p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <div className="text-pink-500 text-sm font-mono mb-4 animate-synthwave-glow">
              {'> FREQUENTLY_ASKED.EXE'}
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8 animate-synthwave-chrome-text">
              RETRO FAQ
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-black/40 border border-pink-500/50 rounded-lg p-6">
                <div className="text-pink-500 font-mono font-bold mb-2">Q: What is synthwave?</div>
                <div className="text-white/80 text-sm">A: Synthwave is a retro-futuristic aesthetic combining 80s nostalgia with modern technology.</div>
              </div>
              
              <div className="bg-black/40 border border-cyan-400/50 rounded-lg p-6">
                <div className="text-cyan-400 font-mono font-bold mb-2">Q: How fast is support?</div>
                <div className="text-white/80 text-sm">A: We typically respond within 24 hours, often much faster during business hours.</div>
              </div>
              
              <div className="bg-black/40 border border-purple-500/50 rounded-lg p-6">
                <div className="text-purple-500 font-mono font-bold mb-2">Q: Can I customize themes?</div>
                <div className="text-white/80 text-sm">A: Yes! All our themes are fully customizable with extensive neon color options.</div>
              </div>
              
              <div className="bg-black/40 border border-orange-500/50 rounded-lg p-6">
                <div className="text-orange-500 font-mono font-bold mb-2">Q: Do you offer training?</div>
                <div className="text-white/80 text-sm">A: We provide comprehensive documentation and video tutorials for all features.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 