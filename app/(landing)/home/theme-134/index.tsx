import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌱',
    title: 'Natural Growth',
    description: 'Pertumbuhan organik yang alami dan berkelanjutan',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: '🌿',
    title: 'Eco Friendly',
    description: 'Ramah lingkungan dengan teknologi hijau',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    icon: '🌸',
    title: 'Beautiful Design',
    description: 'Desain yang indah seperti bunga di taman',
    color: 'from-pink-400 to-rose-500'
  },
  {
    icon: '🌳',
    title: 'Strong Foundation',
    description: 'Fondasi yang kokoh seperti pohon besar',
    color: 'from-amber-400 to-orange-500'
  }
];

const testimonials = [
  {
    name: 'Luna Green',
    role: 'Environmentalist',
    avatar: '🌱',
    text: 'Platform yang menginspirasi dan ramah lingkungan!',
    rating: 5
  },
  {
    name: 'River Stone',
    role: 'Sustainability Expert',
    avatar: '🌿',
    text: 'Desain yang natural dan menyegarkan mata.',
    rating: 5
  },
  {
    name: 'Sunny Meadow',
    role: 'Nature Photographer',
    avatar: '🌸',
    text: 'Membawa keindahan alam ke dalam teknologi digital.',
    rating: 5
  }
];

const stats = [
  { value: '100%', label: 'Organic' },
  { value: '0%', label: 'Waste' },
  { value: '24/7', label: 'Growth' },
  { value: '∞', label: 'Sustainability' }
];

const benefits = [
  { icon: '🌍', title: 'Eco-Friendly', desc: 'Ramah lingkungan' },
  { icon: '♻️', title: 'Recyclable', desc: 'Dapat didaur ulang' },
  { icon: '🌱', title: 'Biodegradable', desc: 'Mudah terurai' },
  { icon: '🌿', title: 'Natural', desc: '100% alami' }
];

export default function HomePageTheme134() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isGrowing, setIsGrowing] = useState(false);
  const [windEffect, setWindEffect] = useState(0);

  useEffect(() => {
    // Growing animation
    const growthInterval = setInterval(() => {
      setIsGrowing(prev => !prev);
    }, 3000);

    // Wind effect
    const windInterval = setInterval(() => {
      setWindEffect(prev => (prev + 1) % 360);
    }, 100);

    return () => {
      clearInterval(growthInterval);
      clearInterval(windInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 font-sans relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-emerald-200 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-teal-200 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-pink-200 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      {/* Floating Leaves */}
      <div className="fixed top-20 left-10 text-green-400 animate-bounce" style={{ transform: `rotate(${windEffect}deg)` }}>
        <div className="text-3xl">🍃</div>
      </div>
      <div className="fixed top-40 right-20 text-emerald-400 animate-pulse" style={{ transform: `rotate(${-windEffect}deg)` }}>
        <div className="text-2xl">🌿</div>
      </div>
      <div className="fixed bottom-40 left-20 text-teal-400 animate-spin" style={{ transform: `rotate(${windEffect * 0.5}deg)` }}>
        <div className="text-2xl">🌱</div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className={`mb-8 ${isGrowing ? 'animate-pulse' : ''}`}>
            <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-4">
              <span className="text-green-600">Organic</span>
              <br />
              <span className="text-emerald-600">Nature</span>
            </h1>
            <div className="text-2xl text-teal-600 font-medium mb-4">
              Growing Together 🌱
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Platform digital yang <span className="text-green-600 font-semibold">ramah lingkungan</span> dan menginspirasi pertumbuhan yang <span className="text-emerald-600 font-semibold">berkelanjutan</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              🌱 Start Growing
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-green-300 text-green-700 font-medium rounded-full hover:bg-green-50 transition-all duration-300">
              🌿 Learn More
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
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:text-emerald-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
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
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-800">
            Natural <span className="text-green-600">Benefits</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-green-700 group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-800">
            <span className="text-emerald-600">Eco</span> Friendly
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:animate-pulse">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
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
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-800">
            What Our <span className="text-green-600">Community</span> Says
          </h2>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-green-200 shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-6 animate-bounce">{testimonials[currentTestimonial].avatar}</div>
              <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-4">
                <div className="text-lg font-semibold text-green-700">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600 text-sm">
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
                        ? 'bg-green-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
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
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-green-200 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
                Ready to <span className="text-green-600">Grow</span> Together?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan komunitas yang peduli terhadap lingkungan dan masa depan yang berkelanjutan
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                🌱 Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110">
          🌿
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes grow {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .animate-grow {
          animation: grow 3s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
} 