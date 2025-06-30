'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              {copy.contact.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'serif' }}>
              {copy.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-yellow-400 mb-2" style={{ fontFamily: 'serif' }}>
                      {copy.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-yellow-400 mb-2" style={{ fontFamily: 'serif' }}>
                      {copy.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-yellow-400 mb-2" style={{ fontFamily: 'serif' }}>
                      {copy.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-yellow-400 mb-2" style={{ fontFamily: 'serif' }}>
                      {copy.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:from-yellow-500 hover:to-yellow-700"
                  >
                    {copy.contact.form.submit}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {[
                { label: 'Phone', value: copy.contact.info.phone, icon: '📞' },
                { label: 'Email', value: copy.contact.info.email, icon: '✉️' },
                { label: 'Address', value: copy.contact.info.address, icon: '📍' }
              ].map((contact, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{contact.icon}</span>
                    <div>
                      <div className="text-yellow-400 font-bold mb-1" style={{ fontFamily: 'serif' }}>
                        {contact.label}
                      </div>
                      <div className="text-white text-lg">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 