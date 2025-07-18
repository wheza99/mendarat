'use client';

import { motion } from 'framer-motion';
import { contactSectionCopy } from '../copy';

export default function Contact() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Digital Network */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <radialGradient id="networkGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
              </radialGradient>
            </defs>
            
            {/* Network Nodes */}
            {[...Array(20)].map((_, i) => {
              const x = 100 + (i % 5) * 200;
              const y = 100 + Math.floor(i / 5) * 200;
              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="url(#networkGradient)"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                  {/* Connecting Lines */}
                  {i < 19 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={100 + ((i + 1) % 5) * 200}
                      y2={100 + Math.floor((i + 1) / 5) * 200}
                      stroke="#22D3EE"
                      strokeWidth="1"
                      opacity="0.3"
                      className="animate-pulse"
                      style={{
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
        
        {/* Cyber Waves */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-400/20 rounded-full"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `cyber-wave ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        {/* Data Streams */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-t from-transparent via-cyan-400/50 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `data-stream ${4 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {contactSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {contactSectionCopy.description}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Form Container */}
            <div className="relative bg-gray-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-8 overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
              {/* Holographic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Scan Lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-cyan-400/50"
                    style={{
                      top: `${i * 12.5}%`,
                      animation: `scan-line ${2 + Math.random() * 1}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 1}s`
                    }}
                  />
                ))}
              </div>
              
              <form className="relative z-10 space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative group/field"
                >
                  <input
                    type="text"
                    placeholder={contactSectionCopy.formPlaceholders.name}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-800/70 transition-all duration-300 group-hover/field:border-cyan-400/70"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
                
                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group/field"
                >
                  <input
                    type="email"
                    placeholder={contactSectionCopy.formPlaceholders.email}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-800/70 transition-all duration-300 group-hover/field:border-cyan-400/70"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
                
                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group/field"
                >
                  <input
                    type="text"
                    placeholder={contactSectionCopy.formPlaceholders.subject}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-800/70 transition-all duration-300 group-hover/field:border-cyan-400/70"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
                
                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative group/field"
                >
                  <textarea
                    rows={6}
                    placeholder={contactSectionCopy.formPlaceholders.message}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-800/70 transition-all duration-300 resize-none group-hover/field:border-cyan-400/70"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
                
                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 relative overflow-hidden group/btn shadow-lg shadow-cyan-500/25"
                  >
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    
                    {/* Button Text */}
                    <span className="relative z-10">{contactSectionCopy.submitButton}</span>
                    
                    {/* Cyber Lines */}
                    <div className="absolute top-0 left-0 w-full h-px bg-white/20 group-hover/btn:bg-white/40 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover/btn:bg-white/40 transition-colors duration-300" />
                  </button>
                </motion.div>
              </form>
              
              {/* Cyber Frame */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Locations */}
            <div className="space-y-6">
              {contactSectionCopy.locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {/* Location Card */}
                  <div className="relative bg-gray-900/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 overflow-hidden group-hover:border-purple-400/40 transition-all duration-300">
                    {/* Holographic Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Cyber Pattern */}
                    <div className="absolute top-2 right-2 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#22D3EE" strokeWidth="2" />
                        <circle cx="50" cy="50" r="15" fill="none" stroke="#A855F7" strokeWidth="1" />
                        <circle cx="50" cy="50" r="5" fill="#3B82F6" />
                      </svg>
                    </div>
                    
                    <div className="relative z-10 space-y-3">
                      {/* City */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {location.city}
                      </h3>
                      
                      {/* Address */}
                      <p className="text-gray-300 leading-relaxed">
                        {location.address}
                      </p>
                      
                      {/* Contact Details */}
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
                          <span className="text-gray-300">{location.phone}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <span className="text-gray-300">{location.email}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Cyber Accents */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Cyber Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Cyber Container */}
              <div className="relative bg-gray-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 h-48 overflow-hidden group-hover:border-purple-400/50 transition-all duration-300">
                {/* Holographic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Central Hub */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="relative">
                    {/* Main Node */}
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      <div className="w-10 h-10 bg-white rounded-full animate-pulse" />
                    </div>
                    
                    {/* Satellite Nodes */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-60px)`,
                          animation: `satellite-orbit ${12 + i * 2}s linear infinite`
                        }}
                      />
                    ))}
                    
                    {/* Connection Lines */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-px h-16 bg-gradient-to-t from-cyan-400/50 to-transparent"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                          transformOrigin: 'center bottom'
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Cyber Frame */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes cyber-wave {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.6);
            opacity: 0;
          }
        }
        
        @keyframes data-stream {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100px);
          }
        }
        
        @keyframes satellite-orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(-60px);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateY(-60px);
          }
        }
        
        @keyframes scan-line {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}