import React from 'react';

export default function GamingContact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-6 font-mono">
            JOIN THE GAME
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            Ready to start your gaming journey? Get in touch with our team
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                GET IN TOUCH
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 font-mono">
                Have questions about our gaming platform? Our support team is here to help you get started and answer any questions you might have.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl">
                  📧
                </div>
                <div>
                  <h4 className="font-bold text-white font-mono">Email Support</h4>
                  <p className="text-gray-400 font-mono">support@gamingplatform.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
                  💬
                </div>
                <div>
                  <h4 className="font-bold text-white font-mono">Live Chat</h4>
                  <p className="text-gray-400 font-mono">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-xl">
                  📱
                </div>
                <div>
                  <h4 className="font-bold text-white font-mono">Discord</h4>
                  <p className="text-gray-400 font-mono">Join our community</p>
                </div>
              </div>
            </div>
            
            {/* Gaming community links */}
            <div className="pt-6">
              <h4 className="font-bold text-white mb-4 font-mono">JOIN OUR COMMUNITY</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                  🎮
                </button>
                <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  💬
                </button>
                <button className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors">
                  📺
                </button>
                <button className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                  🐦
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 font-mono">GAMER TAG</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors font-mono"
                      placeholder="YourGamerTag"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2 font-mono">EMAIL</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors font-mono"
                      placeholder="gamer@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2 font-mono">GAME PREFERENCE</label>
                  <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors font-mono">
                    <option>Select your favorite game type</option>
                    <option>FPS Games</option>
                    <option>MOBA Games</option>
                    <option>RPG Games</option>
                    <option>Strategy Games</option>
                    <option>Racing Games</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2 font-mono">EXPERIENCE LEVEL</label>
                  <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors font-mono">
                    <option>Select your experience level</option>
                    <option>Beginner (0-1 years)</option>
                    <option>Intermediate (1-3 years)</option>
                    <option>Advanced (3-5 years)</option>
                    <option>Expert (5+ years)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2 font-mono">MESSAGE</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-none font-mono"
                    placeholder="Tell us about your gaming experience..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 font-mono"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 