'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Contact() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#2a0044' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black font-mono tracking-wider mb-6"
                style={{ color: '#00BFFF', textShadow: '0 0 20px #00BFFF' }}>
              {copy.contact.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto font-mono font-medium"
               style={{ color: '#FFD700' }}>
              {copy.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quest Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="border-4 p-8 font-mono"
                   style={{ backgroundColor: '#1a0033', borderColor: '#32CD32' }}>
                <form className="space-y-6">
                  <div>
                    <label className="block font-bold mb-3 tracking-wide text-white">
                      {copy.contact.form.name}
                    </label>
                    <input 
                      type="text"
                      className="w-full p-4 border-4 font-bold tracking-wide"
                      style={{ backgroundColor: '#000033', borderColor: '#FFD700', color: '#32CD32' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block font-bold mb-3 tracking-wide text-white">
                      {copy.contact.form.email}
                    </label>
                    <input 
                      type="email"
                      className="w-full p-4 border-4 font-bold tracking-wide"
                      style={{ backgroundColor: '#000033', borderColor: '#FFD700', color: '#32CD32' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block font-bold mb-3 tracking-wide text-white">
                      {copy.contact.form.project}
                    </label>
                    <input 
                      type="text"
                      className="w-full p-4 border-4 font-bold tracking-wide"
                      style={{ backgroundColor: '#000033', borderColor: '#FFD700', color: '#32CD32' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block font-bold mb-3 tracking-wide text-white">
                      {copy.contact.form.message}
                    </label>
                    <textarea 
                      rows={6}
                      className="w-full p-4 border-4 font-bold tracking-wide resize-none"
                      style={{ backgroundColor: '#000033', borderColor: '#FFD700', color: '#32CD32' }}
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 font-black text-lg tracking-widest border-4 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#FFD700', 
                      borderColor: '#FFA500',
                      color: '#1a0033',
                      boxShadow: '0 8px 0 #CC8400'
                    }}
                  >
                    {copy.contact.form.submit}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Game Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="border-4 p-8 font-mono"
                   style={{ backgroundColor: '#1a0033', borderColor: '#FF1493' }}>
                <div className="text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-black mb-2 tracking-wide text-white">
                    PHONE CONTACT
                  </h3>
                  <p className="font-medium" style={{ color: '#FF1493' }}>
                    {copy.contact.info.phone}
                  </p>
                </div>
              </div>

              <div className="border-4 p-8 font-mono"
                   style={{ backgroundColor: '#1a0033', borderColor: '#00BFFF' }}>
                <div className="text-center">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="text-xl font-black mb-2 tracking-wide text-white">
                    EMAIL QUEST
                  </h3>
                  <p className="font-medium" style={{ color: '#00BFFF' }}>
                    {copy.contact.info.email}
                  </p>
                </div>
              </div>

              <div className="border-4 p-8 font-mono"
                   style={{ backgroundColor: '#1a0033', borderColor: '#32CD32' }}>
                <div className="text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-black mb-2 tracking-wide text-white">
                    GAME LOCATION
                  </h3>
                  <p className="font-medium" style={{ color: '#32CD32' }}>
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