'use client';

import theme32Copy from '../copy';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text mb-6">
            {theme32Copy.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            {theme32Copy.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-green-400/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text mb-6">
                Hubungi Tim Future Tech
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-xl">📧</span>
                  </div>
                  <div>
                    <div className="text-gray-300 font-mono">Email</div>
                    <div className="text-green-400">future@techsolutions.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-xl">📱</span>
                  </div>
                  <div>
                    <div className="text-gray-300 font-mono">Phone</div>
                    <div className="text-green-400">+62 21 2024 FUTURE</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-xl">🌐</span>
                  </div>
                  <div>
                    <div className="text-gray-300 font-mono">Location</div>
                    <div className="text-green-400">Jakarta Tech Hub, Indonesia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-6">
              Konsultasi Gratis AI Readiness
            </h3>
            
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Nama Lengkap"
                  className="w-full bg-slate-700/50 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400/60 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-slate-700/50 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400/60 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder="Perusahaan"
                  className="w-full bg-slate-700/50 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400/60 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <textarea 
                  placeholder="Ceritakan tentang project AI yang ingin Anda kembangkan..."
                  rows={4}
                  className="w-full bg-slate-700/50 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400/60 focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 rounded-lg hover:from-blue-500 hover:to-green-500 transition-all duration-300 transform hover:scale-105">
                Mulai Konsultasi Gratis
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 