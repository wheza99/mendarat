import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🎮',
    title: 'Pixel Perfect',
    description: 'Desain pixel art yang detail dan akurat',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: '⚡',
    title: '8-Bit Speed',
    description: 'Performa yang cepat seperti game retro',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: '🛡️',
    title: 'Retro Security',
    description: 'Keamanan klasik yang teruji waktu',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: '🎯',
    title: 'High Score',
    description: 'Mencapai skor tertinggi dalam user experience',
    color: 'from-orange-400 to-red-500'
  }
];

const testimonials = [
  {
    name: 'Pixel Pete',
    role: 'Game Developer',
    avatar: '👾',
    text: 'Interface yang mengingatkan saya pada masa keemasan gaming!',
    rating: 5
  },
  {
    name: 'Retro Rita',
    role: 'UX Designer',
    avatar: '🎮',
    text: 'Desain yang unik dan nostalgia, sangat menyenangkan digunakan.',
    rating: 5
  },
  {
    name: 'Arcade Andy',
    role: 'Product Manager',
    avatar: '🕹️',
    text: 'Membawa kembali kenangan masa kecil dengan teknologi modern.',
    rating: 5
  }
];

const stats = [
  { value: '1UP', label: 'Success Rate' },
  { value: '8-BIT', label: 'Performance' },
  { value: '16-BIT', label: 'Graphics' },
  { value: '32-BIT', label: 'Power' }
];

const achievements = [
  { icon: '🏆', title: 'Level 100', desc: 'Mastered the platform' },
  { icon: '⭐', title: '5 Stars', desc: 'Perfect rating' },
  { icon: '🎯', title: 'Bullseye', desc: 'Target achieved' },
  { icon: '🚀', title: 'Speed Run', desc: 'Fastest completion' }
];

export default function HomePageTheme133() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [score, setScore] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    // Animated score counter
    const interval = setInterval(() => {
      setScore(prev => prev < 999999 ? prev + 1 : prev);
    }, 100);

    // Glow effect
    const glowInterval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 font-mono relative overflow-hidden">
      {/* Retro Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect width='2' height='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Pixels */}
      <div className="fixed top-20 left-20 text-green-400 animate-bounce">
        <div className="text-2xl">█</div>
      </div>
      <div className="fixed top-40 right-20 text-blue-400 animate-pulse">
        <div className="text-xl">▓</div>
      </div>
      <div className="fixed bottom-40 left-20 text-purple-400 animate-spin">
        <div className="text-3xl">▒</div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className={`mb-8 ${isGlowing ? 'animate-pulse' : ''}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              <span className="text-green-400">RETRO</span>
              <span className="text-blue-400">GAMING</span>
            </h1>
            <div className="text-2xl text-yellow-400 font-bold mb-4">
              SCORE: {score.toString().padStart(6, '0')}
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Platform digital dengan nuansa <span className="text-green-400 font-bold">retro gaming</span> yang menyenangkan dan <span className="text-blue-400 font-bold">nostalgia</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg border-4 border-green-300">
              🎮 START GAME
            </button>
            <button className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition-all duration-300 border-4 border-blue-300">
              📖 INSTRUCTIONS
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/80 border-4 border-gray-600 rounded-lg p-6 hover:border-green-400 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:text-yellow-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-bold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            <span className="text-green-400">POWER</span> <span className="text-blue-400">UPS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/80 border-4 border-gray-600 rounded-lg p-6 hover:border-green-400 transition-all duration-300 hover:scale-105 h-full">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400 group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            <span className="text-yellow-400">ACHIEVEMENTS</span> <span className="text-green-400">UNLOCKED</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/80 border-4 border-gray-600 rounded-lg p-6 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:animate-pulse">{achievement.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-yellow-400">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {achievement.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            <span className="text-purple-400">PLAYER</span> <span className="text-pink-400">REVIEWS</span>
          </h2>
          
          <div className="bg-gray-800/80 border-4 border-gray-600 rounded-lg p-8">
            <div className="text-center">
              <div className="text-6xl mb-6 animate-bounce">{testimonials[currentTestimonial].avatar}</div>
              <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-4">
                <div className="text-lg font-bold text-green-400">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'bg-green-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/80 border-4 border-gray-600 rounded-lg p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                <span className="text-green-400">GAME</span> <span className="text-blue-400">OVER</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan gamer yang telah mempercayai platform kami
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg border-4 border-green-300 text-lg">
                🎮 CONTINUE GAME
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-green-500 border-4 border-green-300 rounded-lg flex items-center justify-center text-2xl shadow-lg hover:bg-green-400 transition-all duration-300 hover:scale-110">
          🎮
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pixelate {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .animate-pixelate {
          animation: pixelate 0.5s ease-in-out;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
} 