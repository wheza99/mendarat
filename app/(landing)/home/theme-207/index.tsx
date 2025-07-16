'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Theme207: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Retro Arcade Background Elements */}
      <div className="absolute inset-0">
        {/* Pixel Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '8px 8px'
          }}></div>
        </div>
        
        {/* Retro Glows */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Pixel Stars */}
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-40 left-2/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-4000"></div>
        <div className="absolute top-60 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-80 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-700 rounded-xl flex items-center justify-center relative border-2 border-pink-500">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-700 rounded-xl animate-pulse"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                PixelQuest
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-pink-200 hover:text-pink-400 font-medium transition-colors">Beranda</a>
              <a href="#game" className="text-pink-200 hover:text-pink-400 font-medium transition-colors">Game</a>
              <a href="#arcade" className="text-pink-200 hover:text-pink-400 font-medium transition-colors">Arcade</a>
              <a href="#kontak" className="text-pink-200 hover:text-pink-400 font-medium transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-0">
              Mulai Game
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
                <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 backdrop-blur-sm">
                  🎮 Era Gaming Klasik
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Selamat Datang di</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                    PixelQuest
                  </span>
                  <span className="text-white">Arcade</span>
                </h1>
                <p className="text-xl text-pink-200 leading-relaxed max-w-2xl">
                  Rasakan nostalgia gaming klasik dengan pixel art yang menakjubkan, 
                  suara retro yang ikonik, dan gameplay yang menghibur.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-lg border-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Play Now
                </Button>
                <Button size="lg" variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500/10 px-8 py-4 text-lg">
                  Leaderboard
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-pink-300">Classic Games</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-pink-300">Players Online</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-pink-300">Arcade Open</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-pink-600/50 to-purple-600/50 rounded-2xl p-6 border border-pink-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Pixel Art</h3>
                      <p className="text-sm text-pink-200">Grafik 8-bit yang menakjubkan</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-600/50 to-indigo-600/50 rounded-2xl p-6 border border-purple-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Retro Sound</h3>
                      <p className="text-sm text-purple-200">Suara chiptune yang ikonik</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-indigo-600/50 to-blue-600/50 rounded-2xl p-6 border border-indigo-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">High Score</h3>
                      <p className="text-sm text-indigo-200">Sistem skor klasik</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-cyan-600/50 to-blue-600/50 rounded-2xl p-6 border border-cyan-500/30">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-white">Multiplayer</h3>
                      <p className="text-sm text-cyan-200">Gaming bersama teman</p>
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
            <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 mb-4">
              🎮 Game Klasik
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Koleksi Game Retro Terlengkap
            </h2>
            <p className="text-xl text-pink-200 max-w-3xl mx-auto">
              Nikmati lebih dari 50 game klasik dengan grafis pixel art yang menakjubkan, 
              suara retro yang ikonik, dan gameplay yang menghibur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pixel Art Graphics</h3>
              <p className="text-pink-200 leading-relaxed">
                Grafis 8-bit yang menakjubkan dengan detail pixel art yang sempurna, 
                menghadirkan nostalgia gaming klasik yang autentik.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Chiptune Music</h3>
              <p className="text-purple-200 leading-relaxed">
                Suara retro chiptune yang ikonik dengan melodi yang catchy dan 
                efek suara yang membangkitkan kenangan gaming klasik.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Leaderboard System</h3>
              <p className="text-indigo-200 leading-relaxed">
                Sistem skor klasik dengan leaderboard global yang memungkinkan 
                pemain bersaing untuk mencapai high score tertinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Main Game Klasik?
          </h2>
          <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pemain yang telah merasakan 
            nostalgia gaming klasik yang menghibur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-lg border-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Play Now
            </Button>
            <Button size="lg" variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500/10 px-8 py-4 text-lg">
              View Games
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 border-t border-pink-500/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">PixelQuest</span>
              </div>
              <p className="text-pink-300">
                Arcade gaming klasik dengan pixel art yang menakjubkan.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Games</h3>
              <ul className="space-y-2 text-pink-300">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Pac-Man</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Tetris</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Snake</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Pong</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Features</h3>
              <ul className="space-y-2 text-pink-300">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Leaderboard</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Multiplayer</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Achievements</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Tournaments</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Kontak</h3>
              <ul className="space-y-2 text-pink-300">
                <li>info@pixelquest.com</li>
                <li>+62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-pink-500/20 mt-8 pt-8 text-center text-pink-300">
            <p>&copy; 2024 PixelQuest Arcade. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme207; 