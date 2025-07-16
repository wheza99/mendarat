'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme213: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-cyan-900 to-green-900 relative overflow-hidden">
      {/* Aurora & Snowy Background */}
      <div className="absolute inset-0">
        {/* Aurora Borealis */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-green-400/30 via-cyan-400/40 to-blue-400/30 blur-2xl animate-pulse"></div>
        <div className="absolute top-10 left-1/4 w-1/2 h-1/4 bg-gradient-to-r from-green-300/40 via-blue-300/30 to-transparent blur-2xl animate-pulse delay-1000"></div>
        {/* Snowfall */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div key={i} className={`absolute rounded-full bg-white/80`} style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              filter: 'blur(0.5px)'
            }} />
          ))}
        </div>
        {/* Mountains */}
        <svg className="absolute bottom-0 left-0 w-full h-48 md:h-64 lg:h-80" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#254D6E" fillOpacity="1" d="M0,288L120,272C240,256,480,224,720,197.3C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" />
          <path fill="#3B82F6" fillOpacity="0.7" d="M0,256L80,245.3C160,235,320,213,480,197.3C640,181,800,171,960,176C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
        {/* Pine Trees */}
        <svg className="absolute bottom-0 left-0 w-full h-32 md:h-40 lg:h-56" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[...Array(20)].map((_, i) => {
            const x = 40 + i * 70 + (i % 2 === 0 ? 10 : -10);
            const scale = 0.7 + Math.random() * 0.6;
            return (
              <g key={i} transform={`translate(${x},${90 + Math.random() * 10}) scale(${scale})`}>
                <polygon points="0,0 10,-30 20,0" fill="#14532D" />
                <polygon points="3,-10 10,-25 17,-10" fill="#22D3EE" opacity="0.7" />
                <rect x="8" y="0" width="4" height="10" fill="#A3E635" />
              </g>
            );
          })}
        </svg>
        {/* Soft Neon Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-green-400/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-green-700 rounded-xl flex items-center justify-center relative border-2 border-cyan-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-green-700 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                AuroraNordic
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-cyan-200 hover:text-cyan-400 font-medium transition-colors">Beranda</a>
              <a href="#aurora" className="text-cyan-200 hover:text-cyan-400 font-medium transition-colors">Aurora</a>
              <a href="#salju" className="text-cyan-200 hover:text-cyan-400 font-medium transition-colors">Salju</a>
              <a href="#kontak" className="text-cyan-200 hover:text-cyan-400 font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-white border-0">
              Jelajahi Aurora
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
                  ❄️ Musim Dingin Nordik
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Selamat Datang di</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400">
                    AuroraNordic
                  </span>
                  <span className="text-white">Winter</span>
                </h1>
                <p className="text-xl text-cyan-200 leading-relaxed max-w-2xl">
                  Rasakan keindahan musim dingin Nordik dengan pegunungan bersalju, 
                  hutan pinus, dan aurora borealis yang memukau di langit malam.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Lihat Aurora
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg">
                  Jelajahi Pegunungan
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">-30°C</div>
                  <div className="text-cyan-300">Suhu Dingin</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-cyan-300">Aurora Nights</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">∞</div>
                  <div className="text-cyan-300">Keindahan Alam</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-cyan-600/50 to-green-600/50 rounded-2xl p-6 border border-cyan-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Aurora Borealis</h3>
                      <p className="text-sm text-cyan-200">Cahaya utara yang memukau</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600/50 to-cyan-600/50 rounded-2xl p-6 border border-blue-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Pegunungan Salju</h3>
                      <p className="text-sm text-blue-200">Pemandangan pegunungan bersalju</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-green-600/50 to-cyan-600/50 rounded-2xl p-6 border border-green-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Hutan Pinus</h3>
                      <p className="text-sm text-green-200">Hutan pinus yang asri</p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-600/50 to-blue-600/50 rounded-2xl p-6 border border-cyan-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Petualangan Dingin</h3>
                      <p className="text-sm text-cyan-200">Petualangan musim dingin Nordik</p>
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
              ❄️ Aurora & Salju
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Keajaiban Alam Nordik
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Nikmati keindahan aurora borealis, pegunungan bersalju, dan hutan pinus yang memukau di musim dingin Nordik.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aurora Borealis</h3>
              <p className="text-cyan-200 leading-relaxed">
                Saksikan aurora borealis yang menari di langit malam Nordik, menciptakan pemandangan yang magis.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pegunungan Salju</h3>
              <p className="text-blue-200 leading-relaxed">
                Pegunungan bersalju yang megah, cocok untuk petualangan musim dingin dan fotografi alam.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Hutan Pinus</h3>
              <p className="text-green-200 leading-relaxed">
                Hutan pinus yang asri dan sejuk, tempat sempurna untuk relaksasi dan eksplorasi alam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-green-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Menyaksikan Aurora?
          </h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan para penjelajah yang telah merasakan keajaiban musim dingin Nordik dan aurora borealis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-700 hover:to-green-700 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Lihat Aurora
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg">
              Jelajahi Pegunungan
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
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-green-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">AuroraNordic</span>
              </div>
              <p className="text-cyan-300">
                Keindahan musim dingin Nordik dan aurora borealis.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Destinasi</h3>
              <ul className="space-y-2 text-cyan-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Aurora Valley</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Snowy Peaks</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pine Forest</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Frozen Lake</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Aktivitas</h3>
              <ul className="space-y-2 text-cyan-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Aurora Watching</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Snow Trekking</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Ski & Snowboard</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Winter Camping</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kontak</h3>
              <ul className="space-y-2 text-cyan-300">
                <li>info@auroranordic.com</li>
                <li>+47 21 123 456</li>
                <li>Oslo, Norwegia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-cyan-300">
            <p>&copy; 2024 AuroraNordic Winter. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme213; 