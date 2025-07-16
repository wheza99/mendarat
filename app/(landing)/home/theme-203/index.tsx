'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme203: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 relative overflow-hidden">
      {/* Medieval Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                KingdomQuest
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-amber-200 hover:text-white font-medium transition-colors">Beranda</a>
              <a href="#kerajaan" className="text-amber-200 hover:text-white font-medium transition-colors">Kerajaan</a>
              <a href="#petualangan" className="text-amber-200 hover:text-white font-medium transition-colors">Petualangan</a>
              <a href="#kontak" className="text-amber-200 hover:text-white font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-0">
              Mulai Petualangan
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
                <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 backdrop-blur-sm">
                  ⚔️ Petualangan Fantasi
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Jelajahi</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                    Kerajaan Fantasi
                  </span>
                  <span className="text-white">Yang Megah</span>
                </h1>
                <p className="text-xl text-amber-200 leading-relaxed max-w-2xl">
                  Masuki dunia fantasi abad pertengahan yang penuh dengan kastil megah, 
                  petualangan epik, dan legenda yang tak terlupakan.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Mulai Quest
                </Button>
                <Button size="lg" variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500/10 px-8 py-4 text-lg">
                  Pelajari Sejarah
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">7</div>
                  <div className="text-amber-300">Kerajaan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-amber-300">Quest Epik</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-amber-300">Pemain Aktif</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-amber-600/50 to-orange-600/50 rounded-2xl p-6 border border-amber-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Kastil Megah</h3>
                      <p className="text-sm text-amber-200">Arsitektur abad pertengahan yang menakjubkan</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-600/50 to-red-600/50 rounded-2xl p-6 border border-orange-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Pedang Legendaris</h3>
                      <p className="text-sm text-orange-200">Senjata dengan kekuatan magis</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-red-600/50 to-pink-600/50 rounded-2xl p-6 border border-red-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Dragon Quest</h3>
                      <p className="text-sm text-red-200">Petualangan melawan makhluk legendaris</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-yellow-600/50 to-amber-600/50 rounded-2xl p-6 border border-yellow-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Magic Spells</h3>
                      <p className="text-sm text-yellow-200">Kekuatan sihir yang dahsyat</p>
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
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 mb-4">
              🏰 Dunia Fantasi
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Petualangan Epik Menanti
            </h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Jelajahi tujuh kerajaan fantasi yang masing-masing memiliki cerita unik, 
              karakter memikat, dan petualangan yang tak terlupakan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Kastil & Benteng</h3>
              <p className="text-amber-200 leading-relaxed">
                Jelajahi kastil megah dengan arsitektur abad pertengahan yang menakjubkan, 
                lengkap dengan menara tinggi dan benteng yang kokoh.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Combat System</h3>
              <p className="text-amber-200 leading-relaxed">
                Sistem pertarungan yang mendalam dengan berbagai senjata, 
                armor, dan teknik bertarung yang dapat dikuasai.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Magic & Spells</h3>
              <p className="text-amber-200 leading-relaxed">
                Kuasai kekuatan sihir dengan ratusan spell yang dapat dipelajari 
                dan dikembangkan sesuai dengan gaya bermain Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Memulai Petualangan Epik?
          </h2>
          <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan petualang yang telah menjelajahi 
            kerajaan fantasi dan menciptakan legenda mereka sendiri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Mulai Petualangan
            </Button>
            <Button size="lg" variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500/10 px-8 py-4 text-lg">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 border-t border-amber-500/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">KingdomQuest</span>
              </div>
              <p className="text-amber-200">
                Platform petualangan fantasi abad pertengahan terdepan.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kerajaan</h3>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors">Crystal Kingdom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shadow Realm</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Golden Empire</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forest Kingdom</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Petualangan</h3>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors">Main Quest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Side Quest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dragon Hunt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Magic Training</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kontak</h3>
              <ul className="space-y-2 text-amber-200">
                <li>info@kingdomquest.com</li>
                <li>+62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-500/20 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 KingdomQuest. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme203; 