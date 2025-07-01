"use client";

import { BusinessData } from "../../page";
import { motion } from "framer-motion";

interface ContactProps {
  businessData: BusinessData;
}

export default function Contact({ businessData }: ContactProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Siap membantu Anda dengan solusi terbaik untuk kebutuhan business Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Business Information */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Business Card */}
            <motion.div variants={item} className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center mb-6">
                {businessData.img && (
                  <img 
                    src={businessData.img} 
                    alt={businessData.name}
                    className="h-12 w-auto mr-4 object-contain"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-white">{businessData.name}</h3>
                  <p className="text-blue-400">Business Profile</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="mr-3">🆔</span>
                  <div>
                    <p className="text-sm text-gray-400">Business ID</p>
                    <p className="font-mono">{businessData.id}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <span className="mr-3">💰</span>
                  <div>
                    <p className="text-sm text-gray-400">Currency</p>
                    <p>{businessData.currency}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <span className="mr-3">🌐</span>
                  <div>
                    <p className="text-sm text-gray-400">Language</p>
                    <p>{businessData.language.toUpperCase()}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <span className="mr-3">📱</span>
                  <div>
                    <p className="text-sm text-gray-400">Template</p>
                    <p>{businessData.selected_template}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Messenger Contacts */}
            {businessData.messenger && Object.values(businessData.messenger).some(value => value !== null) && (
              <motion.div variants={item} className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-6">Messenger</h4>
                <div className="space-y-3">
                  {Object.entries(businessData.messenger)
                    .filter(([_, url]) => url !== null)
                    .map(([platform, url], index) => (
                    <a
                      key={index}
                      href={url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                    >
                      <span className="mr-3">💬</span>
                      <div>
                        <p className="text-white font-medium capitalize">{platform}</p>
                        <p className="text-gray-400 text-sm">{url}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Kirim Pesan
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 