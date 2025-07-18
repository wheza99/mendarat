'use client';

import { motion } from 'framer-motion';
import { teamSectionCopy } from '../copy';

export default function Team() {
  const socialIcons = {
    f: "M18.77 7.46H15.5v-1.9c0-.9.6-1.1 1-1.1h2.2V1.26L15.4 1.26C12.33 1.26 11.5 3.55 11.5 5.6v1.86h-2v3.24h2V22h3.5v-11.3h2.6l.27-3.24z",
    in: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    ig: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Bio Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cellular Structure */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-emerald-400/20 rounded-full"
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 360]
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        {/* Bio Synapses */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1000 1000">
            {[...Array(15)].map((_, i) => {
              const x1 = Math.random() * 1000;
              const y1 = Math.random() * 1000;
              const x2 = Math.random() * 1000;
              const y2 = Math.random() * 1000;
              return (
                <g key={i}>
                  <motion.line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#10B981"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 3
                    }}
                  />
                  <motion.circle
                    cx={x1}
                    cy={y1}
                    r="4"
                    fill="#14B8A6"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold mb-6 whitespace-pre-line"
          >
            <span className="bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent">
              {teamSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {teamSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamSectionCopy.teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Bio Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6 text-center overflow-hidden transition-all duration-500 group-hover:border-emerald-400/60">
                {/* Neural Network Background */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <svg className="w-full h-full" viewBox="0 0 300 400">
                    {[...Array(8)].map((_, i) => {
                      const x1 = Math.random() * 300;
                      const y1 = Math.random() * 400;
                      const x2 = Math.random() * 300;
                      const y2 = Math.random() * 400;
                      return (
                        <g key={i}>
                          <line
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#10B981"
                            strokeWidth="1"
                            opacity="0.6"
                          />
                          <circle
                            cx={x1}
                            cy={y1}
                            r="2"
                            fill="#14B8A6"
                          />
                        </g>
                      );
                    })}
                  </svg>
                </div>
                
                {/* Member Image */}
                <div className="relative mb-6 mx-auto w-32 h-32">
                  {/* Bio Frame */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-full blur-lg" />
                  
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-emerald-400/50 group-hover:border-emerald-400/80 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Bio Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Bio Particles */}
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-80"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random()
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Member Info */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-emerald-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {teamSectionCopy.socialLinks.map((social, socialIndex) => (
                      <motion.button
                        key={social}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + socialIndex * 0.1 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="group/social relative p-2 bg-gradient-to-br from-emerald-600/50 to-green-600/50 backdrop-blur-sm rounded-lg hover:from-emerald-500/60 hover:to-green-500/60 transition-all duration-300"
                      >
                        {/* Bio Pulse Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-400 opacity-0 group-hover/social:opacity-30 rounded-lg transition-opacity duration-300" />
                        
                        <svg
                          className="w-4 h-4 text-white relative z-10"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={socialIcons[social as keyof typeof socialIcons]} />
                        </svg>
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Bio Border Animation */}
                <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/30 rounded-2xl transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            {/* Bio Pulse Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            {/* Cellular Network Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <svg className="w-full h-full" viewBox="0 0 200 60">
                {[...Array(5)].map((_, i) => (
                  <circle
                    key={i}
                    cx={40 * i + 20}
                    cy={30}
                    r={Math.random() * 8 + 4}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                ))}
              </svg>
            </div>
            
            <span className="relative z-10">{teamSectionCopy.buttonText}</span>
            
            {/* Organic Border Animation */}
            <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/50 rounded-lg transition-all duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}