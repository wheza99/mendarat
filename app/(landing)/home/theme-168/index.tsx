import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🐠',
    title: 'Coral Reefs',
    description: 'Vibrant underwater ecosystems',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: '🐙',
    title: 'Ocean Depths',
    description: 'Mysterious deep sea',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: '🌊',
    title: 'Ocean Currents',
    description: 'Flowing water dynamics',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: '🦈',
    title: 'Marine Life',
    description: 'Diverse sea creatures',
    color: 'from-teal-400 to-green-500'
  }
];

const testimonials = [
  {
    name: 'Coral Guardian',
    role: 'Reef Protector',
    avatar: '🐠',
    text: 'Our coral reefs are the heart of the ocean, providing life and beauty to the underwater world.',
    rating: 5
  },
  {
    name: 'Deep Sea Explorer',
    role: 'Ocean Pioneer',
    avatar: '🐙',
    text: 'The ocean depths hold secrets that have fascinated humanity for centuries.',
    rating: 5
  },
  {
    name: 'Marine Biologist',
    role: 'Sea Life Expert',
    avatar: '🦈',
    text: 'Every creature in the ocean plays a vital role in maintaining the delicate balance of marine ecosystems.',
    rating: 5
  }
];

const stats = [
  { value: '71%', label: 'Ocean Coverage' },
  { value: '∞', label: 'Marine Species' },
  { value: '100%', label: 'Natural Beauty' },
  { value: '24/7', label: 'Ocean Life' }
];

const services = [
  { icon: '🐠', title: 'Coral Conservation', desc: 'Reef protection' },
  { icon: '🐙', title: 'Deep Sea Exploration', desc: 'Ocean discovery' },
  { icon: '🌊', title: 'Current Studies', desc: 'Water dynamics' },
  { icon: '🦈', title: 'Marine Research', desc: 'Sea life study' }
];

export default function HomePageTheme168() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [oceanFlow, setOceanFlow] = useState(0);
  const [coralGlow, setCoralGlow] = useState(0);
  const [fishSwim, setFishSwim] = useState(0);
  const [bubbleRise, setBubbleRise] = useState(0);

  useEffect(() => {
    // Ocean flow animation
    const oceanInterval = setInterval(() => {
      setOceanFlow(prev => (prev + 1) % 100);
    }, 100);

    // Coral glow animation
    const coralInterval = setInterval(() => {
      setCoralGlow(prev => (prev + 1) % 100);
    }, 150);

    // Fish swimming animation
    const fishInterval = setInterval(() => {
      setFishSwim(prev => (prev + 1) % 100);
    }, 200);

    // Bubble rising effect
    const bubbleInterval = setInterval(() => {
      setBubbleRise(prev => (prev + 1) % 100);
    }, 300);

    return () => {
      clearInterval(oceanInterval);
      clearInterval(coralInterval);
      clearInterval(fishInterval);
      clearInterval(bubbleInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-cyan-800 to-indigo-900 font-sans relative overflow-hidden">
      {/* Underwater Ocean Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-900/90 via-cyan-800/70 to-indigo-900/80">
        {/* Ocean floor with coral reefs */}
        <div className="absolute bottom-0 left-0 w-full h-96">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
            {/* Ocean floor */}
            <path
              d="M0,400 Q200,380 400,390 T800,400 T1200,385 L1200,400 Z"
              fill="url(#sandGradient)"
              opacity="0.8"
            />
            <path
              d="M0,400 Q150,370 300,385 T600,400 T900,375 T1200,390 L1200,400 Z"
              fill="url(#sandGradient2)"
              opacity="0.6"
            />
            
            {/* Coral reefs */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${150 + i * 120} 400 Q${160 + i * 120} ${350 - Math.sin(coralGlow * 0.02 + i) * 20} ${170 + i * 120} 400`}
                  stroke="url(#coralGradient)"
                  strokeWidth="8"
                  fill="none"
                  opacity="0.9"
                />
                <path
                  d={`M${160 + i * 120} 400 Q${170 + i * 120} ${340 - Math.cos(coralGlow * 0.03 + i) * 15} ${180 + i * 120} 400`}
                  stroke="url(#coralGradient2)"
                  strokeWidth="6"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d={`M${170 + i * 120} 400 Q${180 + i * 120} ${360 - Math.sin(coralGlow * 0.04 + i) * 25} ${190 + i * 120} 400`}
                  stroke="url(#coralGradient3)"
                  strokeWidth="10"
                  fill="none"
                  opacity="0.7"
                />
              </g>
            ))}
            
            {/* Sea anemones */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={200 + i * 80}
                  cy={380 + Math.sin(coralGlow * 0.05 + i) * 5}
                  r="8"
                  fill="url(#anemoneGradient)"
                  opacity="0.8"
                />
                <path
                  d={`M${200 + i * 80} ${380 + Math.sin(coralGlow * 0.05 + i) * 5} Q${205 + i * 80} ${370 + Math.cos(coralGlow * 0.06 + i) * 10} ${210 + i * 80} ${380 + Math.sin(coralGlow * 0.05 + i) * 5}`}
                  stroke="url(#anemoneGradient2)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d={`M${200 + i * 80} ${380 + Math.sin(coralGlow * 0.05 + i) * 5} Q${195 + i * 80} ${370 + Math.sin(coralGlow * 0.07 + i) * 10} ${190 + i * 80} ${380 + Math.sin(coralGlow * 0.05 + i) * 5}`}
                  stroke="url(#anemoneGradient2)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Fish swimming */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <ellipse
                  cx={300 + i * 150 + Math.sin(fishSwim * 0.02 + i) * 50}
                  cy={200 + Math.cos(fishSwim * 0.03 + i) * 30}
                  rx="15"
                  ry="8"
                  fill="url(#fishGradient)"
                  opacity="0.9"
                />
                <path
                  d={`M${310 + i * 150 + Math.sin(fishSwim * 0.02 + i) * 50} ${200 + Math.cos(fishSwim * 0.03 + i) * 30} L${320 + i * 150 + Math.sin(fishSwim * 0.02 + i) * 50} ${195 + Math.cos(fishSwim * 0.03 + i) * 30} L${320 + i * 150 + Math.sin(fishSwim * 0.02 + i) * 50} ${205 + Math.cos(fishSwim * 0.03 + i) * 30} Z`}
                  fill="url(#fishGradient)"
                  opacity="0.9"
                />
                <circle
                  cx={295 + i * 150 + Math.sin(fishSwim * 0.02 + i) * 50}
                  cy={198 + Math.cos(fishSwim * 0.03 + i) * 30}
                  r="2"
                  fill="white"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Rising bubbles */}
            {Array.from({ length: 20 }, (_, i) => (
              <circle
                key={i}
                cx={100 + i * 50 + Math.sin(bubbleRise * 0.01 + i) * 30}
                cy={400 - (bubbleRise * 0.5 + i * 20) % 400}
                r={3 + Math.sin(bubbleRise * 0.02 + i) * 2}
                fill="url(#bubbleGradient)"
                opacity="0.6"
              />
            ))}
            
            {/* Seaweed */}
            {Array.from({ length: 10 }, (_, i) => (
              <path
                key={i}
                d={`M${250 + i * 90} 400 Q${260 + i * 90} ${350 + Math.sin(oceanFlow * 0.02 + i) * 20} ${270 + i * 90} ${300 + Math.cos(oceanFlow * 0.03 + i) * 15}`}
                stroke="url(#seaweedGradient)"
                strokeWidth="4"
                fill="none"
                opacity="0.7"
              />
            ))}
            
            <defs>
              <linearGradient id="sandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="sandGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="coralGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F87171" />
                <stop offset="50%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#DC2626" />
              </linearGradient>
              <linearGradient id="coralGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FB7185" />
                <stop offset="50%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#E11D48" />
              </linearGradient>
              <linearGradient id="coralGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#DB2777" />
              </linearGradient>
              <linearGradient id="anemoneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="anemoneGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
              <linearGradient id="fishGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#0891B2" />
                <stop offset="100%" stopColor="#0E7490" />
              </linearGradient>
              <linearGradient id="bubbleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
              <linearGradient id="seaweedGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating seaweed particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 3}%`,
                top: `${30 + Math.sin(oceanFlow * 0.01 + i) * 20}%`,
                animation: `float ${3 + i * 0.1}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Ocean Kingdom
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Dive into the depths of the ocean and discover a world of wonder, 
              where coral reefs dance and marine life thrives in perfect harmony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Depths
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-full hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Discover the Ocean's Wonders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-900/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-cyan-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-cyan-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Voices from the Deep
            </h2>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-cyan-100 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-white font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-cyan-300">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="flex justify-center mt-4">
                  {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-cyan-400/30 hover:bg-cyan-400/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Ocean Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-900/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🐠</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-indigo-200 text-sm">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dive In?
            </h2>
            <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
              Join us in exploring the magnificent underwater world and discover 
              the secrets that lie beneath the waves.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Your Journey
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
} 