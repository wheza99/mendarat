import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '📜',
    title: 'Classic Design',
    description: 'Desain klasik yang timeless dan elegan',
    color: 'from-amber-400 to-orange-500'
  },
  {
    icon: '✒️',
    title: 'Handcrafted',
    description: 'Dibuat dengan tangan dan perhatian detail',
    color: 'from-brown-400 to-amber-500'
  },
  {
    icon: '🏛️',
    title: 'Heritage',
    description: 'Warisan tradisi yang dihormati',
    color: 'from-stone-400 to-gray-500'
  },
  {
    icon: '🎨',
    title: 'Artistic',
    description: 'Seni yang menginspirasi dan memukau',
    color: 'from-rose-400 to-pink-500'
  }
];

const testimonials = [
  {
    name: 'Eleanor Rose',
    role: 'Classic Designer',
    avatar: '📜',
    text: 'Desain yang mengingatkan pada keindahan masa lalu!',
    rating: 5
  },
  {
    name: 'Arthur Stone',
    role: 'Heritage Expert',
    avatar: '✒️',
    text: 'Kombinasi sempurna antara klasik dan modern.',
    rating: 5
  },
  {
    name: 'Victoria Grace',
    role: 'Art Collector',
    avatar: '🏛️',
    text: 'Membawa nostalgia dengan sentuhan kontemporer.',
    rating: 5
  }
];

const stats = [
  { value: '1890', label: 'Established' },
  { value: '100%', label: 'Handmade' },
  { value: '∞', label: 'Timeless' },
  { value: '24/7', label: 'Elegance' }
];

const benefits = [
  { icon: '📜', title: 'Classic', desc: 'Desain timeless' },
  { icon: '✒️', title: 'Handmade', desc: 'Dibuat manual' },
  { icon: '🏛️', title: 'Heritage', desc: 'Warisan tradisi' },
  { icon: '🎨', title: 'Artistic', desc: 'Seni murni' }
];

export default function HomePageTheme136() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [paperEffect, setPaperEffect] = useState(0);

  useEffect(() => {
    // Fading animation
    const fadeInterval = setInterval(() => {
      setIsFading(prev => !prev);
    }, 4000);

    // Paper effect animation
    const paperInterval = setInterval(() => {
      setPaperEffect(prev => (prev + 1) % 360);
    }, 100);

    return () => {
      clearInterval(fadeInterval);
      clearInterval(paperInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 font-serif relative overflow-hidden">
      {/* Paper Texture Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120, 113, 108, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(120, 113, 108, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 113, 108, 0.05) 0%, transparent 50%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 200px 200px'
        }}></div>
      </div>

      {/* Vintage Decorative Elements */}
      <div className="fixed top-10 left-10 text-amber-600 opacity-60" style={{ transform: `rotate(${paperEffect * 0.5}deg)` }}>
        <div className="text-4xl">❦</div>
      </div>
      <div className="fixed top-20 right-20 text-orange-600 opacity-50" style={{ transform: `rotate(${-paperEffect * 0.3}deg)` }}>
        <div className="text-3xl">✧</div>
      </div>
      <div className="fixed bottom-20 left-20 text-yellow-600 opacity-70" style={{ transform: `rotate(${paperEffect * 0.2}deg)` }}>
        <div className="text-3xl">❋</div>
      </div>

      {/* Paper Fold Effect */}
      <div className="fixed top-0 right-0 w-32 h-32 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-200 transform rotate-45 translate-x-16 -translate-y-16"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className={`mb-8 ${isFading ? 'animate-pulse' : ''}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-amber-800 mb-4">
              <span className="text-orange-700">Vintage</span>
              <br />
              <span className="text-amber-700">Paper</span>
            </h1>
            <div className="text-2xl text-orange-600 font-medium mb-4">
              Timeless Elegance ✒️
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Platform digital yang <span className="text-orange-700 font-semibold">mengabadikan keindahan klasik</span> dan menghormati <span className="text-amber-700 font-semibold">tradisi yang timeless</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-amber-600 text-white font-medium rounded-none hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-amber-800">
              📜 Discover More
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-orange-300 text-orange-700 font-medium rounded-none hover:bg-orange-50 transition-all duration-300">
              ✒️ Learn More
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
                <div className="bg-white/70 backdrop-blur-sm rounded-none p-6 border-2 border-amber-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 4px 8px rgba(120, 113, 108, 0.2)' }}>
                  <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2 group-hover:text-orange-700 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-amber-600 text-sm font-medium">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-800">
            Classic <span className="text-orange-700">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/70 backdrop-blur-sm rounded-none p-8 border-2 border-orange-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full" style={{ boxShadow: '0 4px 12px rgba(120, 113, 108, 0.3)' }}>
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-orange-700 group-hover:text-amber-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-800">
            <span className="text-orange-700">Heritage</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/70 backdrop-blur-sm rounded-none p-6 border-2 border-amber-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 4px 12px rgba(120, 113, 108, 0.3)' }}>
                  <div className="text-4xl mb-4 group-hover:animate-pulse">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-amber-700">
                    {benefit.title}
                  </h3>
                  <p className="text-orange-600 text-sm">
                    {benefit.desc}
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-800">
            What Our <span className="text-orange-700">Heritage</span> Community Says
          </h2>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-none p-8 border-2 border-orange-300 shadow-lg" style={{ boxShadow: '0 4px 16px rgba(120, 113, 108, 0.4)' }}>
            <div className="text-center">
              <div className="text-6xl mb-6 animate-bounce">{testimonials[currentTestimonial].avatar}</div>
              <p className="text-xl text-amber-700 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-4">
                <div className="text-lg font-bold text-orange-700">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-amber-600 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 transition-all ${
                      index === currentTestimonial 
                        ? 'bg-amber-600' 
                        : 'bg-amber-300 hover:bg-amber-400'
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
          <div className="bg-white/70 backdrop-blur-sm rounded-none p-12 border-2 border-amber-300 shadow-lg relative overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(120, 113, 108, 0.5)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-800">
                Ready to <span className="text-orange-700">Preserve</span>?
              </h2>
              <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan komunitas yang menghormati tradisi dan mengabadikan keindahan klasik
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-none hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg border-2 border-amber-800">
                📜 Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-amber-600 rounded-none flex items-center justify-center text-2xl shadow-lg hover:bg-amber-700 transition-all duration-300 hover:scale-110 border-2 border-amber-800" style={{ boxShadow: '0 4px 12px rgba(120, 113, 108, 0.4)' }}>
          ✒️
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade {
          0% { opacity: 1; }
          50% { opacity: 0.8; }
          100% { opacity: 1; }
        }
        
        .animate-fade {
          animation: fade 4s ease-in-out infinite;
        }
        
        @keyframes paper-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-paper-float {
          animation: paper-float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 