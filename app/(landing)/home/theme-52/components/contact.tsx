'use client';

import { copy } from '../copy';

export default function Contact() {
  return (
    <section className="py-20 relative">
      {/* Contact Network Background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <radialGradient id="contactGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00FF41" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF0080" stopOpacity="0.4" />
            </radialGradient>
          </defs>
          
          {/* Contact Network */}
          <circle cx="600" cy="400" r="100" fill="none" stroke="url(#contactGradient)" strokeWidth="2" className="animate-pulse" />
          <circle cx="300" cy="200" r="50" fill="none" stroke="url(#contactGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1s'}} />
          <circle cx="900" cy="600" r="60" fill="none" stroke="url(#contactGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '2s'}} />
          
          {/* Connection Lines */}
          <line x1="600" y1="400" x2="300" y2="200" stroke="url(#contactGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          <line x1="600" y1="400" x2="900" y2="600" stroke="url(#contactGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1.5s'}} />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {copy.contact.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            {copy.contact.subtitle}
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {copy.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="group relative">
            <div className="relative p-8 border border-cyan-400/30 bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-green-400/50 transition-all duration-500">
              {/* Cyber Frame Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-cyan-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-pink-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>

              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-cyan-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                  Send Message
                </h3>
                
                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                      Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                      placeholder="Enter subject"
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                      Message
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300 resize-none"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded-lg hover:from-cyan-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="group relative">
              <div className="relative p-8 border border-cyan-400/30 bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-green-400/50 transition-all duration-500">
                {/* Cyber Frame Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-pink-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-900/30 to-cyan-900/30 rounded-lg flex items-center justify-center group-hover:from-green-900/50 group-hover:to-cyan-900/50 transition-all duration-300">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Email</div>
                        <div className="text-cyan-400 group-hover:text-green-400 transition-colors duration-300">{copy.contact.email}</div>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-900/30 to-pink-900/30 rounded-lg flex items-center justify-center group-hover:from-cyan-900/50 group-hover:to-pink-900/50 transition-all duration-300">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Phone</div>
                        <div className="text-cyan-400 group-hover:text-green-400 transition-colors duration-300">{copy.contact.phone}</div>
                      </div>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-900/30 to-yellow-900/30 rounded-lg flex items-center justify-center group-hover:from-pink-900/50 group-hover:to-yellow-900/50 transition-all duration-300">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Address</div>
                        <div className="text-cyan-400 group-hover:text-green-400 transition-colors duration-300">{copy.contact.address}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="group relative">
              <div className="relative p-6 border border-cyan-400/30 bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-sm rounded-xl hover:border-green-400/50 transition-all duration-500">
                <div className="relative z-10 text-center">
                  <h4 className="text-lg font-bold mb-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                    Quick Response
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                    We typically respond within 24 hours
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                      <span className="text-xs text-green-400">
                        ONLINE NOW
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}