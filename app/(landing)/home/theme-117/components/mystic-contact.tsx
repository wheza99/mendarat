import React from 'react';

export default function MysticContact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6 font-serif">
            CONTACT MYSTIC REALMS
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto font-serif">
            Connect with our mystical practitioners and spiritual guides
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-6 font-serif">
                MYSTICAL PRACTITIONERS
              </h3>
              <p className="text-purple-200 leading-relaxed mb-8 font-serif">
                Expert mystical services and spiritual guidance for your journey.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-purple-400">📍</div>
                <div>
                  <h4 className="text-purple-400 font-bold mb-2 font-serif">Sacred Location</h4>
                  <p className="text-purple-200 font-serif">123 Mystic Street<br />Enchanted District<br />Mystic City, MC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-purple-400">📞</div>
                <div>
                  <h4 className="text-purple-400 font-bold mb-2 font-serif">Crystal Phone</h4>
                  <p className="text-purple-200 font-serif">+1 (555) MYSTIC-01<br />+1 (555) MYSTIC-02</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-purple-400">✉️</div>
                <div>
                  <h4 className="text-purple-400 font-bold mb-2 font-serif">Astral Mail</h4>
                  <p className="text-purple-200 font-serif">info@mysticrealms.com<br />service@mysticrealms.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-purple-400">⏰</div>
                <div>
                  <h4 className="text-purple-400 font-bold mb-2 font-serif">Sacred Hours</h4>
                  <p className="text-purple-200 font-serif">Monday - Friday: 9:00 AM - 8:00 PM<br />Saturday: 10:00 AM - 6:00 PM<br />Sunday: Closed (Sacred Rest)</p>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="pt-6">
              <h4 className="text-purple-400 font-bold mb-4 font-serif">Follow Our Mystical Path</h4>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white hover:shadow-purple-500/25 transition-all duration-300">
                  ✨
                </button>
                <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white hover:shadow-purple-500/25 transition-all duration-300">
                  🔮
                </button>
                <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white hover:shadow-purple-500/25 transition-all duration-300">
                  🌟
                </button>
                <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white hover:shadow-purple-500/25 transition-all duration-300">
                  💫
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl border border-purple-500/30 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 font-serif">
              SEND MYSTICAL MESSAGE
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-300 font-semibold mb-2 font-serif">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-purple-900/50 border border-purple-500/30 rounded-lg text-purple-200 placeholder-purple-400 focus:outline-none focus:border-purple-400 transition-colors font-serif"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 font-semibold mb-2 font-serif">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-purple-900/50 border border-purple-500/30 rounded-lg text-purple-200 placeholder-purple-400 focus:outline-none focus:border-purple-400 transition-colors font-serif"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-purple-300 font-semibold mb-2 font-serif">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-purple-900/50 border border-purple-500/30 rounded-lg text-purple-200 placeholder-purple-400 focus:outline-none focus:border-purple-400 transition-colors font-serif"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-purple-300 font-semibold mb-2 font-serif">Service Type</label>
                <select className="w-full px-4 py-3 bg-purple-900/50 border border-purple-500/30 rounded-lg text-purple-200 focus:outline-none focus:border-purple-400 transition-colors font-serif">
                  <option value="">Select a service</option>
                  <option value="reading">Crystal Reading</option>
                  <option value="spell">Spell Casting</option>
                  <option value="astral">Astral Journey</option>
                  <option value="cleansing">Energy Cleansing</option>
                  <option value="moon">Moon Rituals</option>
                  <option value="healing">Spiritual Healing</option>
                </select>
              </div>
              
              <div>
                <label className="block text-purple-300 font-semibold mb-2 font-serif">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-purple-900/50 border border-purple-500/30 rounded-lg text-purple-200 placeholder-purple-400 focus:outline-none focus:border-purple-400 transition-colors font-serif"
                  placeholder="Describe your mystical needs..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-serif"
              >
                SEND MYSTICAL MESSAGE
              </button>
            </form>
          </div>
        </div>
        
        {/* Mystical guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-4 font-serif">
              MYSTICAL PROTECTION GUARANTEE
            </h3>
            <p className="text-purple-200 mb-6 max-w-md mx-auto font-serif">
              All our mystical services come with spiritual protection and satisfaction guarantee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-purple-500/25 transition-all duration-300 font-serif">
                GET QUOTE
              </button>
              <button className="px-6 py-3 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400 hover:text-purple-900 transition-all duration-300 font-serif">
                SCHEDULE VISIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 