'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme209: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Zen Background Elements */}
      <div className="absolute inset-0">
        {/* Sand Patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.1) 0%, transparent 50%)`,
            backgroundSize: '400px 400px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-stone-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gray-300/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Zen Circles */}
        <div className="absolute top-1/4 right-10 w-8 h-8 border border-stone-400/30 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 left-10 w-6 h-6 border border-gray-400/30 rounded-full animate-pulse" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-slate-400/20 rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-stone-600 to-gray-700 rounded-xl flex items-center justify-center relative border border-stone-500">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-gray-700 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-stone-600 to-gray-600 bg-clip-text text-transparent">
                ZenSpace
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-stone-600 hover:text-stone-800 font-medium transition-colors">Beranda</a>
              <a href="#meditasi" className="text-stone-600 hover:text-stone-800 font-medium transition-colors">Meditasi</a>
              <a href="#zen" className="text-stone-600 hover:text-stone-800 font-medium transition-colors">Zen</a>
              <a href="#kontak" className="text-stone-600 hover:text-stone-800 font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-stone-600 to-gray-600 hover:from-stone-700 hover:to-gray-700 text-white border-0">
              Mulai Meditasi
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
                <Badge className="bg-stone-500/20 text-stone-600 border-stone-500/30 backdrop-blur-sm">
                  🧘 Ketenangan Batin
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-stone-800">Temukan</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-600 via-gray-600 to-slate-600">
                    Ketenangan
                  </span>
                  <span className="text-stone-800">dalam Zen</span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
                  Rasakan kedamaian batin melalui meditasi, mindfulness, dan filosofi Zen 
                  yang membawa ketenangan dalam kehidupan sehari-hari.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-stone-600 to-gray-600 hover:from-stone-700 hover:to-gray-700 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Mulai Meditasi
                </Button>
                <Button size="lg" variant="outline" className="border-stone-500 text-stone-600 hover:bg-stone-500/10 px-8 py-4 text-lg">
                  Pelajari Zen
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-800">10K+</div>
                  <div className="text-stone-600">Meditator Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-800">100+</div>
                  <div className="text-stone-600">Sesi Meditasi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-800">24/7</div>
                  <div className="text-stone-600">Ketenangan</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-stone-300/50 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-stone-100/80 to-gray-100/80 rounded-2xl p-6 border border-stone-200/50">
                      <div className="w-12 h-12 bg-stone-200/50 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-stone-800">Mindfulness</h3>
                      <p className="text-sm text-stone-600">Kesadaran penuh dalam setiap momen</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-100/80 to-slate-100/80 rounded-2xl p-6 border border-gray-200/50">
                      <div className="w-12 h-12 bg-gray-200/50 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-stone-800">Meditation</h3>
                      <p className="text-sm text-gray-600">Sesi meditasi yang menenangkan</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-slate-100/80 to-stone-100/80 rounded-2xl p-6 border border-slate-200/50">
                      <div className="w-12 h-12 bg-slate-200/50 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-stone-800">Zen Garden</h3>
                      <p className="text-sm text-slate-600">Taman Zen yang menenangkan</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-stone-100/80 to-gray-100/80 rounded-2xl p-6 border border-stone-200/50">
                      <div className="w-12 h-12 bg-stone-200/50 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-stone-800">Inner Peace</h3>
                      <p className="text-sm text-stone-600">Kedamaian batin yang abadi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-stone-500/20 text-stone-600 border-stone-500/30 mb-4">
              🧘 Filosofi Zen
            </Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              Jalan Menuju Ketenangan
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Temukan ketenangan batin melalui praktik meditasi, mindfulness, 
              dan filosofi Zen yang telah terbukti selama ribuan tahun.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-stone-200/50 hover:border-stone-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-stone-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Mindfulness Practice</h3>
              <p className="text-stone-600 leading-relaxed">
                Praktik mindfulness yang membantu Anda tetap hadir dalam setiap momen, 
                mengurangi stres dan meningkatkan kualitas hidup.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-stone-200/50 hover:border-gray-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Guided Meditation</h3>
              <p className="text-stone-600 leading-relaxed">
                Sesi meditasi terpandu dengan berbagai teknik yang membantu Anda 
                mencapai ketenangan batin dan kedamaian pikiran.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-stone-200/50 hover:border-slate-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-stone-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Zen Philosophy</h3>
              <p className="text-stone-600 leading-relaxed">
                Pelajari filosofi Zen yang mengajarkan kesederhanaan, 
                kesadaran, dan cara hidup yang lebih bermakna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-100/50 to-gray-100/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            Siap Menemukan Ketenangan?
          </h2>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan orang yang telah menemukan ketenangan batin 
            melalui praktik meditasi dan filosofi Zen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-stone-600 to-gray-600 hover:from-stone-700 hover:to-gray-700 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Mulai Meditasi
            </Button>
            <Button size="lg" variant="outline" className="border-stone-500 text-stone-600 hover:bg-stone-500/10 px-8 py-4 text-lg">
              Pelajari Zen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100/50 backdrop-blur-sm py-12 border-t border-stone-300/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-stone-600 to-gray-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-stone-800">ZenSpace</span>
              </div>
              <p className="text-stone-600">
                Temukan ketenangan batin melalui meditasi dan filosofi Zen.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-stone-800 mb-4">Praktik</h3>
              <ul className="space-y-2 text-stone-600">
                <li><a href="#" className="hover:text-stone-800 transition-colors">Mindfulness</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Meditation</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Zen Garden</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Inner Peace</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-stone-800 mb-4">Program</h3>
              <ul className="space-y-2 text-stone-600">
                <li><a href="#" className="hover:text-stone-800 transition-colors">Beginner</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Intermediate</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Advanced</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Retreat</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-stone-800 mb-4">Kontak</h3>
              <ul className="space-y-2 text-stone-600">
                <li>info@zenspace.com</li>
                <li>+62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-300/50 mt-8 pt-8 text-center text-stone-600">
            <p>&copy; 2024 ZenSpace. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme209; 