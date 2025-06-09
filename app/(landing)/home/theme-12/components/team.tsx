"use client";

import { motion } from "framer-motion";
import { teamSectionCopy } from "../copy";

export default function Team() {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-4 tracking-tight">
            {teamSectionCopy.heading}
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
            {teamSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamSectionCopy.teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Member photo placeholder */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full overflow-hidden group-hover:from-stone-200 group-hover:to-stone-300 transition-all duration-500"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-extralight text-stone-500">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </motion.div>

              {/* Member name */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="text-2xl font-light text-stone-800 mb-2 tracking-wide"
              >
                {member.name}
              </motion.h3>

              {/* Member role */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className="text-stone-600 font-light text-sm tracking-wide uppercase mb-6"
              >
                {member.role}
              </motion.p>

              {/* Zen divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="w-16 h-px bg-stone-300 mx-auto mb-6"
              />

              {/* Member description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                viewport={{ once: true }}
                className="text-stone-600 font-light leading-relaxed text-sm mb-8"
              >
                {member.description}
              </motion.p>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                viewport={{ once: true }}
                className="flex justify-center space-x-6"
              >
                {Object.entries(member.social).map(([platform, url]) => (
                  <motion.a
                    key={platform}
                    href={url}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 border border-stone-300 rounded-full flex items-center justify-center text-stone-600 hover:border-stone-400 hover:text-stone-800 transition-all duration-300"
                  >
                    <span className="text-xs font-light uppercase">
                      {platform.charAt(0)}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom meditation symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="relative">
            <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border border-stone-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-stone-500 rounded-full"></div>
              </div>
            </div>
            {/* Surrounding dots */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-stone-400 rounded-full"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-stone-400 rounded-full"></div>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-stone-400 rounded-full"></div>
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-stone-400 rounded-full"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 