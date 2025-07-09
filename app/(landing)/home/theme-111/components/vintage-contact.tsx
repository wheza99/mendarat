import React from 'react';

export default function VintageContact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-800 mb-6">
            Visit Our Shop
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic">
            Experience the charm of vintage treasures in our carefully curated space
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-amber-800 mb-6">
                GET IN TOUCH
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 font-serif italic">
                Whether you're looking to buy, sell, or restore vintage pieces, our experts are here to help you with all your antique needs.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-none flex items-center justify-center text-white text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-serif text-amber-800 font-semibold">Visit Our Shop</h4>
                  <p className="text-gray-600 font-serif">123 Vintage Lane, Antique District</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-none flex items-center justify-center text-white text-xl">
                  📞
                </div>
                <div>
                  <h4 className="font-serif text-amber-800 font-semibold">Call Us</h4>
                  <p className="text-gray-600 font-serif">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-none flex items-center justify-center text-white text-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="font-serif text-amber-800 font-semibold">Email Us</h4>
                  <p className="text-gray-600 font-serif">info@vintagetreasures.com</p>
                </div>
              </div>
            </div>
            
            {/* Business hours */}
            <div className="pt-6">
              <h4 className="font-serif text-amber-800 font-semibold mb-4">BUSINESS HOURS</h4>
              <div className="space-y-2 text-sm font-serif">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="text-amber-700">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-amber-700">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="text-amber-700">By Appointment</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-none border-2 border-amber-200 p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-800 font-serif font-semibold mb-2">FIRST NAME</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/50 border-2 border-amber-200 rounded-none text-gray-800 placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-serif"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-800 font-serif font-semibold mb-2">LAST NAME</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/50 border-2 border-amber-200 rounded-none text-gray-800 placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-serif"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-800 font-serif font-semibold mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/50 border-2 border-amber-200 rounded-none text-gray-800 placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-serif"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-800 font-serif font-semibold mb-2">SERVICE INTEREST</label>
                  <select className="w-full px-4 py-3 bg-white/50 border-2 border-amber-200 rounded-none text-gray-800 focus:border-amber-400 focus:outline-none transition-colors font-serif">
                    <option>Select a service</option>
                    <option>Antique Appraisal</option>
                    <option>Restoration & Repair</option>
                    <option>Custom Framing</option>
                    <option>Conservation</option>
                    <option>Purchase Antiques</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-800 font-serif font-semibold mb-2">MESSAGE</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 border-2 border-amber-200 rounded-none text-gray-800 placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors resize-none font-serif"
                    placeholder="Tell us about your vintage piece or inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-serif text-lg rounded-none shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-amber-700"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            
            {/* Vintage frame decoration */}
            <div className="absolute inset-0 border-2 border-amber-300 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 