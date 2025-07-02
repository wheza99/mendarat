'use client';

import { useState } from 'react';

const contactMethods = [
  {
    title: 'Private Consultation',
    description: 'Konsultasi eksklusif dengan master designer untuk proyek premium Anda',
    icon: '👑',
    contact: '+62 811-2345-6789',
    type: 'WhatsApp VIP',
    badge: 'Premium Access'
  },
  {
    title: 'Showroom Visit',
    description: 'Kunjungi galeri eksklusif untuk melihat langsung masterpiece collection',
    icon: '🏛️',
    contact: 'Jakarta Design District',
    type: 'By Appointment',
    badge: 'Exclusive'
  },
  {
    title: 'Commission Inquiry',
    description: 'Mulai perjalanan menciptakan karya custom yang tak ternilai',
    icon: '💎',
    contact: 'commission@luxury.id',
    type: 'Priority Email',
    badge: 'Bespoke Service'
  }
];

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Background luxury elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 text-9xl text-amber-200/10 luxury-float">📞</div>
        <div className="absolute bottom-20 right-1/4 text-8xl text-yellow-200/10 luxury-float" style={{ animationDelay: '2s' }}>✉️</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mb-8 border border-amber-300/50">
            <span className="text-2xl">🤝</span>
            <span className="font-semibold text-amber-800 tracking-wide uppercase">Exclusive Contact</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-yellow-700 mb-8 font-serif">
            Mulai Perjalanan
            <br />
            <span className="text-amber-700">Luxury Anda</span>
          </h2>
          
          <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
            Setiap masterpiece dimulai dari percakapan. Mari berdiskusi tentang 
            visi Anda dan wujudkan karya yang akan dikenang sepanjang masa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-amber-800 mb-8">Hubungi Master Craftsman</h3>
            
            {contactMethods.map((method, index) => (
              <div key={index} className="group relative elegant-reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300 overflow-hidden">
                  <div className="absolute inset-0 golden-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="text-5xl group-hover:scale-125 transform transition-all duration-500">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h4 className="text-2xl font-bold text-amber-800 group-hover:text-yellow-700 transition-colors">
                            {method.title}
                          </h4>
                          <div className="px-3 py-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full text-xs font-bold">
                            {method.badge}
                          </div>
                        </div>
                        <p className="text-amber-700 leading-relaxed mb-4">
                          {method.description}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="text-amber-600 font-medium">{method.type}:</span>
                            <span className="text-amber-800 font-bold">{method.contact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Contact Form */}
          <div className="relative">
            <div className="p-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-200/50 relative overflow-hidden">
              <div className="absolute inset-0 golden-shine opacity-20" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-amber-800 mb-8 text-center">Commission Request Form</h3>
                
                <form className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onFocus={() => setFocusedInput('name')}
                        onBlur={() => setFocusedInput('')}
                        className="w-full px-6 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl focus:border-amber-400 focus:outline-none transition-all duration-300 text-amber-800"
                        placeholder="Full Name"
                      />
                      {focusedInput === 'name' && (
                        <div className="absolute -top-3 left-4 px-2 bg-white text-amber-600 text-sm font-medium">
                          Full Name
                        </div>
                      )}
                    </div>
                    
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput('')}
                        className="w-full px-6 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl focus:border-amber-400 focus:outline-none transition-all duration-300 text-amber-800"
                        placeholder="Email Address"
                      />
                      {focusedInput === 'email' && (
                        <div className="absolute -top-3 left-4 px-2 bg-white text-amber-600 text-sm font-medium">
                          Email Address
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone & Project Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        onFocus={() => setFocusedInput('phone')}
                        onBlur={() => setFocusedInput('')}
                        className="w-full px-6 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl focus:border-amber-400 focus:outline-none transition-all duration-300 text-amber-800"
                        placeholder="Phone Number"
                      />
                    </div>
                    
                    <div className="relative">
                      <select
                        value={formData.project}
                        onChange={(e) => handleInputChange('project', e.target.value)}
                        onFocus={() => setFocusedInput('project')}
                        onBlur={() => setFocusedInput('')}
                        className="w-full px-6 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl focus:border-amber-400 focus:outline-none transition-all duration-300 text-amber-800"
                      >
                        <option value="">Project Type</option>
                        <option value="furniture">Custom Furniture</option>
                        <option value="art">Art Commission</option>
                        <option value="decor">Luxury Decor</option>
                        <option value="restoration">Heritage Restoration</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div className="relative">
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-6 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl focus:border-amber-400 focus:outline-none transition-all duration-300 text-amber-800"
                    >
                      <option value="">Investment Range</option>
                      <option value="500m-1b">IDR 500M - 1B</option>
                      <option value="1b-5b">IDR 1B - 5B</option>
                      <option value="5b-10b">IDR 5B - 10B</option>
                      <option value="10b+">IDR 10B+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput('')}
                      rows={5}
                      className="w-full px-6 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl focus:border-amber-400 focus:outline-none transition-all duration-300 text-amber-800 resize-none"
                      placeholder="Describe your vision and requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full p-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 golden-shine opacity-30" />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <span>🎨</span>
                      Begin Your Masterpiece Journey
                      <span>→</span>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom assurance */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-6 p-6 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-3xl border border-amber-300/50">
            <div className="text-3xl">🔒</div>
            <div className="text-left">
              <h4 className="text-lg font-bold text-amber-800">Konsultasi Rahasia & Eksklusif</h4>
              <p className="text-amber-700">Setiap diskusi dijamin privasi dan kerahasiaan tingkat tertinggi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 