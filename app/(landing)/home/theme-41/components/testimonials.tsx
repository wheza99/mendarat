"use client";

import { motion } from "framer-motion";
import { testimonialsSectionCopy } from "../copy";

const Testimonials = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Cyber Ripple Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        
        {/* Digital Starfield */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Cyber Ripple Effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute rounded-full border border-cyan-400/20"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Floating Cyber Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {testimonialsSectionCopy.heading.split('\n').map((line, index) => (
              <span key={index} className={index === 0 ? "block" : "block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"}>
                {line}
              </span>
            ))}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {testimonialsSectionCopy.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm h-full">
                {/* Digital Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400/50 z-10" />
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cyan-400/50 z-10" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-cyan-400/50 z-10" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-400/50 z-10" />
                
                {/* Security Rating */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < 5 ? 'bg-cyan-400' : 'bg-gray-600'
                        }`}
                        animate={{
                          scale: i < 5 ? [1, 1.3, 1] : 1,
                          opacity: i < 5 ? [0.7, 1, 0.7] : 0.3,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 flex items-center justify-center">
                    <span className="text-cyan-400 text-2xl font-bold">"</span>
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-gray-300 text-lg mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/30"
                    />
                    
                    {/* Status Indicator */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-xs font-mono">Cybersecurity Expert</p>
                  </div>
                  
                  {/* Verification Badge */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400/20 to-cyan-400/20 border border-green-400/30 flex items-center justify-center">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <span className="text-green-400 text-xs font-mono mt-1">VERIFIED</span>
                  </div>
                </div>
                
                {/* Security Metrics */}
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-cyan-400 font-bold text-sm">99.9%</div>
                      <div className="text-gray-400 text-xs">Uptime</div>
                    </div>
                    <div>
                      <div className="text-purple-400 font-bold text-sm">24/7</div>
                      <div className="text-gray-400 text-xs">Support</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-bold text-sm">0</div>
                      <div className="text-gray-400 text-xs">Breaches</div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Data Stream Effect */}
                <motion.div
                  className="absolute left-0 top-1/2 w-px h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    scaleY: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                
                {/* Scanning Line */}
                <motion.div
                  className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, 300, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-6xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Client Trust Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Client Satisfaction", value: "98.5%", color: "cyan", icon: "😊" },
                { label: "Response Time", value: "< 1min", color: "purple", icon: "⚡" },
                { label: "Security Score", value: "A+", color: "green", icon: "🛡️" },
                { label: "Retention Rate", value: "95%", color: "yellow", icon: "🤝" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{metric.icon}</div>
                  <div className={`text-2xl font-bold mb-1 text-${metric.color}-400`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-300 text-sm">{metric.label}</div>
                  
                  {/* Status Indicator */}
                  <div className="mt-3 flex items-center justify-center space-x-2">
                    <div className={`w-2 h-2 bg-${metric.color}-400 rounded-full animate-pulse`} />
                    <span className="text-xs text-gray-400 font-mono">LIVE</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-6">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "ISO 27001", status: "Certified" },
                { name: "SOC 2", status: "Compliant" },
                { name: "GDPR", status: "Compliant" },
                { name: "HIPAA", status: "Certified" },
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/50"
                >
                  <div className="text-cyan-400 font-bold text-sm mb-1">{cert.name}</div>
                  <div className="text-green-400 text-xs">{cert.status}</div>
                  <div className="mt-2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;