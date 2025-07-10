import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Ultra Fast',
    desc: 'Kecepatan loading yang luar biasa dengan teknologi terdepan',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: '🔒',
    title: 'Secure',
    desc: 'Keamanan tingkat enterprise dengan enkripsi end-to-end',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: '🚀',
    title: 'Scalable',
    desc: 'Arsitektur yang dapat berkembang sesuai kebutuhan bisnis',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: '🎯',
    title: 'Precise',
    desc: 'Akurasi tinggi dalam setiap transaksi dan analisis data',
    color: 'from-orange-400 to-red-500'
  }
];

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'CTO TechCorp',
    avatar: '👨‍💻',
    text: 'Platform ini mengubah cara kami menjalankan bisnis digital.',
    rating: 5
  },
  {
    name: 'Sarah Kim',
    role: 'Product Manager',
    avatar: '👩‍💼',
    text: 'Interface yang intuitif dan performa yang luar biasa.',
    rating: 5
  },
  {
    name: 'Mike Rodriguez',
    role: 'Startup Founder',
    avatar: '👨‍🚀',
    text: 'Membantu startup kami berkembang 10x lebih cepat.',
    rating: 5
  }
];

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '50ms', label: 'Response Time' },
  { value: '10M+', label: 'Users' },
  { value: '24/7', label: 'Support' }
];

export default function HomePageTheme131() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900 to-black">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Cursor Trail */}
      <div 
        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff'
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className={`text-6xl md:text-8xl font-black mb-6 ${isGlitching ? 'animate-glitch' : ''}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              CYBER
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-orange-400">
              TECH
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Platform digital masa depan dengan teknologi <span className="text-cyan-400 font-bold">AI</span> dan <span className="text-purple-400 font-bold">Blockchain</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-400/50">
              🚀 LAUNCH NOW
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300">
              📖 DOCUMENTATION
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-cyan-400 animate-bounce">
          <div className="text-4xl">⚡</div>
        </div>
        <div className="absolute top-40 right-20 text-purple-400 animate-pulse">
          <div className="text-3xl">🔮</div>
        </div>
        <div className="absolute bottom-40 left-20 text-pink-400 animate-spin">
          <div className="text-2xl">🌀</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            FEATURES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">
            TESTIMONIALS
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-6">{testimonials[currentTestimonial].avatar}</div>
              <p className="text-xl text-gray-300 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-4">
                <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-500 text-sm">
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
                        ? 'bg-cyan-400' 
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
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                READY TO HACK THE FUTURE?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan developer dan perusahaan yang telah mempercayai platform kami
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-400/50 text-lg">
                🚀 GET STARTED NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-cyan-400/50 hover:scale-110 transition-transform duration-300">
          💬
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        .animate-glitch {
          animation: glitch 0.3s ease-in-out;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
} 