'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact-section" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={'text-center mb-20 transition-all duration-1000 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-400/30 rounded-full mb-8">
            <span className="text-xl">📡</span>
            <span className="font-mono text-emerald-400 tracking-wider uppercase text-sm">Communication Hub</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-8">
            Connect with Lab
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Establish secure quantum communication with our <span className="text-emerald-400">research team</span> 
            and join the future of <span className="text-green-400">computational science</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Communication Channels</h3>
            
            {[
              {
                name: 'Quantum Transmission',
                status: 'SECURE',
                protocol: 'QKD-2048',
                description: 'Ultra-secure quantum key distribution communication',
                icon: '🔐',
                latency: '< 1ms',
                reliability: '99.99%'
              },
              {
                name: 'Neural Interface',
                status: 'ACTIVE',
                protocol: 'BCI-v3.1',
                description: 'Direct brain-computer interface communication',
                icon: '🧠',
                latency: '< 0.1ms',
                reliability: '98.7%'
              }
            ].map((channel, index) => (
              <div key={index} className="p-6 bg-gray-900/30 border border-gray-700/50 rounded-2xl hover:border-emerald-400/30 transition-all duration-300 quantum-glow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl neural-flicker">{channel.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{channel.name}</h4>
                      <p className="text-emerald-400 text-sm font-mono">{channel.protocol}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono uppercase rounded-full">
                    {channel.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{channel.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-400 text-xs">Latency</span>
                    <div className="text-emerald-400 font-mono text-sm">{channel.latency}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs">Reliability</span>
                    <div className="text-emerald-400 font-mono text-sm">{channel.reliability}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Secure Transmission Interface</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-emerald-400 text-sm font-mono mb-2">
                    SENDER_ID
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-emerald-400/30 rounded-lg px-4 py-3 text-white font-mono focus:border-emerald-400 focus:outline-none"
                    placeholder="Enter identification code"
                  />
                </div>
                
                <div>
                  <label className="block text-emerald-400 text-sm font-mono mb-2">
                    MESSAGE_PAYLOAD
                  </label>
                  <textarea
                    rows={6}
                    className="w-full bg-black/50 border border-emerald-400/30 rounded-lg px-4 py-3 text-white font-mono focus:border-emerald-400 focus:outline-none resize-none"
                    placeholder="Enter encrypted message content..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 quantum-glow"
                >
                  INITIATE TRANSMISSION
                </button>
              </form>
              
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-emerald-400 font-mono text-sm">ENCRYPTION</div>
                  <div className="text-white text-xs">AES-256</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-mono text-sm">STATUS</div>
                  <div className="text-white text-xs">READY</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-mono text-sm">LATENCY</div>
                  <div className="text-white text-xs">0.3ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lab Locations */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Research Facilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Quantum Computing Lab',
                location: 'MIT - Cambridge, MA',
                coordinates: '42.3601° N, 71.0942° W',
                status: 'OPERATIONAL',
                icon: '⚛️'
              },
              {
                name: 'AI Research Center',
                location: 'Stanford - Palo Alto, CA',
                coordinates: '37.4419° N, 122.1430° W',
                status: 'ACTIVE',
                icon: '🧠'
              },
              {
                name: 'Neural Interface Lab',
                location: 'ETH Zurich - Switzerland',
                coordinates: '47.3769° N, 8.5417° E',
                status: 'SECURE',
                icon: '🔬'
              }
            ].map((facility, index) => (
              <div key={index} className="text-center p-6 bg-gray-900/20 border border-gray-700/50 rounded-xl hover:border-emerald-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{facility.name}</h4>
                <p className="text-emerald-400 text-sm mb-2">{facility.location}</p>
                <p className="text-gray-400 text-xs font-mono mb-3">{facility.coordinates}</p>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono uppercase rounded-full">
                  {facility.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 