'use client';

import { motion } from 'framer-motion';
import { contactSectionCopy } from '../copy';

export default function Contact() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Aurora Energy Field */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4), transparent 60%),
                radial-gradient(ellipse at top left, rgba(34, 197, 94, 0.3), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.2), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Cosmic Contact Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '150px 150px',
              animation: 'aurora-grid 40s linear infinite'
            }}
          />
        </div>
        
        {/* Floating Quantum Particles */}
        <div className="absolute top-20 left-16 w-4 h-4 bg-violet-400 rounded-full opacity-60 animate-aurora-float"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-emerald-400 rounded-full opacity-70 animate-aurora-drift"></div>
        <div className="absolute bottom-24 left-24 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-aurora-spiral"></div>
        <div className="absolute bottom-32 right-16 w-5 h-5 bg-cyan-400 rounded-full opacity-80 animate-aurora-float"></div>
        
        {/* Quantum Communication Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="contactGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="contactGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="150" r="100" fill="url(#contactGradient1)" className="animate-aurora-pulse" />
          <circle cx="800" cy="300" r="80" fill="url(#contactGradient2)" className="animate-aurora-pulse" style={{ animationDelay: '3s' }} />
          <circle cx="1200" cy="200" r="120" fill="url(#contactGradient1)" className="animate-aurora-pulse" style={{ animationDelay: '6s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-emerald-400 to-pink-400 bg-clip-text text-transparent">
            {contactSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {contactSectionCopy.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50 border border-violet-500/20 overflow-hidden">
              {/* Aurora Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-emerald-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quantum Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-violet-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-400 rounded-full opacity-80 animate-ping"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  Send Quantum Message
                </h3>
                
                <form className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Quantum Identity
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gradient-to-r from-indigo-900/50 via-purple-900/40 to-slate-900/60 border border-violet-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                    />
                  </motion.div>
                  
                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Cosmic Frequency
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@quantum.com"
                      className="w-full px-4 py-3 bg-gradient-to-r from-indigo-900/50 via-purple-900/40 to-slate-900/60 border border-violet-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                    />
                  </motion.div>
                  
                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Aurora Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What's on your mind?"
                      className="w-full px-4 py-3 bg-gradient-to-r from-indigo-900/50 via-purple-900/40 to-slate-900/60 border border-violet-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                    />
                  </motion.div>
                  
                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Quantum Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Share your cosmic thoughts..."
                      className="w-full px-4 py-3 bg-gradient-to-r from-indigo-900/50 via-purple-900/40 to-slate-900/60 border border-violet-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none"
                    ></textarea>
                  </motion.div>
                  
                  {/* Submit Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-violet-600 via-emerald-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:via-emerald-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Transmit Message</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </motion.button>
                </form>
              </div>
              
              {/* Quantum Energy Ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-violet-500/20 via-emerald-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactSectionCopy.contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-6 rounded-xl backdrop-blur-sm bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50 border border-violet-500/20 overflow-hidden"
              >
                {/* Aurora Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-emerald-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quantum Particles */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-violet-400 rounded-full opacity-60 animate-pulse"></div>
                
                <div className="relative z-10 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-600 via-emerald-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {info.details}
                    </p>
                  </div>
                </div>
                
                {/* Quantum Energy Ring */}
                <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-violet-500/20 via-emerald-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-xl backdrop-blur-sm bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50 border border-violet-500/20 overflow-hidden"
            >
              {/* Aurora Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-emerald-500/5 to-pink-600/10"></div>
              
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  Connect in the Quantum Realm
                </h4>
                
                <div className="flex space-x-4">
                  {contactSectionCopy.socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gradient-to-br from-violet-600 via-emerald-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-lg hover:from-violet-500 hover:via-emerald-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 px-8 py-4 rounded-full bg-gradient-to-r from-violet-900/30 via-emerald-900/20 to-pink-900/30 backdrop-blur-sm border border-violet-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Ready to Start Your Quantum Journey?</span>
            </div>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-violet-600 via-emerald-600 to-pink-600 text-white text-sm font-semibold rounded-full hover:from-violet-500 hover:via-emerald-500 hover:to-pink-500 transition-all duration-300"
            >
              Book Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}