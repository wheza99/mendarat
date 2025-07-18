"use client";

import { motion } from "framer-motion";
import { testimonialsSectionCopy } from "../copy";

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900 via-black to-gray-900 overflow-hidden">
      {/* Gaming Ripple Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.4),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.4),transparent_50%)]" />
      </div>

      {/* Digital Starfield */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gaming Ripple Effects */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-purple-400/20 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              width: "200px",
              height: "200px",
              marginLeft: "-100px",
              marginTop: "-100px",
            }}
            animate={{
              scale: [1, 3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
            }}
          />
        ))}
      </div>

      {/* Floating Gaming Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Digital Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-400" />
        <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-cyan-400" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400" />
        <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-cyan-400" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400" />
        <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-cyan-400" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400" />
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-cyan-400" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {testimonialsSectionCopy.heading}
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-12">
              {testimonialsSectionCopy.description}
            </p>

            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <img
                src={testimonialsSectionCopy.mainImage}
                alt={testimonialsSectionCopy.mainImageAlt}
                className="relative w-full h-80 object-cover rounded-2xl border border-white/10 group-hover:border-purple-400/50 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                {/* Gaming Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <motion.svg
                        key={starIndex}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + starIndex * 0.1 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <span className="text-purple-400 font-semibold text-sm">
                    Gaming Expert
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-white/80 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full border-2 border-purple-400/50 group-hover:border-purple-400 transition-colors duration-300"
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-cyan-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Gaming Metrics */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gradient-to-r from-purple-600/80 to-cyan-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⚡ VERIFIED
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Data Stream Effects */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-px h-6 bg-gradient-to-b from-cyan-400 to-transparent opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${30 + i * 40}%`,
                        top: 0,
                      }}
                      animate={{
                        y: [0, 200],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.5,
                        repeatDelay: 2,
                      }}
                    />
                  ))}
                </div>

                {/* Scanning Lines */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, 150],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;