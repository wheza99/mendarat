import React, { useState } from 'react';

export default function TerminalContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-black border-2 border-purple-500 rounded-lg p-6 max-w-2xl mx-auto font-mono">
            <div className="text-purple-500 text-sm mb-2">
              <span className="text-green-500">root@matrix:~$</span> initialize_communication_protocol
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4 animate-matrix-neon-glow">
              ESTABLISH_CONNECTION
            </h2>
            <p className="text-white/80 leading-relaxed">
              Initiate secure communication channel with our cybernetic command center. All transmissions are quantum-encrypted.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black border-2 border-green-500 rounded-lg p-8 font-mono">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-green-500 text-sm">SECURE_TERMINAL_v4.2</div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-green-500 text-sm mb-4">
                  <span className="text-cyan-500">root@matrix:~$</span> input_user_credentials
                </div>

                <div>
                  <label className="block text-green-500 text-sm mb-2">NEURAL_IDENTIFIER:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-green-500/50 rounded px-4 py-3 text-white font-mono focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Enter your neural identifier..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-cyan-500 text-sm mb-2">QUANTUM_ADDRESS:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-cyan-500/50 rounded px-4 py-3 text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="your.quantum@address.matrix"
                    required
                  />
                </div>

                <div>
                  <label className="block text-magenta-500 text-sm mb-2">TRANSMISSION_SUBJECT:</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-magenta-500/50 rounded px-4 py-3 text-white font-mono focus:border-magenta-500 focus:outline-none transition-colors"
                    placeholder="Subject of your transmission..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-blue-500 text-sm mb-2">DATA_PAYLOAD:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-black border border-blue-500/50 rounded px-4 py-3 text-white font-mono focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Enter your message payload here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed animate-matrix-pulse"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'SEND_TRANSMISSION'}
                </button>

                <div className="text-green-500 text-sm">
                  <span className="text-cyan-500">root@matrix:~$</span> 
                  <span className="animate-matrix-cursor">█</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-green-500 text-2xl mb-4 animate-matrix-neon-glow">
                  TRANSMISSION_SUCCESSFUL
                </div>
                <div className="text-white/80 mb-6">
                  Your message has been received and processed by our quantum systems. 
                  Our cybernetic team will respond within 24 hours.
                </div>
                <div className="text-green-500 text-sm">
                  <span className="text-cyan-500">root@matrix:~$</span> connection_established
                </div>
                <div className="text-green-500 text-sm mt-2">
                  <span className="animate-matrix-cursor">█</span>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Channels */}
            <div className="bg-black border-2 border-cyan-500 rounded-lg p-6 font-mono">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                </div>
                <div className="text-cyan-500 text-sm">DIRECT_CHANNELS</div>
              </div>

              <div className="text-cyan-500 text-sm mb-4">
                <span className="text-green-500">root@matrix:~$</span> list_communication_channels
              </div>

              <div className="space-y-4">
                <div className="border border-cyan-500/30 rounded p-4">
                  <div className="text-cyan-500 font-bold mb-2">NEURAL_LINK:</div>
                  <div className="text-white/80">+1 (555) MATRIX-1</div>
                  <div className="text-cyan-500/70 text-sm">24/7 Quantum Support</div>
                </div>

                <div className="border border-green-500/30 rounded p-4">
                  <div className="text-green-500 font-bold mb-2">QUANTUM_MAIL:</div>
                  <div className="text-white/80">contact@matrix.cyber</div>
                  <div className="text-green-500/70 text-sm">Encrypted Communications</div>
                </div>

                <div className="border border-magenta-500/30 rounded p-4">
                  <div className="text-magenta-500 font-bold mb-2">PHYSICAL_NODE:</div>
                  <div className="text-white/80">Neo City, Sector 7<br />The Matrix Building, Floor 42</div>
                  <div className="text-magenta-500/70 text-sm">By Appointment Only</div>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-black border-2 border-blue-500 rounded-lg p-6 font-mono">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div className="text-blue-500 text-sm">SYSTEM_STATUS</div>
              </div>

              <div className="text-blue-500 text-sm mb-4">
                <span className="text-green-500">root@matrix:~$</span> check_system_status
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">COMMUNICATION_SYSTEMS:</span>
                  <span className="text-green-500 font-bold">ONLINE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">QUANTUM_ENCRYPTION:</span>
                  <span className="text-green-500 font-bold">ACTIVE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">RESPONSE_TIME:</span>
                  <span className="text-cyan-500 font-bold">&lt; 24 HOURS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">SECURITY_LEVEL:</span>
                  <span className="text-magenta-500 font-bold">MAXIMUM</span>
                </div>
              </div>

              <div className="text-blue-500 text-sm mt-4">
                <span className="animate-matrix-cursor">█</span>
              </div>
            </div>

            {/* Social Networks */}
            <div className="bg-black border-2 border-purple-500 rounded-lg p-6 font-mono">
              <div className="text-purple-500 text-sm mb-4">
                <span className="text-green-500">root@matrix:~$</span> connect_social_networks
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="border border-purple-500/50 rounded p-3 text-purple-500 hover:bg-purple-500/10 transition-all duration-300">
                  NEURAL_BOOK
                </button>
                <button className="border border-cyan-500/50 rounded p-3 text-cyan-500 hover:bg-cyan-500/10 transition-all duration-300">
                  CYBER_GRAM
                </button>
                <button className="border border-blue-500/50 rounded p-3 text-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                  QUANTUM_IN
                </button>
                <button className="border border-green-500/50 rounded p-3 text-green-500 hover:bg-green-500/10 transition-all duration-300">
                  MATRIX_HUB
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 