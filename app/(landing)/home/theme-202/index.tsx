'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme202: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-80 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-32 left-2/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-96 left-1/4 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-48 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-2500"></div>
        <div className="absolute top-64 left-1/2 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-1750"></div>
        
        {/* Larger stars */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-4000"></div>
        <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-white rounded-full animate-pulse delay-3500"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-4500"></div>
        
        {/* Nebula effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CosmosExplorer
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-300 hover:text-white font-medium transition-colors">Beranda</a>
              <a href="#galaksi" className="text-gray-300 hover:text-white font-medium transition-colors">Galaksi</a>
              <a href="#teleskop" className="text-gray-300 hover:text-white font-medium transition-colors">Teleskop</a>
              <a href="#kontak" className="text-gray-300 hover:text-white font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
              Mulai Eksplorasi
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
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 backdrop-blur-sm">
                  🌌 Eksplorasi Luar Angkasa
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Jelajahi</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Alam Semesta
                  </span>
                  <span className="text-white">Tanpa Batas</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Temukan misteri galaksi, bintang, dan planet dengan teknologi 
                  observasi terdepan dan pengalaman virtual yang memukau.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Mulai Observasi
                </Button>
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg">
                  Virtual Tour
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-blue-300">Galaksi Terpetakan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1M+</div>
                  <div className="text-blue-300">Bintang Ditemukan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-blue-300">Observasi</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-blue-600/50 to-purple-600/50 rounded-2xl p-6 border border-blue-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Teleskop Hubble</h3>
                      <p className="text-sm text-blue-200">Resolusi ultra tinggi untuk observasi deep space</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-2xl p-6 border border-purple-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Satelit James Webb</h3>
                      <p className="text-sm text-purple-200">Infrared imaging untuk galaksi terjauh</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-cyan-600/50 to-blue-600/50 rounded-2xl p-6 border border-cyan-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Rover Mars</h3>
                      <p className="text-sm text-cyan-200">Eksplorasi permukaan planet merah</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-pink-600/50 to-purple-600/50 rounded-2xl p-6 border border-pink-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">AI Analysis</h3>
                      <p className="text-sm text-pink-200">Kecerdasan buatan untuk analisis data kosmik</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">
              🛰️ Teknologi Observasi
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Mengungkap Misteri Alam Semesta
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dengan teknologi observasi terdepan, kami membantu Anda menjelajahi 
              keajaiban kosmos dan memahami asal-usul alam semesta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Deep Space Imaging</h3>
              <p className="text-gray-300 leading-relaxed">
                Tangkap gambar galaksi dan nebula yang berjarak jutaan tahun cahaya 
                dengan teknologi imaging terdepan.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Planetary Exploration</h3>
              <p className="text-gray-300 leading-relaxed">
                Jelajahi permukaan planet dan bulan dalam tata surya dengan 
                detail yang belum pernah terlihat sebelumnya.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Data</h3>
              <p className="text-gray-300 leading-relaxed">
                Akses data observasi real-time dari teleskop dan satelit 
                di seluruh dunia dengan latensi minimal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Menjelajahi Kosmos?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan astronom dan peneliti yang telah 
            menemukan keajaiban alam semesta bersama kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Mulai Observasi
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">CosmosExplorer</span>
              </div>
              <p className="text-gray-400">
                Platform observasi luar angkasa terdepan untuk eksplorasi kosmos.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Observasi</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Deep Space</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Planetary</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Galaxies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nebulae</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Teknologi</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Telescopes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Satellites</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rovers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Analysis</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@cosmosexplorer.com</li>
                <li>+62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CosmosExplorer. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme202; 