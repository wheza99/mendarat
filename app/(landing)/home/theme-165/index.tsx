import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏔️',
    title: 'Snow Peaks',
    description: 'Majestic alpine mountains',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: '⛷️',
    title: 'Ski Slopes',
    description: 'Perfect powder conditions',
    color: 'from-white to-gray-200'
  },
  {
    icon: '🏠',
    title: 'Mountain Lodge',
    description: 'Cozy alpine retreat',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: '❄️',
    title: 'Winter Magic',
    description: 'Enchanted snow world',
    color: 'from-cyan-400 to-blue-400'
  }
];

const testimonials = [
  {
    name: 'Ski Instructor',
    role: 'Alpine Expert',
    avatar: '⛷️',
    text: 'The perfect powder and pristine slopes make every day an adventure.',
    rating: 5
  },
  {
    name: 'Mountain Guide',
    role: 'Alpine Explorer',
    avatar: '🏔️',
    text: 'These peaks offer the most breathtaking views and challenging terrain.',
    rating: 5
  },
  {
    name: 'Lodge Manager',
    role: 'Hospitality Expert',
    avatar: '🏠',
    text: 'Our cozy lodge provides the perfect retreat after a day on the slopes.',
    rating: 5
  }
];

const stats = [
  { value: '3000m', label: 'Peak Elevation' },
  { value: '∞', label: 'Ski Runs' },
  { value: '100%', label: 'Powder Snow' },
  { value: '24/7', label: 'Mountain' }
];

const services = [
  { icon: '🎿', title: 'Ski Lessons', desc: 'Alpine instruction' },
  { icon: '🏔️', title: 'Mountain Tours', desc: 'Peak exploration' },
  { icon: '🏠', title: 'Lodge Stays', desc: 'Cozy accommodations' },
  { icon: '🍽️', title: 'Alpine Dining', desc: 'Mountain cuisine' }
];

export default function HomePageTheme165() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [snowFall, setSnowFall] = useState(0);
  const [mountainGlow, setMountainGlow] = useState(0);
  const [skiFlow, setSkiFlow] = useState(0);

  useEffect(() => {
    // Snow fall animation
    const snowInterval = setInterval(() => {
      setSnowFall(prev => (prev + 1) % 100);
    }, 100);

    // Mountain glow animation
    const mountainInterval = setInterval(() => {
      setMountainGlow(prev => (prev + 1) % 100);
    }, 150);

    // Ski flow effect
    const skiInterval = setInterval(() => {
      setSkiFlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(snowInterval);
      clearInterval(mountainInterval);
      clearInterval(skiInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-cyan-200 to-blue-300 font-serif relative overflow-hidden">
      {/* Alpine Mountain Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-100/80 via-cyan-200/60 to-blue-300/80">
        {/* Mountain peaks */}
        <div className="absolute bottom-0 left-0 w-full h-96">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
            {/* Main peaks */}
            <polygon
              points="100,400 200,150 300,400"
              fill="url(#mountainGradient)"
              opacity="0.9"
            />
            <polygon
              points="250,400 350,120 450,400"
              fill="url(#mountainGradient2)"
              opacity="0.8"
            />
            <polygon
              points="400,400 500,100 600,400"
              fill="url(#mountainGradient3)"
              opacity="0.9"
            />
            <polygon
              points="550,400 650,140 750,400"
              fill="url(#mountainGradient)"
              opacity="0.8"
            />
            <polygon
              points="700,400 800,110 900,400"
              fill="url(#mountainGradient2)"
              opacity="0.9"
            />
            <polygon
              points="850,400 950,130 1050,400"
              fill="url(#mountainGradient3)"
              opacity="0.8"
            />
            
            {/* Snow caps */}
            <polygon
              points="180,160 200,150 220,160 200,170"
              fill="white"
              opacity="0.9"
            />
            <polygon
              points="330,130 350,120 370,130 350,140"
              fill="white"
              opacity="0.9"
            />
            <polygon
              points="480,110 500,100 520,110 500,120"
              fill="white"
              opacity="0.9"
            />
            <polygon
              points="630,150 650,140 670,150 650,160"
              fill="white"
              opacity="0.9"
            />
            <polygon
              points="780,120 800,110 820,120 800,130"
              fill="white"
              opacity="0.9"
            />
            <polygon
              points="930,140 950,130 970,140 950,150"
              fill="white"
              opacity="0.9"
            />
            
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#64748B" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#374151" />
                <stop offset="100%" stopColor="#1F2937" />
              </linearGradient>
              <linearGradient id="mountainGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#64748B" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated snow particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/80"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                top: `-${Math.random() * 20}px`,
                transform: `translateY(${Math.sin(snowFall * 0.1 + i) * 50 - 100}vh) translateX(${Math.sin(mountainGlow * 0.1 + i) * 30}px)`,
                animationDuration: `${4 + Math.random() * 3}s`,
                opacity: 0.6 + Math.random() * 0.4,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>

        {/* Ski tracks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-32 bg-white/60"
              style={{
                left: `${200 + i * 150}px`,
                top: `${100 + Math.sin(skiFlow * 0.02 + i) * 50}px`,
                transform: `rotate(${15 + Math.sin(mountainGlow * 0.02 + i) * 10}deg)`,
                opacity: 0.7 + Math.sin(snowFall * 0.02 + i) * 0.2,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* Floating alpine elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(snowFall * 0.02) * 25}px) rotate(${mountainGlow * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))'
        }}>
          <div className="text-4xl">🏔️</div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(skiFlow * 0.02) * 20}px) rotate(${snowFall * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))'
        }}>
          <div className="text-3xl">⛷️</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(mountainGlow * 0.02) * 18}px) rotate(${skiFlow * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.8))'
        }}>
          <div className="text-3xl">🏠</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(snowFall * 0.02) * 15}px) rotate(${mountainGlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.8))'
        }}>
          <div className="text-3xl">❄️</div>
        </div>

        {/* Alpine light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-500 via-transparent to-cyan-500 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.sin(snowFall * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-cyan-400 via-transparent to-blue-400 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.cos(mountainGlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>

        {/* Floating ski elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(skiFlow * 0.02 + i) * 50}px) translateX(${Math.cos(mountainGlow * 0.02 + i) * 30}px)`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.6 + Math.random() * 0.4,
                filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))'
              }}
            >
              {['⛷️', '🎿', '🏂', '🏔️', '❄️', '🏠', '🌨️', '⛰️'][i % 8]}
            </div>
          ))}
        </div>

        {/* Floating snow elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(mountainGlow * 0.02 + i) * 40}px) translateX(${Math.cos(skiFlow * 0.02 + i) * 25}px)`,
                animationDuration: `${4 + Math.random() * 2}s`,
                opacity: 0.5 + Math.random() * 0.3,
                filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))'
              }}
            >
              {['❄️', '🌨️', '⛄', '💎', '🔷', '💠'][i % 6]}
            </div>
          ))}
        </div>

        {/* Alpine sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(snowFall * 0.02 + i) * 100}vh) translateX(${Math.sin(mountainGlow * 0.02 + i) * 50}px)`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.6 + Math.random() * 0.4,
                boxShadow: '0 0 8px rgba(6, 182, 212, 0.8)',
                animationDelay: `${i * 0.2}s`,
                animationIterationCount: 'infinite',
                animationName: 'alpineSparkle'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6" style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))'
              }}>
                Alpine Mountain Resort
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Experience the thrill of pristine slopes and breathtaking mountain views. 
                Your perfect alpine adventure awaits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Book Resort
                </button>
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Ski Lessons
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Alpine Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2" style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-50/50 to-blue-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Alpine Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Alpine Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience Alpine Magic
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Discover the perfect blend of adventure and luxury in our mountain paradise.
            </p>
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Your Stay
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes alpineSparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
} 