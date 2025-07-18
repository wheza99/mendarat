'use client';

import { motion } from 'framer-motion';
import { contactSectionCopy } from '../copy';

export default function Contact() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Neural Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Contact Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-transparent to-purple-900/25" />
        
        {/* Floating Neural Contact Nodes */}
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-blue-400/35 via-purple-300/30 to-cyan-400/40 rounded-full"
            style={{
              width: `${10 + Math.random() * 25}px`,
              height: `${10 + Math.random() * 25}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.2, 0.7, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 18 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          />
        ))}
        
        {/* Neural Communication Waves */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1000 800">
            {/* Concentric Communication Circles */}
            {[150, 250, 350, 450].map((radius, i) => (
              <motion.circle
                key={i}
                cx="500"
                cy="400"
                r={radius}
                stroke={i % 2 === 0 ? "#3B82F6" : "#8B5CF6"}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.8
                }}
              />
            ))}
            
            {/* Signal Transmission Lines */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const x1 = 500 + Math.cos(angle * Math.PI / 180) * 100;
              const y1 = 400 + Math.sin(angle * Math.PI / 180) * 100;
              const x2 = 500 + Math.cos(angle * Math.PI / 180) * 400;
              const y2 = 400 + Math.sin(angle * Math.PI / 180) * 400;
              
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#06B6D4"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent">
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
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 bg-gradient-to-br from-blue-900/50 via-purple-800/40 to-cyan-900/50 rounded-3xl backdrop-blur-sm border border-blue-400/30">
              {/* Neural Form Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5 rounded-3xl" />
              
              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-white mb-8"
                >
                  {contactSectionCopy.form.heading}
                </motion.h3>
                
                <form className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 mb-2 font-medium">
                      {contactSectionCopy.form.fields.name}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-blue-900/30 border border-blue-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:bg-blue-900/50 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 rounded-xl pointer-events-none" />
                    </div>
                  </motion.div>
                  
                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 mb-2 font-medium">
                      {contactSectionCopy.form.fields.email}
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-blue-900/30 border border-blue-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:bg-blue-900/50 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 rounded-xl pointer-events-none" />
                    </div>
                  </motion.div>
                  
                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 mb-2 font-medium">
                      {contactSectionCopy.form.fields.subject}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-blue-900/30 border border-blue-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:bg-blue-900/50 transition-all duration-300"
                        placeholder="Enter subject"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 rounded-xl pointer-events-none" />
                    </div>
                  </motion.div>
                  
                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 mb-2 font-medium">
                      {contactSectionCopy.form.fields.message}
                    </label>
                    <div className="relative">
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 bg-blue-900/30 border border-blue-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:bg-blue-900/50 transition-all duration-300 resize-none"
                        placeholder="Enter your message"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 rounded-xl pointer-events-none" />
                    </div>
                  </motion.div>
                  
                  {/* Submit Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
                  >
                    {contactSectionCopy.form.submitButton}
                  </motion.button>
                </form>
              </div>
              
              {/* Neural Form Effects */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 h-[1px]"
                    style={{
                      width: '100%',
                      top: `${20 + i * 20}%`,
                      left: 0,
                      transform: 'translateX(-100%)'
                    }}
                    animate={{
                      transform: ['translateX(-100%)', 'translateX(100%)'],
                    }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      delay: i * 1.2,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
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
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative p-6 bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-cyan-900/40 rounded-2xl backdrop-blur-sm border border-blue-400/30"
              >
                {/* Neural Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5 rounded-2xl" />
                
                <div className="relative z-10 flex items-start space-x-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-cyan-500/80 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-xl">{info.icon}</span>
                  </motion.div>
                  
                  <div>
                    <motion.h4
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-xl font-semibold text-white mb-2"
                    >
                      {info.title}
                    </motion.h4>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-300"
                    >
                      {info.details}
                    </motion.p>
                  </div>
                </div>
                
                {/* Neural Glow Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  <motion.div
                    className="absolute bg-gradient-to-r from-blue-400/0 via-blue-400/15 to-blue-400/0 h-[1px] w-full top-1/2"
                    animate={{
                      transform: ['translateX(-100%)', 'translateX(100%)'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative p-6 bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-cyan-900/40 rounded-2xl backdrop-blur-sm border border-blue-400/30"
            >
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-white mb-4"
              >
                {contactSectionCopy.socialLinks.heading}
              </motion.h4>
              
              <div className="flex space-x-4">
                {contactSectionCopy.socialLinks.links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-cyan-500/80 rounded-xl flex items-center justify-center text-white hover:from-blue-600/80 hover:via-purple-600/80 hover:to-cyan-600/80 transition-all duration-300"
                  >
                    <span className="text-xl">{link.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative p-8 bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-cyan-900/40 rounded-3xl backdrop-blur-sm border border-blue-400/30 max-w-2xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4"
            >
              {contactSectionCopy.bottomCTA.heading}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6"
            >
              {contactSectionCopy.bottomCTA.description}
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              {contactSectionCopy.bottomCTA.buttonText}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}