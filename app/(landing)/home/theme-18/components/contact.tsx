'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-mono text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
                &gt; INITIALIZE_CONTACT_PROTOCOL
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Establish Connection
            </h2>
            <p className="text-xl text-gray-300 font-mono">
              Ready to hack the future together? Let&apos;s sync up.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-cyan-400 mb-2">
                      &gt; USER_NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors font-mono"
                      placeholder="Enter your designation..."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-cyan-400 mb-2">
                      &gt; EMAIL_ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors font-mono"
                      placeholder="your.email@domain.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-cyan-400 mb-2">
                      &gt; MESSAGE_CONTENT
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors font-mono resize-none"
                      placeholder="Describe your mission or project details..."
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-pink-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 font-mono"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">&gt; TRANSMIT_MESSAGE</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Connection Status */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 font-mono text-sm">&gt; STATUS: ONLINE</span>
                  </div>
                  <p className="text-gray-300 font-mono leading-relaxed">
                    System operational and ready for incoming transmissions. 
                    Response time: &lt; 24 hours
                  </p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {[
                  { 
                    icon: '📧', 
                    label: 'EMAIL_PROTOCOL', 
                    value: 'contact@mendarat.com',
                    delay: 0.1
                  },
                  { 
                    icon: '📱', 
                    label: 'VOICE_CHANNEL', 
                    value: '+62 812-3456-7890',
                    delay: 0.2
                  },
                  { 
                    icon: '📍', 
                    label: 'LOCATION_DATA', 
                    value: 'Jakarta, Indonesia',
                    delay: 0.3
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: contact.delay }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-colors duration-300">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{contact.icon}</span>
                        <div>
                          <div className="text-sm font-mono text-purple-400 mb-1">
                            &gt; {contact.label}
                          </div>
                          <div className="text-white font-mono">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Security Notice */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-xl blur-lg" />
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">⚠️</span>
                    <div>
                      <div className="text-sm font-mono text-yellow-400 mb-1">
                        &gt; SECURITY_NOTICE
                      </div>
                      <p className="text-gray-300 text-sm font-mono leading-relaxed">
                        All communications are encrypted end-to-end. 
                        Your data is secure in our cyber vault.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 