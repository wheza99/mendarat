'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme212: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-800 to-red-900 relative overflow-hidden">
      {/* Desert Background Elements */}
      <div className="absolute inset-0">
        {/* Sand Dunes */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-yellow-600/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-1/4 bg-gradient-to-t from-orange-600/20 to-transparent transform rotate-12"></div>
        
        {/* Stars */}
        <div className="absolute inset-0 opacity-60">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(2px 2px at 20px 30px, #fff, transparent),
                              radial-gradient(2px 2px at 40px 70px, #fff, transparent),
                              radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                              radial-gradient(1px 1px at 130px 80px, #fff, transparent),
                              radial-gradient(2px 2px at 160px 30px, #fff, transparent)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 100px'
          }}></div>
        </div>
        
        {/* Neon Glows */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Lanterns */}
        <div className="absolute top-1/4 left-1/4 w-8 h-12 bg-yellow-400/60 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-10 bg-orange-400/60 rounded-full blur-sm animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-10 h-14 bg-red-400/60 rounded-full blur-sm animate-bounce delay-2000"></div>
        
        {/* Sand Storm Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)`,
            backgroundSize: '100px 100px',
            animation: 'sandstorm 3s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl flex items-center justify-center relative border-2 border-purple-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arabian Nights
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-purple-200 hover:text-purple-400 font-medium transition-colors">Beranda</a>
              <a href="#padang" className="text-purple-200 hover:text-purple-400 font-medium transition-colors">Padang Pasir</a>
              <a href="#malam" className="text-purple-200 hover:text-purple-400 font-medium transition-colors">Malam Arab</a>
              <a href="#kontak" className="text-purple-200 hover:text-purple-400 font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
              Enter Desert
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 backdrop-blur-sm">
                  🌙 Malam Arab
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Selamat Datang di</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                    Arabian Nights
                  </span>
                  <span className="text-white">Desert</span>
                </h1>
                <p className="text-xl text-purple-200 leading-relaxed max-w-2xl">
                  Rasakan misteri padang pasir dengan neon yang berkilau, 
                  malam Arab yang menakjubkan, dan atmosfer yang memikat.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Explore Desert
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg">
                  View Oasis
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-purple-300">Desert Miles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-purple-300">Oasis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">∞</div>
                  <div className="text-purple-300">Stories</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-2xl p-6 border border-purple-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Desert Nights</h3>
                      <p className="text-sm text-purple-200">Malam di padang pasir</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-pink-600/50 to-cyan-600/50 rounded-2xl p-6 border border-pink-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Neon Oasis</h3>
                      <p className="text-sm text-pink-200">Oasis dengan neon</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-cyan-600/50 to-purple-600/50 rounded-2xl p-6 border border-cyan-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Arabian Tales</h3>
                      <p className="text-sm text-cyan-200">Cerita malam Arab</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-600/50 to-red-600/50 rounded-2xl p-6 border border-orange-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Desert Magic</h3>
                      <p className="text-sm text-orange-200">Sihir padang pasir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
              🌙 Malam Arab
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Keajaiban Padang Pasir
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Jelajahi misteri padang pasir dengan neon yang berkilau, 
              oasis yang menakjubkan, dan cerita malam Arab yang memikat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Desert Nights</h3>
              <p className="text-purple-200 leading-relaxed">
                Rasakan malam di padang pasir dengan bintang-bintang yang berkilau, 
                neon yang menakjubkan, dan atmosfer yang misterius.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Neon Oasis</h3>
              <p className="text-pink-200 leading-relaxed">
                Temukan oasis dengan neon yang berkilau, 
                teknologi modern yang terintegrasi dengan keindahan alam.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Arabian Tales</h3>
              <p className="text-cyan-200 leading-relaxed">
                Cerita malam Arab yang memikat dengan dongeng, 
                legenda, dan misteri yang tersembunyi di padang pasir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Jelajahi Misteri Padang Pasir?
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan petualang yang telah 
            merasakan keajaiban malam Arab di padang pasir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Explore Desert
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg">
              View Oasis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 border-t border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Arabian Nights</span>
              </div>
              <p className="text-purple-300">
                Misteri padang pasir dengan neon yang berkilau.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Desert Areas</h3>
              <ul className="space-y-2 text-purple-300">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Neon Oasis</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Desert Dunes</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Arabian Palace</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Night Market</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Experiences</h3>
              <ul className="space-y-2 text-purple-300">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Desert Safari</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Oasis Camping</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Arabian Tales</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Neon Tours</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kontak</h3>
              <ul className="space-y-2 text-purple-300">
                <li>info@arabiannights.com</li>
                <li>+966 11 1234 5678</li>
                <li>Riyadh, Saudi Arabia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-purple-300">
            <p>&copy; 2024 Arabian Nights Desert. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes sandstorm {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
      `}</style>
    </div>
  );
};

export default Theme212; 