import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏙️',
    title: 'Holographic Towers',
    description: 'Floating digital architecture',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: '🌐',
    title: 'Digital Networks',
    description: 'Connected cyber world',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '⚡',
    title: 'Energy Grid',
    description: 'Powering the future',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '🤖',
    title: 'AI Systems',
    description: 'Intelligent automation',
    color: 'from-green-400 to-emerald-500'
  }
];

const testimonials = [
  {
    name: 'Cyber Architect',
    role: 'Digital Designer',
    avatar: '🏙️',
    text: 'The holographic city represents the pinnacle of human innovation and technological advancement.',
    rating: 5
  },
  {
    name: 'Network Engineer',
    role: 'Digital Infrastructure',
    avatar: '🌐',
    text: 'Our interconnected systems create a seamless digital experience for all citizens.',
    rating: 5
  },
  {
    name: 'AI Specialist',
    role: 'Machine Intelligence',
    avatar: '🤖',
    text: 'Artificial intelligence powers every aspect of our futuristic metropolis.',
    rating: 5
  }
];

const stats = [
  { value: '100%', label: 'Digital Coverage' },
  { value: '∞', label: 'Holographic Data' },
  { value: '24/7', label: 'AI Systems' },
  { value: '0ms', label: 'Response Time' }
];

const services = [
  { icon: '🏙️', title: 'Holographic Design', desc: 'Digital architecture' },
  { icon: '🌐', title: 'Network Systems', desc: 'Cyber infrastructure' },
  { icon: '⚡', title: 'Energy Management', desc: 'Power optimization' },
  { icon: '🤖', title: 'AI Integration', desc: 'Smart automation' }
];

export default function HomePageTheme166() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hologramGlow, setHologramGlow] = useState(0);
  const [digitalFlow, setDigitalFlow] = useState(0);
  const [cyberPulse, setCyberPulse] = useState(0);

  useEffect(() => {
    // Hologram glow animation
    const hologramInterval = setInterval(() => {
      setHologramGlow(prev => (prev + 1) % 100);
    }, 100);

    // Digital flow animation
    const digitalInterval = setInterval(() => {
      setDigitalFlow(prev => (prev + 1) % 100);
    }, 150);

    // Cyber pulse effect
    const cyberInterval = setInterval(() => {
      setCyberPulse(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(hologramInterval);
      clearInterval(digitalInterval);
      clearInterval(cyberInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 font-mono relative overflow-hidden">
      {/* Futuristic Holographic Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-gray-900/70 to-blue-900/80">
        {/* Holographic city grid */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Grid lines */}
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i}>
                <line
                  x1={i * 60}
                  y1="0"
                  x2={i * 60}
                  y2="800"
                  stroke="url(#gridGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1={i * 40}
                  x2="1200"
                  y2={i * 40}
                  stroke="url(#gridGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </g>
            ))}
            
            {/* Floating holographic buildings */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <rect
                  x={150 + i * 120}
                  y={400 - Math.sin(hologramGlow * 0.02 + i) * 50}
                  width={40 + Math.cos(digitalFlow * 0.02 + i) * 20}
                  height={200 + Math.sin(cyberPulse * 0.02 + i) * 30}
                  fill="url(#hologramGradient)"
                  opacity="0.8"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                />
                <rect
                  x={200 + i * 100}
                  y={350 - Math.cos(hologramGlow * 0.03 + i) * 40}
                  width={30 + Math.sin(digitalFlow * 0.03 + i) * 15}
                  height={250 + Math.cos(cyberPulse * 0.03 + i) * 25}
                  fill="url(#hologramGradient2)"
                  opacity="0.7"
                  stroke="url(#neonGradient2)"
                  strokeWidth="2"
                />
              </g>
            ))}
            
            {/* Holographic data streams */}
            {Array.from({ length: 12 }, (_, i) => (
              <path
                key={i}
                d={`M${100 + i * 100} 800 Q${150 + i * 100 + Math.sin(hologramGlow * 0.02 + i) * 50} ${600 - Math.cos(digitalFlow * 0.02 + i) * 100} ${200 + i * 100 + Math.sin(hologramGlow * 0.02 + i) * 30} 400`}
                stroke="url(#dataStreamGradient)"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
            ))}
            
            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFFF" />
                <stop offset="50%" stopColor="#0080FF" />
                <stop offset="100%" stopColor="#8000FF" />
              </linearGradient>
              <linearGradient id="hologramGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00FFFF" />
                <stop offset="50%" stopColor="#0080FF" />
                <stop offset="100%" stopColor="#0000FF" />
              </linearGradient>
              <linearGradient id="hologramGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF00FF" />
                <stop offset="50%" stopColor="#8000FF" />
                <stop offset="100%" stopColor="#4000FF" />
              </linearGradient>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FFFF" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#00FFFF" />
              </linearGradient>
              <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF00FF" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FF00FF" />
              </linearGradient>
              <linearGradient id="dataStreamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FF00" />
                <stop offset="50%" stopColor="#FFFF00" />
                <stop offset="100%" stopColor="#00FF00" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated digital particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 60 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 4}px`,
                height: `${1 + Math.random() * 4}px`,
                top: `-${Math.random() * 20}px`,
                backgroundColor: `hsl(${180 + Math.sin(hologramGlow * 0.1 + i) * 60}, 100%, 50%)`,
                transform: `translateY(${Math.sin(digitalFlow * 0.1 + i) * 50 - 100}vh) translateX(${Math.sin(cyberPulse * 0.1 + i) * 30}px)`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.6 + Math.random() * 0.4,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* Floating holographic elements */}
        <div className="absolute top-20 left-10 animate-pulse" style={{
          opacity: 0.9,
          transform: `translateY(${Math.sin(hologramGlow * 0.02) * 25}px) rotate(${digitalFlow * 0.5}deg)`,
          filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.8))'
        }}>
          <div className="text-4xl">🏙️</div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{
          opacity: 0.8,
          transform: `translateY(${Math.cos(digitalFlow * 0.02) * 20}px) rotate(${cyberPulse * 0.3}deg)`,
          filter: 'drop-shadow(0 0 20px rgba(255, 0, 255, 0.8))'
        }}>
          <div className="text-3xl">🌐</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.sin(cyberPulse * 0.02) * 18}px) rotate(${hologramGlow * 0.2}deg)`,
          filter: 'drop-shadow(0 0 20px rgba(255, 255, 0, 0.8))'
        }}>
          <div className="text-3xl">⚡</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-bounce" style={{
          opacity: 0.8,
          transform: `translateY(${Math.cos(hologramGlow * 0.02) * 15}px) rotate(${digitalFlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 20px rgba(0, 255, 0, 0.8))'
        }}>
          <div className="text-3xl">🤖</div>
        </div>

        {/* Holographic light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-cyan-500 via-transparent to-blue-500 opacity-60 animate-pulse" style={{
          transform: `translateX(${Math.sin(hologramGlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-purple-500 via-transparent to-pink-500 opacity-60 animate-pulse" style={{
          transform: `translateX(${Math.sin(digitalFlow * 0.1) * 25}px)`,
          filter: 'blur(2px)'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Futuristic Holographic City
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Welcome to the future where holographic technology meets urban innovation. 
              Experience the next generation of digital living in our cyber metropolis.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Explore the Future
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Digital Tour
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 bg-black/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Holographic Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105"
                  style={{
                    boxShadow: `0 0 30px rgba(0, 255, 255, ${0.1 + Math.sin(hologramGlow * 0.02 + index) * 0.1})`
                  }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Digital Testimonials
            </h2>
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <p className="text-xl text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="text-white">
                  <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-purple-400">{testimonials[currentTestimonial].role}</div>
                </div>
                <div className="flex justify-center mt-4">
                  {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Digital Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105"
                  style={{
                    boxShadow: `0 0 30px rgba(255, 0, 255, ${0.1 + Math.sin(digitalFlow * 0.02 + index) * 0.1})`
                  }}
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Join the Digital Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of urban living with our holographic technology.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-lg text-lg hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Enter the Future
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 