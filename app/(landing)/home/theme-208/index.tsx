'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme208: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Noir Background Elements */}
      <div className="absolute inset-0">
        {/* Rain Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
            backgroundSize: '2px 20px',
            animation: 'rain 2s linear infinite'
          }}></div>
        </div>
        
        {/* Neon Glows */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Street Lights */}
        <div className="absolute top-0 left-1/4 w-1 h-20 bg-yellow-400/30 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-20 bg-yellow-400/30 animate-pulse delay-2000"></div>
        <div className="absolute top-0 left-2/3 w-1 h-20 bg-yellow-400/30 animate-pulse delay-4000"></div>
        
        {/* Detective Shadows */}
        <div className="absolute bottom-10 left-10 w-20 h-40 bg-black/30 transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-16 h-32 bg-black/20 transform -rotate-6"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center relative border-2 border-blue-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NoirDetective
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Beranda</a>
              <a href="#kasus" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Kasus</a>
              <a href="#investigasi" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Investigasi</a>
              <a href="#kontak" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
              Mulai Investigasi
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
                  🔍 Misteri Terpecahkan
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Selamat Datang di</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    NoirDetective
                  </span>
                  <span className="text-white">Agency</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Temukan kebenaran tersembunyi dengan investigasi yang mendalam, 
                  bukti-bukti yang tak terduga, dan misteri yang menantang.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Ambil Kasus
                </Button>
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg">
                  Lihat Arsip
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-blue-300">Kasus Terpecahkan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-blue-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-blue-300">Investigasi</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-blue-600/50 to-purple-600/50 rounded-2xl p-6 border border-blue-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Forensic Analysis</h3>
                      <p className="text-sm text-blue-200">Analisis forensik tingkat tinggi</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-2xl p-6 border border-purple-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Evidence Tracking</h3>
                      <p className="text-sm text-purple-200">Pelacakan bukti digital</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-pink-600/50 to-red-600/50 rounded-2xl p-6 border border-pink-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Surveillance</h3>
                      <p className="text-sm text-pink-200">Sistem pengawasan canggih</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-red-600/50 to-orange-600/50 rounded-2xl p-6 border border-red-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Case Files</h3>
                      <p className="text-sm text-red-200">Arsip kasus terorganisir</p>
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
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">
              🔍 Layanan Investigasi
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Metode Investigasi Terdepan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gunakan teknologi canggih dan metode investigasi modern untuk 
              mengungkap kebenaran yang tersembunyi dalam setiap kasus.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Forensic Analysis</h3>
              <p className="text-gray-300 leading-relaxed">
                Analisis forensik tingkat tinggi dengan teknologi terdepan untuk 
                mengungkap bukti-bukti yang tersembunyi dalam setiap kasus.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Evidence</h3>
              <p className="text-gray-300 leading-relaxed">
                Pelacakan dan analisis bukti digital dengan sistem yang canggih 
                untuk mengungkap jejak digital yang tersembunyi.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Surveillance System</h3>
              <p className="text-gray-300 leading-relaxed">
                Sistem pengawasan canggih dengan teknologi AI untuk memantau 
                dan menganalisis aktivitas yang mencurigakan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Mengungkap Misteri?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan tim detektif terbaik yang telah mengungkap 
            ratusan kasus misteri dengan tingkat keberhasilan 99.9%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Ambil Kasus
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg">
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 border-t border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">NoirDetective</span>
              </div>
              <p className="text-gray-400">
                Layanan investigasi profesional dengan teknologi terdepan.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Forensic Analysis</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Evidence</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Surveillance</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Case Files</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kasus</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Corporate</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Criminal</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Missing Persons</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Fraud</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@noirdetective.com</li>
                <li>+62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NoirDetective Agency. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default Theme208; 