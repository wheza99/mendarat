import React from 'react';

export default function ArtDecoContact() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Art Deco Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Art Deco Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:140px_140px] animate-art-deco-scan"></div>
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:240px_240px] animate-art-deco-scan-reverse"></div>
        </div>

        {/* Floating Art Deco Elements */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 border-2 border-cyan-400 rotate-45 animate-neon-pulse"></div>
        <div className="absolute top-1/3 right-1/6 w-16 h-16 border-2 border-purple-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-pink-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-2 border-pink-400 rounded-lg shadow-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mr-2"></div>
            <span className="text-xs font-bold text-pink-400 tracking-wider">
              CONTACT
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Art Deco</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life with art deco elegance and neon gradient innovation? 
            Let's start a conversation and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/60 to-purple-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gradient-to-br from-slate-700 to-purple-700 border-2 border-gray-500 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gradient-to-br from-slate-700 to-purple-700 border-2 border-gray-500 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gradient-to-br from-slate-700 to-purple-700 border-2 border-gray-500 rounded-lg text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-gradient-to-br from-slate-700 to-purple-700 border-2 border-gray-500 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300">
                    <option value="">Select a subject</option>
                    <option value="project">New Project</option>
                    <option value="consultation">Consultation</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gradient-to-br from-slate-700 to-purple-700 border-2 border-gray-500 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: '📍',
                  title: 'Visit Us',
                  content: '123 Art Deco Street, Neon City, NC 12345',
                  gradient: 'from-cyan-400 to-blue-500'
                },
                {
                  icon: '📧',
                  title: 'Email Us',
                  content: 'hello@artdeconeon.com',
                  gradient: 'from-purple-400 to-pink-500'
                },
                {
                  icon: '📞',
                  title: 'Call Us',
                  content: '+1 (555) 123-4567',
                  gradient: 'from-pink-400 to-red-500'
                }
              ].map((contact, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/60 to-purple-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                >
                  {/* Art Deco Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-purple-700 rounded-lg border-2 border-gray-500 group-hover:border-gray-400 transition-colors duration-300 mr-4">
                      <span className="text-xl">{contact.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-gray-100 transition-colors duration-300">
                        {contact.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {contact.content}
                      </p>
                    </div>
                  </div>

                  {/* Art Deco Accent */}
                  <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${contact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-slate-800/60 to-purple-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-lg p-6 shadow-xl">
              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: '🐦', color: 'cyan' },
                  { name: 'LinkedIn', icon: '💼', color: 'purple' },
                  { name: 'Instagram', icon: '📸', color: 'pink' },
                  { name: 'GitHub', icon: '💻', color: 'cyan' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`group relative w-12 h-12 bg-gradient-to-br from-slate-700 to-purple-700 border-2 border-gray-500 rounded-lg flex items-center justify-center hover:border-${social.color}-400 transition-all duration-300 transform hover:scale-110`}
                  >
                    <span className="text-lg">{social.icon}</span>
                    <div className={`absolute inset-0 bg-gradient-to-br from-${social.color}-400/20 to-${social.color}-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-slate-800/60 to-purple-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-lg p-6 shadow-xl">
              <h4 className="text-lg font-bold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Art Deco Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 border-2 border-${['cyan', 'purple', 'pink', 'cyan', 'purple', 'pink', 'cyan', 'purple'][i]}-400 rotate-45 animate-neon-pulse`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 