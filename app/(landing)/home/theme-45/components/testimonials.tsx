'use client';

import { motion } from 'framer-motion';
import { testimonialsSectionCopy } from '../copy';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Bio Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bio Ecosystem */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800">
            {/* Ecosystem Web */}
            {[...Array(20)].map((_, i) => {
              const x1 = Math.random() * 1200;
              const y1 = Math.random() * 800;
              const x2 = Math.random() * 1200;
              const y2 = Math.random() * 800;
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#10B981"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                />
              );
            })}
            
            {/* Bio Nodes */}
            {[...Array(15)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 1200}
                cy={Math.random() * 800}
                r={3 + Math.random() * 5}
                fill="#14B8A6"
                opacity="0.6"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3
                }}
              />
            ))}
          </svg>
        </div>
        
        {/* Floating Bio Cells */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-emerald-400/20 via-green-300/15 to-teal-400/25 rounded-full"
            style={{
              width: `${80 + Math.random() * 160}px`,
              height: `${60 + Math.random() * 120}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: `${40 + Math.random() * 60}% ${50 + Math.random() * 50}% ${30 + Math.random() * 70}% ${60 + Math.random() * 40}%`
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.3, 0.6, 0.4, 0.3]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8
            }}
          />
        ))}
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
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent">
              {testimonialsSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {testimonialsSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Bio Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm border border-emerald-400/30 rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 group-hover:border-emerald-400/60">
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
                            opacity="0.8"
                          />
                        </g>
                      );
                    })}
                  </svg>
                </div>
                
                {/* Quote Icon */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-full flex items-center justify-center border border-emerald-400/40"
                  >
                    <svg className="w-6 h-6 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Testimonial Content */}
                <div className="relative z-10 mb-8">
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* Client Info */}
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    {/* Bio Glow for Avatar */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/40 to-green-400/40 rounded-full blur-md" />
                    
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-400/50">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Bio Membrane Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20"
                        animate={{
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  <div>
                    <h4 className="text-white font-semibold text-lg group-hover:text-emerald-300 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-emerald-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Bio Particles */}
                <div className="absolute inset-0">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-15, 15, -15],
                        x: [-10, 10, -10],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.5, 1.2, 0.5]
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 3
                      }}
                    />
                  ))}
                </div>
                
                {/* Bio Border Animation */}
                <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/30 rounded-3xl transition-all duration-500" />
                
                {/* Rating Stars */}
                <div className="absolute top-6 right-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Klien Puas" },
              { number: "98%", label: "Tingkat Kepuasan" },
              { number: "24/7", label: "Dukungan Berkelanjutan" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                {/* Bio Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6 transition-all duration-500 group-hover:border-emerald-400/60">
                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent mb-2"
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-300 group-hover:text-emerald-300 transition-colors duration-300">
                    {stat.label}
                  </p>
                  
                  {/* Bio Particles */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-60"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale: [0.5, 1, 0.5],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 3 + Math.random(),
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: Math.random() * 2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}