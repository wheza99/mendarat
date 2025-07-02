"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Quest",
      description: "Send us a digital message",
      value: "hello@gamedev.com",
      color: "cyan-400"
    },
    {
      icon: "📱",
      title: "Phone Power-Up",
      description: "Direct communication channel",
      value: "+1 (555) 123-GAME",
      color: "pink-400"
    },
    {
      icon: "📍",
      title: "Base Location",
      description: "Our gaming headquarters",
      value: "123 Pixel Street, Digital City",
      color: "yellow-400"
    },
    {
      icon: "🌐",
      title: "Social Network",
      description: "Join our gaming community",
      value: "@GameDevStudio",
      color: "green-400"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gaming Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            {['⭐', '💎', '🎯', '⚡', '🚀', '🎮', '👾'][i % 7]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              MULTIPLAYER MODE
            </h2>
            {/* Gaming HUD */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 border-2 border-cyan-400 rounded px-4 py-2">
              <span className="text-cyan-400 font-mono text-sm animate-pulse">CONNECT WITH US</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono leading-relaxed">
            Ready to start your next gaming adventure? Join our party!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/80 border-2 border-cyan-400 rounded-lg p-8">
            <h3 className="text-2xl font-bold font-mono text-cyan-400 uppercase mb-6">
              🎮 START CONVERSATION
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">PLAYER NAME</label>
                <input
                  type="text"
                  className="w-full bg-black/60 border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-mono focus:border-pink-400 focus:outline-none"
                  placeholder="Enter your username..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="w-full bg-black/60 border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-mono focus:border-pink-400 focus:outline-none"
                  placeholder="your.email@domain.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">QUEST DETAILS</label>
                <textarea
                  rows={6}
                  className="w-full bg-black/60 border-2 border-gray-600 rounded-lg px-4 py-3 text-white font-mono focus:border-pink-400 focus:outline-none resize-none"
                  placeholder="Tell us about your epic project idea..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg font-mono uppercase tracking-wide border-2 border-cyan-400 hover:border-pink-400 transition-colors duration-300"
              >
                🚀 LAUNCH MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-mono text-pink-400 mb-8 uppercase text-center">
              🎯 COMMUNICATION CHANNELS
            </h3>

            {[
              { icon: "📧", title: "Email Quest", value: "hello@gamedev.com", color: "cyan-400" },
              { icon: "📱", title: "Phone Power-Up", value: "+1 (555) 123-GAME", color: "pink-400" },
              { icon: "📍", title: "Base Location", value: "123 Pixel Street", color: "yellow-400" },
              { icon: "🌐", title: "Social Network", value: "@GameDevStudio", color: "green-400" }
            ].map((method, index) => (
              <div key={index} className={`bg-black/80 border-2 border-${method.color} rounded-lg p-6 hover:border-pink-400 transition-colors duration-300`}>
                <div className="flex items-center">
                  <div className="text-4xl mr-6">{method.icon}</div>
                  <div>
                    <h4 className={`text-xl font-bold font-mono text-${method.color} mb-2 uppercase`}>
                      {method.title}
                    </h4>
                    <p className="text-white font-mono font-bold">{method.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Retro Grid Background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
    </section>
  );
} 