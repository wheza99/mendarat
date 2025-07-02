"use client";

import { useState, useEffect, useRef } from "react";
import { cosmicCopy } from "../copy";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    
    setTimeout(() => {
      setIsTransmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("🚀 Message transmitted successfully to Mission Control!");
    }, 3000);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-indigo-950 via-purple-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="absolute top-32 right-32 text-2xl animate-bounce">📡</div>
        <div className="absolute top-64 left-32 text-xl animate-bounce">🛰️</div>
        <div className="absolute bottom-40 right-1/3 text-lg animate-bounce">🌌</div>
        <div className="absolute bottom-20 left-20 text-xl animate-bounce">🚀</div>
        
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-purple-400/30 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6">
              {cosmicCopy.contact.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">
              {cosmicCopy.contact.subtitle}
            </h3>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {cosmicCopy.contact.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 p-8 h-full">
              <h3 className="text-2xl font-black text-cyan-400 uppercase tracking-wider mb-8">
                🌌 MISSION CONTROL CENTER
              </h3>
              
              <div className="space-y-8">
                <div className="group bg-gray-800/50 border border-gray-600 p-6 hover:border-cyan-400 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-xl">
                      🏢
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">HEADQUARTERS</h4>
                      <p className="text-gray-400 text-sm">Main Operations Center</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{cosmicCopy.contact.address}</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-600 p-6 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl">
                      📞
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">COSMIC HOTLINE</h4>
                      <p className="text-gray-400 text-sm">24/7 Communication</p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-mono">{cosmicCopy.contact.phone}</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-600 p-6 hover:border-pink-400 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-xl">
                      📧
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">DIGITAL TRANSMISSION</h4>
                      <p className="text-gray-400 text-sm">Secure Email Channel</p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-mono">{cosmicCopy.contact.email}</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-600 p-6 hover:border-green-400 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-xl">
                      📡
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">RADIO FREQUENCY</h4>
                      <p className="text-gray-400 text-sm">Deep Space Communication</p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-mono">{cosmicCopy.contact.frequency}</p>
                </div>

                <div className="group bg-gray-800/50 border border-gray-600 p-6 hover:border-yellow-400 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-xl">
                      🌍
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">COORDINATES</h4>
                      <p className="text-gray-400 text-sm">Galactic Position</p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-mono">{cosmicCopy.contact.coordinates}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 p-8 h-full relative overflow-hidden">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-purple-400 uppercase tracking-wider mb-4">
                  🚀 TRANSMISSION INTERFACE
                </h3>
                <p className="text-gray-400">
                  Send your message across the cosmos. All transmissions are encrypted and secure.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      COMMANDER NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 focus:border-cyan-400 p-4 text-white placeholder-gray-500 transition-colors duration-300"
                      placeholder="Enter your name..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-purple-400 uppercase tracking-wider mb-2">
                      TRANSMISSION ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 focus:border-purple-400 p-4 text-white placeholder-gray-500 transition-colors duration-300"
                      placeholder="your.email@galaxy.space"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-pink-400 uppercase tracking-wider mb-2">
                    MISSION SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-600 focus:border-pink-400 p-4 text-white placeholder-gray-500 transition-colors duration-300"
                    placeholder="Mission briefing subject..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">
                    TRANSMISSION CONTENT
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-gray-800/50 border border-gray-600 focus:border-blue-400 p-4 text-white placeholder-gray-500 transition-colors duration-300 resize-none"
                    placeholder="Enter your cosmic message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isTransmitting}
                  className={`group relative w-full py-6 text-lg font-bold uppercase tracking-wider overflow-hidden transition-all duration-500 ${
                    isTransmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400'
                  }`}
                >
                  <span className="relative z-10 text-white">
                    {isTransmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="animate-spin">🌌</span>
                        TRANSMITTING TO SPACE...
                      </span>
                    ) : (
                      cosmicCopy.contact.cta
                    )}
                  </span>
                </button>
              </form>

              {isTransmitting && (
                <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-cyan-400 font-bold uppercase tracking-wider">
                      Establishing Connection...
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Routing through galactic network
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400 opacity-50"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-purple-400 opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-pink-400 opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-blue-400 opacity-50"></div>
            </div>
          </div>
        </div>

        <div className={`mt-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-6">
            <div className="flex items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  SYSTEMS ONLINE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  SIGNAL STRONG
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  READY TO TRANSMIT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 