import React from 'react';

export default function SpaceContact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-purple-200">Launch</span> Your Mission
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Ready to embark on your cosmic journey? Contact us to start planning your space exploration adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6">🚀 Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <div className="text-white font-semibold">Mission Control</div>
                    <div className="text-purple-100">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-purple-100">mission@spaceexploration.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <div className="text-white font-semibold">Launch Site</div>
                    <div className="text-purple-100">Kennedy Space Center<br />Cape Canaveral, FL 32920</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">🕒</div>
                  <div>
                    <div className="text-white font-semibold">Mission Hours</div>
                    <div className="text-purple-100">24/7 Mission Control</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-indigo-200 mb-2">100+</div>
                <div className="text-purple-100 text-sm">Successful Launches</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-purple-200 mb-2">50+</div>
                <div className="text-purple-100 text-sm">Astronauts Trained</div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">🚀 Mission Application</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:border-indigo-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:border-indigo-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:border-indigo-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Mission Interest</label>
                <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-300">
                  <option className="bg-purple-900">Select a mission</option>
                  <option className="bg-purple-900">Mars Mission</option>
                  <option className="bg-purple-900">Moon Base</option>
                  <option className="bg-purple-900">ISS Expedition</option>
                  <option className="bg-purple-900">Deep Space</option>
                  <option className="bg-purple-900">Asteroid Mining</option>
                  <option className="bg-purple-900">Space Tourism</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:border-indigo-300"
                  placeholder="Tell us about your space exploration goals..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-indigo-900 hover:bg-indigo-50 font-semibold py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 Launch Application
              </button>
            </form>
          </div>
        </div>
        
        {/* Space decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-white/60">
            <span className="text-2xl animate-pulse">🚀</span>
            <span className="text-lg font-light">YOUR SPACE ADVENTURE STARTS HERE</span>
            <span className="text-2xl animate-bounce">👨‍🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
} 