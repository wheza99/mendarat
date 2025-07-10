import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '💼',
    title: 'Professional Excellence',
    description: 'Standar profesional yang tinggi',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    icon: '📊',
    title: 'Data-Driven Insights',
    description: 'Wawasan berbasis data yang akurat',
    color: 'from-indigo-600 to-blue-700'
  },
  {
    icon: '🤝',
    title: 'Strategic Partnership',
    description: 'Kemitraan strategis yang handal',
    color: 'from-slate-600 to-gray-700'
  },
  {
    icon: '🎯',
    title: 'Results-Oriented',
    description: 'Berorientasi pada hasil yang terukur',
    color: 'from-gray-600 to-slate-700'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    avatar: '👔',
    text: 'Layanan yang sangat profesional dan hasil yang memuaskan.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Director, Global Solutions',
    avatar: '💼',
    text: 'Tim yang kompeten dan solusi yang tepat sasaran.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Operations, InnovateCo',
    avatar: '📊',
    text: 'Mengubah cara kami menjalankan bisnis secara fundamental.',
    rating: 5
  }
];

const stats = [
  { value: '95%', label: 'Client Satisfaction' },
  { value: '500+', label: 'Projects Completed' },
  { value: '24/7', label: 'Support Available' },
  { value: '10+', label: 'Years Experience' }
];

const benefits = [
  { icon: '💼', title: 'Professional', desc: 'Standar tinggi' },
  { icon: '📊', title: 'Analytics', desc: 'Data-driven' },
  { icon: '🤝', title: 'Partnership', desc: 'Kolaborasi' },
  { icon: '🎯', title: 'Results', desc: 'Terukur' }
];

export default function HomePageTheme143() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [professionalFade, setProfessionalFade] = useState(0);
  const [corporateFlow, setCorporateFlow] = useState(0);
  const [businessPulse, setBusinessPulse] = useState(0);

  useEffect(() => {
    // Professional fade animation
    const fadeInterval = setInterval(() => {
      setProfessionalFade(prev => (prev + 1) % 100);
    }, 300);

    // Corporate flow animation
    const flowInterval = setInterval(() => {
      setCorporateFlow(prev => (prev + 1) % 360);
    }, 200);

    // Business pulse animation
    const pulseInterval = setInterval(() => {
      setBusinessPulse(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(fadeInterval);
      clearInterval(flowInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 font-sans relative overflow-hidden">
      {/* Corporate Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.03) 50%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(99, 102, 241, 0.03) 50%, transparent 52%),
            radial-gradient(circle at ${professionalFade}% ${corporateFlow}%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)
          `,
          backgroundSize: '200px 200px, 300px 300px, 400px 400px'
        }}></div>
      </div>

      {/* Corporate Grid Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"></div>
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-30"></div>
      <div className="fixed top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-30"></div>
      <div className="fixed top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-300 to-transparent opacity-30"></div>

      {/* Professional Elements */}
      <div className="fixed top-20 left-10 text-blue-400 opacity-40" style={{ 
        transform: `translateY(${Math.sin(professionalFade * 0.1) * 5}px)`
      }}>
        <div className="text-2xl">💼</div>
      </div>
      <div className="fixed top-40 right-20 text-indigo-400 opacity-30" style={{ 
        transform: `translateY(${Math.cos(corporateFlow * 0.1) * 3}px)`
      }}>
        <div className="text-xl">📊</div>
      </div>
      <div className="fixed bottom-40 left-20 text-slate-400 opacity-35" style={{ 
        transform: `translateY(${Math.sin(businessPulse * 0.1) * 4}px)`
      }}>
        <div className="text-xl">🤝</div>
      </div>

      {/* Professional Bars */}
      <div className="fixed top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-blue-400 to-transparent opacity-20" style={{
        transform: `translateY(${Math.sin(corporateFlow * 0.1) * 10}px)`
      }}></div>
      <div className="fixed top-1/3 right-0 w-1 h-24 bg-gradient-to-b from-indigo-400 to-transparent opacity-20" style={{
        transform: `translateY(${Math.cos(professionalFade * 0.1) * 8}px)`
      }}></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight" style={{ 
              opacity: 0.95 + Math.sin(professionalFade * 0.1) * 0.05
            }}>
              <span className="text-blue-600">PROFESSIONAL</span>
              <br />
              <span className="text-slate-700">EXCELLENCE</span>
            </h1>
            <div className="text-lg text-slate-600 font-medium mb-6 tracking-wide" style={{ 
              opacity: 0.9
            }}>
              Delivering Business Solutions with Precision 📊
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{ 
            opacity: 0.9 + Math.sin(corporateFlow * 0.1) * 0.05
          }}>
            Solusi bisnis yang <span className="text-blue-600 font-semibold">menggabungkan keahlian profesional</span> dan <span className="text-indigo-600 font-semibold">strategi yang terukur</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-blue-600 text-white font-semibold tracking-wide rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ 
              boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.3)'
            }}>
              💼 Get Started
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-slate-300 text-slate-700 font-semibold tracking-wide rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300">
              📊 Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors" style={{ 
                    opacity: 0.95 + Math.sin(professionalFade * 0.1 + index) * 0.05
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800" style={{ 
            opacity: 0.95 + Math.sin(corporateFlow * 0.05) * 0.05
          }}>
            Professional <span className="text-blue-600">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl mb-6 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(professionalFade * 0.1 + index) * 0.1
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-800 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800" style={{ 
            opacity: 0.95 + Math.sin(businessPulse * 0.05) * 0.05
          }}>
            <span className="text-indigo-600">Corporate</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-2xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(corporateFlow * 0.1 + index) * 0.1
                  }}>{benefit.icon}</div>
                  <h3 className="text-base font-semibold mb-2 text-slate-800">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800" style={{ 
            opacity: 0.95 + Math.sin(professionalFade * 0.05) * 0.05
          }}>
            What Our <span className="text-blue-600">Clients</span> Say
          </h2>
          
          <div className="bg-white rounded-lg p-10 border border-slate-200 shadow-sm" style={{ 
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div className="text-center">
              <div className="text-5xl mb-8 animate-pulse" style={{ 
                opacity: 0.8 + Math.sin(corporateFlow * 0.1) * 0.1
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-slate-700 mb-8 italic leading-relaxed font-medium" style={{ 
                opacity: 0.9 + Math.sin(professionalFade * 0.1) * 0.05
              }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-semibold text-slate-800">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-slate-600 text-sm font-medium">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400" style={{ opacity: 0.8 }}>★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'bg-blue-600' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    style={{ opacity: index === currentTestimonial ? 0.9 : 0.6 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-12 border border-blue-200 shadow-sm" style={{ 
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-800" style={{ 
                opacity: 0.95 + Math.sin(businessPulse * 0.1) * 0.05
              }}>
                Ready to <span className="text-blue-600">Partner</span>?
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed" style={{ 
                opacity: 0.9 + Math.sin(corporateFlow * 0.1) * 0.05
              }}>
                Bergabunglah dengan kami untuk mencapai kesuksesan bisnis yang sustainable dan terukur
              </p>
              <button className="px-12 py-6 bg-blue-600 text-white font-semibold tracking-wide rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg" style={{ 
                boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.3)'
              }}>
                💼 Start Partnership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300" style={{ 
          boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.3)'
        }}>
          💼
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes professional-fade {
          0% { opacity: 0.9; }
          50% { opacity: 1; }
          100% { opacity: 0.9; }
        }
        
        @keyframes corporate-flow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes business-pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        .animate-professional-fade {
          animation: professional-fade 4s ease-in-out infinite;
        }
        
        .animate-corporate-flow {
          animation: corporate-flow 3s ease-in-out infinite;
        }
        
        .animate-business-pulse {
          animation: business-pulse 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 