"use client";

import { motion } from "framer-motion";
import { pricingSectionCopy } from "../copy";

const Pricing = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-purple-900 to-gray-900 overflow-hidden">
      {/* Gaming Matrix Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_70%)]" />
      </div>

      {/* Digital Matrix Rain */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            style={{
              left: `${(i * 100) / 15}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Gaming Nebula */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Floating Gaming Debris */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Digital Corner Accents */}
      <div className="absolute top-0 left-0 w-40 h-40">
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-purple-400" />
        <div className="absolute top-12 left-12 w-6 h-6 border-t border-l border-cyan-400" />
      </div>
      <div className="absolute top-0 right-0 w-40 h-40">
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-purple-400" />
        <div className="absolute top-12 right-12 w-6 h-6 border-t border-r border-cyan-400" />
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40">
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-purple-400" />
        <div className="absolute bottom-12 left-12 w-6 h-6 border-b border-l border-cyan-400" />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40">
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-purple-400" />
        <div className="absolute bottom-12 right-12 w-6 h-6 border-b border-r border-cyan-400" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {pricingSectionCopy.heading}
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {pricingSectionCopy.description}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingSectionCopy.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative group ${
                plan.recommended
                  ? "bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border-2 border-purple-400/50"
                  : "bg-white/5 border border-white/10"
              } backdrop-blur-sm rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>
                <p className="text-white/70 mb-8">{plan.description}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <svg
                        className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.recommended
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-purple-400/50"
                  }`}
                >
                  {pricingSectionCopy.selectPlanButtonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {pricingSectionCopy.customPlanText}
          </h3>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
          >
            {pricingSectionCopy.contactLink}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;