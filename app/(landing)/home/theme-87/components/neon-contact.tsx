import React from 'react';

export default function NeonContact() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/10 to-transparent"></div>
        
        {/* Floating Contact Icons */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`contact-${i}`}
            className="absolute animate-sunset-float"
            style={{
              left: `${15 + (i % 3) * 30}%`,
              top: `${25 + Math.floor(i / 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className="w-10 h-10 border border-pink-400/30 rounded-full animate-sunset-pulse"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-sunset">
            Get In Touch
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="sunset-card p-8">
            <h3 className="text-2xl font-bold mb-6 neon-text-orange">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orange-200 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border border-orange-400/30 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-orange-200 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border border-orange-400/30 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-orange-200 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border border-orange-400/30 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-orange-200 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border border-orange-400/30 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-orange-200 text-sm font-medium mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border border-orange-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent transition-all duration-300">
                  <option value="">Select a project type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="design">UI/UX Design</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-orange-200 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border border-orange-400/30 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-sunset py-4 rounded-lg font-semibold hover-sunset-scale"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="sunset-card p-8">
              <h3 className="text-2xl font-bold mb-6 neon-text-pink">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "📍",
                    title: "Address",
                    content: "123 Sunset Boulevard, Tech City, TC 12345"
                  },
                  {
                    icon: "📧",
                    title: "Email",
                    content: "hello@neonsunset.com"
                  },
                  {
                    icon: "📞",
                    title: "Phone",
                    content: "+1 (555) 123-4567"
                  },
                  {
                    icon: "⏰",
                    title: "Business Hours",
                    content: "Mon-Fri: 9AM-6PM PST"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl animate-sunset-pulse">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-orange-200">
                        {contact.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="sunset-card p-8">
              <h3 className="text-2xl font-bold mb-6 neon-text-purple">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Twitter", icon: "🐦", color: "orange" },
                  { name: "LinkedIn", icon: "💼", color: "pink" },
                  { name: "GitHub", icon: "🐙", color: "purple" },
                  { name: "Instagram", icon: "📸", color: "orange" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`sunset-glass p-4 rounded-lg text-center hover-sunset-glow transition-all duration-300 group`}
                  >
                    <div className="text-2xl mb-2 animate-sunset-pulse group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div className={`text-sm font-medium neon-text-${social.color}`}>
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="sunset-card p-8">
              <h3 className="text-2xl font-bold mb-6 neon-text-orange">
                Quick Links
              </h3>
              
              <div className="space-y-3">
                {[
                  "About Us",
                  "Our Services",
                  "Portfolio",
                  "Blog",
                  "Careers",
                  "Privacy Policy"
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-orange-200 hover:text-orange-300 transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="sunset-glass p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4 gradient-text-sunset">
              Stay Updated
            </h3>
            <p className="text-orange-200 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates, tips, and insights about technology and design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border border-orange-400/30 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent transition-all duration-300"
              />
              <button className="btn-sunset px-6 py-3 rounded-lg font-semibold hover-sunset-scale">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-16 h-16 border border-purple-400/30 rounded-full animate-sunset-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-20 h-20 border border-orange-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 border border-pink-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
} 