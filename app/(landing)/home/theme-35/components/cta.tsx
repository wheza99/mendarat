'use client';

import { useState } from 'react';

const actionCards = [
  {
    title: 'Join Community',
    subtitle: 'Bergabung dengan 10K+ eco-warriors',
    description: 'Dapatkan akses ke exclusive content, webinar, dan networking dengan changemakers lainnya',
    icon: '👥',
    color: 'from-green-500 to-emerald-600',
    benefits: ['Weekly eco-challenges', 'Expert mentorship', 'Green networking']
  },
  {
    title: 'Start Project',
    subtitle: 'Wujudkan ide sustainability-mu',
    description: 'Dapatkan funding, guidance, dan support penuh untuk project green innovation yang impactful',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-600',
    benefits: ['Up to $50K funding', 'Technical support', 'Market validation']
  },
  {
    title: 'Become Partner',
    subtitle: 'Scale impact bersama kami',
    description: 'Partnership strategis untuk enterprise yang ingin mengimplementasikan sustainable solutions',
    icon: '🤝',
    color: 'from-purple-500 to-indigo-600',
    benefits: ['Custom solutions', 'Enterprise support', 'ROI guarantee']
  }
];

export default function CTA() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-emerald-100 relative overflow-hidden">
      {/* Background organic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-green-300/20 to-emerald-400/10 rounded-full blur-3xl animate-float-organic" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-tl from-lime-300/15 to-green-400/10 rounded-full blur-3xl animate-float-organic" style={{ animationDelay: '3s' }} />
        
        {/* Floating nature elements */}
        <div className="absolute top-10 right-10 text-7xl text-green-200/40 animate-sway">🌿</div>
        <div className="absolute bottom-10 left-10 text-6xl text-emerald-200/50 animate-float-organic">🌱</div>
        <div className="absolute top-1/3 left-10 text-5xl text-lime-200/60 animate-sway" style={{ animationDelay: '2s' }}>🍃</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Saatnya Bertindak untuk
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              Masa Depan Hijau
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-green-700 max-w-4xl mx-auto leading-relaxed">
            Jangan biarkan momentum berlalu. Bergabunglah dengan gerakan global 
            yang mengubah cara dunia memandang sustainability.
          </p>
        </div>

        {/* Action cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {actionCards.map((card, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 ${
                selectedCard === index ? 'border-green-300 scale-105' : 'border-green-200/50 hover:border-green-300'
              }`}
              onClick={() => setSelectedCard(selectedCard === index ? null : index)}
            >
              {/* Gradient background on selection */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 ${selectedCard === index ? 'opacity-10' : 'group-hover:opacity-5'} transition-opacity duration-500 rounded-3xl`} />
              
              {/* Icon with animation */}
              <div className="relative mb-6 text-center">
                <div className={`text-6xl transform transition-all duration-500 ${selectedCard === index ? 'scale-125 rotate-12' : 'group-hover:scale-110'}`}>
                  {card.icon}
                </div>
                {selectedCard === index && (
                  <div className="absolute -inset-6 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full opacity-30 animate-ping" />
                )}
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-2 group-hover:text-emerald-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-green-600 font-semibold mb-4">
                  {card.subtitle}
                </p>
                <p className="text-green-700 leading-relaxed mb-6">
                  {card.description}
                </p>
                
                {/* Benefits list */}
                <div className={`transition-all duration-500 overflow-hidden ${selectedCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="space-y-2 text-sm text-green-600">
                    {card.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center justify-center gap-2">
                        <span className="text-green-500">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action button */}
              <div className="mt-6 text-center">
                <button className={`px-6 py-3 bg-gradient-to-r ${card.color} text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  {selectedCard === index ? 'Get Started Now' : 'Learn More'}
                </button>
              </div>

              {/* Selection indicator */}
              <div className={`absolute top-4 right-4 w-4 h-4 rounded-full transition-all duration-300 ${
                selectedCard === index ? 'bg-green-400 scale-100' : 'bg-green-200 scale-0'
              }`} />
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="text-center mb-12">
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 rounded-3xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Dapatkan Update Terbaru
            </h3>
            <p className="text-green-100 text-lg mb-6">
              Weekly insights, success stories, dan exclusive opportunities langsung ke inbox-mu
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email address..."
                className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur text-white placeholder-green-100 focus:outline-none focus:border-white/60 transition-colors"
              />
              <button className="px-8 py-4 bg-white text-green-600 rounded-full font-bold hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-lg">
                Subscribe 🌱
              </button>
            </div>
            
            <p className="text-green-100 text-sm mt-4">
              * No spam, unsubscribe anytime. We respect your privacy 🛡️
            </p>
          </div>
        </div>

        {/* Urgency indicator */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-orange-100 border-2 border-orange-200 rounded-2xl">
            <div className="text-3xl animate-bounce">⏰</div>
            <div className="text-left">
              <h4 className="text-xl font-bold text-orange-800 mb-1">Limited Time Opportunity</h4>
              <p className="text-orange-700">
                Early adopters mendapat akses eksklusif dan bonus senilai $500
              </p>
            </div>
            <div className="text-2xl animate-pulse">🎁</div>
          </div>
        </div>
      </div>
    </section>
  );
} 