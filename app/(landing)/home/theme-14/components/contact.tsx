"use client";

import { motion, useInView } from "framer-motion";
import { contactSectionCopy } from "../copy";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-20 bg-black text-cyan-400">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6 text-white">
            {contactSectionCopy.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {contactSectionCopy.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Holographic frame */}
            <div className="absolute -inset-4 border border-cyan-400/50 rounded-lg">
              <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
              <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
            </div>

            {/* Contact form */}
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder={contactSectionCopy.formPlaceholders.name}
                      className="w-full bg-black/50 border border-gray-700 rounded px-4 py-3 text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={contactSectionCopy.formPlaceholders.email}
                      className="w-full bg-black/50 border border-gray-700 rounded px-4 py-3 text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={contactSectionCopy.formPlaceholders.subject}
                    className="w-full bg-black/50 border border-gray-700 rounded px-4 py-3 text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={6}
                    placeholder={contactSectionCopy.formPlaceholders.message}
                    className="w-full bg-black/50 border border-gray-700 rounded px-4 py-3 text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold font-mono text-lg py-4 rounded-sm overflow-hidden group transition-all duration-300 hover:scale-105"
                >
                  {contactSectionCopy.submitButton}
                </button>
              </form>

              {/* Scan line animation */}
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
              />
            </div>
          </motion.div>

          {/* Right side - Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {contactSectionCopy.locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                {/* Holographic frame */}
                <div className="absolute -inset-2 border border-cyan-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-cyan-400"></div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-cyan-400"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>
                </div>

                {/* Location card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 group-hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold font-mono text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {location.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="font-mono text-sm text-gray-300">
                        {location.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="font-mono text-sm text-gray-300">
                        {location.email}
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="font-mono text-sm text-gray-300">
                        {location.address}
                      </span>
                    </div>
                  </div>

                  {/* Scan line animation */}
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "linear"
                    }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-60"
                  />
                </div>
              </motion.div>
            ))}

            {/* System status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg p-6 text-center"
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <span className="font-mono text-sm text-green-400">COMMUNICATION_CHANNELS_ACTIVE</span>
              </div>
              <p className="font-mono text-xs text-gray-400">
                // RESPONSE_TIME: &lt;24H | ENCRYPTION: AES-256 | STATUS: SECURE
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}