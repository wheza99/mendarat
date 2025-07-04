'use client'

import React from 'react'

export default function DreamCore() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-dream-wave"></div>
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-cyan-400/10 animate-dream-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
        
        {/* Floating Energy Rings */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-cyan-400/30 animate-dream-spin"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${20 + i * 10}%`,
              left: `${10 + i * 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + i}s`
            }}
          ></div>
        ))}
        
        {/* Orbiting Data Points */}
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-dream-orbit"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Core Title */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-dream-glow">
              Neural Core
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The central processing unit that orchestrates digital consciousness across infinite virtual realms
          </p>
        </div>

        {/* Central Core Visualization */}
        <div className="relative mb-20">
          <div className="relative w-80 h-80 mx-auto">
            {/* Core Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-dream-pulse p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2 animate-dream-flicker">∞</div>
                  <div className="text-sm text-gray-300">Processing</div>
                </div>
              </div>
            </div>
            
            {/* Rotating Energy Rings */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-dream-spin"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + i}s`,
                  transform: `scale(${1 + i * 0.2})`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Real-time Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { label: 'Processing Power', value: '847.2', unit: 'PFLOPS', color: 'cyan' },
            { label: 'Memory Banks', value: '∞', unit: 'Exabytes', color: 'purple' },
            { label: 'Neural Networks', value: '12,847', unit: 'Active', color: 'pink' },
            { label: 'Dream States', value: '94.7%', unit: 'Stable', color: 'indigo' }
          ].map((metric, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
              <div className="mb-4">
                <div className={`text-3xl font-bold text-${metric.color}-400 mb-1 animate-dream-count`}>
                  {metric.value}
                </div>
                <div className="text-gray-400 text-sm">{metric.unit}</div>
              </div>
              <div className="text-gray-300 font-medium">{metric.label}</div>
              
              {/* Progress Bar */}
              <div className="mt-3 w-full bg-gray-800 rounded-full h-2">
                <div 
                  className={`h-2 bg-gradient-to-r from-${metric.color}-400 to-${metric.color}-600 rounded-full animate-dream-progress`}
                  style={{ width: metric.value === '∞' ? '100%' : `${Math.random() * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Neural Network Status */}
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
          <h3 className="text-2xl font-bold text-white mb-6">Neural Network Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Alpha Layer', status: 'Active', load: '87%', color: 'green' },
              { name: 'Beta Layer', status: 'Processing', load: '92%', color: 'blue' },
              { name: 'Gamma Layer', status: 'Optimizing', load: '76%', color: 'yellow' }
            ].map((layer, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${layer.color}-500/20 border-2 border-${layer.color}-400 flex items-center justify-center animate-dream-pulse`}>
                  <div className={`w-8 h-8 rounded-full bg-${layer.color}-400 animate-dream-glow`}></div>
                </div>
                <div className="text-white font-semibold">{layer.name}</div>
                <div className={`text-${layer.color}-400 text-sm`}>{layer.status}</div>
                <div className="text-gray-400 text-sm">Load: {layer.load}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 