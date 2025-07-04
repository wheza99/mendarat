import React, { useState } from 'react';

export default function GenomicContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    researchArea: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const researchAreas = [
    'Quantum Genetics',
    'Regenerative Medicine',
    'Neural Enhancement',
    'Longevity Research',
    'Synthetic Biology',
    'Quantum Immunology',
    'Cellular Engineering',
    'Bionanotechnology'
  ];

  const labLocations = [
    {
      city: "San Francisco",
      country: "USA",
      specialization: "Quantum Genetics Lab",
      coordinates: "37.7749°N, 122.4194°W",
      researchers: 247,
      icon: "🧬"
    },
    {
      city: "Cambridge",
      country: "UK",
      specialization: "Neural Enhancement Center",
      coordinates: "52.2053°N, 0.1218°E",
      researchers: 189,
      icon: "🧠"
    },
    {
      city: "Tokyo",
      country: "Japan",
      specialization: "Cellular Engineering Hub",
      coordinates: "35.6762°N, 139.6503°E",
      researchers: 156,
      icon: "🔬"
    },
    {
      city: "Zurich",
      country: "Switzerland",
      specialization: "Longevity Research Institute",
      coordinates: "47.3769°N, 8.5417°E",
      researchers: 203,
      icon: "⚗️"
    }
  ];

  const socialChannels = [
    {
      name: "Quantum Research Network",
      platform: "QRN",
      followers: "2.8M",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
          <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
        </svg>
      )
    },
    {
      name: "BioTech Labs",
      platform: "BTL",
      followers: "1.9M",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 3v3a2 2 0 01-2 2H3v13a2 2 0 002 2h14a2 2 0 002-2V8h-3a2 2 0 01-2-2V3H8z"/>
        </svg>
      )
    },
    {
      name: "Molecular Feed",
      platform: "MF",
      followers: "3.4M",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7L12 2z"/>
        </svg>
      )
    },
    {
      name: "Scientific Journal",
      platform: "SJ",
      followers: "892K",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
        </svg>
      )
    },
    {
      name: "Gene Network",
      platform: "GN",
      followers: "1.2M",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      name: "Quantum Biology Hub",
      platform: "QBH",
      followers: "756K",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      researchArea: '',
      message: ''
    });
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Molecular Network */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {Array.from({ length: 30 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={Math.random() * 1200}
                  cy={Math.random() * 800}
                  r="2"
                  fill="#10b981"
                  className="animate-bio-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
                {i < 25 && (
                  <line
                    x1={Math.random() * 1200}
                    y1={Math.random() * 800}
                    x2={Math.random() * 1200}
                    y2={Math.random() * 800}
                    stroke="#14b8a6"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                )}
              </g>
            ))}
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bio-pulse" />
            <span className="text-emerald-300 font-medium">Connect with Us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Join the Quantum
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Biology Revolution
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on groundbreaking research? Connect with our quantum biology team 
            and be part of the future of biotechnology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-900/80 to-emerald-950/50 backdrop-blur-sm border border-emerald-500/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Research Collaboration Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                    placeholder="Dr. Jane Smith"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                    placeholder="jane@biotech.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="BioTech Research Institute"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Research Area of Interest</label>
                <select
                  name="researchArea"
                  value={formData.researchArea}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                  required
                >
                  <option value="">Select Research Area</option>
                  {researchAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Research Proposal / Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell us about your research interests and how you'd like to collaborate..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-bio-spin" />
                    Transmitting Data...
                  </>
                ) : (
                  <>
                    Send Research Proposal
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Lab Locations & Contact Info */}
          <div className="space-y-8">
            {/* Global Lab Locations */}
            <div className="bg-gradient-to-br from-slate-900/80 to-teal-950/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-teal-400 mb-6">Global Research Centers</h4>
              
              <div className="space-y-4">
                {labLocations.map((lab, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors duration-300 animate-bio-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl">{lab.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-200">{lab.city}, {lab.country}</div>
                      <div className="text-sm text-teal-300">{lab.specialization}</div>
                      <div className="text-xs text-slate-400">{lab.coordinates} • {lab.researchers} researchers</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication Channels */}
            <div className="bg-gradient-to-br from-slate-900/80 to-cyan-950/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-cyan-400 mb-6">Alternative Contact Methods</h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Quantum Communication</div>
                    <div className="text-sm text-slate-400">research@quantumbio.lab</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Secure Line</div>
                    <div className="text-sm text-slate-400">+1 (555) QUANTUM</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Virtual Reality Lab</div>
                    <div className="text-sm text-slate-400">Metaverse Coordinates: QBL-2024</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Neural Interface</div>
                    <div className="text-sm text-slate-400">Direct thought transmission available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Networks */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/50 backdrop-blur-sm border border-slate-500/30 rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-slate-200 mb-6 text-center">Connect on Scientific Networks</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialChannels.map((channel, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-bio-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-emerald-400 mb-2 flex justify-center">
                  {channel.icon}
                </div>
                <div className="text-sm font-medium text-slate-200 mb-1">{channel.name}</div>
                <div className="text-xs text-slate-400">{channel.followers} followers</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center border-t border-slate-700/50 pt-12">
          <div className="mb-8">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Quantum Biology Collective
            </h4>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Pioneering the convergence of quantum physics and biological systems to unlock the fundamental 
              mysteries of life and develop revolutionary biotechnologies for humanity's future.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>
              © 2024 Quantum Biology Labs. All rights reserved. | Licensed under Quantum Research Protocol
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Research Ethics</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Safety Protocols</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Publications</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
} 