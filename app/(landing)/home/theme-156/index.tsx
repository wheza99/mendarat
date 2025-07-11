import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '⚙️',
    title: 'Brass Gears',
    description: 'Precision mechanical engineering',
    color: 'from-amber-600 to-yellow-600'
  },
  {
    icon: '🔧',
    title: 'Steam Power',
    description: 'Revolutionary energy systems',
    color: 'from-orange-600 to-red-600'
  },
  {
    icon: '🎩',
    title: 'Victorian Elegance',
    description: 'Timeless sophistication',
    color: 'from-gray-700 to-gray-800'
  },
  {
    icon: '💎',
    title: 'Copper Pipes',
    description: 'Industrial infrastructure',
    color: 'from-orange-500 to-amber-500'
  }
];

const testimonials = [
  {
    name: 'Lord Steamsworth',
    role: 'Industrial Engineer',
    avatar: '🎩',
    text: 'In the age of steam and brass, we forge the future with precision and elegance.',
    rating: 5
  },
  {
    name: 'Lady Gearheart',
    role: 'Mechanical Inventor',
    avatar: '👑',
    text: 'The finest craftsmanship meets cutting-edge innovation in our steam-powered world.',
    rating: 5
  },
  {
    name: 'Professor Cogsworth',
    role: 'Steam Engineer',
    avatar: '🔬',
    text: 'Where brass meets steam, we create marvels that stand the test of time.',
    rating: 5
  }
];

const stats = [
  { value: '1876', label: 'Victorian Era' },
  { value: '∞', label: 'Possibilities' },
  { value: '100%', label: 'Handcrafted' },
  { value: '24/7', label: 'Steam Powered' }
];

const services = [
  { icon: '🔨', title: 'Metalwork', desc: 'Brass craftsmanship' },
  { icon: '⚡', title: 'Steam Tech', desc: 'Power generation' },
  { icon: '📜', title: 'Blueprints', desc: 'Design schematics' },
  { icon: '🏭', title: 'Factories', desc: 'Industrial scale' }
];

export default function HomePageTheme156() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [gearRotation, setGearRotation] = useState(0);
  const [steamRise, setSteamRise] = useState(0);
  const [brassGlow, setBrassGlow] = useState(0);

  useEffect(() => {
    // Gear rotation animation
    const gearInterval = setInterval(() => {
      setGearRotation(prev => (prev + 1) % 360);
    }, 100);

    // Steam rising animation
    const steamInterval = setInterval(() => {
      setSteamRise(prev => (prev + 1) % 100);
    }, 150);

    // Brass glow effect
    const glowInterval = setInterval(() => {
      setBrassGlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(gearInterval);
      clearInterval(steamInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-orange-200 to-amber-800 font-serif relative overflow-hidden">
      {/* Steampunk Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-200/40 via-orange-300/50 to-amber-900/70">
        {/* Victorian wallpaper pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(139,69,19,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(160,82,45,0.1)_0%,transparent_50%)] bg-[length:100px_100px]"></div>
        </div>

        {/* Animated gears */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute text-6xl text-amber-600/60"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
                transform: `rotate(${gearRotation + i * 45}deg) scale(${0.8 + Math.sin(brassGlow * 0.02 + i) * 0.2})`,
                filter: 'drop-shadow(0 4px 8px rgba(139, 69, 19, 0.4))'
              }}
            >
              ⚙️
            </div>
          ))}
        </div>

        {/* Steam pipes and valves */}
        <div className="absolute bottom-0 left-0 w-full h-64">
          <svg className="w-full h-full" viewBox="0 0 1200 300" fill="none">
            {/* Main steam pipes */}
            <rect x="100" y="200" width="400" height="20" fill="#CD7F32" stroke="#8B4513" strokeWidth="2" />
            <rect x="600" y="180" width="300" height="20" fill="#CD7F32" stroke="#8B4513" strokeWidth="2" />
            <rect x="900" y="220" width="200" height="20" fill="#CD7F32" stroke="#8B4513" strokeWidth="2" />
            
            {/* Vertical pipes */}
            <rect x="120" y="150" width="20" height="70" fill="#CD7F32" stroke="#8B4513" strokeWidth="2" />
            <rect x="320" y="120" width="20" height="100" fill="#CD7F32" stroke="#8B4513" strokeWidth="2" />
            <rect x="720" y="140" width="20" height="60" fill="#CD7F32" stroke="#8B4513" strokeWidth="2" />
            <rect x="920" y="160" width="20" height="80" fill="#CD7F32" stroke="#8B4513" strokeWidth="2" />
            
            {/* Steam valves */}
            <circle cx="140" cy="140" r="15" fill="#B8860B" stroke="#8B4513" strokeWidth="3" />
            <circle cx="340" cy="110" r="15" fill="#B8860B" stroke="#8B4513" strokeWidth="3" />
            <circle cx="740" cy="130" r="15" fill="#B8860B" stroke="#8B4513" strokeWidth="3" />
            <circle cx="940" cy="150" r="15" fill="#B8860B" stroke="#8B4513" strokeWidth="3" />
            
            {/* Valve handles */}
            <line x1="140" y1="140" x2="140" y2="125" stroke="#8B4513" strokeWidth="3" />
            <line x1="340" y1="110" x2="340" y2="95" stroke="#8B4513" strokeWidth="3" />
            <line x1="740" y1="130" x2="740" y2="115" stroke="#8B4513" strokeWidth="3" />
            <line x1="940" y1="150" x2="940" y2="135" stroke="#8B4513" strokeWidth="3" />
          </svg>
        </div>

        {/* Rising steam */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/30 backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${8 + Math.random() * 20}px`,
                height: `${8 + Math.random() * 20}px`,
                bottom: `-${Math.random() * 20}px`,
                transform: `translateY(${Math.sin(steamRise * 0.1 + i) * 50 - 100}vh) translateX(${Math.sin(brassGlow * 0.1 + i) * 40}px)`,
                animationDuration: `${4 + Math.random() * 3}s`,
                opacity: 0.3 + Math.random() * 0.4,
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)'
              }}
            />
          ))}
        </div>

        {/* Floating steampunk elements */}
        <div className="absolute top-20 left-10 animate-pulse" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(gearRotation * 0.02) * 25}px) rotate(${brassGlow * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(205, 127, 50, 0.6))'
        }}>
          <div className="text-4xl">🔧</div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(steamRise * 0.02) * 20}px) rotate(${gearRotation * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(160, 82, 45, 0.6))'
        }}>
          <div className="text-3xl">🎩</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(brassGlow * 0.02) * 18}px) rotate(${steamRise * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(184, 134, 11, 0.6))'
        }}>
          <div className="text-3xl">💎</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(gearRotation * 0.02) * 15}px) rotate(${brassGlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(205, 127, 50, 0.6))'
        }}>
          <div className="text-3xl">⚙️</div>
        </div>

        {/* Brass light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-amber-400 via-transparent to-orange-400 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.sin(gearRotation * 0.02) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-orange-400 via-transparent to-amber-400 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.cos(steamRise * 0.02) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>

        {/* Victorian ornamentation */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="text-2xl text-amber-700/60" style={{
            transform: `rotate(${brassGlow * 0.1}deg)`,
            filter: 'drop-shadow(0 2px 4px rgba(139, 69, 19, 0.3))'
          }}>
            ✧ ❦ ✧
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-amber-800 mb-4" style={{
              textShadow: '0 4px 8px rgba(139, 69, 19, 0.3)',
              filter: `drop-shadow(0 0 10px rgba(205, 127, 50, ${0.3 + Math.sin(brassGlow * 0.02) * 0.2}))`
            }}>
              Steam & Brass
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 font-serif italic" style={{
              textShadow: '0 2px 4px rgba(139, 69, 19, 0.2)'
            }}>
              Where Victorian elegance meets industrial innovation
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(205, 127, 50, 0.4)'
            }}>
              Explore Workshop
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold rounded-lg shadow-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(139, 69, 19, 0.4)'
            }}>
              View Blueprints
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-amber-800 mb-12" style={{
            textShadow: '0 2px 4px rgba(139, 69, 19, 0.3)'
          }}>
            Masterful Craftsmanship
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-100/80 to-orange-200/80 rounded-xl shadow-lg backdrop-blur-sm border border-amber-300/50" style={{
                transform: `rotate(${Math.sin(gearRotation * 0.02 + index) * 1}deg)`,
                boxShadow: `0 8px 25px rgba(205, 127, 50, 0.3)`
              }}>
                <div className="text-5xl mb-4" style={{
                  filter: `drop-shadow(0 0 10px rgba(205, 127, 50, ${0.4 + Math.sin(brassGlow * 0.02) * 0.2}))`
                }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">{feature.title}</h3>
                <p className="text-amber-700 font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-200/60 to-orange-300/60 rounded-xl shadow-lg backdrop-blur-sm border border-amber-400/50" style={{
                transform: `scale(${1 + Math.sin(brassGlow * 0.02 + index) * 0.05})`,
                boxShadow: `0 8px 25px rgba(205, 127, 50, 0.4)`
              }}>
                <div className="text-3xl font-bold text-amber-800 mb-2" style={{
                  textShadow: '0 2px 4px rgba(139, 69, 19, 0.3)'
                }}>
                  {stat.value}
                </div>
                <div className="text-amber-700 font-serif">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-amber-800 mb-12" style={{
            textShadow: '0 2px 4px rgba(139, 69, 19, 0.3)'
          }}>
            Distinguished Patrons
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-amber-100/80 to-orange-200/80 rounded-xl shadow-lg backdrop-blur-sm border border-amber-300/50" style={{
                transform: `rotate(${Math.sin(steamRise * 0.02 + index) * 0.5}deg)`,
                boxShadow: `0 8px 25px rgba(205, 127, 50, 0.3)`
              }}>
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                <p className="text-amber-700 font-serif italic mb-4">"{testimonial.text}"</p>
                <div className="text-center">
                  <div className="font-bold text-amber-800">{testimonial.name}</div>
                  <div className="text-amber-700 font-serif">{testimonial.role}</div>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-amber-500">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-amber-800 mb-12" style={{
            textShadow: '0 2px 4px rgba(139, 69, 19, 0.3)'
          }}>
            Industrial Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-200/60 to-orange-300/60 rounded-xl shadow-lg backdrop-blur-sm border border-amber-400/50 hover:from-amber-300/80 hover:to-orange-400/80 transition-all duration-300" style={{
                transform: `scale(${1 + Math.sin(gearRotation * 0.02 + index) * 0.02})`,
                boxShadow: `0 8px 25px rgba(205, 127, 50, 0.4)`
              }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-amber-800 mb-2">{service.title}</h3>
                <p className="text-amber-700 font-serif text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="p-12 bg-gradient-to-br from-amber-200/80 to-orange-300/80 rounded-2xl shadow-2xl backdrop-blur-sm border border-amber-400/50" style={{
            boxShadow: '0 15px 35px rgba(205, 127, 50, 0.4)'
          }}>
            <h2 className="text-4xl font-bold text-amber-800 mb-6" style={{
              textShadow: '0 2px 4px rgba(139, 69, 19, 0.3)'
            }}>
              Join the Industrial Revolution
            </h2>
            <p className="text-xl text-amber-700 font-serif mb-8">
              Experience the perfect blend of Victorian elegance and steam-powered innovation
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xl font-bold rounded-lg shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 8px 25px rgba(205, 127, 50, 0.5)'
            }}>
              Begin Your Journey
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-amber-800 to-orange-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <span className="text-2xl">⚙️</span>
            <span className="text-xl font-serif">Steam & Brass Industries</span>
            <span className="text-2xl">🔧</span>
          </div>
          <p className="text-amber-200 font-serif">
            Crafting the future with Victorian precision and steam-powered innovation
          </p>
        </div>
      </footer>
    </div>
  );
} 