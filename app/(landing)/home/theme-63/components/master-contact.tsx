import React from 'react';

export default function MasterContact() {
  const contactMethods = [
    {
      title: "Digital Atelier",
      method: "Live Workshop",
      description: "Join our virtual Renaissance studio for real-time collaboration with AI masters",
      icon: "🎨",
      availability: "Mon-Fri, 9AM-6PM EST",
      response: "Immediate"
    },
    {
      title: "Master's Council",
      method: "Expert Consultation",
      description: "Receive personalized guidance from our AI Renaissance masters",
      icon: "👑",
      availability: "24/7 Available",
      response: "Within 1 hour"
    },
    {
      title: "Artistic Correspondence",
      method: "Traditional Email",
      description: "Send detailed inquiries about techniques, commissions, or collaborations",
      icon: "📜",
      availability: "Always Open",
      response: "Within 24 hours"
    }
  ];

  const socialChannels = [
    { name: "Renaissance Gallery", platform: "Instagram", handle: "@digitalrenaissance", icon: "🖼️", followers: "247K" },
    { name: "Artisan Network", platform: "Discord", handle: "Renaissance Masters", icon: "🤝", members: "89K" },
    { name: "Master Classes", platform: "YouTube", handle: "AI Renaissance", icon: "🎥", subscribers: "156K" },
    { name: "Artist Collective", platform: "Twitter", handle: "@renaissance_ai", icon: "🐦", followers: "203K" }
  ];

  const studioLocations = [
    {
      city: "Florence Digital",
      address: "Palazzo Virtuale, Metaverse District",
      timezone: "CET (UTC+1)",
      speciality: "Classical Techniques",
      masters: ["Leonardo AI", "Michelangelo Bot"],
      icon: "🏛️"
    },
    {
      city: "Silicon Valley",
      address: "Renaissance Tech Hub, California",
      timezone: "PST (UTC-8)", 
      speciality: "AI Innovation",
      masters: ["Da Vinci Neural", "Raphael Code"],
      icon: "🌉"
    },
    {
      city: "Paris Numérique",
      address: "Louvre Digital Wing, France",
      timezone: "CET (UTC+1)",
      speciality: "Art Curation",
      masters: ["Botticelli Algorithm", "Caravaggio Bot"],
      icon: "🗼"
    }
  ];

  const masteringServices = [
    { service: "Personal Art Mentoring", duration: "1-on-1 Sessions", price: "€199/hour" },
    { service: "Portfolio Review & Guidance", duration: "Comprehensive Analysis", price: "€299" },
    { service: "Custom AI Art Creation", duration: "Commissioned Work", price: "€899+" },
    { service: "Workshop Series Access", duration: "6-Month Program", price: "€1,299" },
    { service: "Master Class Collection", duration: "Lifetime Access", price: "€2,499" }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Renaissance Contact Background */}
      <div className="absolute inset-0">
        {/* Parchment Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 opacity-80" />
        
        {/* Manuscript Decorations */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <path
                d={`M${10 + i * 12},5 Q${15 + i * 12},10 ${10 + i * 12},15 Q${5 + i * 12},10 ${10 + i * 12},5`}
                stroke="#d97706"
                strokeWidth="0.5"
                fill="none"
                className="animate-renaissance-float"
                style={{animationDelay: `${i * 0.7}s`}}
              />
              <circle
                cx={10 + i * 12}
                cy={90}
                r="2"
                fill="#ea580c"
                className="animate-renaissance-pulse"
                style={{animationDelay: `${i * 0.4}s`}}
              />
            </g>
          ))}
        </svg>

        {/* Floating Artistic Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-600/25 animate-renaissance-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 20}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 30 + 40}s`
            }}
          >
            {['✒️', '📜', '🕯️', '⚜️', '🏛️', '👑', '💌', '🖋️'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 mb-8 bg-gradient-to-r from-orange-100/80 to-red-100/80 backdrop-blur-sm border-2 border-orange-300/30 rounded-full">
            <span className="text-orange-700 text-lg font-semibold">✒️ Master Contact</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
            Connect with Masters
          </h2>
          
          <p className="text-xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed">
            Reach out to our Renaissance AI masters for guidance, collaboration, 
            or to commission your own digital masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-sm border-2 border-amber-200/40 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">
                Send a Message to the Masters
              </h3>
              <p className="text-amber-700/80">
                Share your artistic vision and let our AI masters guide your journey
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Master Artist"
                    className="w-full px-4 py-3 bg-white/80 border border-amber-300/40 rounded-lg focus:border-orange-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="artist@renaissance.ai"
                    className="w-full px-4 py-3 bg-white/80 border border-amber-300/40 rounded-lg focus:border-orange-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">Artistic Interest</label>
                <select className="w-full px-4 py-3 bg-white/80 border border-amber-300/40 rounded-lg focus:border-orange-400 focus:outline-none transition-colors">
                  <option>Portrait Mastery</option>
                  <option>Digital Sculpture</option>
                  <option>Mythological Art</option>
                  <option>Art Restoration</option>
                  <option>Color Theory</option>
                  <option>Sacred Geometry</option>
                  <option>Custom Commission</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">Preferred Master</label>
                <select className="w-full px-4 py-3 bg-white/80 border border-amber-300/40 rounded-lg focus:border-orange-400 focus:outline-none transition-colors">
                  <option>Any Available Master</option>
                  <option>Leonardo AI</option>
                  <option>Michelangelo Bot</option>
                  <option>Raphael Neural</option>
                  <option>Botticelli Code</option>
                  <option>Da Vinci Algorithm</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">Your Artistic Vision</label>
                <textarea
                  rows={5}
                  placeholder="Describe your artistic goals, questions, or commission ideas..."
                  className="w-full px-4 py-3 bg-white/80 border border-amber-300/40 rounded-lg focus:border-orange-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>📜</span>
                  <span>Send to Masters</span>
                  <span>→</span>
                </span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Ways to Connect</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-orange-100/80 to-red-100/80 backdrop-blur-sm border border-orange-200/40 rounded-xl p-6 hover:border-red-400/60 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl animate-renaissance-pulse">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-amber-800 mb-1">
                          {method.title}
                        </h4>
                        <div className="text-orange-600 font-semibold mb-2">
                          {method.method}
                        </div>
                        <p className="text-amber-700/80 text-sm leading-relaxed mb-3">
                          {method.description}
                        </p>
                        <div className="flex justify-between text-xs">
                          <span className="text-amber-600">📅 {method.availability}</span>
                          <span className="text-orange-600">⚡ {method.response}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Locations */}
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Renaissance Studios</h3>
              <div className="space-y-4">
                {studioLocations.map((studio, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm border border-amber-200/40 rounded-xl p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{studio.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-amber-800 mb-1">
                          {studio.city}
                        </h4>
                        <p className="text-amber-700/80 text-sm mb-2">{studio.address}</p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-orange-600">{studio.timezone}</span>
                          <span className="text-amber-600">{studio.speciality}</span>
                        </div>
                        <div className="mt-2 text-xs text-amber-700/80">
                          Masters: {studio.masters.join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services & Pricing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">
            Master Services & Investment
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masteringServices.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm border border-amber-200/40 rounded-xl p-6 hover:border-orange-400/60 transition-all duration-300 hover:scale-105 text-center"
              >
                <h4 className="text-lg font-bold text-amber-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {service.service}
                </h4>
                <div className="text-orange-600 text-sm mb-3">
                  {service.duration}
                </div>
                <div className="text-2xl font-bold text-red-700">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Channels */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">
            Join the Renaissance Community
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialChannels.map((channel, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-orange-100/80 to-red-100/80 backdrop-blur-sm border border-orange-200/40 rounded-xl p-6 hover:border-red-400/60 transition-all duration-300 hover:scale-105 text-center cursor-pointer"
              >
                <div className="text-4xl mb-3 animate-renaissance-pulse">
                  {channel.icon}
                </div>
                <h4 className="text-lg font-bold text-amber-800 mb-1 group-hover:text-red-600 transition-colors">
                  {channel.name}
                </h4>
                <div className="text-orange-600 text-sm mb-2">
                  {channel.platform}
                </div>
                <div className="text-amber-700 text-xs mb-2">
                  {channel.handle}
                </div>
                <div className="text-red-700 font-semibold text-sm">
                  {channel.followers || channel.members || channel.subscribers}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-amber-100/90 to-red-100/90 backdrop-blur-sm border-2 border-amber-300/40 rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-amber-800 mb-6">
              Ready to Begin Your Renaissance?
            </h3>
            <p className="text-xl text-amber-700/80 mb-8 leading-relaxed">
              Whether you seek to learn, create, or commission, our AI masters 
              are ready to guide you on an extraordinary artistic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-amber-600 to-red-600 text-white font-bold rounded-full hover:from-amber-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <span className="flex items-center justify-center space-x-3">
                  <span>🎨</span>
                  <span>Start Your Journey</span>
                  <span>→</span>
                </span>
              </button>
              <button className="px-10 py-4 bg-amber-50 text-amber-700 font-bold rounded-full border-2 border-amber-300 hover:bg-amber-100 transition-all duration-300">
                <span className="flex items-center justify-center space-x-3">
                  <span>📞</span>
                  <span>Schedule Consultation</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 