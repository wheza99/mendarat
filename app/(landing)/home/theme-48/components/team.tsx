'use client';

import { motion } from 'framer-motion';
import { teamSectionCopy } from '../copy';

export default function Team() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900/5 via-teal-900/10 to-green-900/5 relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* DNA Helix Pattern */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 100 Q 200 50 400 100 T 800 100 Q 1000 50 1200 100"
            stroke="url(#teamGradient)" 
            strokeWidth="3" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M 0 200 Q 200 150 400 200 T 800 200 Q 1000 150 1200 200"
            stroke="url(#teamGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
        
        {/* Floating Cells */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-200 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-200 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            {teamSectionCopy.heading}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            {teamSectionCopy.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {teamSectionCopy.primaryButton}
          </motion.button>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamSectionCopy.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-emerald-200/50 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl hover:bg-white/90 text-center">
                {/* Member Avatar */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    {/* Placeholder Avatar */}
                    <div className="text-3xl">
                      {index === 0 && '👩‍🔬'}
                      {index === 1 && '👨‍🔬'}
                      {index === 2 && '👩‍💼'}
                      {index === 3 && '👨‍💻'}
                    </div>
                  </div>
                  
                  {/* Animated Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-emerald-300 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-4">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Object.entries(member.socialLinks).map(([platform, link], linkIndex) => (
                    <motion.a
                      key={platform}
                      href={link}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                    >
                      {platform === 'linkedin' && 'in'}
                      {platform === 'twitter' && '🐦'}
                      {platform === 'email' && '✉️'}
                    </motion.a>
                  ))}
                </div>

                {/* Bio-Tech Specialization Indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-emerald-400 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-emerald-600 mt-2 font-medium">
                    Bio-Tech Specialist
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { number: '50+', label: 'Research Scientists', icon: '🧬' },
            { number: '15+', label: 'Years Experience', icon: '⚗️' },
            { number: '200+', label: 'Publications', icon: '📚' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/50"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl p-8 border border-emerald-200/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Join Our Research Team
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Be part of groundbreaking biotechnology research that's shaping the future of science and medicine.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}