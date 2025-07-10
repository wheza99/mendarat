import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '⚙️',
    title: 'Industrial Power',
    description: 'Kekuatan industri yang tak tertandingi',
    color: 'from-amber-400 to-orange-500'
  },
  {
    icon: '🔧',
    title: 'Mechanical Precision',
    description: 'Presisi mekanis yang sempurna',
    color: 'from-gray-400 to-slate-500'
  },
  {
    icon: '🚂',
    title: 'Steam Engine',
    description: 'Mesin uap yang revolusioner',
    color: 'from-copper-400 to-amber-500'
  },
  {
    icon: '⚡',
    title: 'Electric Power',
    description: 'Kekuatan listrik yang canggih',
    color: 'from-yellow-400 to-orange-500'
  }
];

const testimonials = [
  {
    name: 'Captain Steam',
    role: 'Industrial Engineer',
    avatar: '⚙️',
    text: 'Teknologi steampunk yang benar-benar mengagumkan!',
    rating: 5
  },
  {
    name: 'Gear Master',
    role: 'Mechanical Expert',
    avatar: '🔧',
    text: 'Presisi dan detail yang luar biasa.',
    rating: 5
  },
  {
    name: 'Steam Pioneer',
    role: 'Industrial Designer',
    avatar: '🚂',
    text: 'Membawa era industri ke level berikutnya.',
    rating: 5
  }
];

const stats = [
  { value: '1000+', label: 'Gears' },
  { value: '500HP', label: 'Power' },
  { value: '∞', label: 'Innovation' },
  { value: '24/7', label: 'Steam' }
];

const benefits = [
  { icon: '⚙️', title: 'Industrial', desc: 'Kekuatan industri' },
  { icon: '🔧', title: 'Mechanical', desc: 'Presisi mekanis' },
  { icon: '🚂', title: 'Steam', desc: 'Teknologi uap' },
  { icon: '⚡', title: 'Electric', desc: 'Kekuatan listrik' }
];

export default function HomePageTheme138() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isSteaming, setIsSteaming] = useState(false);
  const [gearRotation, setGearRotation] = useState(0);

  useEffect(() => {
    // Steam animation
    const steamInterval = setInterval(() => {
      setIsSteaming(prev => !prev);
    }, 2000);

    // Gear rotation animation
    const gearInterval = setInterval(() => {
      setGearRotation(prev => (prev + 1) % 360);
    }, 100);

    return () => {
      clearInterval(steamInterval);
      clearInterval(gearInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 font-mono relative overflow-hidden">
      {/* Industrial Texture Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(139, 69, 19, 0.05) 50%, transparent 52%)
          `,
          backgroundSize: '200px 200px, 150px 150px, 100px 100px'
        }}></div>
      </div>

      {/* Industrial Lines */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
      <div className="fixed top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-copper-400 to-transparent animate-pulse"></div>
      <div className="fixed top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse"></div>

      {/* Floating Industrial Elements */}
      <div className="fixed top-20 left-10 text-amber-400 animate-bounce" style={{ 
        textShadow: '0 0 10px #f59e0b',
        transform: `rotate(${gearRotation}deg)`
      }}>
        <div className="text-3xl">⚙️</div>
      </div>
      <div className="fixed top-40 right-20 text-copper-400 animate-pulse" style={{ 
        textShadow: '0 0 10px #b87333',
        transform: `rotate(${-gearRotation * 0.5}deg)`
      }}>
        <div className="text-2xl">🔧</div>
      </div>
      <div className="fixed bottom-40 left-20 text-yellow-400 animate-spin" style={{ 
        textShadow: '0 0 10px #eab308',
        transform: `rotate(${gearRotation * 0.3}deg)`
      }}>
        <div className="text-2xl">🚂</div>
      </div>

      {/* Steam Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to bottom, transparent ${gearRotation}%, rgba(139, 69, 19, 0.1) ${gearRotation}%, transparent ${gearRotation + 2}%)`,
          height: '2px'
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className={`mb-8 ${isSteaming ? 'animate-pulse' : ''}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4" style={{ 
              textShadow: '0 0 20px #f59e0b',
              filter: `hue-rotate(${gearRotation * 0.1}deg)`
            }}>
              <span className="text-amber-400">STEAMPUNK</span>
              <br />
              <span className="text-orange-400">INDUSTRIAL</span>
            </h1>
            <div className="text-2xl text-copper-400 font-medium mb-4" style={{ 
              textShadow: '0 0 10px #b87333'
            }}>
              Power of Industry ⚙️
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Platform digital yang <span className="text-amber-400 font-semibold" style={{ textShadow: '0 0 5px #f59e0b' }}>menggabungkan kekuatan industri</span> dan <span className="text-orange-400 font-semibold" style={{ textShadow: '0 0 5px #ea580c' }}>inovasi steampunk</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-none hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ 
              boxShadow: '0 0 20px #f59e0b',
              border: '2px solid #b87333'
            }}>
              ⚙️ Launch Industry
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-copper-400 text-copper-400 font-bold rounded-none hover:bg-copper-400 hover:text-white transition-all duration-300" style={{ 
              boxShadow: '0 0 10px #b87333'
            }}>
              🔧 Learn More
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
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-none p-6 border-2 border-amber-400 shadow-lg hover:shadow-amber-400/50 transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 0 15px rgba(245, 158, 11, 0.3)',
                  borderColor: '#b87333'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 group-hover:text-orange-400 transition-colors" style={{ textShadow: '0 0 10px #f59e0b' }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{ 
            textShadow: '0 0 15px #f59e0b'
          }}>
            Industrial <span className="text-orange-400" style={{ textShadow: '0 0 15px #ea580c' }}>Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-none p-8 border-2 border-copper-400 shadow-lg hover:shadow-copper-400/50 transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 0 20px rgba(184, 115, 51, 0.3)',
                  borderColor: '#b87333'
                }}>
                  <div className="text-4xl mb-4 group-hover:animate-bounce" style={{ 
                    textShadow: '0 0 15px #b87333',
                    transform: `rotate(${gearRotation * (index + 1) * 0.1}deg)`
                  }}>{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-copper-400 group-hover:text-amber-400 transition-colors" style={{ textShadow: '0 0 5px #b87333' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{ 
            textShadow: '0 0 15px #ea580c'
          }}>
            <span className="text-orange-400" style={{ textShadow: '0 0 15px #ea580c' }}>Steam</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-none p-6 border-2 border-yellow-400 shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 0 20px rgba(234, 184, 8, 0.3)',
                  borderColor: '#eab308'
                }}>
                  <div className="text-4xl mb-4 group-hover:animate-pulse" style={{ 
                    textShadow: '0 0 15px #eab308',
                    transform: `rotate(${gearRotation * (index + 1) * 0.05}deg)`
                  }}>{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-yellow-400" style={{ textShadow: '0 0 5px #eab308' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{ 
            textShadow: '0 0 15px #f59e0b'
          }}>
            What Our <span className="text-amber-400" style={{ textShadow: '0 0 15px #f59e0b' }}>Industrial</span> Community Says
          </h2>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-none p-8 border-2 border-amber-400 shadow-lg" style={{ 
            boxShadow: '0 0 25px rgba(245, 158, 11, 0.3)',
            borderColor: '#b87333'
          }}>
            <div className="text-center">
              <div className="text-6xl mb-6 animate-bounce" style={{ 
                textShadow: '0 0 20px #f59e0b',
                transform: `rotate(${gearRotation * 0.1}deg)`
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-xl text-gray-200 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-4">
                <div className="text-lg font-bold text-amber-400" style={{ textShadow: '0 0 5px #f59e0b' }}>
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400" style={{ textShadow: '0 0 5px #eab308' }}>★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 transition-all ${
                      index === currentTestimonial 
                        ? 'bg-amber-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    style={index === currentTestimonial ? { 
                      boxShadow: '0 0 10px #f59e0b'
                    } : {}}
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
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-none p-12 border-2 border-copper-400 shadow-lg relative overflow-hidden" style={{ 
            boxShadow: '0 0 30px rgba(184, 115, 51, 0.4)',
            borderColor: '#b87333'
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ 
                textShadow: '0 0 20px #f59e0b'
              }}>
                Ready to <span className="text-orange-400" style={{ textShadow: '0 0 20px #ea580c' }}>Industrialize</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan revolusi industri dan jadilah bagian dari era steampunk
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-none hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg" style={{ 
                boxShadow: '0 0 30px rgba(245, 158, 11, 0.6)',
                border: '2px solid #b87333'
              }}>
                ⚙️ Launch Your Industry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-none flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300" style={{ 
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)',
          border: '2px solid #b87333'
        }}>
          ⚙️
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes steam {
          0% { opacity: 1; }
          50% { opacity: 0.8; }
          100% { opacity: 1; }
        }
        
        .animate-steam {
          animation: steam 2s ease-in-out infinite;
        }
        
        @keyframes gear-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-gear-rotate {
          animation: gear-rotate 3s linear infinite;
        }
      `}</style>
    </div>
  );
} 