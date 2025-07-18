'use client';

import { motion } from 'framer-motion';
import { servicesSectionCopy } from '../copy';

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Bio Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Organic Membrane */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-green-900/20" />
        
        {/* Bio Cells */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-emerald-400/10 via-green-300/5 to-teal-400/15 rounded-full"
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: `${50 + Math.random() * 50}% ${60 + Math.random() * 40}% ${40 + Math.random() * 60}% ${30 + Math.random() * 70}%`
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4
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
              {servicesSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {servicesSectionCopy.description}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesSectionCopy.services.map((service, index) => (
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
              
              <div className="relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 group-hover:border-emerald-400/60">
                {/* Neural Network Background */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <svg className="w-full h-full" viewBox="0 0 300 400">
                    {[...Array(6)].map((_, i) => {
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
                
                {/* Service Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Bio Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 p-3 bg-gradient-to-br from-emerald-600/80 to-green-600/80 backdrop-blur-sm rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={service.iconPath}
                      />
                    </svg>
                  </div>
                  
                  {/* Bio Particles */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
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
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
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
            
            {/* Neural Network Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <svg className="w-full h-full" viewBox="0 0 200 60">
                {[...Array(4)].map((_, i) => {
                  const x1 = Math.random() * 200;
                  const y1 = Math.random() * 60;
                  const x2 = Math.random() * 200;
                  const y2 = Math.random() * 60;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#ffffff"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  );
                })}
              </svg>
            </div>
            
            <span className="relative z-10">{servicesSectionCopy.buttonText}</span>
            
            {/* Organic Border Animation */}
            <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/50 rounded-lg transition-all duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}