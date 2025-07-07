import React from 'react';

export default function ArtDecoContact() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,#a855f7_0%,transparent_50%)] bg-[length:190px_190px] animate-art-deco-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-15deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:270px_270px] animate-art-deco-flow"></div>
      </div>

      {/* Art Deco Corner Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 border-4 border-purple-400 rounded-lg animate-neon-pulse"></div>
      <div className="absolute top-0 right-0 w-48 h-48 border-4 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 border-4 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 border-4 border-purple-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            ART DECO CONTACT
          </div>
          <div className="text-xl text-purple-200 font-light">
            Get in Touch with Elegance
          </div>
          
          {/* Art Deco Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-18 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-cyan-400 rotate-45 animate-neon-spin"></div>
            <div className="w-18 h-1 bg-gradient-to-r from-pink-400 to-cyan-400"></div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="group relative">
            <div className="relative bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-xl border border-purple-400/50 rounded-lg p-8 hover:border-purple-400/90 transition-all duration-300">
              {/* Art Deco Corner Decorations */}
              <div className="absolute top-6 left-6 w-12 h-12 border-2 border-purple-400 rounded-sm animate-neon-pulse"></div>
              <div className="absolute top-6 right-6 w-12 h-12 border-2 border-pink-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border-2 border-cyan-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-purple-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

              <h3 className="text-2xl font-bold text-white mb-6">SEND US A MESSAGE</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">NAME</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">EMAIL</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">SUBJECT</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">MESSAGE</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 bg-purple-900/50 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                  <span className="relative z-10">SEND MESSAGE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </button>
              </form>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: '◈',
                  title: 'ADDRESS',
                  content: '123 Art Deco Street, Neon City, NC 12345',
                  gradient: 'from-purple-400 to-pink-400'
                },
                {
                  icon: '◆',
                  title: 'EMAIL',
                  content: 'hello@artdeconeon.com',
                  gradient: 'from-pink-400 to-cyan-400'
                },
                {
                  icon: '◇',
                  title: 'PHONE',
                  content: '+1 (555) 123-4567',
                  gradient: 'from-cyan-400 to-purple-400'
                }
              ].map((info, index) => (
                <div key={index} className="group relative">
                  <div className="relative bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-xl border border-purple-400/40 rounded-lg p-6 hover:border-purple-400/80 transition-all duration-300">
                    {/* Art Deco Corner Decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-purple-400 rounded-sm animate-neon-pulse"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-2 border-pink-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-cyan-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-purple-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

                    <div className="flex items-center space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{info.title}</h4>
                        <p className="text-purple-200">{info.content}</p>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Art Deco Social Links */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-6">FOLLOW US</h4>
              <div className="flex justify-center space-x-6">
                {[
                  { icon: '◈', label: 'Twitter', gradient: 'from-purple-400 to-pink-400' },
                  { icon: '◆', label: 'Instagram', gradient: 'from-pink-400 to-cyan-400' },
                  { icon: '◇', label: 'LinkedIn', gradient: 'from-cyan-400 to-purple-400' }
                ].map((social, index) => (
                  <div key={index} className="group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-lg flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                      {social.icon}
                    </div>
                    <div className="text-xs text-purple-200 mt-2">{social.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Art Deco Footer */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-xl border border-purple-400/50 rounded-lg p-8">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                ART DECO
              </span>
              <span className="text-white"> NEON </span>
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                GRADIENT
              </span>
            </div>
            <p className="text-purple-200">
              Where Classic Elegance Meets Modern Innovation
            </p>
          </div>
        </div>

        {/* Floating Art Deco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 14 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-art-deco-float"
              style={{
                left: `${5 + (i % 5) * 25}%`,
                top: `${8 + Math.floor(i / 5) * 40}%`,
                animationDelay: `${i * 0.9}s`,
                animationDuration: `${18 + Math.random() * 14}s`
              }}
            >
              <div className={`w-14 h-14 border-2 border-${['purple', 'pink', 'cyan'][i % 3]}-400 rounded-sm animate-neon-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 