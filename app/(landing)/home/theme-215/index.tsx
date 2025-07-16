'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme215: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Brick Wall Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-30" style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/brick-wall.png')`,
          backgroundSize: '120px 60px',
          filter: 'contrast(1.2) grayscale(0.2)'
        }}></div>
        {/* Graffiti Spray Paint Splatters */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-500/40 rounded-full blur-2xl rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-yellow-400/40 rounded-full blur-2xl -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-24 bg-cyan-400/40 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-green-400/40 rounded-full blur-2xl animate-pulse"></div>
        {/* Graffiti Tags */}
        <div className="absolute top-24 left-1/4 text-5xl font-extrabold text-pink-400 drop-shadow-lg rotate-3 select-none pointer-events-none" style={{fontFamily: 'cursive'}}>ART</div>
        <div className="absolute top-40 right-1/4 text-4xl font-extrabold text-yellow-300 drop-shadow-lg -rotate-6 select-none pointer-events-none" style={{fontFamily: 'cursive'}}>STREET</div>
        <div className="absolute bottom-32 left-1/3 text-6xl font-extrabold text-cyan-300 drop-shadow-lg -rotate-2 select-none pointer-events-none" style={{fontFamily: 'cursive'}}>URBAN</div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-xl flex items-center justify-center relative border-2 border-pink-400">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent uppercase tracking-widest" style={{fontFamily: 'cursive'}}>GraffitiX</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-pink-300 hover:text-yellow-300 font-bold transition-colors">Beranda</a>
              <a href="#galeri" className="text-pink-300 hover:text-yellow-300 font-bold transition-colors">Galeri</a>
              <a href="#komunitas" className="text-pink-300 hover:text-yellow-300 font-bold transition-colors">Komunitas</a>
              <a href="#kontak" className="text-pink-300 hover:text-yellow-300 font-bold transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white border-0 font-bold">
              Join Street Art
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
                <Badge className="bg-pink-400/20 text-pink-300 border-pink-400/30 backdrop-blur-sm font-bold">
                  🎨 Urban Graffiti
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-xl" style={{fontFamily: 'cursive'}}>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400">
                    GraffitiX
                  </span>
                  <span className="block text-yellow-300">Street Art</span>
                </h1>
                <p className="text-xl text-pink-200 leading-relaxed max-w-2xl font-semibold">
                  Jelajahi dunia seni jalanan dengan mural graffiti warna-warni, dinding kota yang hidup, dan kreativitas tanpa batas.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white px-8 py-4 text-lg border-0 font-bold">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
                  </svg>
                  Lihat Galeri
                </Button>
                <Button size="lg" variant="outline" className="border-pink-400 text-pink-300 hover:bg-pink-400/10 px-8 py-4 text-lg font-bold">
                  Gabung Komunitas
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-yellow-300">500+</div>
                  <div className="text-pink-200 font-bold">Karya Graffiti</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-yellow-300">100+</div>
                  <div className="text-pink-200 font-bold">Seniman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-yellow-300">∞</div>
                  <div className="text-pink-200 font-bold">Inspirasi</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-pink-400/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-pink-400/50 to-yellow-300/50 rounded-2xl p-6 border border-pink-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-pink-300">Graffiti Wall</h3>
                      <p className="text-sm text-pink-200">Dinding mural penuh warna</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-300/50 to-cyan-400/50 rounded-2xl p-6 border border-yellow-300/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-yellow-300">Spray Art</h3>
                      <p className="text-sm text-yellow-300">Efek cat semprot kreatif</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-cyan-400/50 to-pink-400/50 rounded-2xl p-6 border border-cyan-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-cyan-300">Urban Style</h3>
                      <p className="text-sm text-cyan-200">Gaya urban yang ekspresif</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-400/50 to-yellow-300/50 rounded-2xl p-6 border border-green-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-green-400">Street Culture</h3>
                      <p className="text-sm text-green-200">Budaya jalanan modern</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-pink-400/20 text-pink-300 border-pink-400/30 mb-4 font-bold">
              🧑‍🎨 Komunitas Street Art
            </Badge>
            <h2 className="text-4xl font-extrabold text-white mb-6" style={{fontFamily: 'cursive'}}>
              Kreativitas Tanpa Batas
            </h2>
            <p className="text-xl text-pink-200 max-w-3xl mx-auto font-semibold">
              Temukan inspirasi dari mural, graffiti, dan karya seni jalanan terbaik di kota modern.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-yellow-300 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-pink-300 mb-4">Graffiti Wall</h3>
              <p className="text-pink-200 leading-relaxed font-semibold">
                Dinding mural penuh warna dan ekspresi seni urban.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-yellow-300/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-yellow-300 mb-4">Spray Art</h3>
              <p className="text-yellow-300 leading-relaxed font-semibold">
                Efek cat semprot kreatif dan warna-warni.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-cyan-300 mb-4">Urban Style</h3>
              <p className="text-cyan-200 leading-relaxed font-semibold">
                Gaya urban yang ekspresif dan penuh energi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-400/20 to-yellow-300/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6" style={{fontFamily: 'cursive'}}>
            Siap Berkreasi di Dunia Street Art?
          </h2>
          <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto font-semibold">
            Bergabunglah dengan komunitas seniman jalanan dan ekspresikan kreativitasmu di kota modern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white px-8 py-4 text-lg border-0 font-bold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
              </svg>
              Lihat Galeri
            </Button>
            <Button size="lg" variant="outline" className="border-pink-400 text-pink-300 hover:bg-pink-400/10 px-8 py-4 text-lg font-bold">
              Gabung Komunitas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm py-12 border-t border-pink-400/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-yellow-300 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l16-16M4 4h16v16H4z" />
                  </svg>
                </div>
                <span className="text-xl font-extrabold text-pink-300" style={{fontFamily: 'cursive'}}>GraffitiX</span>
              </div>
              <p className="text-pink-200">
                Komunitas seni jalanan dan graffiti urban kreatif.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-pink-300 mb-4">Galeri</h3>
              <ul className="space-y-2 text-pink-200">
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Graffiti Wall</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Spray Art</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Urban Style</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Street Culture</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-pink-300 mb-4">Komunitas</h3>
              <ul className="space-y-2 text-pink-200">
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Seniman</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Workshop</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Event</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Kolaborasi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-pink-300 mb-4">Kontak</h3>
              <ul className="space-y-2 text-pink-200">
                <li>info@graffitix.com</li>
                <li>+62 21 9876 5432</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-pink-400/20 mt-8 pt-8 text-center text-pink-200">
            <p>&copy; 2024 GraffitiX Street Art. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme215; 