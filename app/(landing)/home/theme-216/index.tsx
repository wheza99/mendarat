'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme216: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-amber-200 to-amber-400 relative overflow-hidden">
      {/* Classic Library Background Elements */}
      <div className="absolute inset-0">
        {/* Wooden Bookshelves */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 flex flex-row gap-2 px-8 pb-8 z-0">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center w-1/12">
              <div className="w-full h-40 bg-amber-700 rounded-t-lg shadow-inner border-b-4 border-amber-900 flex flex-col justify-end">
                {[...Array(4 + (i % 3))].map((__, j) => (
                  <div key={j} className={`mx-2 my-1 h-2 rounded bg-gradient-to-r ${j % 2 === 0 ? 'from-yellow-300 to-amber-200' : 'from-amber-300 to-yellow-200'}`}></div>
                ))}
              </div>
              <div className="w-2 h-8 bg-amber-900 rounded-b-lg"></div>
            </div>
          ))}
        </div>
        {/* Vintage Hanging Lamps */}
        <svg className="absolute top-0 left-1/4 w-16 h-32" viewBox="0 0 32 64" fill="none">
          <rect x="14" y="0" width="4" height="24" fill="#B45309" />
          <ellipse cx="16" cy="44" rx="14" ry="16" fill="#FDE68A" stroke="#B45309" strokeWidth="2" />
          <ellipse cx="16" cy="44" rx="8" ry="8" fill="#F59E42" opacity="0.5" />
        </svg>
        <svg className="absolute top-0 right-1/4 w-16 h-32" viewBox="0 0 32 64" fill="none">
          <rect x="14" y="0" width="4" height="24" fill="#B45309" />
          <ellipse cx="16" cy="44" rx="14" ry="16" fill="#FDE68A" stroke="#B45309" strokeWidth="2" />
          <ellipse cx="16" cy="44" rx="8" ry="8" fill="#F59E42" opacity="0.5" />
        </svg>
        {/* Gold Ornaments */}
        <svg className="absolute top-10 left-10 w-24 h-8 opacity-40" viewBox="0 0 96 32" fill="none"><path d="M8 16 Q24 0 48 16 Q72 32 88 16" stroke="#F59E42" strokeWidth="4" fill="none" /></svg>
        <svg className="absolute top-10 right-10 w-24 h-8 opacity-40" viewBox="0 0 96 32" fill="none"><path d="M8 16 Q24 32 48 16 Q72 0 88 16" stroke="#F59E42" strokeWidth="4" fill="none" /></svg>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-xl flex items-center justify-center relative border-2 border-amber-700">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                  <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
                </svg>
              </div>
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
                PustakaKlasik
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-amber-900 hover:text-yellow-700 font-semibold transition-colors">Beranda</a>
              <a href="#koleksi" className="text-amber-900 hover:text-yellow-700 font-semibold transition-colors">Koleksi</a>
              <a href="#klasik" className="text-amber-900 hover:text-yellow-700 font-semibold transition-colors">Klasik</a>
              <a href="#kontak" className="text-amber-900 hover:text-yellow-700 font-semibold transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-amber-700 to-yellow-500 hover:from-amber-800 hover:to-yellow-600 text-white border-0 font-bold">
              Jelajahi Buku
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
                <Badge className="bg-amber-400/20 text-amber-700 border-amber-400/30 backdrop-blur-sm font-bold">
                  📚 Perpustakaan Klasik
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight text-amber-900 drop-shadow-xl">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-400">
                    PustakaKlasik
                  </span>
                  <span className="block text-yellow-700">Vintage Bookstore</span>
                </h1>
                <p className="text-xl text-amber-800 leading-relaxed max-w-2xl font-medium">
                  Temukan koleksi buku klasik, suasana hangat perpustakaan, dan keindahan toko buku vintage yang elegan.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-700 to-yellow-500 hover:from-amber-800 hover:to-yellow-600 text-white px-8 py-4 text-lg border-0 font-bold">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                    <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
                  </svg>
                  Lihat Koleksi
                </Button>
                <Button size="lg" variant="outline" className="border-amber-700 text-amber-900 hover:bg-amber-400/10 px-8 py-4 text-lg font-bold">
                  Gabung Komunitas
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">10.000+</div>
                  <div className="text-amber-800 font-semibold">Buku Klasik</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">100+</div>
                  <div className="text-amber-800 font-semibold">Rak Buku</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">∞</div>
                  <div className="text-amber-800 font-semibold">Cerita</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-amber-400/50 to-yellow-400/50 rounded-2xl p-6 border border-amber-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                          <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-amber-700">Rak Buku</h3>
                      <p className="text-sm text-amber-800">Rak kayu klasik & elegan</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-400/50 to-amber-400/50 rounded-2xl p-6 border border-yellow-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                          <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-yellow-700">Lampu Antik</h3>
                      <p className="text-sm text-yellow-700">Lampu gantung vintage</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-amber-700/50 to-yellow-400/50 rounded-2xl p-6 border border-amber-700/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                          <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-amber-700">Ornamen Emas</h3>
                      <p className="text-sm text-amber-800">Ornamen klasik & elegan</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-400/50 to-amber-700/50 rounded-2xl p-6 border border-yellow-400/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                          <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-yellow-700">Buku Langka</h3>
                      <p className="text-sm text-yellow-700">Koleksi buku langka & klasik</p>
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
            <Badge className="bg-amber-400/20 text-amber-700 border-amber-400/30 mb-4 font-bold">
              🏛️ Toko Buku Vintage
            </Badge>
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-6">
              Keindahan Buku Klasik
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto font-medium">
              Temukan koleksi buku klasik, rak kayu elegan, dan suasana hangat perpustakaan vintage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                  <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-amber-700 mb-4">Rak Buku</h3>
              <p className="text-amber-800 leading-relaxed font-medium">
                Rak kayu klasik dengan koleksi buku langka dan antik.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                  <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">Lampu Antik</h3>
              <p className="text-yellow-700 leading-relaxed font-medium">
                Lampu gantung vintage yang menambah kehangatan ruangan.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-700/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                  <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-amber-700 mb-4">Ornamen Klasik</h3>
              <p className="text-amber-800 leading-relaxed font-medium">
                Ornamen emas klasik yang memperindah suasana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-amber-900 mb-6">
            Siap Menjelajahi Dunia Buku Klasik?
          </h2>
          <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto font-medium">
            Bergabunglah dengan komunitas pecinta buku klasik dan temukan koleksi terbaik di PustakaKlasik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-700 to-yellow-500 hover:from-amber-800 hover:to-yellow-600 text-white px-8 py-4 text-lg border-0 font-bold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
              </svg>
              Lihat Koleksi
            </Button>
            <Button size="lg" variant="outline" className="border-amber-700 text-amber-900 hover:bg-amber-400/10 px-8 py-4 text-lg font-bold">
              Gabung Komunitas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-100/60 backdrop-blur-sm py-12 border-t border-amber-400/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2} />
                    <line x1="12" y1="8" x2="12" y2="16" strokeWidth={2} />
                  </svg>
                </div>
                <span className="text-xl font-serif font-bold text-amber-900">PustakaKlasik</span>
              </div>
              <p className="text-amber-800">
                Perpustakaan klasik & toko buku vintage elegan.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-amber-900 mb-4">Koleksi</h3>
              <ul className="space-y-2 text-amber-800">
                <li><a href="#" className="hover:text-yellow-700 transition-colors">Buku Klasik</a></li>
                <li><a href="#" className="hover:text-yellow-700 transition-colors">Buku Langka</a></li>
                <li><a href="#" className="hover:text-yellow-700 transition-colors">Novel Sastra</a></li>
                <li><a href="#" className="hover:text-yellow-700 transition-colors">Ensiklopedia</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-amber-900 mb-4">Komunitas</h3>
              <ul className="space-y-2 text-amber-800">
                <li><a href="#" className="hover:text-yellow-700 transition-colors">Pecinta Buku</a></li>
                <li><a href="#" className="hover:text-yellow-700 transition-colors">Diskusi Sastra</a></li>
                <li><a href="#" className="hover:text-yellow-700 transition-colors">Klub Buku</a></li>
                <li><a href="#" className="hover:text-yellow-700 transition-colors">Event Literasi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-amber-900 mb-4">Kontak</h3>
              <ul className="space-y-2 text-amber-800">
                <li>info@pustakaklasik.com</li>
                <li>+62 21 1234 5678</li>
                <li>Bandung, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-400/20 mt-8 pt-8 text-center text-amber-800">
            <p>&copy; 2024 PustakaKlasik Vintage Bookstore. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme216; 