'use client';

import { useState } from 'react';

const communicationChannels = [
  {
    name: 'Quantum Entanglement Comm',
    description: 'Instantaneous communication across any distance using quantum entangled particles.',
    frequency: 'Q-Band 847.3 GHz',
    range: 'Unlimited',
    encryption: 'Quantum-Safe',
    icon: '⚛️'
  },
  {
    name: 'Neural Interface Link',
    description: 'Direct brain-to-computer communication for enhanced bandwidth and precision.',
    frequency: 'Neural Alpha 8-13 Hz',
    range: 'Global Network',
    encryption: 'Biometric Lock',
    icon: '🧠'
  },
  {
    name: 'Holographic Transmission',
    description: '3D holographic communication with full sensory feedback and presence simulation.',
    frequency: 'Holo-Band 2.4 THz',
    range: 'Solar System',
    encryption: 'Photonic Shield',
    icon: '📡'
  }
];

export default function Contact() {
  const [selectedChannel, setSelectedChannel] = useState(0);
  const [formData, setFormData] = useState({
    designation: '',
    origin: '',
    sector: '',
    priority: '',
    subject: '',
    message: ''
  });
  const [isTransmitting, setIsTransmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTransmit = () => {
    setIsTransmitting(true);
    setTimeout(() => setIsTransmitting(false), 3000);
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background communication elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Signal waves */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 border border-cyan-400/20 rounded-full"
            style={{
              width: `${(i + 1) * 100}px`,
              height: `${(i + 1) * 100}px`,
              transform: 'translate(-50%, -50%)',
              animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
        
        {/* Satellite paths */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-purple-400/20 rounded-full space-float">
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-8">
            <span className="text-xl">📡</span>
            <span className="font-mono text-cyan-400 tracking-wider uppercase text-sm">Communication Hub</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8">
            Establish Contact
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Connect with mission control and join humanity's greatest adventure. 
            Use our advanced communication systems to 
            <span className="text-cyan-400"> transmit your message</span> across the cosmos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Communication Channels */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Communication Protocols</h3>
            
            {communicationChannels.map((channel, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  selectedChannel === index
                    ? 'bg-slate-800/50 border-2 border-cyan-400/50 quantum-pulse'
                    : 'bg-slate-800/20 border border-slate-700/50 hover:border-slate-600/50'
                }`}
                onClick={() => setSelectedChannel(index)}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-4xl transition-all duration-300 ${
                      selectedChannel === index ? 'hologram-flicker scale-110' : ''
                    }`}>
                      {channel.icon}
                    </div>
                    <h4 className={`text-xl font-bold transition-colors duration-300 ${
                      selectedChannel === index ? 'text-cyan-400' : 'text-white'
                    }`}>
                      {channel.name}
                    </h4>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {channel.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-slate-400">Frequency</div>
                      <div className="text-cyan-400 font-mono">{channel.frequency}</div>
                    </div>
                    <div className="p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-slate-400">Range</div>
                      <div className="text-green-400 font-mono">{channel.range}</div>
                    </div>
                    <div className="p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-slate-400">Security</div>
                      <div className="text-purple-400 font-mono">{channel.encryption}</div>
                    </div>
                  </div>
                </div>

                {selectedChannel === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-r" />
                )}
              </div>
            ))}
          </div>

          {/* Transmission Interface */}
          <div className="relative">
            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl relative overflow-hidden">
              {/* Transmission overlay */}
              {isTransmitting && (
                <div className="absolute inset-0 bg-cyan-400/10 animate-pulse z-20" />
              )}
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
                  Transmission Interface
                </h3>
                
                <form className="space-y-6">
                  {/* Identification */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.designation}
                        onChange={(e) => handleInputChange('designation', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-all duration-300 text-white font-mono"
                        placeholder="Agent Designation"
                      />
                      <div className="absolute top-2 right-2 text-cyan-400/50 text-xs">ID</div>
                    </div>
                    
                    <div className="relative">
                      <select
                        value={formData.origin}
                        onChange={(e) => handleInputChange('origin', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-all duration-300 text-white font-mono"
                      >
                        <option value="">Origin Point</option>
                        <option value="earth">Earth</option>
                        <option value="mars">Mars Colony</option>
                        <option value="europa">Europa Station</option>
                        <option value="titan">Titan Outpost</option>
                        <option value="proxima">Proxima Centauri</option>
                      </select>
                    </div>
                  </div>

                  {/* Mission Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <select
                        value={formData.sector}
                        onChange={(e) => handleInputChange('sector', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-all duration-300 text-white font-mono"
                      >
                        <option value="">Department</option>
                        <option value="exploration">Space Exploration</option>
                        <option value="research">Research & Development</option>
                        <option value="diplomacy">Alien Relations</option>
                        <option value="engineering">Engineering Corps</option>
                        <option value="medical">Medical Division</option>
                      </select>
                    </div>
                    
                    <div className="relative">
                      <select
                        value={formData.priority}
                        onChange={(e) => handleInputChange('priority', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-all duration-300 text-white font-mono"
                      >
                        <option value="">Priority Level</option>
                        <option value="routine">Routine</option>
                        <option value="urgent">Urgent</option>
                        <option value="critical">Critical</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-all duration-300 text-white"
                      placeholder="Transmission Subject"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-all duration-300 text-white resize-none"
                      placeholder="Enter your message to mission control..."
                    />
                    <div className="absolute bottom-2 right-2 text-slate-500 text-xs font-mono">
                      {formData.message.length}/1000
                    </div>
                  </div>

                  {/* Transmission Button */}
                  <button
                    type="button"
                    onClick={handleTransmit}
                    disabled={isTransmitting}
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 relative overflow-hidden ${
                      isTransmitting
                        ? 'bg-green-500/20 text-green-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-cyan-500/25 quantum-pulse'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isTransmitting ? (
                        <>
                          <span className="animate-spin">⚡</span>
                          Transmitting...
                          <span className="animate-ping">📡</span>
                        </>
                      ) : (
                        <>
                          <span>🚀</span>
                          Initiate Transmission
                          <span>→</span>
                        </>
                      )}
                    </span>
                    
                    {isTransmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" />
                    )}
                  </button>
                </form>

                {/* Status Display */}
                <div className="mt-6 p-4 bg-slate-900/30 rounded-lg border border-slate-600/50">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Channel Status:</span>
                    <span className="text-green-400 font-mono">SECURE LINK ESTABLISHED</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-slate-400">Encryption:</span>
                    <span className="text-cyan-400 font-mono">{communicationChannels[selectedChannel].encryption}</span>
                  </div>
                </div>
              </div>

              {/* Interface decorations */}
              <div className="absolute top-4 left-4 text-cyan-400/50 font-mono text-xs">
                COMM_INTERFACE_v3.7
              </div>
              <div className="absolute top-4 right-4 text-cyan-400/50 font-mono text-xs">
                SECURE_CHANNEL
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Protocols */}
        <div className="text-center mt-20">
          <div className="inline-block p-6 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 border border-red-400/30 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="text-4xl animate-pulse">🚨</div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-red-400 mb-1">Emergency Protocols</h3>
                <p className="text-slate-300">For critical situations, use Quantum Emergency Channel QEC-001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
} 