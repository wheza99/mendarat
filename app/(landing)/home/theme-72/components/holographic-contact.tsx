import React from 'react';

export default function HolographicContact() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Holographic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean White Base */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Holographic Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:300px_300px] animate-holographic-scan"></div>
        </div>

        {/* Floating Holographic Elements */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-lg animate-holographic-float"></div>
        <div className="absolute top-1/3 right-1/6 w-16 h-16 bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10 rounded-full animate-holographic-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-pink-400/10 via-blue-400/10 to-purple-400/10 rounded-lg animate-holographic-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></div>
            <span className="text-xs font-light text-gray-600 tracking-wider">
              CONTACT
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            <span className="block">Get In</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can bring your vision 
            to life with our holographic minimalism approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button className="w-full py-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Innovation Street<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@holographic.com<br />support@holographic.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: '🐦', label: 'Twitter', color: 'blue' },
                  { icon: '💼', label: 'LinkedIn', color: 'purple' },
                  { icon: '📷', label: 'Instagram', color: 'pink' },
                  { icon: '📘', label: 'Facebook', color: 'blue' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 bg-gradient-to-br from-${social.color}-400/20 to-${social.color}-600/20 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300`}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm text-gray-600">
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-left">
              <div className="text-sm font-light text-gray-500 mb-1">READY TO GET STARTED?</div>
              <div className="text-lg font-medium text-gray-900">Schedule a free consultation</div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {Array.from({ length: 13 }, (_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-holographic-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 