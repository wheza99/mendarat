'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme210: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Synthwave Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        {/* Neon Glows */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Synthwave Sun */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-b from-yellow-400/30 via-orange-400/20 to-transparent"></div>
        
        {/* Moving Lines */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-2000"></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-700 rounded-xl flex items-center justify-center relative border-2 border-pink-500">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-700 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                SynthWave
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-pink-200 hover:text-pink-400 font-medium transition-colors">Beranda</a>
              <a href="#musik" className="text-pink-200 hover:text-pink-400 font-medium transition-colors">Musik</a>
              <a href="#retro" className="text-pink-200 hover:text-pink-400 font-medium transition-colors">Retro</a>
              <a href="#kontak" className="text-pink-200 hover:text-pink-400 font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-0">
              Play Synthwave
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
                <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 backdrop-blur-sm">
                  🎵 Era 80-an Terdepan
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Selamat Datang di</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                    SynthWave
                  </span>
                  <span className="text-white">Studio</span>
                </h1>
                <p className="text-xl text-pink-200 leading-relaxed max-w-2xl">
                  Rasakan nostalgia era 80-an dengan musik synthwave yang menakjubkan, 
                  visual retro-futuristik, dan atmosfer yang membangkitkan kenangan.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Play Now
                </Button>
                <Button size="lg" variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500/10 px-8 py-4 text-lg">
                  View Albums
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-pink-300">Synthwave Tracks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50K+</div>
                  <div className="text-pink-300">Listeners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-pink-300">Retro Vibes</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-pink-600/50 to-purple-600/50 rounded-2xl p-6 border border-pink-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Synthwave</h3>
                      <p className="text-sm text-pink-200">Musik elektronik era 80-an</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-600/50 to-cyan-600/50 rounded-2xl p-6 border border-purple-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Retro Future</h3>
                      <p className="text-sm text-purple-200">Visual retro-futuristik</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-cyan-600/50 to-pink-600/50 rounded-2xl p-6 border border-cyan-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Neon Vibes</h3>
                      <p className="text-sm text-cyan-200">Atmosfer neon yang menakjubkan</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-pink-600/50 to-purple-600/50 rounded-2xl p-6 border border-pink-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">80s Nostalgia</h3>
                      <p className="text-sm text-pink-200">Nostalgia era 80-an</p>
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
            <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 mb-4">
              🎵 Musik Synthwave
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Koleksi Synthwave Terlengkap
            </h2>
            <p className="text-xl text-pink-200 max-w-3xl mx-auto">
              Nikmati lebih dari 100 track synthwave dengan visual retro-futuristik 
              yang membangkitkan nostalgia era 80-an.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Synthwave Music</h3>
              <p className="text-pink-200 leading-relaxed">
                Koleksi musik synthwave terbaik dengan melodi elektronik yang menakjubkan, 
                membangkitkan nostalgia era 80-an yang autentik.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Retro Visuals</h3>
              <p className="text-purple-200 leading-relaxed">
                Visual retro-futuristik dengan neon colors, grid patterns, dan efek 
                yang menciptakan atmosfer era 80-an yang immersive.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Neon Aesthetics</h3>
              <p className="text-cyan-200 leading-relaxed">
                Estetika neon yang menakjubkan dengan warna-warna cerah dan efek 
                yang menciptakan atmosfer cyberpunk era 80-an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Rasakan Nostalgia 80-an?
          </h2>
          <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pendengar yang telah merasakan 
            nostalgia era 80-an melalui musik synthwave.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Play Synthwave
            </Button>
            <Button size="lg" variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500/10 px-8 py-4 text-lg">
              View Albums
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 border-t border-pink-500/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">SynthWave</span>
              </div>
              <p className="text-pink-300">
                Musik synthwave dengan visual retro-futuristik.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Genres</h3>
              <ul className="space-y-2 text-pink-300">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Synthwave</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Retrowave</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Outrun</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Cyberpunk</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Features</h3>
              <ul className="space-y-2 text-pink-300">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Playlists</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Radio</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Visuals</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Albums</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kontak</h3>
              <ul className="space-y-2 text-pink-300">
                <li>info@synthwave.com</li>
                <li>+62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-pink-500/20 mt-8 pt-8 text-center text-pink-300">
            <p>&copy; 2024 SynthWave Studio. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme210; 