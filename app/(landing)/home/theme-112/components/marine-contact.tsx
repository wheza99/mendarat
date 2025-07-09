import React from 'react';

export default function MarineContact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
            CONTACT US
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Ready to set sail? Get in touch with our marine specialists
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                GET IN TOUCH
              </h3>
              <p className="text-cyan-100 leading-relaxed mb-8">
                Whether you're planning a luxury yacht charter or seeking corporate event solutions, our marine experts are here to help you create unforgettable experiences.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-white">Marina Location</h4>
                  <p className="text-cyan-100">123 Harbor Drive, Marina Bay</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-white">Call Us</h4>
                  <p className="text-cyan-100">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center text-white text-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Us</h4>
                  <p className="text-cyan-100">info@luxuryyachts.com</p>
                </div>
              </div>
            </div>
            
            {/* Operating hours */}
            <div className="pt-6">
              <h4 className="font-bold text-white mb-4">OPERATING HOURS</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-cyan-200">Monday - Friday:</span>
                  <span className="text-cyan-400">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Saturday:</span>
                  <span className="text-cyan-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Sunday:</span>
                  <span className="text-cyan-400">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl border border-cyan-500/30 p-8 backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-bold mb-2">FIRST NAME</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-blue-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-300 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-bold mb-2">LAST NAME</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-blue-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-300 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-bold mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-blue-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-300 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-bold mb-2">SERVICE INTEREST</label>
                  <select className="w-full px-4 py-3 bg-blue-900/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors">
                    <option>Select a service</option>
                    <option>Private Charter</option>
                    <option>Corporate Events</option>
                    <option>Wedding Charters</option>
                    <option>Fishing Expeditions</option>
                    <option>Custom Charter</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-bold mb-2">PREFERRED DATES</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-blue-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-300 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="e.g., July 15-22, 2024"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-bold mb-2">NUMBER OF GUESTS</label>
                  <select className="w-full px-4 py-3 bg-blue-900/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors">
                    <option>Select number of guests</option>
                    <option>1-4 guests</option>
                    <option>5-8 guests</option>
                    <option>9-12 guests</option>
                    <option>13-18 guests</option>
                    <option>19+ guests</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-bold mb-2">MESSAGE</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-blue-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-300 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your yacht charter requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            
            {/* Ocean wave decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 