import React from 'react';

export default function ProductShowcase() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400 mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the power of our platform with interactive demos
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Mockup */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50">
              {/* Mockup Screen */}
              <div className="bg-black rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">dashboard.tech</div>
                </div>
                
                {/* Mockup Content */}
                <div className="space-y-3">
                  <div className="h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded animate-pulse"></div>
                  <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded"></div>
                    <div className="h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                    <div className="h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Product Features */}
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Intuitive Interface</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Clean, modern design that makes complex tasks simple and enjoyable.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Analytics</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Get instant insights with live data visualization and reporting.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Automation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI-powered workflows that adapt to your business needs automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 