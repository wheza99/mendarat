'use client';

import theme33Copy from '../copy';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-100 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-200/15 to-purple-200/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-200/15 to-pink-200/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 backdrop-blur-sm rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl border border-white/40 p-8 inline-block shadow-lg">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              {theme33Copy.contact.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              {theme33Copy.contact.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/25 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button 
                type="submit"
                className="group relative w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white/25 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl">
                    📧
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Email</div>
                    <div className="text-gray-800 font-semibold">hello@creativestudio.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl">
                    📱
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Phone</div>
                    <div className="text-gray-800 font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Location</div>
                    <div className="text-gray-800 font-semibold">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/25 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Follow us</h3>
              
              <div className="flex space-x-4">
                {['🐦', '📘', '📷', '💼'].map((icon, index) => (
                  <button 
                    key={index}
                    className="w-12 h-12 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl flex items-center justify-center text-xl hover:bg-white/60 hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/25 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Why choose us?</h3>
              
              <div className="space-y-4">
                {[
                  { label: "Response Time", value: "< 24 hours" },
                  { label: "Project Success", value: "98%" },
                  { label: "Client Retention", value: "95%" }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{stat.label}</span>
                    <span className="text-gray-800 font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 