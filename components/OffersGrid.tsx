
import React from 'react';

const BentoCard: React.FC<{ num: string, title: string, desc: string, icon?: React.ReactNode, className?: string }> = ({ num, title, desc, icon, className }) => (
  <div className={`bento-card bg-[#111] p-10 border border-white/5 hover:border-orange/30 group ${className}`}>
    <div className="flex justify-between items-start mb-12">
      <span className="text-4xl font-black text-orange/20 group-hover:text-orange transition-colors duration-500">{num}</span>
      {icon && <div className="text-orange">{icon}</div>}
    </div>
    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">{title}</h3>
    <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">{desc}</p>
    <div className="mt-12 flex justify-end">
       <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-orange group-hover:text-black transition-all">→</div>
    </div>
  </div>
);

const OffersGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-20">
        <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
          Empowering <span className="text-orange italic">Audio</span> <br/>Technology
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* LE STUDIO */}
        <BentoCard 
          num="01"
          title="Le Studio B2B"
          desc="Podcast de Marque (Brand Content) & Communication Interne. On aide les marques à raconter leur histoire via des récits immersifs."
          className="md:col-span-8"
        />
        
        {/* MEDIA */}
        <BentoCard 
          num="02"
          title="Régie Média"
          desc="90 000 auditeurs mensuels. Sponsoring natif host-read."
          className="md:col-span-4 bg-orange !text-black"
        />

        {/* ACADEMY */}
        <BentoCard 
          num="03"
          title="L'Académie"
          desc="Formations techniques & éditoriales. Apprenez de ceux qui font 90 000 écoutes par mois."
          className="md:col-span-4"
        />

        {/* IMAGE / DECO CARD */}
        <div className="md:col-span-8 bento-card relative aspect-video md:aspect-auto">
          <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all duration-700" alt="Studio" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-10 left-10">
            <p className="text-white text-2xl font-black uppercase tracking-tighter italic">Broadcast Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersGrid;
