'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme204: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900 relative overflow-hidden">
      {/* Underwater Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Bubbles */}
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-cyan-300/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-blue-300/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-40 left-2/3 w-2 h-2 bg-teal-300/40 rounded-full animate-bounce delay-1200"></div>
        <div className="absolute top-60 right-1/4 w-3 h-3 bg-cyan-300/40 rounded-full animate-bounce delay-1500"></div>
        <div className="absolute top-80 left-1/3 w-4 h-4 bg-blue-300/40 rounded-full animate-bounce delay-2000"></div>
        
        {/* Fish-like elements */}
        <div className="absolute top-32 right-1/4 w-6 h-3 bg-cyan-400/30 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-48 left-1/3 w-4 h-2 bg-blue-400/30 rounded-full animate-pulse delay-3500"></div>
        <div className="absolute top-64 right-1/3 w-5 h-2.5 bg-teal-400/30 rounded-full animate-pulse delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                OceanExplorer
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-cyan-200 hover:text-white font-medium transition-colors">Beranda</a>
              <a href="#laut" className="text-cyan-200 hover:text-white font-medium transition-colors">Laut</a>
              <a href="#kehidupan" className="text-cyan-200 hover:text-white font-medium transition-colors">Kehidupan</a>
              <a href="#kontak" className="text-cyan-200 hover:text-white font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0">
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
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 backdrop-blur-sm">
                  🌊 Eksplorasi Laut Dalam
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Jelajahi</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">
                    Keajaiban Laut
                  </span>
                  <span className="text-white">Yang Menakjubkan</span>
                </h1>
                <p className="text-xl text-cyan-200 leading-relaxed max-w-2xl">
                  Temukan keajaiban dunia bawah laut dengan ribuan spesies laut yang menakjubkan, 
                  terumbu karang yang indah, dan ekosistem laut yang kompleks.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  Mulai Menyelam
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg">
                  Virtual Tour
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-cyan-300">Spesies Laut</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-cyan-300">Lokasi Menyelam</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-cyan-300">Live Streaming</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-cyan-600/50 to-blue-600/50 rounded-2xl p-6 border border-cyan-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Terumbu Karang</h3>
                      <p className="text-sm text-cyan-200">Ekosistem bawah laut yang menakjubkan</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-600/50 to-teal-600/50 rounded-2xl p-6 border border-blue-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Ikan Paus</h3>
                      <p className="text-sm text-blue-200">Mamalia laut terbesar di dunia</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-teal-600/50 to-cyan-600/50 rounded-2xl p-6 border border-teal-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Laut Dalam</h3>
                      <p className="text-sm text-teal-200">Eksplorasi zona abyssal</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-indigo-600/50 to-blue-600/50 rounded-2xl p-6 border border-indigo-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Konservasi</h3>
                      <p className="text-sm text-indigo-200">Melindungi ekosistem laut</p>
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
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-4">
              🐠 Kehidupan Laut
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Keajaiban Bawah Laut
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Jelajahi keajaiban dunia bawah laut dengan ribuan spesies yang menakjubkan, 
              dari ikan kecil hingga mamalia laut terbesar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Coral Reefs</h3>
              <p className="text-cyan-200 leading-relaxed">
                Jelajahi terumbu karang yang menakjubkan dengan ribuan spesies ikan 
                dan organisme laut yang hidup dalam harmoni.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Marine Life</h3>
              <p className="text-cyan-200 leading-relaxed">
                Temukan keanekaragaman hayati laut dengan spesies yang unik 
                dan adaptasi yang menakjubkan untuk bertahan hidup.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Deep Sea</h3>
              <p className="text-cyan-200 leading-relaxed">
                Eksplorasi laut dalam yang misterius dengan makhluk-makhluk 
                yang telah beradaptasi dengan tekanan ekstrem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Menyelam ke Laut Dalam?
          </h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan penyelam yang telah menjelajahi 
            keajaiban dunia bawah laut bersama kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Mulai Menyelam
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 border-t border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">OceanExplorer</span>
              </div>
              <p className="text-cyan-200">
                Platform eksplorasi laut dalam terdepan untuk keajaiban bawah laut.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Eksplorasi</h3>
              <ul className="space-y-2 text-cyan-200">
                <li><a href="#" className="hover:text-white transition-colors">Coral Reefs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deep Sea</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marine Life</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipwrecks</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Konservasi</h3>
              <ul className="space-y-2 text-cyan-200">
                <li><a href="#" className="hover:text-white transition-colors">Marine Protection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coral Restoration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ocean Cleanup</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kontak</h3>
              <ul className="space-y-2 text-cyan-200">
                <li>info@oceanexplorer.com</li>
                <li>+62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-cyan-200">
            <p>&copy; 2024 OceanExplorer. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme204; 