import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏮',
    title: 'Neon Lights',
    description: 'Electric dreams in the night',
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: '🗼',
    title: 'Tokyo Tower',
    description: 'Iconic city landmarks',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: '⚡',
    title: 'Cyber Energy',
    description: 'Digital power flows',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: '🌸',
    title: 'Cherry Blossoms',
    description: 'Spring beauty in neon',
    color: 'from-pink-400 to-rose-400'
  }
];

const testimonials = [
  {
    name: 'Yuki Neon',
    role: 'Cyber Designer',
    avatar: '👩‍💻',
    text: 'In the neon glow of Tokyo, we create digital dreams that light up the night.',
    rating: 5
  },
  {
    name: 'Kenji Electric',
    role: 'Tech Innovator',
    avatar: '⚡',
    text: 'Where tradition meets technology, we build the future one pixel at a time.',
    rating: 5
  },
  {
    name: 'Sakura Digital',
    role: 'Digital Artist',
    avatar: '🎨',
    text: 'The city never sleeps, and neither do our creative visions.',
    rating: 5
  }
];

const stats = [
  { value: '24/7', label: 'Always On' },
  { value: '∞', label: 'Possibilities' },
  { value: '100%', label: 'Digital' },
  { value: '2024', label: 'Future Now' }
];

const services = [
  { icon: '💻', title: 'Cyber Design', desc: 'Digital aesthetics' },
  { icon: '🎮', title: 'Gaming Tech', desc: 'Interactive experiences' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Smart solutions' },
  { icon: '🤖', title: 'AI Systems', desc: 'Intelligent automation' }
];

export default function HomePageTheme157() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [neonPulse, setNeonPulse] = useState(0);
  const [cherryBlossom, setCherryBlossom] = useState(0);
  const [cyberFlow, setCyberFlow] = useState(0);

  useEffect(() => {
    // Neon pulse animation
    const neonInterval = setInterval(() => {
      setNeonPulse(prev => (prev + 1) % 100);
    }, 100);

    // Cherry blossom falling
    const blossomInterval = setInterval(() => {
      setCherryBlossom(prev => (prev + 1) % 100);
    }, 200);

    // Cyber flow effect
    const flowInterval = setInterval(() => {
      setCyberFlow(prev => (prev + 1) % 100);
    }, 150);

    return () => {
      clearInterval(neonInterval);
      clearInterval(blossomInterval);
      clearInterval(flowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-pink-900 font-mono relative overflow-hidden">
      {/* Neon Tokyo Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-purple-900/60 to-pink-900/80">
        {/* City skyline silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 300" fill="none">
            {/* Tokyo Tower */}
            <rect x="580" y="100" width="40" height="200" fill="#1a1a2e" />
            <rect x="570" y="80" width="60" height="20" fill="#16213e" />
            <rect x="560" y="60" width="80" height="20" fill="#0f0f23" />
            <rect x="550" y="40" width="100" height="20" fill="#1a1a2e" />
            <rect x="540" y="20" width="120" height="20" fill="#16213e" />
            <rect x="530" y="0" width="140" height="20" fill="#0f0f23" />
            
            {/* Buildings */}
            <rect x="0" y="200" width="80" height="100" fill="#1a1a2e" />
            <rect x="80" y="150" width="60" height="150" fill="#16213e" />
            <rect x="140" y="180" width="90" height="120" fill="#1a1a2e" />
            <rect x="230" y="120" width="70" height="180" fill="#0f0f23" />
            <rect x="300" y="160" width="85" height="140" fill="#16213e" />
            <rect x="385" y="100" width="75" height="200" fill="#1a1a2e" />
            <rect x="460" y="140" width="95" height="160" fill="#0f0f23" />
            <rect x="555" y="110" width="65" height="190" fill="#16213e" />
            <rect x="620" y="170" width="80" height="130" fill="#1a1a2e" />
            <rect x="700" y="130" width="90" height="170" fill="#0f0f23" />
            <rect x="790" y="160" width="75" height="140" fill="#16213e" />
            <rect x="865" y="120" width="85" height="180" fill="#1a1a2e" />
            <rect x="950" y="180" width="70" height="120" fill="#0f0f23" />
            <rect x="1020" y="140" width="95" height="160" fill="#16213e" />
            <rect x="1115" y="200" width="85" height="100" fill="#1a1a2e" />
            
            {/* Neon windows */}
            {Array.from({ length: 60 }, (_, i) => (
              <rect 
                key={i}
                x={Math.random() * 1200} 
                y={120 + Math.random() * 100} 
                width="4" 
                height="6" 
                fill={`hsl(${280 + Math.sin(neonPulse * 0.1 + i) * 60}, 100%, ${60 + Math.sin(neonPulse * 0.1 + i) * 30}%)`}
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Animated neon grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-[linear-gradient(90deg,transparent_49px,#ff00ff_50px,#ff00ff_51px,transparent_52px),linear-gradient(transparent_49px,#00ffff_50px,#00ffff_51px,transparent_52px)] bg-[length:100px_100px]"
            style={{ 
              opacity: 0.3 + Math.sin(neonPulse * 0.1) * 0.1,
              transform: `translate(${Math.sin(cyberFlow * 0.1) * 2}px, ${Math.cos(cyberFlow * 0.1) * 2}px)`
            }}
          />
        </div>

        {/* Falling cherry blossoms */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                transform: `translateY(${(cherryBlossom + i * 10) % 120}vh) translateX(${Math.sin(cyberFlow * 0.02 + i) * 50}px) rotate(${(cherryBlossom + i * 30) % 360}deg)`,
                animationDuration: `${8 + Math.random() * 6}s`,
                opacity: 0.6 + Math.random() * 0.4,
                filter: 'drop-shadow(0 2px 4px rgba(255, 0, 255, 0.3))'
              }}
            >
              {['🌸', '🌺', '💮'][Math.floor(Math.random() * 3)]}
            </div>
          ))}
        </div>

        {/* Floating neon elements */}
        <div className="absolute top-20 left-10 animate-pulse" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(neonPulse * 0.1) * 20}px) rotate(${cyberFlow * 2}deg)`,
          filter: 'drop-shadow(0 0 10px #ff00ff)'
        }}>
          <div className="text-4xl text-pink-400">🏮</div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(cyberFlow * 0.1) * 15}px) rotate(${neonPulse * 1.5}deg)`,
          filter: 'drop-shadow(0 0 10px #00ffff)'
        }}>
          <div className="text-3xl text-cyan-400">🗼</div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(cherryBlossom * 0.1) * 18}px) rotate(${cyberFlow}deg)`,
          filter: 'drop-shadow(0 0 10px #ff0080)'
        }}>
          <div className="text-3xl text-pink-300">⚡</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(neonPulse * 0.02) * 15}px) rotate(${cyberFlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 10px #ff00ff)'
        }}>
          <div className="text-3xl text-purple-400">🌸</div>
        </div>

        {/* Neon light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-pink-400 via-transparent to-cyan-400 opacity-60 animate-pulse" style={{
          transform: `translateX(${Math.sin(neonPulse * 0.1) * 50}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-cyan-400 via-transparent to-pink-400 opacity-60 animate-pulse" style={{
          transform: `translateX(${Math.cos(cyberFlow * 0.1) * 50}px)`,
          filter: 'blur(2px)'
        }}></div>

        {/* Digital rain effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 text-xs font-mono opacity-70"
              style={{
                left: `${i * 4}%`,
                top: `-20px`,
                transform: `translateY(${(cyberFlow + i * 10) % 120}vh)`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {Array.from({ length: 15 }, (_, j) => (
                <div key={j} className="mb-1">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-4" style={{
              textShadow: '0 4px 8px rgba(255, 0, 255, 0.3)',
              filter: `drop-shadow(0 0 10px rgba(255, 0, 255, ${0.3 + Math.sin(neonPulse * 0.02) * 0.2}))`
            }}>
              Neon Tokyo
            </h1>
            <p className="text-xl md:text-2xl text-pink-300 font-mono" style={{
              textShadow: '0 2px 4px rgba(255, 0, 255, 0.2)'
            }}>
              Where digital dreams meet Japanese innovation
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(255, 0, 255, 0.4)'
            }}>
              Explore Digital
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(0, 255, 255, 0.4)'
            }}>
              View Projects
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-12" style={{
            textShadow: '0 2px 4px rgba(255, 0, 255, 0.3)'
          }}>
            Digital Innovation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-900/80 to-pink-900/80 rounded-xl shadow-lg backdrop-blur-sm border border-pink-500/50" style={{
                transform: `rotate(${Math.sin(neonPulse * 0.02 + index) * 1}deg)`,
                boxShadow: `0 8px 25px rgba(255, 0, 255, 0.3)`
              }}>
                <div className="text-5xl mb-4" style={{
                  filter: `drop-shadow(0 0 10px rgba(255, 0, 255, ${0.4 + Math.sin(cyberFlow * 0.02) * 0.2}))`
                }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-pink-300 mb-2">{feature.title}</h3>
                <p className="text-pink-200 font-mono">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-800/60 to-pink-800/60 rounded-xl shadow-lg backdrop-blur-sm border border-pink-400/50" style={{
                transform: `scale(${1 + Math.sin(cyberFlow * 0.02 + index) * 0.05})`,
                boxShadow: `0 8px 25px rgba(255, 0, 255, 0.4)`
              }}>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-2" style={{
                  textShadow: '0 2px 4px rgba(255, 0, 255, 0.3)'
                }}>
                  {stat.value}
                </div>
                <div className="text-pink-200 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-12" style={{
            textShadow: '0 2px 4px rgba(255, 0, 255, 0.3)'
          }}>
            Digital Pioneers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-purple-900/80 to-pink-900/80 rounded-xl shadow-lg backdrop-blur-sm border border-pink-500/50" style={{
                transform: `rotate(${Math.sin(cherryBlossom * 0.02 + index) * 0.5}deg)`,
                boxShadow: `0 8px 25px rgba(255, 0, 255, 0.3)`
              }}>
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                <p className="text-pink-200 font-mono italic mb-4">"{testimonial.text}"</p>
                <div className="text-center">
                  <div className="font-bold text-pink-300">{testimonial.name}</div>
                  <div className="text-pink-200 font-mono">{testimonial.role}</div>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-pink-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-12" style={{
            textShadow: '0 2px 4px rgba(255, 0, 255, 0.3)'
          }}>
            Cyber Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-800/60 to-pink-800/60 rounded-xl shadow-lg backdrop-blur-sm border border-pink-400/50 hover:from-purple-700/80 hover:to-pink-700/80 transition-all duration-300" style={{
                transform: `scale(${1 + Math.sin(neonPulse * 0.02 + index) * 0.02})`,
                boxShadow: `0 8px 25px rgba(255, 0, 255, 0.4)`
              }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-pink-300 mb-2">{service.title}</h3>
                <p className="text-pink-200 font-mono text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="p-12 bg-gradient-to-br from-purple-900/80 to-pink-900/80 rounded-2xl shadow-2xl backdrop-blur-sm border border-pink-500/50" style={{
            boxShadow: '0 15px 35px rgba(255, 0, 255, 0.4)'
          }}>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-6" style={{
              textShadow: '0 2px 4px rgba(255, 0, 255, 0.3)'
            }}>
              Join the Digital Revolution
            </h2>
            <p className="text-xl text-pink-200 font-mono mb-8">
              Experience the perfect blend of Japanese aesthetics and cutting-edge technology
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xl font-bold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 8px 25px rgba(255, 0, 255, 0.5)'
            }}>
              Begin Your Journey
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <span className="text-2xl">🏮</span>
            <span className="text-xl font-mono">Neon Tokyo Digital</span>
            <span className="text-2xl">🗼</span>
          </div>
          <p className="text-pink-200 font-mono">
            Crafting digital experiences with Japanese precision and cyber innovation
          </p>
        </div>
      </footer>
    </div>
  );
} 