import React from 'react';

export default function CyberContact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 font-mono">
            CONTACT US
          </h2>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto font-mono">
            Connect with our cyber technology experts. The future awaits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-cyan-500/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
                GET IN TOUCH
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <div className="font-bold text-cyan-400 font-mono">Location</div>
                    <div className="text-cyan-300 font-mono">Cyber District<br />Tech City, TC 2024</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <div className="font-bold text-cyan-400 font-mono">Quantum Line</div>
                    <div className="text-cyan-300 font-mono">(555) CYBER-01</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">✉️</div>
                  <div>
                    <div className="font-bold text-cyan-400 font-mono">Neural Mail</div>
                    <div className="text-cyan-300 font-mono">contact@cybertech.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🕐</div>
                  <div>
                    <div className="font-bold text-cyan-400 font-mono">Active Hours</div>
                    <div className="text-cyan-300 font-mono">24/7 - Always Online</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-cyan-500/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
                CONNECT
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-cyan-500/25 transition-all duration-300 font-mono">
                  <span className="mr-2">📱</span>
                  CyberGram
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-bold rounded-lg hover:shadow-purple-500/25 transition-all duration-300 font-mono">
                  <span className="mr-2">📘</span>
                  NeuralBook
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-cyan-500/25 transition-all duration-300 font-mono">
                  <span className="mr-2">🐦</span>
                  CyberTweet
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-indigo-500/25 transition-all duration-300 font-mono">
                  <span className="mr-2">📺</span>
                  QuantumTube
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-cyan-500/30 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
              SEND MESSAGE
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyan-400 font-semibold mb-2 font-mono">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-slate-800/50 backdrop-blur-sm text-cyan-300 font-mono"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-cyan-400 font-semibold mb-2 font-mono">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-slate-800/50 backdrop-blur-sm text-cyan-300 font-mono"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-cyan-400 font-semibold mb-2 font-mono">Neural Mail</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-slate-800/50 backdrop-blur-sm text-cyan-300 font-mono"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-cyan-400 font-semibold mb-2 font-mono">Quantum Line</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-slate-800/50 backdrop-blur-sm text-cyan-300 font-mono"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-cyan-400 font-semibold mb-2 font-mono">Service Interest</label>
                <select className="w-full px-4 py-3 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-slate-800/50 backdrop-blur-sm text-cyan-300 font-mono">
                  <option>Select a service</option>
                  <option>Quantum Computing</option>
                  <option>AI Development</option>
                  <option>Cybersecurity</option>
                  <option>Cloud Infrastructure</option>
                  <option>Custom Solution</option>
                </select>
              </div>
              
              <div>
                <label className="block text-cyan-400 font-semibold mb-2 font-mono">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-slate-800/50 backdrop-blur-sm text-cyan-300 font-mono"
                  placeholder="Tell us about your cyber needs..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-mono"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
              BEGIN YOUR CYBER JOURNEY
            </h3>
            <p className="text-cyan-300 mb-6 max-w-md mx-auto font-mono">
              Contact us today to deploy your cyber technology solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-mono">
                DEPLOY NOW
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-mono">
                FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 