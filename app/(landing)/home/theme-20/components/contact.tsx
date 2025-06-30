'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Contact() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#36454F', fontFamily: 'serif' }}>
              {copy.contact.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B8680' }}>
              {copy.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-white/90 p-8 rounded-3xl border-2 border-dashed" style={{ borderColor: '#8B8680' }}>
                {/* Form header decoration */}
                <div className="absolute top-4 left-4">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4,4 L20,4 M4,8 L16,8 M4,12 L18,12" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <form className="space-y-6 mt-8">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#36454F' }}>
                      {copy.contact.form.name}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-dashed bg-white/80 focus:bg-white focus:outline-none transition-all duration-300"
                      style={{ borderColor: '#8B8680' }}
                      placeholder="Tulis nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#36454F' }}>
                      {copy.contact.form.email}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-dashed bg-white/80 focus:bg-white focus:outline-none transition-all duration-300"
                      style={{ borderColor: '#8B8680' }}
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#36454F' }}>
                      {copy.contact.form.project}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-dashed bg-white/80 focus:bg-white focus:outline-none transition-all duration-300"
                      style={{ borderColor: '#8B8680' }}
                      placeholder="Branding, Website, Illustration, dll."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#36454F' }}>
                      {copy.contact.form.message}
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-dashed bg-white/80 focus:bg-white focus:outline-none resize-none transition-all duration-300"
                      style={{ borderColor: '#8B8680' }}
                      placeholder="Ceritakan project impian Anda dengan detail..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full py-4 rounded-2xl border-2 border-dashed font-bold text-lg transition-all duration-300"
                    style={{
                      backgroundColor: '#36454F',
                      color: '#F5F5DC',
                      borderColor: '#36454F'
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span>{copy.contact.form.submit}</span>
                      <span className="text-xl">📨</span>
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="relative bg-white/80 p-6 rounded-3xl border-2 border-dashed" style={{ borderColor: '#8B8680' }}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-dashed mr-4" style={{ 
                      backgroundColor: '#87CEEB',
                      borderColor: '#36454F'
                    }}>
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#36454F' }}>
                        Telepon
                      </p>
                      <p className="text-lg font-bold" style={{ color: '#36454F' }}>
                        {copy.contact.info.phone}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="relative bg-white/80 p-6 rounded-3xl border-2 border-dashed" style={{ borderColor: '#8B8680' }}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-dashed mr-4" style={{ 
                      backgroundColor: '#87CEEB',
                      borderColor: '#36454F'
                    }}>
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#36454F' }}>
                        Email
                      </p>
                      <p className="text-lg font-bold" style={{ color: '#36454F' }}>
                        {copy.contact.info.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="relative bg-white/80 p-6 rounded-3xl border-2 border-dashed" style={{ borderColor: '#8B8680' }}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-dashed mr-4" style={{ 
                      backgroundColor: '#87CEEB',
                      borderColor: '#36454F'
                    }}>
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#36454F' }}>
                        Alamat
                      </p>
                      <p className="text-lg font-bold" style={{ color: '#36454F' }}>
                        {copy.contact.info.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sketch illustration */}
              <div className="flex justify-center">
                <svg width="200" height="150" viewBox="0 0 200 150">
                  <rect x="20" y="20" width="160" height="110" stroke="#8B8680" strokeWidth="2" fill="none" strokeDasharray="5,3" rx="20" />
                  <circle cx="100" cy="75" r="30" stroke="#87CEEB" strokeWidth="2" fill="none" strokeDasharray="3,2" />
                  <path d="M70,90 Q100,80 130,90" stroke="#36454F" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <circle cx="85" cy="65" r="3" fill="#87CEEB" />
                  <circle cx="115" cy="65" r="3" fill="#87CEEB" />
                  <text x="100" y="140" textAnchor="middle" fontSize="12" fill="#8B8680" fontStyle="italic">
                    Mari berkolaborasi! ✨
                  </text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 