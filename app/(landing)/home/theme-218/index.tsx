'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme218: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-green-200 to-yellow-100 relative overflow-hidden">
      {/* Mountain & Outdoor Background Elements */}
      <div className="absolute inset-0">
        {/* Sunrise */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-yellow-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
        {/* Mountain Range */}
        <svg className="absolute bottom-0 left-0 w-full h-56 md:h-72" viewBox="0 0 1440 320" fill="none">
          <path fill="#14532D" fillOpacity="1" d="M0,288L120,272C240,256,480,224,720,197.3C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" />
          <path fill="#22D3EE" fillOpacity="0.5" d="M0,256L80,245.3C160,235,320,213,480,197.3C640,181,800,171,960,176C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
        {/* Pine Trees */}
        <svg className="absolute bottom-0 left-0 w-full h-32 md:h-40" viewBox="0 0 1440 120" fill="none">
          {[...Array(18)].map((_, i) => {
            const x = 30 + i * 80 + (i % 2 === 0 ? 10 : -10);
            const scale = 0.7 + Math.random() * 0.5;
            return (
              <g key={i} transform={`translate(${x},${90 + Math.random() * 10}) scale(${scale})`}>
                <polygon points="0,0 10,-30 20,0" fill="#166534" />
                <polygon points="3,-10 10,-25 17,-10" fill="#22D3EE" opacity="0.7" />
                <rect x="8" y="0" width="4" height="10" fill="#A3E635" />
              </g>
            );
          })}
        </svg>
        {/* Hiking Trail */}
        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24" viewBox="0 0 400 80" fill="none">
          <path d="M0 60 Q100 20 200 60 T400 60" stroke="#F59E42" strokeWidth="8" fill="none" />
        </svg>
        {/* Tent */}
        <svg className="absolute bottom-24 left-1/3 w-24 h-20" viewBox="0 0 48 40" fill="none">
          <polygon points="24,0 0,40 48,40" fill="#F59E42" />
          <polygon points="24,0 12,40 36,40" fill="#FDE68A" />
          <line x1="24" y1="0" x2="24" y2="40" stroke="#B45309" strokeWidth="2" />
        </svg>
        {/* Campfire */}
        <svg className="absolute bottom-16 left-1/2 -translate-x-1/2 w-12 h-12" viewBox="0 0 32 32" fill="none">
          <ellipse cx="16" cy="24" rx="8" ry="4" fill="#B45309" />
          <ellipse cx="16" cy="20" rx="4" ry="8" fill="#F59E42" />
          <ellipse cx="16" cy="16" rx="2" ry="4" fill="#FDE68A" />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-400 rounded-xl flex items-center justify-center relative border-2 border-green-700">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-400 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-blue-400 bg-clip-text text-transparent">
                HikingXplore
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-green-900 hover:text-blue-500 font-semibold transition-colors">Beranda</a>
              <a href="#petualangan" className="text-green-900 hover:text-blue-500 font-semibold transition-colors">Petualangan</a>
              <a href="#gunung" className="text-green-900 hover:text-blue-500 font-semibold transition-colors">Gunung</a>
              <a href="#kontak" className="text-green-900 hover:text-blue-500 font-semibold transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-blue-400 hover:from-green-700 hover:to-blue-500 text-white border-0 font-bold">
              Mulai Hiking
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-green-400/20 text-green-700 border-green-400/30 backdrop-blur-sm font-bold">
                  🏕️ Petualangan Alam
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-green-900 drop-shadow-xl">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-blue-400 to-yellow-400">
                    HikingXplore
                  </span>
                  <span className="block text-blue-500">Outdoor Adventure</span>
                </h1>
                <p className="text-xl text-green-800 leading-relaxed max-w-2xl font-medium">
                  Temukan sensasi petualangan hiking, camping, dan eksplorasi alam pegunungan yang menakjubkan.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-400 hover:from-green-700 hover:to-blue-500 text-white px-8 py-4 text-lg border-0 font-bold">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
                  </svg>
                  Lihat Rute
                </Button>
                <Button size="lg" variant="outline" className="border-green-700 text-green-900 hover:bg-green-400/10 px-8 py-4 text-lg font-bold">
                  Gabung Komunitas
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">500+</div>
                  <div className="text-green-800 font-semibold">Rute Hiking</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">200+</div>
                  <div className="text-green-800 font-semibold">Pendaki</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">∞</div>
                  <div className="text-green-800 font-semibold">Petualangan</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-green-400/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-green-400/50 to-blue-400/50 rounded-2xl p-6 border border-green-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-green-700">Rute Hiking</h3>
                      <p className="text-sm text-green-800">Jalur hiking pegunungan</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-400/50 to-green-400/50 rounded-2xl p-6 border border-blue-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-blue-500">Camping</h3>
                      <p className="text-sm text-blue-700">Camping di alam terbuka</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-green-700/50 to-blue-400/50 rounded-2xl p-6 border border-green-700/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-green-700">Api Unggun</h3>
                      <p className="text-sm text-green-800">Hangatkan malam di gunung</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-400/50 to-green-700/50 rounded-2xl p-6 border border-blue-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-blue-500">Sunrise View</h3>
                      <p className="text-sm text-blue-700">Pemandangan matahari terbit</p>
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
            <Badge className="bg-green-400/20 text-green-700 border-green-400/30 mb-4 font-bold">
              ⛰️ Eksplorasi Alam
            </Badge>
            <h2 className="text-4xl font-bold text-green-900 mb-6">
              Petualangan Pegunungan
            </h2>
            <p className="text-xl text-green-800 max-w-3xl mx-auto font-medium">
              Nikmati keindahan alam, hiking, camping, dan sunrise di pegunungan bersama HikingXplore.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">Rute Hiking</h3>
              <p className="text-green-800 leading-relaxed font-medium">
                Pilihan rute hiking menantang dan pemandangan indah.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-500 mb-4">Camping</h3>
              <p className="text-blue-700 leading-relaxed font-medium">
                Camping seru di alam terbuka bersama komunitas.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-700/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">Api Unggun</h3>
              <p className="text-green-800 leading-relaxed font-medium">
                Nikmati malam hangat di sekitar api unggun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400/20 to-blue-400/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Siap Berpetualang di Alam Bebas?
          </h2>
          <p className="text-xl text-green-800 mb-8 max-w-2xl mx-auto font-medium">
            Bergabunglah dengan komunitas HikingXplore dan rasakan sensasi petualangan pegunungan yang tak terlupakan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-400 hover:from-green-700 hover:to-blue-500 text-white px-8 py-4 text-lg border-0 font-bold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
              </svg>
              Lihat Rute
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-900 hover:bg-green-400/10 px-8 py-4 text-lg font-bold">
              Gabung Komunitas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-100/60 backdrop-blur-sm py-12 border-t border-green-400/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-400 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l9-18 9 18" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-green-900">HikingXplore</span>
              </div>
              <p className="text-green-800">
                Komunitas hiking & petualangan pegunungan.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-900 mb-4">Rute</h3>
              <ul className="space-y-2 text-green-800">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Gunung Merbabu</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Gunung Gede</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Gunung Rinjani</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Gunung Papandayan</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-900 mb-4">Aktivitas</h3>
              <ul className="space-y-2 text-green-800">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Hiking</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Camping</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Api Unggun</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Sunrise View</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-900 mb-4">Kontak</h3>
              <ul className="space-y-2 text-green-800">
                <li>info@hikingxplore.com</li>
                <li>+62 22 1234 5678</li>
                <li>Bandung, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-400/20 mt-8 pt-8 text-center text-green-800">
            <p>&copy; 2024 HikingXplore Adventure. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme218; 