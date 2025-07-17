"use client";

import React fromreact;
import { Button } from@/components/ui/button";
import { Badge } from @/components/ui/badge";

const ecoProducts = [
  { icon: 🌱", title: Bamboo Products", description: "Produk ramah lingkungan dari bambu yang sustainable dan biodegradable},
  { icon: "♻️", title: "Recycled Materials", description: Barang daur ulang dengan kualitas premium dan desain modern},
  { icon: "🌿, title: "Organic Food, description: "Makanan organik segar langsung dari petani lokal},
  { icon:💚itle: "Eco Fashion,description: "Pakaian sustainable dari bahan ramah lingkungan" },
];

const initiatives = [
  { name: "Tree Planting Program, impact: "1000ees Planted", date: "Setiap Bulan", location: Seluruh Indonesia },  { name: "Plastic Free Campaign, impact: "50,000 Plastic Reduced", date: "Ongoing", location: "Jakarta & Surabaya" },
  { name:Community Garden", impact: "100 Gardens Created, date:Weekly", location:Komunitas Lokal" },
];

const testimonials = [object Object]   name:SariIndah,    avatar: 🌱",
    role: Eco Enthusiast",
    content:Produk-produk di sini benar-benar ramah lingkungan! Kualitasnya bagus dan saya merasa berkontribusi untuk bumi yang lebih baik.",
  },
 [object Object]  name: "Budi Santoso,    avatar:♻️le: Environmental Activist",
    content:Inisiatif mereka luar biasa! Program penanaman pohon dan kampanye bebas plastik sangat inspiratif dan berdampak nyata.",
  },
 [object Object]   name:MayaPutri,    avatar:🌿    role: Organic Farmer",
    content: "Sebagai petani organik, saya bangga bisa berkontribusi di sini. Masyarakat semakin sadar akan pentingnya makanan sehat.",
  },
];

const Theme222: React.FC = () => [object Object] return (
    <div className="min-h-screen bg-gradient-to-b from-green-50via-emerald-100 to-green-200 relative overflow-hidden text-green-900">
      {/* Natural Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Organic Shapes */}
        <svg className="absolute top0left-0-full h-64viewBox="0040320none>
          <path d="M0320360280 72030Q180,3201440,280144032020#10981illOpacity=0.1/>
          <path d="M020606072028080,30144060L144032002059669fillOpacity="015/>
        </svg>
        
  [object Object]/* Floating Leaves */}
        <svg className="absolute top-20 left-10 w-16 h-16animate-float-slowviewBox=0 06464none>
          <path d=M328Q481656,32 Q48,483256Q16,48816,1632,8ill="#10981illOpacity=0.3/>
          <path d=M3212Q44185032Q44463252Q2461432Q2018321259669illOpacity="00.4/>
        </svg>
        
        <svg className="absolute top-40right-20020imate-floatviewBox=0 08080none>
          <path d=M4010Q60207040Q60604070Q2601040Q2020401059669illOpacity=025/>
          <path d=M4015Q55226240Q55584065 Q2558180252215#1981fillOpacity="035/>
        </svg>
        
        {/* Tree Silhouettes */}
        <svg className=absolute bottom0left-0-full h-32viewBox="004128none>        {[...Array(8)].map((_, i) => {
            const x = 80 + i * 160;
            const h = 40 + Math.random() * 30;
            return (
              <g key={i}>
                <path d={`M${x},128 L$[object Object]x-15},${128-h} L$[object Object]x+15},${128-h} Z`} fill="#59669 fillOpacity="0.3" />
                <path d={`M${x},128 L${x-10},${128h+10 L${x+1128+10 fill="#10981 fillOpacity="0.4" />
                <rect x={x-2 y={128-h} width="4height=hill="#65f46llOpacity="0.5>
              </g>
            );
          })}
        </svg>
        
        {/* Grass Pattern */}
        <svg className=absolute bottom0left-0-full h-16 viewBox=044064none>    object Object][...Array(60].map((_, i) => {
            const x = 20 + i * 24;
            const h =8 + Math.random() * 12;
            return (
              <rect key={i} x={x} y={64-h} width="2height={h} fill="#10981 fillOpacity="0.4" rx=1/>
            );
          })}
        </svg>
        
        {/* Sun Rays */}
        <svg className="absolute top-10right-102424imate-pulseviewBox=0 09696="none">
          <circle cx=48=480fbbf24illOpacity=0.6/>
          {[...Array(8)].map((_, i) => {
            const angle = (i *45) * (Math.PI /180
            const x18 + Math.cos(angle) * 30;
            const y18 + Math.sin(angle) * 30;
            const x28 + Math.cos(angle) * 40;
            const y28 + Math.sin(angle) * 40;
            return (
              <line key=[object Object]i} x1=[object Object]x1 y1=object Object]y1x2} y2={y2 stroke=#fbbf24h=2 strokeOpacity="0.4/>
            );
          })}
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10    <div className=container mx-auto px-4 flex items-center justify-between">
          <div className=flexitems-center space-x-3>
            <div className="w-12-12 bg-gradient-to-br from-green-50ald-60nded-xl flex items-center justify-center border-2-green-400             <span className="text-2xl">🌱</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
              EcoLife Indonesia
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8           <a href="#beranda" className="text-green-700hover:text-emerald-600emibold transition-colors">Beranda</a>
            <a href="#products" className="text-green-700hover:text-emerald-600emibold transition-colors">Produk</a>
            <a href="#initiatives" className="text-green-700hover:text-emerald-600emibold transition-colors">Inisiatif</a>
            <a href="#testimonials" className="text-green-700hover:text-emerald-600emibold transition-colors">Testimoni</a>
          </nav>
          <Button className="bg-gradient-to-r from-green-500-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0ont-bold shadow-lg">
            Join Eco Movement
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className=relative z-10t-center">
        <div className=container mx-auto px-4>
          <Badge className="bg-green-500/20 text-green-700 border-green-400/30 mb-4 font-bold text-lg">
            🌱 Sustainable Living
          </Badge>
          <h1className=text-5l md:text-7-extrabold leading-tight mb-6gradient-to-r from-green-60emerald-60to-green-700 bg-clip-text text-transparent drop-shadow-xl>           EcoLife Indonesia
          </h1>
          <p className=text-xl md:text-2text-green-800 max-w-2xl mx-auto mb-8 font-medium>
            Hidup berkelanjutan dimulai dari pilihan kecil. Temukan produk ramah lingkungan, dukung inisiatif hijau, dan berkontribusi untuk masa depan yang lebih baik.
          </p>
          <div className=flex flex-col sm:flex-row gap-4 justify-center">
            <Button size=lgsName="bg-gradient-to-r from-green-500-emerald-600 hover:from-green-600 hover:to-emerald-700text-white px-8 py-4g border-0ont-bold shadow-lg">
              Explore Products
            </Button>
            <Button size="lg variant="outline" className="border-green-600t-green-70hover:bg-green-500/10 px-8 py-4 text-lg font-bold">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Eco Products */}
      <section id="products" className=relative z-10py-16gradient-to-b from-white/80to-green-100/90">
        <div className=container mx-auto px-4     <h2className=text-3xl md:text-4bold mb-8text-green-700nter">Eco-Friendly Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8>
            {ecoProducts.map((product, i) => (
              <div key={i} className=bg-white/80ed-2 p-6 flex flex-col items-center border border-green-400ow-lg hover:border-emerald-400/40 transition-all duration-300>
                <div className=text-5b-4nimate-bounce-slow>{product.icon}</div>
                <div className=text-xl font-bold text-emerald-600>{product.title}</div>
                <div className="text-green-700medium text-center text-sm">{product.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section id="initiatives" className=relative z-10 py-16    <div className=container mx-auto px-4     <h2className=text-3xl md:text-4bold mb-8t-emerald-700ter">Environmental Initiatives</h2>
          <div className=grid md:grid-cols-3 gap-8
            {initiatives.map((initiative, i) => (
              <div key={i} className=bg-gradient-to-br from-green-400/30 to-emerald-500ded-2xl p-8 border border-green-400ow-lg hover:border-emerald-400/40 transition-all duration-300
                <h3 className=text-xl font-bold text-emerald-6002initiative.name}</h3
                <p className=text-green-700 mb-2">{initiative.impact}</p>
                <p className=text-green-6002>{initiative.date} - {initiative.location}</p>
                <div className="text-2nt-bold text-green-600{initiative.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className=relative z-10py-16gradient-to-b from-green-100/80 to-white/90">
        <div className=container mx-auto px-4     <h2className=text-3xl md:text-4bold mb-8t-emerald-600-center">Community Testimonials</h2>
          <div className=grid md:grid-cols-3gap-8
        object Object]testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/80ded-2l p-6der border-emerald-400/20 shadow-lg flex flex-col items-center hover:border-green-400/40 transition-all duration-300
                <div className=text-4b-4 animate-bounce">{testimonial.avatar}</div>
                <div className=text-lg font-bold text-green-700mb-1">{testimonial.name}</div>
                <div className="text-emerald-60ext-sm mb-3">{testimonial.role}</div>
                <div className=text-green-700ext-center text-sm">"{testimonial.content}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=relative z-10t-center">
        <div className=container mx-auto px-4     <h2className=text-3xl md:text-4ont-bold mb-4t-green-700 Make a Difference?</h2>
          <p className="text-lg text-green-800 mb-8 max-w-2xl mx-auto">
            Bergabung dengan ribuan orang yang sudah memilih hidup berkelanjutan. Setiap pembelian dan aksi kecil berkontribusi untuk bumi yang lebih hijau!
          </p>
          <Button size=lgsName="bg-gradient-to-r from-green-500-emerald-600 hover:from-green-600 hover:to-emerald-700ext-white px-10 py-4 text-xl font-bold shadow-xl">
            Start Your Eco Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className=relative z-108-center text-green-700ite/80der-t border-green-400/10">
        <div className=container mx-auto px-4    <div className=flex flex-col md:flex-row items-center justify-between gap-4>
            <div className=flex items-center gap-2 justify-center md:justify-start>             <span className=text-xl">🌱</span>
              <span className="font-bold">EcoLife Indonesia</span>
            </div>
            <div className="text-sm">&copy; 2024 EcoLife Indonesia. All rights reserved.</div>
            <div className="flex gap-4 justify-center md:justify-end>
              <a href="# className="hover:text-emerald-600 transition-colors">Instagram</a>
              <a href="# className="hover:text-emerald-600 transition-colors">Facebook</a>
              <a href="# className="hover:text-emerald-600 transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-slow {
       0ansform: translateY(0) rotate(0deg); }
50ansform: translateY(-20) rotate(5g); }
  100ansform: translateY(0) rotate(0deg); }
        }
        @keyframes float {
       0ansform: translateY(0x); }
50ansform: translateY(-15 }
  100ansform: translateY(0
        }
        .animate-float-slow [object Object]animation: float-slow 8s ease-in-out infinite; }
        .animate-float [object Object] animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Theme222; 