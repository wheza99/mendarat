'use client';

import { copy } from '../copy';

export default function Contact() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ocean Contact Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-teal-800/25 to-cyan-700/30"></div>
        
        {/* Communication Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-15" style={{ pointerEvents: 'none' }}>
          <defs>
            <radialGradient id="contactWave1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#14B8A6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="contactWave2" cx="30%" cy="70%" r="40%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.7" />
              <stop offset="40%" stopColor="#14B8A6" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="50%" cy="30%" r="200" fill="url(#contactWave1)" className="animate-ocean-pulse" />
          <circle cx="70%" cy="60%" r="150" fill="url(#contactWave2)" className="animate-ocean-pulse" style={{ animationDelay: '2s' }} />
          <circle cx="20%" cy="80%" r="120" fill="url(#contactWave1)" className="animate-ocean-pulse" style={{ animationDelay: '4s' }} />
        </svg>
        
        {/* Contact Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="networkLine1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="networkLine2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0" />
              <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 200 Q 400 150 800 200 T 1600 180" stroke="url(#networkLine1)" strokeWidth="2" fill="none" className="animate-ocean-wave" />
          <path d="M 0 400 Q 500 350 1000 400 T 2000 380" stroke="url(#networkLine2)" strokeWidth="2" fill="none" className="animate-ocean-wave" style={{ animationDelay: '3s' }} />
        </svg>
        
        {/* Floating Contact Elements */}
        <div className="absolute top-24 left-16 w-4 h-4 bg-blue-400/30 rounded-full animate-ocean-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-teal-400/25 rounded-full animate-ocean-drift"></div>
        <div className="absolute bottom-32 left-24 w-5 h-5 bg-cyan-400/35 rounded-full animate-ocean-bubble"></div>
        <div className="absolute bottom-48 right-28 w-3 h-3 bg-green-400/20 rounded-full animate-ocean-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            {copy.contact.title}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {copy.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-900/60 via-teal-800/50 to-cyan-700/60 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {copy.contact.info.map((item, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:from-cyan-500 group-hover:to-teal-500 transition-all duration-300">
                      <span className="text-white text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-teal-300 transition-colors duration-300">
                        {item.label}
                      </h4>
                      <p className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-gradient-to-br from-blue-900/60 via-teal-800/50 to-cyan-700/60 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Follow Us
              </h3>
              
              <div className="flex space-x-4">
                {copy.contact.social.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    className="group w-12 h-12 bg-gradient-to-r from-blue-800/50 to-teal-700/50 border border-blue-400/30 rounded-2xl flex items-center justify-center hover:from-teal-500 hover:to-cyan-500 hover:border-teal-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-blue-200 group-hover:text-white transition-colors duration-300 text-xl">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-900/60 via-teal-800/50 to-cyan-700/60 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Send Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-blue-200 font-medium mb-2 group-focus-within:text-teal-300 transition-colors duration-300">
                    Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-blue-900/30 border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:border-teal-400/50 focus:outline-none focus:ring-2 focus:ring-teal-500/25 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="group">
                  <label className="block text-blue-200 font-medium mb-2 group-focus-within:text-teal-300 transition-colors duration-300">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-blue-900/30 border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:border-teal-400/50 focus:outline-none focus:ring-2 focus:ring-teal-500/25 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-blue-200 font-medium mb-2 group-focus-within:text-teal-300 transition-colors duration-300">
                  Subject
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-blue-900/30 border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:border-teal-400/50 focus:outline-none focus:ring-2 focus:ring-teal-500/25 transition-all duration-300"
                  placeholder="Message subject"
                />
              </div>
              
              <div className="group">
                <label className="block text-blue-200 font-medium mb-2 group-focus-within:text-teal-300 transition-colors duration-300">
                  Message
                </label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-blue-900/30 border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:border-teal-400/50 focus:outline-none focus:ring-2 focus:ring-teal-500/25 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="group w-full py-4 px-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-2xl hover:from-teal-400 hover:to-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
            </form>
            
            {/* Form Decoration */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400/40 rounded-full animate-ocean-float"></div>
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-ocean-drift"></div>
          </div>
        </div>
        
        {/* Contact Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-blue-900/40 via-teal-800/30 to-cyan-700/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-ocean-pulse"></div>
              <span className="text-blue-200 font-medium">24/7 Support</span>
            </div>
            <div className="w-px h-6 bg-blue-400/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ocean-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-blue-200 font-medium">Quick Response</span>
            </div>
            <div className="w-px h-6 bg-blue-400/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ocean-pulse" style={{ animationDelay: '2s' }}></div>
              <span className="text-blue-200 font-medium">Global Reach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}