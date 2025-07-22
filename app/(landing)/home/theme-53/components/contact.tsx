"use client";

import { motion } from "framer-motion";
import { copy } from "../copy";

const Contact = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
        {/* Contact Network Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {[...Array(20)].map((_, i) => (
              <g key={i}>
                <circle
                  cx={50 + (i % 5) * 200}
                  cy={50 + Math.floor(i / 5) * 200}
                  r="3"
                  fill="#8b5cf6"
                  opacity={0.6}
                />
                {i > 0 && (
                  <line
                    x1={50 + ((i - 1) % 5) * 200}
                    y1={50 + Math.floor((i - 1) / 5) * 200}
                    x2={50 + (i % 5) * 200}
                    y2={50 + Math.floor(i / 5) * 200}
                    stroke="#8b5cf6"
                    strokeWidth="1"
                    opacity={0.3}
                  />
                )}
              </g>
            ))}
          </svg>
        </div>
        
        {/* Communication Waves */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-purple-400/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {copy.contact.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            {copy.contact.subtitle}
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {copy.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Form Container */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-800/20 to-blue-800/20 backdrop-blur-sm border border-purple-500/30">
              {/* Cosmic Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-50" />
              
              {/* Orbital Rings */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-spin" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-blue-400/50 rounded-full animate-pulse" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Send Transmission</h3>
                
                <form className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      {copy.contact.form.name}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your cosmic name"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      {copy.contact.form.email}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none transition-colors duration-300"
                      placeholder="your@cosmic-email.space"
                    />
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      {copy.contact.form.subject}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none transition-colors duration-300"
                      placeholder="Mission type or inquiry"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      {copy.contact.form.message}
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Describe your cosmic vision and mission requirements..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Launch Transmission
                  </motion.button>
                </form>
              </div>

              {/* Form Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    style={{
                      left: `${10 + i * 10}%`,
                      top: `${15 + i * 8}%`,
                    }}
                    animate={{
                      x: [0, 8, 0],
                      y: [0, -8, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2.5 + i * 0.2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {[
              {
                icon: "📧",
                title: "Cosmic Email",
                value: copy.contact.email,
                description: "Send us a digital transmission"
              },
              {
                icon: "📞",
                title: "Quantum Phone",
                value: copy.contact.phone,
                description: "Direct line to mission control"
              },
              {
                icon: "🌌",
                title: "Galactic Address",
                value: copy.contact.address,
                description: "Our cosmic headquarters"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-800/20 to-blue-800/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  {/* Cosmic Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-start">
                    <div className="text-3xl mr-4">{contact.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-purple-300 font-medium mb-2">
                        {contact.value}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-green-800/20 to-emerald-800/20 backdrop-blur-sm border border-green-500/30"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Quick Response
                  </h4>
                  <p className="text-green-300 text-sm">
                    We typically respond within 24 cosmic hours
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Connect Across the Galaxy</h3>
          <div className="flex justify-center space-x-6">
            {[
              { name: "Cosmic Twitter", icon: "🐦" },
              { name: "Galactic LinkedIn", icon: "💼" },
              { name: "Space GitHub", icon: "🚀" },
              { name: "Stellar Discord", icon: "💬" }
            ].map((social, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center text-xl hover:border-purple-400/50 transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;