import React from 'react';

export default function NeonContact() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Deco Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,#a855f7_0%,transparent_50%)] bg-[length:140px_140px] animate-deco-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(15deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:220px_220px] animate-deco-flow"></div>
      </div>

      {/* Deco Corner Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 border-4 border-purple-400 rounded-lg animate-deco-pulse"></div>
      <div className="absolute top-0 right-0 w-48 h-48 border-4 border-pink-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 border-4 border-orange-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 border-4 border-purple-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            NEON CONTACT
          </div>
          <div className="text-xl text-purple-300 font-light">
            Let's Create Art Deco Magic Together
          </div>
          
          {/* Deco Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-18 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-orange-400 rotate-45 animate-deco-spin"></div>
            <div className="w-18 h-1 bg-gradient-to-r from-pink-400 to-orange-400"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="group relative">
            <div className="relative bg-gradient-to-br from-purple-100/80 to-pink-100/80 backdrop-blur-xl border border-purple-300/50 rounded-lg p-8">
              {/* Deco Corner Decorations */}
              <div className="absolute top-6 left-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-deco-pulse"></div>
              <div className="absolute top-6 right-6 w-8 h-8 border-2 border-pink-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-orange-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  GET IN TOUCH
                </span>
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-purple-600 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-purple-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus:border-purple-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-600 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-purple-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus:border-purple-400 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-600 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-purple-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus:border-purple-400 focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-600 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-purple-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your Art Deco project..."
                  ></textarea>
                </div>

                <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                  SEND MESSAGE
                </button>
              </form>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-pink-100/80 to-orange-100/80 backdrop-blur-xl border border-pink-300/50 rounded-lg p-8">
                {/* Deco Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-pink-400 rounded-sm animate-deco-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-orange-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-pink-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
                    CONTACT INFO
                  </span>
                </h3>

                <div className="space-y-6">
                  {[
                    { icon: '📍', label: 'Address', value: 'Art Deco Studio, Design District' },
                    { icon: '📧', label: 'Email', value: 'hello@artdeco-neon.com' },
                    { icon: '📱', label: 'Phone', value: '+1 (555) ART-DECO' },
                    { icon: '🌐', label: 'Website', value: 'www.artdeco-neon.com' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-lg">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-purple-600">{item.label}</div>
                        <div className="text-gray-800">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Deco Stats */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-orange-100/80 to-purple-100/80 backdrop-blur-xl border border-orange-300/50 rounded-lg p-8">
                {/* Deco Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-orange-400 rounded-sm animate-deco-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-pink-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-orange-400 rounded-sm animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>

                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    DECO STATS
                  </span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: '1000+', label: 'PROJECTS', color: 'purple' },
                    { number: '500+', label: 'CLIENTS', color: 'pink' },
                    { number: '24/7', label: 'SUPPORT', color: 'orange' },
                    { number: '100%', label: 'SATISFACTION', color: 'purple' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>
                        {stat.number}
                      </div>
                      <div className="text-xs text-purple-600 font-light uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Deco Center Element */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-br from-purple-100/80 to-pink-100/80 backdrop-blur-xl border border-purple-300/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                READY TO CREATE?
              </span>
            </h3>
            <p className="text-purple-600 mb-6">
              Let's create something amazing together with our Art Deco and neon gradient expertise
            </p>
            
            {/* Deco Elements */}
            <div className="flex justify-center items-center space-x-6">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 border-3 border-${['purple', 'pink', 'orange', 'purple', 'pink', 'orange'][i]}-400 rounded-lg animate-deco-pulse`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Deco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-deco-float"
              style={{
                left: `${3 + (i % 5) * 22}%`,
                top: `${8 + Math.floor(i / 5) * 20}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${18 + Math.random() * 14}s`
              }}
            >
              <div className={`w-6 h-6 border-2 border-${['purple', 'pink', 'orange'][i % 3]}-400 rounded-sm animate-deco-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 