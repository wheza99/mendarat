'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme217: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-200 to-white relative overflow-hidden">
      {/* Science Lab Background Elements */}
      <div className="absolute inset-0">
        {/* Hologram Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-cyan-400/30 blur-2xl rounded-full animate-pulse"></div>
        {/* Neon Blue Accents */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Lab Equipment Illustrations */}
        <svg className="absolute bottom-0 left-1/4 w-40 h-40" viewBox="0 0 80 80" fill="none">
          <rect x="30" y="20" width="20" height="40" rx="8" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="2" />
          <ellipse cx="40" cy="60" rx="10" ry="6" fill="#38BDF8" opacity="0.5" />
          <rect x="36" y="10" width="8" height="20" rx="4" fill="#A5F3FC" />
        </svg>
        <svg className="absolute bottom-0 right-1/4 w-32 h-32" viewBox="0 0 64 64" fill="none">
          <rect x="20" y="24" width="24" height="28" rx="8" fill="#F0FDFA" stroke="#06B6D4" strokeWidth="2" />
          <ellipse cx="32" cy="52" rx="10" ry="5" fill="#06B6D4" opacity="0.4" />
          <rect x="28" y="8" width="8" height="20" rx="4" fill="#67E8F9" />
        </svg>
        {/* Microscopes */}
        <svg className="absolute bottom-10 left-10 w-24 h-24" viewBox="0 0 48 48" fill="none">
          <rect x="18" y="20" width="12" height="18" rx="6" fill="#E0E7FF" stroke="#2563EB" strokeWidth="2" />
          <rect x="22" y="8" width="4" height="16" rx="2" fill="#2563EB" />
          <ellipse cx="24" cy="38" rx="6" ry="3" fill="#2563EB" opacity="0.3" />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center relative border-2 border-blue-400">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                  <circle cx="12" cy="16" r="2" strokeWidth={2} />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                LabFutura
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-blue-700 hover:text-cyan-500 font-semibold transition-colors">Beranda</a>
              <a href="#riset" className="text-blue-700 hover:text-cyan-500 font-semibold transition-colors">Riset</a>
              <a href="#teknologi" className="text-blue-700 hover:text-cyan-500 font-semibold transition-colors">Teknologi</a>
              <a href="#kontak" className="text-blue-700 hover:text-cyan-500 font-semibold transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0 font-bold">
              Mulai Eksperimen
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
                <Badge className="bg-blue-400/20 text-blue-700 border-blue-400/30 backdrop-blur-sm font-bold">
                  🧪 Laboratorium Futuristik
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-blue-900 drop-shadow-xl">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400">
                    LabFutura
                  </span>
                  <span className="block text-cyan-500">Science Lab</span>
                </h1>
                <p className="text-xl text-blue-800 leading-relaxed max-w-2xl font-medium">
                  Temukan inovasi terbaru di dunia sains, riset modern, dan teknologi laboratorium masa depan.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 text-lg border-0 font-bold">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                    <circle cx="12" cy="16" r="2" strokeWidth={2} />
                  </svg>
                  Lihat Riset
                </Button>
                <Button size="lg" variant="outline" className="border-blue-400 text-blue-700 hover:bg-blue-400/10 px-8 py-4 text-lg font-bold">
                  Gabung Komunitas
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500">1.000+</div>
                  <div className="text-blue-800 font-semibold">Eksperimen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500">200+</div>
                  <div className="text-blue-800 font-semibold">Peneliti</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500">∞</div>
                  <div className="text-blue-800 font-semibold">Inovasi</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-blue-400/50 to-cyan-400/50 rounded-2xl p-6 border border-blue-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                          <circle cx="12" cy="16" r="2" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-blue-700">Tabung Reaksi</h3>
                      <p className="text-sm text-blue-800">Alat eksperimen modern</p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-400/50 to-blue-400/50 rounded-2xl p-6 border border-cyan-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                          <circle cx="12" cy="16" r="2" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-cyan-500">Beaker & Mikroskop</h3>
                      <p className="text-sm text-cyan-700">Peralatan laboratorium canggih</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-blue-700/50 to-cyan-400/50 rounded-2xl p-6 border border-blue-700/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                          <circle cx="12" cy="16" r="2" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-blue-700">Hologram</h3>
                      <p className="text-sm text-blue-800">Teknologi visual masa depan</p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-400/50 to-blue-700/50 rounded-2xl p-6 border border-cyan-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                          <circle cx="12" cy="16" r="2" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-cyan-500">Riset Modern</h3>
                      <p className="text-sm text-cyan-700">Penelitian inovatif & kolaboratif</p>
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
            <Badge className="bg-blue-400/20 text-blue-700 border-blue-400/30 mb-4 font-bold">
              🔬 Inovasi Sains
            </Badge>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Laboratorium Masa Depan
            </h2>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto font-medium">
              Temukan inovasi, eksperimen, dan teknologi terbaru di dunia sains dan riset modern.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                  <circle cx="12" cy="16" r="2" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Tabung Reaksi</h3>
              <p className="text-blue-800 leading-relaxed font-medium">
                Eksperimen dengan tabung reaksi dan alat laboratorium modern.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                  <circle cx="12" cy="16" r="2" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cyan-500 mb-4">Beaker & Mikroskop</h3>
              <p className="text-cyan-700 leading-relaxed font-medium">
                Penelitian dengan beaker, mikroskop, dan teknologi canggih.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-700/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                  <circle cx="12" cy="16" r="2" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Hologram</h3>
              <p className="text-blue-800 leading-relaxed font-medium">
                Teknologi visual masa depan untuk riset dan presentasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Siap Berinovasi di Dunia Sains?
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto font-medium">
            Bergabunglah dengan komunitas peneliti dan temukan inovasi terbaru di LabFutura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 text-lg border-0 font-bold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                <circle cx="12" cy="16" r="2" strokeWidth={2} />
              </svg>
              Lihat Riset
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-700 hover:bg-blue-400/10 px-8 py-4 text-lg font-bold">
              Gabung Komunitas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100/60 backdrop-blur-sm py-12 border-t border-blue-400/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                    <circle cx="12" cy="16" r="2" strokeWidth={2} />
                  </svg>
                </div>
                <span className="text-xl font-bold text-blue-900">LabFutura</span>
              </div>
              <p className="text-blue-800">
                Laboratorium sains & riset masa depan.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-blue-900 mb-4">Fasilitas</h3>
              <ul className="space-y-2 text-blue-800">
                <li><a href="#" className="hover:text-cyan-500 transition-colors">Tabung Reaksi</a></li>
                <li><a href="#" className="hover:text-cyan-500 transition-colors">Beaker</a></li>
                <li><a href="#" className="hover:text-cyan-500 transition-colors">Mikroskop</a></li>
                <li><a href="#" className="hover:text-cyan-500 transition-colors">Hologram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-blue-900 mb-4">Komunitas</h3>
              <ul className="space-y-2 text-blue-800">
                <li><a href="#" className="hover:text-cyan-500 transition-colors">Peneliti</a></li>
                <li><a href="#" className="hover:text-cyan-500 transition-colors">Kolaborasi</a></li>
                <li><a href="#" className="hover:text-cyan-500 transition-colors">Workshop</a></li>
                <li><a href="#" className="hover:text-cyan-500 transition-colors">Event Sains</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-blue-900 mb-4">Kontak</h3>
              <ul className="space-y-2 text-blue-800">
                <li>info@labfutura.com</li>
                <li>+62 21 5555 8888</li>
                <li>Bandung, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-400/20 mt-8 pt-8 text-center text-blue-800">
            <p>&copy; 2024 LabFutura Science Lab. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme217; 