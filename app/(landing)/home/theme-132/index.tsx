import React, { useState, useEffect } from 'react';

const services = [
  {
    icon: '✨',
    title: 'Elegant Design',
    description: 'Desain minimalis dengan sentuhan modern yang elegan',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Performa yang cepat dan responsif di semua device',
    color: 'from-purple-400 to-pink-400'
  },
  {
    icon: '🛡️',
    title: 'Secure & Reliable',
    description: 'Keamanan tingkat tinggi dengan enkripsi end-to-end',
    color: 'from-green-400 to-emerald-400'
  },
  {
    icon: '🎯',
    title: 'User Focused',
    description: 'Pengalaman pengguna yang intuitif dan mudah digunakan',
    color: 'from-orange-400 to-red-400'
  }
];

const testimonials = [
  {
    name: 'Emma Wilson',
    role: 'UX Designer',
    avatar: '👩‍🎨',
    text: 'Desain yang clean dan modern, sangat sesuai dengan kebutuhan bisnis kami.',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'Product Manager',
    avatar: '👨‍💼',
    text: 'Interface yang intuitif dan performa yang luar biasa.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    avatar: '👩‍💻',
    text: 'Membantu tim kami meningkatkan konversi secara signifikan.',
    rating: 5
  }
];

const stats = [
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '2.5s', label: 'Average Load Time' },
  { value: '50K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' }
];

export default function HomePageTheme132() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Minimalist
              </span>
              <br />
              <span className="text-gray-700">Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Platform digital dengan desain minimalis yang elegan dan performa yang luar biasa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl text-gray-700 font-medium hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-1/4 left-10 opacity-60 animate-float">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30"></div>
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-60 animate-float delay-1000">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
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

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan solusi digital yang elegan dan inovatif
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients</span> Say
            </h2>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-6">{testimonials[currentTestimonial].avatar}</div>
              <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-4">
                <div className="text-lg font-semibold text-gray-800">
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
                        ? 'bg-blue-500' 
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
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/30 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                Ready to Get <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Started</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan pengguna yang telah mempercayai platform kami
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-2xl">
          💬
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
} 