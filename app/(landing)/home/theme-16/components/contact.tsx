"use client";

import { motion } from "framer-motion";
import { contactSectionCopy } from "../copy";

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {contactSectionCopy.heading}
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-8">
            {contactSectionCopy.subheading}
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto">
            {contactSectionCopy.description}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8"
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder={contactSectionCopy.form.namePlaceholder}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder={contactSectionCopy.form.emailPlaceholder}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <textarea
                    rows={6}
                    placeholder={contactSectionCopy.form.messagePlaceholder}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg resize-none focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300"
                >
                  {contactSectionCopy.form.submitText}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mr-6">
                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Email
                    </h4>
                    <p className="text-slate-300">
                      {contactSectionCopy.contactInfo.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-xl flex items-center justify-center mr-6">
                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Phone
                    </h4>
                    <p className="text-slate-300">
                      {contactSectionCopy.contactInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mr-6">
                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Locations
                    </h4>
                    <p className="text-slate-300">
                      {contactSectionCopy.contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
} 