import React from 'react';

export default function ProductShowcase() {
  const products = [
    {
      name: "Bamboo Toothbrush",
      price: "$4.99",
      category: "Personal Care",
      eco_rating: "A+",
      materials: ["Bamboo", "Plant-based bristles"],
      image: "🪥",
      status: "bestseller"
    },
    {
      name: "Reusable Water Bottle",
      price: "$24.99",
      category: "Kitchen",
      eco_rating: "A+",
      materials: ["Stainless Steel", "BPA Free"],
      image: "💧",
      status: "popular"
    },
    {
      name: "Organic Cotton Tote",
      price: "$19.99",
      category: "Shopping",
      eco_rating: "A",
      materials: ["Organic Cotton", "Natural Dyes"],
      image: "🛍️",
      status: "new"
    },
    {
      name: "Beeswax Wraps",
      price: "$12.99",
      category: "Kitchen",
      eco_rating: "A+",
      materials: ["Beeswax", "Organic Cotton", "Jojoba Oil"],
      image: "🍯",
      status: "limited"
    },
    {
      name: "Bamboo Cutlery Set",
      price: "$15.99",
      category: "Kitchen",
      eco_rating: "A",
      materials: ["Bamboo", "Food-grade finish"],
      image: "🍴",
      status: "bestseller"
    },
    {
      name: "Plant-based Soap",
      price: "$8.99",
      category: "Personal Care",
      eco_rating: "A+",
      materials: ["Plant Oils", "Essential Oils", "No Palm Oil"],
      image: "🧼",
      status: "popular"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'bestseller': return 'text-green-600';
      case 'popular': return 'text-emerald-600';
      case 'new': return 'text-teal-600';
      case 'limited': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'bestseller': return 'bg-green-100 border-green-300';
      case 'popular': return 'bg-emerald-100 border-emerald-300';
      case 'new': return 'bg-teal-100 border-teal-300';
      case 'limited': return 'bg-orange-100 border-orange-300';
      default: return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50/50 to-emerald-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6">
            SUSTAINABLE PRODUCTS
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Discover our collection of eco-friendly products that make a difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm ${getStatusBg(product.status)}`}
            >
              {/* Product image */}
              <div className="text-4xl mb-4">{product.image}</div>
              
              <h3 className="text-xl font-bold text-green-800 mb-4">
                {product.name}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-green-600">Price:</span>
                  <span className="text-green-800 font-bold">{product.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600">Category:</span>
                  <span className="text-green-800 font-bold">{product.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600">Eco Rating:</span>
                  <span className="text-green-800 font-bold">{product.eco_rating}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-green-700 font-semibold mb-2">Materials:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, materialIndex) => (
                    <span key={materialIndex} className="px-2 py-1 bg-green-200 text-green-700 text-xs rounded">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Status badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(product.status)}`}>
                {product.status.toUpperCase()}
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-green-500/25 transition-all duration-300">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Product stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-green-700">Eco Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-green-700">Plastic Free</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">50K+</div>
              <div className="text-green-700">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">A+</div>
              <div className="text-green-700">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 