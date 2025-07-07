import React, { useState } from 'react';

export default function VoidContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      type: "Quantum Communication",
      value: "hello@cosmic.universe",
      description: "Instant messaging across the void"
    },
    {
      type: "Stellar Frequency",
      value: "+1 (555) 0-COSMIC",
      description: "Direct line to mission control"
    },
    {
      type: "Galactic Coordinates",
      value: "Milky Way, Sol System, Earth",
      description: "Physical location in the universe"
    },
    {
      type: "Temporal Zone",
      value: "UTC -8 (PST)",
      description: "Local time reference"
    }
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin text-white mb-6">
            VOID
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              CONTACT
            </span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Reach across the cosmic void and connect with us through space and time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="relative">
            <div className="relative p-8 bg-white/5 border border-white/10 backdrop-blur-sm">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-white mb-8">
                  Send Transmission
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm text-slate-300 mb-2 uppercase tracking-widest">
                      Cosmic Identity
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:border-white/40 focus:outline-none transition-all duration-500"
                      placeholder="Your name across the universe"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm text-slate-300 mb-2 uppercase tracking-widest">
                      Quantum Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:border-white/40 focus:outline-none transition-all duration-500"
                      placeholder="your@cosmic.email"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm text-slate-300 mb-2 uppercase tracking-widest">
                      Mission Type
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-white/40 focus:outline-none transition-all duration-500"
                      required
                    >
                      <option value="">Select your mission</option>
                      <option value="exploration">Cosmic Exploration</option>
                      <option value="collaboration">Galactic Collaboration</option>
                      <option value="consultation">Stellar Consultation</option>
                      <option value="support">Void Support</option>
                      <option value="partnership">Universal Partnership</option>
                      <option value="other">Other Dimensions</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm text-slate-300 mb-2 uppercase tracking-widest">
                      Transmission Content
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:border-white/40 focus:outline-none transition-all duration-500 resize-none"
                      placeholder="Share your cosmic vision with us..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group relative w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-500"
                  >
                    <span className="relative z-10 text-sm uppercase tracking-widest">
                      Launch Transmission
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative p-8 bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-white mb-8">
                  Communication Channels
                </h3>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-cosmic-pulse"></div>
                        <div>
                          <h4 className="text-white font-light mb-1">
                            {method.type}
                          </h4>
                          <p className="text-lg text-slate-300 mb-2">
                            {method.value}
                          </p>
                          <p className="text-sm text-slate-400">
                            {method.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-6"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="relative p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-cosmic-pulse"></div>
                  </div>
                  <h4 className="text-white font-light">
                    Mission Control Status
                  </h4>
                </div>
                <p className="text-slate-300 font-light">
                  Currently orbiting Earth. Response time: 24-48 hours across all dimensions.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="relative z-10">
                <h4 className="text-white font-light mb-4">
                  Follow Our Journey
                </h4>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((platform, index) => (
                    <button
                      key={index}
                      className="group relative w-12 h-12 border border-white/20 hover:border-white/40 transition-all duration-500"
                    >
                      <span className="relative z-10 text-sm text-white">
                        {platform.slice(0, 2)}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="flex items-center justify-center mt-20">
          <div className="flex items-center gap-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-cosmic-pulse"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 