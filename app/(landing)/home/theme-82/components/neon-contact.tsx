import React from 'react';

export default function NeonContact() {
  const contactData = {
    title: {
      main: "NEON CONTACT",
      description: "Get in touch to discuss your Art Deco neon gradient project"
    },
    contact: {
      email: "hello@deconeon.com",
      phone: "+1 (555) 123-4567",
      address: "123 Deco Street, Neon City, NC 12345"
    },
    social: [
      { name: "Twitter", icon: "◆", color: "purple" },
      { name: "Instagram", icon: "◇", color: "pink" },
      { name: "LinkedIn", icon: "◆", color: "orange" },
      { name: "Dribbble", icon: "◇", color: "purple" }
    ],
    form: {
      fields: [
        { name: "name", label: "Name", type: "text", color: "purple" },
        { name: "email", label: "Email", type: "email", color: "pink" },
        { name: "message", label: "Message", type: "textarea", color: "orange" }
      ]
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deco Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/50 via-transparent to-purple-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#f97316_0%,transparent_50%)] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-800/90 to-purple-800/90 backdrop-blur-xl border border-orange-400 rounded-lg px-6 py-3 shadow-2xl mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full animate-deco-pulse"></div>
            <span className="text-orange-300 font-light text-sm tracking-wider">CONTACT</span>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {contactData.title.main}
            </span>
          </h2>
          
          <p className="text-xl text-orange-300 max-w-3xl mx-auto font-light">
            {contactData.title.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-800/90 to-purple-900/90 backdrop-blur-xl border border-purple-400 rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-purple-200 mb-6">GET IN TOUCH</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center animate-deco-pulse">
                    <span className="text-white text-xl">◆</span>
                  </div>
                  <div>
                    <div className="text-purple-300 font-semibold">Email</div>
                    <div className="text-purple-400">{contactData.contact.email}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center animate-deco-pulse" style={{ animationDelay: '0.3s' }}>
                    <span className="text-white text-xl">◇</span>
                  </div>
                  <div>
                    <div className="text-pink-300 font-semibold">Phone</div>
                    <div className="text-pink-400">{contactData.contact.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center animate-deco-pulse" style={{ animationDelay: '0.6s' }}>
                    <span className="text-white text-xl">◆</span>
                  </div>
                  <div>
                    <div className="text-orange-300 font-semibold">Address</div>
                    <div className="text-orange-400">{contactData.contact.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-pink-800/90 to-pink-900/90 backdrop-blur-xl border border-pink-400 rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-pink-200 mb-6">FOLLOW US</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {contactData.social.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`group flex items-center space-x-3 p-4 bg-gradient-to-br from-${social.color}-400/20 to-${social.color}-600/20 border border-${social.color}-400 rounded-lg hover:from-${social.color}-400/30 hover:to-${social.color}-600/30 transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className={`text-${social.color}-300 text-xl animate-deco-pulse`} style={{ animationDelay: `${index * 0.1}s` }}>
                      {social.icon}
                    </div>
                    <span className={`text-${social.color}-300 font-semibold`}>
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-orange-800/90 to-orange-900/90 backdrop-blur-xl border border-orange-400 rounded-lg p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-orange-200 mb-6">SEND MESSAGE</h3>
            
            <form className="space-y-6">
              {contactData.form.fields.map((field, index) => (
                <div key={index}>
                  <label className={`block text-${field.color}-300 font-semibold mb-2`}>
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      rows={4}
                      className={`w-full bg-gradient-to-br from-${field.color}-400/20 to-${field.color}-600/20 border border-${field.color}-400 rounded-lg p-4 text-${field.color}-300 placeholder-${field.color}-400 focus:outline-none focus:ring-2 focus:ring-${field.color}-400 focus:border-transparent transition-all duration-300`}
                      placeholder={`Enter your ${field.label.toLowerCase()}...`}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      className={`w-full bg-gradient-to-br from-${field.color}-400/20 to-${field.color}-600/20 border border-${field.color}-400 rounded-lg p-4 text-${field.color}-300 placeholder-${field.color}-400 focus:outline-none focus:ring-2 focus:ring-${field.color}-400 focus:border-transparent transition-all duration-300`}
                      placeholder={`Enter your ${field.label.toLowerCase()}...`}
                    />
                  )}
                </div>
              ))}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Deco Corner Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-4 border-purple-400 rounded-lg animate-deco-pulse"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-4 border-pink-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-orange-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-purple-400 rounded-lg animate-deco-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Deco Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`floating-${i}`}
            className="absolute animate-deco-float"
            style={{
              left: `${5 + (i % 5) * 18}%`,
              top: `${10 + Math.floor(i / 5) * 25}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          >
            <div className={`w-4 h-4 border-2 border-${['purple', 'pink', 'orange'][i % 3]}-400 rounded-lg animate-deco-spin`}></div>
          </div>
        ))}
      </div>

      {/* Deco Rays */}
      <div className="absolute top-1/3 right-1/4 w-40 h-40">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute w-1 h-20 bg-gradient-to-t from-orange-400 to-transparent animate-deco-ray"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Deco Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-deco-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#a855f7', '#ec4899', '#f97316'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${8 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 