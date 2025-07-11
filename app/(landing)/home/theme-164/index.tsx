import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🦁',
    title: 'Wild Lions',
    description: 'Majestic kings of the jungle',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: '🐘',
    title: 'Elephant Herds',
    description: 'Gentle giants of the savanna',
    color: 'from-gray-600 to-gray-800'
  },
  {
    icon: '🦒',
    title: 'Giraffe Heights',
    description: 'Towering above the trees',
    color: 'from-yellow-500 to-orange-400'
  },
  {
    icon: '🌿',
    title: 'Dense Jungle',
    description: 'Lush green wilderness',
    color: 'from-green-500 to-emerald-500'
  }
];

const testimonials = [
  {
    name: 'Safari Guide',
    role: 'Wildlife Expert',
    avatar: '🦁',
    text: 'Every day brings new discoveries in the wild. The animals never cease to amaze us.',
    rating: 5
  },
  {
    name: 'Nature Photographer',
    role: 'Wildlife Documentarian',
    avatar: '📸',
    text: 'Capturing the raw beauty of nature in its purest form. Every moment is precious.',
    rating: 5
  },
  {
    name: 'Conservationist',
    role: 'Wildlife Protector',
    avatar: '🌿',
    text: 'Protecting these magnificent creatures and their habitats is our sacred duty.',
    rating: 5
  }
];

const stats = [
  { value: '100+', label: 'Wild Species' },
  { value: '∞', label: 'Adventures' },
  { value: '100%', label: 'Wild Nature' },
  { value: '24/7', label: 'Safari' }
];

const services = [
  { icon: '🚙', title: 'Safari Tours', desc: 'Wildlife expeditions' },
  { icon: '🏕️', title: 'Bush Camping', desc: 'Wilderness stays' },
  { icon: '📸', title: 'Photo Tours', desc: 'Wildlife photography' },
  { icon: '🌍', title: 'Conservation', desc: 'Wildlife protection' }
];

export default function HomePageTheme164() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [jungleGrowth, setJungleGrowth] = useState(0);
  const [animalMovement, setAnimalMovement] = useState(0);
  const [safariGlow, setSafariGlow] = useState(0);

  useEffect(() => {
    // Jungle growth animation
    const jungleInterval = setInterval(() => {
      setJungleGrowth(prev => (prev + 1) % 100);
    }, 100);

    // Animal movement animation
    const animalInterval = setInterval(() => {
      setAnimalMovement(prev => (prev + 1) % 100);
    }, 150);

    // Safari glow effect
    const glowInterval = setInterval(() => {
      setSafariGlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(jungleInterval);
      clearInterval(animalInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-emerald-200 to-green-300 font-serif relative overflow-hidden">
      {/* Jungle Safari Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-green-100/80 via-emerald-200/60 to-green-300/80">
        {/* Jungle canopy */}
        <div className="absolute top-0 left-0 w-full h-96">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
            {/* Tree trunks */}
            <rect x="100" y="200" width="40" height="200" fill="#8B4513" />
            <rect x="300" y="180" width="35" height="220" fill="#A0522D" />
            <rect x="500" y="160" width="45" height="240" fill="#8B4513" />
            <rect x="700" y="190" width="30" height="210" fill="#A0522D" />
            <rect x="900" y="170" width="40" height="230" fill="#8B4513" />
            
            {/* Jungle foliage */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <ellipse
                  cx={120 + i * 80}
                  cy={180 + Math.sin(jungleGrowth * 0.02 + i) * 10}
                  rx={60 + Math.sin(safariGlow * 0.02 + i) * 15}
                  ry={40 + Math.cos(animalMovement * 0.02 + i) * 10}
                  fill="#228B22"
                  opacity="0.8"
                />
                <ellipse
                  cx={320 + i * 70}
                  cy={160 + Math.cos(jungleGrowth * 0.03 + i) * 12}
                  rx={55 + Math.cos(safariGlow * 0.03 + i) * 18}
                  ry={35 + Math.sin(animalMovement * 0.03 + i) * 12}
                  fill="#32CD32"
                  opacity="0.7"
                />
                <ellipse
                  cx={520 + i * 75}
                  cy={140 + Math.sin(jungleGrowth * 0.025 + i) * 8}
                  rx={65 + Math.sin(safariGlow * 0.025 + i) * 20}
                  ry={45 + Math.cos(animalMovement * 0.025 + i) * 15}
                  fill="#228B22"
                  opacity="0.8"
                />
                <ellipse
                  cx={720 + i * 65}
                  cy={170 + Math.cos(jungleGrowth * 0.035 + i) * 15}
                  rx={50 + Math.cos(safariGlow * 0.035 + i) * 12}
                  ry={30 + Math.sin(animalMovement * 0.035 + i) * 10}
                  fill="#32CD32"
                  opacity="0.7"
                />
                <ellipse
                  cx={920 + i * 85}
                  cy={150 + Math.sin(jungleGrowth * 0.04 + i) * 11}
                  rx={70 + Math.sin(safariGlow * 0.04 + i) * 25}
                  ry={50 + Math.cos(animalMovement * 0.04 + i) * 18}
                  fill="#228B22"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Vines and creepers */}
            {Array.from({ length: 8 }, (_, i) => (
              <path
                key={i}
                d={`M${150 + i * 120} 400 Q${150 + i * 120 + Math.sin(jungleGrowth * 0.02 + i) * 30} ${350 - Math.cos(safariGlow * 0.02 + i) * 50} ${150 + i * 120 + Math.sin(jungleGrowth * 0.02 + i) * 20} 300`}
                stroke="#228B22"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
            ))}
          </svg>
        </div>

        {/* Animated wildlife particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 35 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-green-300/60"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                top: `-${Math.random() * 20}px`,
                transform: `translateY(${Math.sin(jungleGrowth * 0.1 + i) * 50 - 100}vh) translateX(${Math.sin(safariGlow * 0.1 + i) * 30}px)`,
                animationDuration: `${5 + Math.random() * 3}s`,
                opacity: 0.4 + Math.random() * 0.4,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* Floating wildlife elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(jungleGrowth * 0.02) * 25}px) rotate(${safariGlow * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.8))'
        }}>
          <div className="text-4xl">🦁</div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(animalMovement * 0.02) * 20}px) rotate(${jungleGrowth * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))'
        }}>
          <div className="text-3xl">🐘</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(safariGlow * 0.02) * 18}px) rotate(${animalMovement * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.8))'
        }}>
          <div className="text-3xl">🦒</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(jungleGrowth * 0.02) * 15}px) rotate(${safariGlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.8))'
        }}>
          <div className="text-3xl">🌿</div>
        </div>

        {/* Safari light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-green-500 via-transparent to-emerald-500 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.sin(jungleGrowth * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-amber-500 via-transparent to-orange-500 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.cos(safariGlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>

        {/* Roaming animals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(animalMovement * 0.02 + i) * 50}px) translateX(${Math.cos(jungleGrowth * 0.02 + i) * 30}px)`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.6 + Math.random() * 0.4,
                filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.8))'
              }}
            >
              {['🦁', '🐘', '🦒', '🦛', '🦘', '🦏', '🦌', '🐃'][i % 8]}
            </div>
          ))}
        </div>

        {/* Floating safari elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(safariGlow * 0.02 + i) * 40}px) translateX(${Math.cos(animalMovement * 0.02 + i) * 25}px)`,
                animationDuration: `${4 + Math.random() * 2}s`,
                opacity: 0.5 + Math.random() * 0.3,
                filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))'
              }}
            >
              {['🌿', '🌴', '🌳', '🍃', '🌱', '🌲'][i % 6]}
            </div>
          ))}
        </div>

        {/* Safari sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(jungleGrowth * 0.02 + i) * 100}vh) translateX(${Math.sin(safariGlow * 0.02 + i) * 50}px)`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.6 + Math.random() * 0.4,
                boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)',
                animationDelay: `${i * 0.2}s`,
                animationIterationCount: 'infinite',
                animationName: 'safariSparkle'
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
                filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5))'
              }}>
                Jungle Safari Adventure
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Embark on an unforgettable journey through the wild. 
                Discover majestic creatures in their natural habitat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Safari
                </button>
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Book Tour
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-50/50 to-emerald-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Safari Features
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
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2" style={{
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
        <section className="py-16 px-4 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Safari Testimonials
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
              Safari Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Safari Adventure
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Experience the thrill of the wild and discover nature's most magnificent creatures.
            </p>
            <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Your Safari
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes safariSparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
} 