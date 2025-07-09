import React from 'react';

export default function SpaContact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-6">
            CONTACT US
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto">
            Begin your wellness journey today. We're here to guide you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-rose-800 mb-6">
                GET IN TOUCH
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <div className="font-bold text-rose-800">Address</div>
                    <div className="text-rose-600">123 Wellness Street<br />Serenity Valley, CA 90210</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <div className="font-bold text-rose-800">Phone</div>
                    <div className="text-rose-600">(555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">✉️</div>
                  <div>
                    <div className="font-bold text-rose-800">Email</div>
                    <div className="text-rose-600">info@serenityspa.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🕐</div>
                  <div>
                    <div className="font-bold text-rose-800">Hours</div>
                    <div className="text-rose-600">Mon-Sun: 8AM - 8PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-rose-800 mb-6">
                FOLLOW US
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg hover:shadow-rose-500/25 transition-all duration-300">
                  <span className="mr-2">📱</span>
                  Instagram
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-pink-500/25 transition-all duration-300">
                  <span className="mr-2">📘</span>
                  Facebook
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-500 to-rose-600 text-white font-bold rounded-lg hover:shadow-purple-500/25 transition-all duration-300">
                  <span className="mr-2">🐦</span>
                  Twitter
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-rose-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-rose-500/25 transition-all duration-300">
                  <span className="mr-2">📺</span>
                  YouTube
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-rose-800 mb-6">
              SEND US A MESSAGE
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-rose-700 font-semibold mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-rose-700 font-semibold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-rose-700 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-rose-700 font-semibold mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-rose-700 font-semibold mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white/50 backdrop-blur-sm">
                  <option>Select a service</option>
                  <option>Massage Therapy</option>
                  <option>Aromatherapy</option>
                  <option>Meditation Sessions</option>
                  <option>Wellness Retreat</option>
                  <option>Custom Package</option>
                </select>
              </div>
              
              <div>
                <label className="block text-rose-700 font-semibold mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  placeholder="Tell us about your wellness goals..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-200 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-rose-800 mb-4">
              BEGIN YOUR WELLNESS JOURNEY
            </h3>
            <p className="text-rose-600 mb-6 max-w-md mx-auto">
              Contact us today to schedule your first wellness session
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105">
                BOOK APPOINTMENT
              </button>
              <button className="px-8 py-4 border-2 border-rose-500 text-rose-600 font-bold rounded-lg hover:bg-rose-500 hover:text-white transition-all duration-300">
                FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 