"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Art Deco geometric background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="art-deco-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect width="120" height="120" fill="none" />
              <path d="M60 0L120 60L60 120L0 60Z" fill="#d4af37" opacity="0.3" />
              <path d="M60 20L100 60L60 100L20 60Z" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.4" />
              <circle cx="60" cy="60" r="5" fill="#d4af37" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#art-deco-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
            Get in Touch
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-300 text-xl font-light max-w-2xl mx-auto">
            Have a question or want to work together? Drop us a message!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto relative"
        >
          {/* Art Deco frame */}
          <div className="relative p-10 bg-gradient-to-b from-slate-800 to-slate-900 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400 opacity-60"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-400 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-400 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400 opacity-60"></div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-transparent border border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-slate-500"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-transparent border border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-slate-500"
                  />
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-slate-500 resize-none"
                  />
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <Button 
                  type="submit" 
                  className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-slate-900 font-light tracking-wide border-none transition-all duration-300"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}