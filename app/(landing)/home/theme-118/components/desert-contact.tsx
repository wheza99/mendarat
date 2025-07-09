import React from 'react';

export default function DesertContact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6 font-serif">
            CONTACT DESERT OASIS
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto font-serif">
            Connect with our desert guides and adventure experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-6 font-serif">
                DESERT ADVENTURES
              </h3>
              <p className="text-amber-200 leading-relaxed mb-8 font-serif">
                Expert desert guides and adventure specialists for your journey.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-amber-400">📍</div>
                <div>
                  <h4 className="text-amber-400 font-bold mb-2 font-serif">Desert Location</h4>
                  <p className="text-amber-200 font-serif">123 Oasis Street<br />Desert District<br />Arabian City, AC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-amber-400">📞</div>
                <div>
                  <h4 className="text-amber-400 font-bold mb-2 font-serif">Desert Phone</h4>
                  <p className="text-amber-200 font-serif">+1 (555) DESERT-01<br />+1 (555) DESERT-02</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-amber-400">✉️</div>
                <div>
                  <h4 className="text-amber-400 font-bold mb-2 font-serif">Oasis Mail</h4>
                  <p className="text-amber-200 font-serif">info@desertoasis.com<br />service@desertoasis.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-amber-400">⏰</div>
                <div>
                  <h4 className="text-amber-400 font-bold mb-2 font-serif">Desert Hours</h4>
                  <p className="text-amber-200 font-serif">Monday - Friday: 7:00 AM - 8:00 PM<br />Saturday: 8:00 AM - 6:00 PM<br />Sunday: Closed (Desert Rest)</p>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="pt-6">
              <h4 className="text-amber-400 font-bold mb-4 font-serif">Follow Our Desert Path</h4>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white hover:shadow-amber-500/25 transition-all duration-300">
                  🌵
                </button>
                <button className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white hover:shadow-amber-500/25 transition-all duration-300">
                  🐪
                </button>
                <button className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white hover:shadow-amber-500/25 transition-all duration-300">
                  🏺
                </button>
                <button className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white hover:shadow-amber-500/25 transition-all duration-300">
                  🌴
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-xl border border-amber-500/30 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 font-serif">
              SEND DESERT MESSAGE
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-amber-300 font-semibold mb-2 font-serif">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-amber-900/50 border border-amber-500/30 rounded-lg text-amber-200 placeholder-amber-400 focus:outline-none focus:border-amber-400 transition-colors font-serif"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-amber-300 font-semibold mb-2 font-serif">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-amber-900/50 border border-amber-500/30 rounded-lg text-amber-200 placeholder-amber-400 focus:outline-none focus:border-amber-400 transition-colors font-serif"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-amber-300 font-semibold mb-2 font-serif">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-amber-900/50 border border-amber-500/30 rounded-lg text-amber-200 placeholder-amber-400 focus:outline-none focus:border-amber-400 transition-colors font-serif"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-amber-300 font-semibold mb-2 font-serif">Service Type</label>
                <select className="w-full px-4 py-3 bg-amber-900/50 border border-amber-500/30 rounded-lg text-amber-200 focus:outline-none focus:border-amber-400 transition-colors font-serif">
                  <option value="">Select a service</option>
                  <option value="safari">Desert Safari</option>
                  <option value="camel">Camel Tours</option>
                  <option value="oasis">Oasis Retreats</option>
                  <option value="archaeology">Archaeological Tours</option>
                  <option value="photography">Photography Tours</option>
                  <option value="cultural">Cultural Experiences</option>
                </select>
              </div>
              
              <div>
                <label className="block text-amber-300 font-semibold mb-2 font-serif">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-amber-900/50 border border-amber-500/30 rounded-lg text-amber-200 placeholder-amber-400 focus:outline-none focus:border-amber-400 transition-colors font-serif"
                  placeholder="Describe your desert adventure needs..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 font-serif"
              >
                SEND DESERT MESSAGE
              </button>
            </form>
          </div>
        </div>
        
        {/* Desert guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-2xl border border-amber-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">
              DESERT ADVENTURE GUARANTEE
            </h3>
            <p className="text-amber-200 mb-6 max-w-md mx-auto font-serif">
              All our desert services come with safety guarantee and satisfaction promise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-amber-500/25 transition-all duration-300 font-serif">
                GET QUOTE
              </button>
              <button className="px-6 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-amber-900 transition-all duration-300 font-serif">
                SCHEDULE VISIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 