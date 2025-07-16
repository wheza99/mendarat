'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme214: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 via-blue-200 to-green-200 relative overflow-hidden">
      {/* Tropical Background Elements */}
      <div className="absolute inset-0">
        {/* Sun */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-2xl opacity-60 animate-pulse"></div>
        {/* Sea Waves */}
        <svg className="absolute bottom-0 left-0 w-full h-40 md:h-56" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#38BDF8" fillOpacity="0.7" d="M0,288L80,272C160,256,320,224,480,197.3C640,171,800,149,960,138.7C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
          <path fill="#0EA5E9" fillOpacity="0.5" d="M0,256L120,245.3C240,235,480,213,720,197.3C960,181,1200,171,1320,176L1440,181L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" />
        </svg>
        {/* Palm Trees */}
        <svg className="absolute bottom-0 left-10 w-32 h-48" viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="28" y="40" width="8" height="40" rx="4" fill="#F59E42" />
          <path d="M32 40 Q20 30 8 36 Q24 32 32 40" fill="#22C55E" />
          <path d="M32 40 Q44 30 56 36 Q40 32 32 40" fill="#22C55E" />
          <path d="M32 40 Q24 20 32 8 Q40 20 32 40" fill="#16A34A" />
        </svg>
        <svg className="absolute bottom-0 right-10 w-24 h-36" viewBox="0 0 48 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="6" height="30" rx="3" fill="#F59E42" />
          <path d="M23 30 Q15 22 4 28 Q16 24 23 30" fill="#22C55E" />
          <path d="M23 30 Q31 22 44 28 Q32 24 23 30" fill="#22C55E" />
          <path d="M23 30 Q18 12 23 4 Q28 12 23 30" fill="#16A34A" />
        </svg>
        {/* Tropical Leaves */}
        <svg className="absolute top-10 left-0 w-32 h-32 rotate-12 opacity-60" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="32" rx="32" ry="12" fill="#4ADE80" /></svg>
        <svg className="absolute top-20 right-0 w-40 h-24 -rotate-12 opacity-60" viewBox="0 0 80 48" fill="none"><ellipse cx="40" cy="24" rx="40" ry="10" fill="#22D3EE" /></svg>
        {/* Sand */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-yellow-300/80 to-transparent"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center relative border-2 border-yellow-300">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="6" strokeWidth={2} />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                TropisIndah
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-yellow-700 hover:text-orange-500 font-medium transition-colors">Beranda</a>
              <a href="#pantai" className="text-yellow-700 hover:text-orange-500 font-medium transition-colors">Pantai</a>
              <a href="#pulau" className="text-yellow-700 hover:text-orange-500 font-medium transition-colors">Pulau</a>
              <a href="#kontak" className="text-yellow-700 hover:text-orange-500 font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-yellow-400 to-cyan-400 hover:from-yellow-500 hover:to-cyan-500 text-white border-0">
              Jelajahi Tropis
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
                <Badge className="bg-yellow-400/20 text-yellow-700 border-yellow-400/30 backdrop-blur-sm">
                  🏝️ Pulau Tropis
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-yellow-700">Selamat Datang di</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400">
                    TropisIndah
                  </span>
                  <span className="text-yellow-700">Paradise</span>
                </h1>
                <p className="text-xl text-yellow-700 leading-relaxed max-w-2xl">
                  Nikmati keindahan pulau tropis dengan pantai berpasir putih, 
                  laut biru jernih, dan suasana musim panas yang ceria.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-cyan-400 hover:from-yellow-500 hover:to-cyan-500 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="6" strokeWidth={2} />
                  </svg>
                  Lihat Pantai
                </Button>
                <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-400/10 px-8 py-4 text-lg">
                  Jelajahi Pulau
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">30°C</div>
                  <div className="text-yellow-700">Suhu Ceria</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">100+</div>
                  <div className="text-yellow-700">Pantai Indah</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">∞</div>
                  <div className="text-yellow-700">Petualangan</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-yellow-400/50 to-cyan-400/50 rounded-2xl p-6 border border-yellow-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="6" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-yellow-700">Pantai Tropis</h3>
                      <p className="text-sm text-yellow-700">Pantai berpasir putih & laut biru</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-400/50 to-yellow-400/50 rounded-2xl p-6 border border-green-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="6" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-yellow-700">Pulau Hijau</h3>
                      <p className="text-sm text-green-700">Pulau tropis dengan pepohonan rindang</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-cyan-400/50 to-yellow-400/50 rounded-2xl p-6 border border-cyan-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="6" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-yellow-700">Laut Biru</h3>
                      <p className="text-sm text-cyan-700">Laut jernih & ombak menenangkan</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-400/50 to-orange-400/50 rounded-2xl p-6 border border-yellow-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="6" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-yellow-700">Musim Panas</h3>
                      <p className="text-sm text-orange-700">Suasana ceria & penuh warna</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-400/20 text-yellow-700 border-yellow-400/30 mb-4">
              🏖️ Surga Tropis
            </Badge>
            <h2 className="text-4xl font-bold text-yellow-700 mb-6">
              Keindahan Pulau Tropis
            </h2>
            <p className="text-xl text-yellow-700 max-w-3xl mx-auto">
              Temukan surga tropis dengan pantai indah, laut biru, dan petualangan musim panas yang tak terlupakan.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="6" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">Pantai Indah</h3>
              <p className="text-yellow-700 leading-relaxed">
                Pantai berpasir putih, air laut biru jernih, dan suasana santai yang menenangkan.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="6" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">Pulau Tropis</h3>
              <p className="text-green-700 leading-relaxed">
                Pulau tropis dengan pepohonan kelapa, daun tropis, dan udara segar.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="6" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">Petualangan Musim Panas</h3>
              <p className="text-cyan-700 leading-relaxed">
                Aktivitas seru seperti snorkeling, surfing, dan berjemur di bawah matahari tropis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/20 to-cyan-400/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-yellow-700 mb-6">
            Siap Berpetualang di Surga Tropis?
          </h2>
          <p className="text-xl text-yellow-700 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan para petualang yang telah merasakan keindahan pulau tropis dan musim panas yang ceria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-cyan-400 hover:from-yellow-500 hover:to-cyan-500 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="6" strokeWidth={2} />
              </svg>
              Lihat Pantai
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-400/10 px-8 py-4 text-lg">
              Jelajahi Pulau
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-100/60 backdrop-blur-sm py-12 border-t border-yellow-400/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="6" strokeWidth={2} />
                  </svg>
                </div>
                <span className="text-xl font-bold text-yellow-700">TropisIndah</span>
              </div>
              <p className="text-yellow-700">
                Surga tropis dengan pantai indah dan musim panas ceria.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-yellow-700 mb-4">Destinasi</h3>
              <ul className="space-y-2 text-yellow-700">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Pantai Ceria</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Pulau Hijau</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Laguna Biru</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Sunset Beach</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-yellow-700 mb-4">Aktivitas</h3>
              <ul className="space-y-2 text-yellow-700">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Snorkeling</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Surfing</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Sunbathing</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Island Hopping</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-yellow-700 mb-4">Kontak</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>info@tropisindah.com</li>
                <li>+62 361 123 4567</li>
                <li>Bali, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-yellow-400/20 mt-8 pt-8 text-center text-yellow-700">
            <p>&copy; 2024 TropisIndah Paradise. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme214; 