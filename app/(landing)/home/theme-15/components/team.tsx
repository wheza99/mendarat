"use client";

import { motion } from "framer-motion";
import { teamSectionCopy } from "../copy";

export default function Team() {
  return (
    <section className="py-24 bg-slate-50">
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
            {teamSectionCopy.heading}
          </h2>
          <div className="w-16 h-px bg-blue-300 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
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
              <div className="bg-white border border-slate-200 p-12 group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-500">
                
                {/* Member photo placeholder */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="w-32 h-32 mx-auto mb-8 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-slate-100 border border-slate-200 flex items-center justify-center">
                    <span className="text-4xl font-extralight text-blue-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </motion.div>

                {/* Member name */}
                <h3 className="text-2xl font-light text-slate-800 mb-2 tracking-wide">
                  {member.name}
                </h3>

                {/* Member role */}
                <p className="text-blue-600 font-light text-sm tracking-wide uppercase mb-8">
                  {member.role}
                </p>

                {/* Minimal divider */}
                <div className="w-8 h-px bg-blue-400 mx-auto mb-8"></div>

                {/* Member description */}
                <p className="text-slate-600 font-light leading-relaxed text-sm mb-8">
                  {member.description}
                </p>

                {/* Social links */}
                <div className="flex justify-center space-x-4">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center text-xs font-light transition-colors duration-300 hover:bg-blue-700"
                    >
                      {platform.charAt(0).toUpperCase()}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
} 