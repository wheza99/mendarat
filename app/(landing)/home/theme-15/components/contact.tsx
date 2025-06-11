"use client";

import { motion } from "framer-motion";
import { contactSectionCopy } from "../copy";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-slate-800 mb-6 tracking-tight">
            {contactSectionCopy.heading}
          </h2>
          <div className="w-16 h-px bg-blue-300 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto mb-8">
            {contactSectionCopy.subheading}
          </p>
          <p className="text-slate-500 font-light max-w-3xl mx-auto">
            {contactSectionCopy.description}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-200 p-12"
            >
              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder={contactSectionCopy.form.namePlaceholder}
                    className="w-full p-4 bg-white border border-slate-200 text-slate-800 font-light focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder={contactSectionCopy.form.emailPlaceholder}
                    className="w-full p-4 bg-white border border-slate-200 text-slate-800 font-light focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <textarea
                    rows={6}
                    placeholder={contactSectionCopy.form.messagePlaceholder}
                    className="w-full p-4 bg-white border border-slate-200 text-slate-800 font-light resize-none focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white font-light text-lg tracking-wide transition-all duration-300 hover:bg-blue-700"
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
              className="space-y-12"
            >
              {/* Email */}
              <div>
                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white"></div>
                </div>
                <h4 className="text-xl font-light text-slate-800 mb-3 tracking-wide">
                  Email
                </h4>
                <div className="w-8 h-px bg-blue-400 mb-4"></div>
                <p className="text-slate-600 font-light">
                  {contactSectionCopy.contactInfo.email}
                </p>
              </div>

              {/* Phone */}
              <div>
                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white"></div>
                </div>
                <h4 className="text-xl font-light text-slate-800 mb-3 tracking-wide">
                  Phone
                </h4>
                <div className="w-8 h-px bg-blue-400 mb-4"></div>
                <p className="text-slate-600 font-light">
                  {contactSectionCopy.contactInfo.phone}
                </p>
              </div>

              {/* Address */}
              <div>
                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white"></div>
                </div>
                <h4 className="text-xl font-light text-slate-800 mb-3 tracking-wide">
                  Address
                </h4>
                <div className="w-8 h-px bg-blue-400 mb-4"></div>
                <p className="text-slate-600 font-light">
                  {contactSectionCopy.contactInfo.address}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom minimal element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
} 