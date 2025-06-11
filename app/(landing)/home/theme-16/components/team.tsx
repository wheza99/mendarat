"use client";

import { motion } from "framer-motion";
import { teamSectionCopy } from "../copy";

export default function Team() {
  return (
    <section className="py-24 bg-slate-800">
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
            {teamSectionCopy.heading}
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            {teamSectionCopy.subheading}
          </p>
        </motion.div>

        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamSectionCopy.teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8 group-hover:border-purple-400/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
                
                {/* Member photo placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 mx-auto mb-6 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full border-4 border-slate-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </motion.div>

                {/* Member name */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>

                {/* Member role */}
                <p className="text-purple-400 font-semibold text-sm mb-6">
                  {member.role}
                </p>

                {/* Member description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social links */}
                <div className="flex justify-center space-x-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 text-white flex items-center justify-center text-xs font-bold rounded-lg transition-colors duration-300"
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