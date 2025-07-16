'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme206: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 relative overflow-hidden">
      {/* Steampunk Background Elements */}
      <div className="absolute inset-0">
        {/* Brass Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #CD7F32 0px, #CD7F32 2px, transparent 2px, transparent 8px),
                              repeating-linear-gradient(-45deg, #CD7F32 0px, #CD7F32 2px, transparent 2px, transparent 8px)`,
            backgroundSize: '16px 16px'
          }}></div>
        </div>
        
        {/* Steam Effects */}
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-white/15 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Gear Animations */}
        <div className="absolute top-1/4 right-10 w-16 h-16 border-4 border-amber-600 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
        <div className="absolute bottom-1/4 left-10 w-12 h-12 border-4 border-orange-600 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-yellow-600 rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl flex items-center justify-center relative border-2 border-amber-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                SteamWorks
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-amber-200 hover:text-amber-400 font-medium transition-colors">Beranda</a>
              <a href="#mesin" className="text-amber-200 hover:text-amber-400 font-medium transition-colors">Mesin</a>
              <a href="#teknologi" className="text-amber-200 hover:text-amber-400 font-medium transition-colors">Teknologi</a>
              <a href="#kontak" className="text-amber-200 hover:text-amber-400 font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-0">
              Aktifkan Mesin
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
                  ⚙️ Era Industrial Terdepan
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Selamat Datang di</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
                    SteamWorks
                  </span>
                  <span className="text-white">Industries</span>
                </h1>
                <p className="text-xl text-amber-200 leading-relaxed max-w-2xl">
                  Temukan kekuatan mesin uap dan teknologi Victorian yang menghubungkan 
                  masa lalu dengan masa depan dalam harmoni yang sempurna.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Aktifkan Sistem
                </Button>
                <Button size="lg" variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500/10 px-8 py-4 text-lg">
                  Tur Mesin
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-amber-300">Mesin Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99.8%</div>
                  <div className="text-amber-300">Efisiensi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-amber-300">Operasional</div>
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Steam Engine</h3>
                      <p className="text-sm text-amber-200">Mesin uap berteknologi tinggi</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-600/50 to-yellow-600/50 rounded-2xl p-6 border border-orange-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Gear System</h3>
                      <p className="text-sm text-orange-200">Sistem roda gigi presisi</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-yellow-600/50 to-amber-600/50 rounded-2xl p-6 border border-yellow-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Power Core</h3>
                      <p className="text-sm text-yellow-200">Inti tenaga Victorian</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-amber-600/50 to-orange-600/50 rounded-2xl p-6 border border-amber-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Brass Tech</h3>
                      <p className="text-sm text-amber-200">Teknologi kuningan terdepan</p>
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
              ⚙️ Teknologi Victorian
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Mesin Uap Terdepan
            </h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Temukan kekuatan mesin uap dan teknologi Victorian yang menghubungkan 
              masa lalu dengan masa depan dalam harmoni yang sempurna.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Steam Power</h3>
              <p className="text-amber-200 leading-relaxed">
                Mesin uap berteknologi tinggi yang menghasilkan tenaga bersih 
                dan efisien untuk seluruh sistem industri.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Precision Gears</h3>
              <p className="text-orange-200 leading-relaxed">
                Sistem roda gigi presisi yang menghubungkan semua komponen 
                dengan akurasi dan keandalan yang luar biasa.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Victorian Core</h3>
              <p className="text-yellow-200 leading-relaxed">
                Inti teknologi Victorian yang menggabungkan estetika klasik 
                dengan inovasi modern untuk hasil yang sempurna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Mengaktifkan Mesin?
          </h2>
          <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan insinyur yang telah merasakan 
            kekuatan teknologi Victorian yang revolusioner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Aktifkan Sistem
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">SteamWorks</span>
              </div>
              <p className="text-amber-300">
                Industri mesin uap terdepan dengan teknologi Victorian.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Mesin</h3>
              <ul className="space-y-2 text-amber-300">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Steam Engine</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Gear System</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Power Core</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Brass Tech</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Layanan</h3>
              <ul className="space-y-2 text-amber-300">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Maintenance</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Repair</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Upgrade</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Consultation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kontak</h3>
              <ul className="space-y-2 text-amber-300">
                <li>info@steamworks.com</li>
                <li>+62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-500/20 mt-8 pt-8 text-center text-amber-300">
            <p>&copy; 2024 SteamWorks Industries. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme206; 