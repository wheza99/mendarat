import React from 'react';

export default function NordicContact() {
  return (
    <section className="py-20 px-4 relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-slate-50/60 to-gray-50/60"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-800 tracking-wide">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 font-light">
            🌲 Ready to embrace Nordic living? ❄️
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="relative">
            <div className="p-8 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200">
              
              {/* Subtle background effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-50/50 via-gray-50/50 to-blue-50/50"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-slate-800 mb-6">
                  🏠 Contact Form
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 text-sm font-light mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-slate-400 focus:outline-none transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 text-sm font-light mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-slate-400 focus:outline-none transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 text-sm font-light mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-slate-400 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 text-sm font-light mb-2">
                      Interest
                    </label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-slate-800 focus:border-slate-400 focus:outline-none transition-all duration-300">
                      <option value="">Select your interest</option>
                      <option value="interior">Interior Design</option>
                      <option value="wellness">Wellness Coaching</option>
                      <option value="minimalist">Minimalist Consulting</option>
                      <option value="hygge">Hygge Workshops</option>
                      <option value="lifestyle">Lifestyle Events</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 text-sm font-light mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-slate-400 focus:outline-none transition-all duration-300"
                      placeholder="Tell us about your Nordic lifestyle interests..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-6 py-4 bg-slate-800 text-white font-light rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-sm"
                  >
                    🌲 Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="p-8 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200">
              <h3 className="text-2xl font-light text-slate-800 mb-6">
                ❄️ Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-xl mr-4 animate-pulse">
                    📧
                  </div>
                  <div>
                    <h4 className="text-slate-700 font-light">Email</h4>
                    <p className="text-slate-600">hello@nordicliving.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-xl mr-4 animate-bounce">
                    📱
                  </div>
                  <div>
                    <h4 className="text-slate-700 font-light">Phone</h4>
                    <p className="text-slate-600">+46 8 123 456 78</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-xl mr-4 animate-spin">
                    📍
                  </div>
                  <div>
                    <h4 className="text-slate-700 font-light">Address</h4>
                    <p className="text-slate-600">Stockholm, Sweden</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-xl mr-4 animate-pulse">
                    ⏰
                  </div>
                  <div>
                    <h4 className="text-slate-700 font-light">Hours</h4>
                    <p className="text-slate-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200">
              <h3 className="text-lg font-light text-slate-800 mb-4">
                🏔️ Follow Us
              </h3>
              <div className="flex space-x-4">
                <button className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                  📘
                </button>
                <button className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                  📷
                </button>
                <button className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                  🐦
                </button>
                <button className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                  📺
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 text-slate-200 text-xl animate-bounce">
        🌲
      </div>
      <div className="absolute bottom-20 right-20 text-gray-200 text-xl animate-pulse">
        ❄️
      </div>
      <div className="absolute top-1/2 left-10 text-blue-200 text-lg animate-spin">
        🏔️
      </div>
      <div className="absolute top-1/3 right-10 text-slate-100 text-lg animate-bounce">
        🧸
      </div>
    </section>
  );
} 