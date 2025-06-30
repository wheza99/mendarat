'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Contact() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#8B8680' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-wider mb-6">
              {copy.contact.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-black font-medium">
              {copy.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-black p-8 border-8" style={{ borderColor: '#4A5568' }}>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-bold mb-3 tracking-wide">
                      {copy.contact.form.name}
                    </label>
                    <input 
                      type="text"
                      className="w-full p-4 border-4 border-black font-bold text-black tracking-wide"
                      style={{ backgroundColor: '#C7C5B8' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-bold mb-3 tracking-wide">
                      {copy.contact.form.email}
                    </label>
                    <input 
                      type="email"
                      className="w-full p-4 border-4 border-black font-bold text-black tracking-wide"
                      style={{ backgroundColor: '#C7C5B8' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-bold mb-3 tracking-wide">
                      {copy.contact.form.project}
                    </label>
                    <input 
                      type="text"
                      className="w-full p-4 border-4 border-black font-bold text-black tracking-wide"
                      style={{ backgroundColor: '#C7C5B8' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-bold mb-3 tracking-wide">
                      {copy.contact.form.message}
                    </label>
                    <textarea 
                      rows={6}
                      className="w-full p-4 border-4 border-black font-bold text-black tracking-wide resize-none"
                      style={{ backgroundColor: '#C7C5B8' }}
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 text-white font-black text-lg tracking-widest border-4 hover:bg-white hover:text-black transition-colors duration-300"
                    style={{ backgroundColor: '#FF6B35', borderColor: '#4A5568' }}
                  >
                    {copy.contact.form.submit}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-black p-8 border-8" style={{ borderColor: '#4A5568' }}>
                <div className="text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-black text-white mb-2 tracking-wide">TELEPON</h3>
                  <p className="text-white font-medium" style={{ color: '#C7C5B8' }}>
                    {copy.contact.info.phone}
                  </p>
                </div>
              </div>

              <div className="bg-black p-8 border-8" style={{ borderColor: '#4A5568' }}>
                <div className="text-center">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="text-xl font-black text-white mb-2 tracking-wide">EMAIL</h3>
                  <p className="text-white font-medium" style={{ color: '#C7C5B8' }}>
                    {copy.contact.info.email}
                  </p>
                </div>
              </div>

              <div className="bg-black p-8 border-8" style={{ borderColor: '#4A5568' }}>
                <div className="text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-black text-white mb-2 tracking-wide">LOKASI</h3>
                  <p className="text-white font-medium" style={{ color: '#C7C5B8' }}>
                    {copy.contact.info.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 