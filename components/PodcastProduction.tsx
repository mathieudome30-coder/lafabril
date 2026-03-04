
import React from 'react';

const OfferCard: React.FC<{ label: string, title: string, img: string, desc: string }> = ({ label, title, img, desc }) => (
  <div className="bg-white border border-gray-100 p-2 group hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
    <div className="relative overflow-hidden aspect-[4/3]">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <span className="vertical-text text-[10px] font-black uppercase tracking-[0.4em] text-white bg-black py-4 px-2">{label}</span>
      </div>
      <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={title} />
    </div>
    <div className="p-8 flex-grow">
      <h3 className="text-xl font-black uppercase tracking-tight mb-4">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
      <a href="#contact" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-orange hover:border-orange transition-all">
        Learn More
      </a>
    </div>
  </div>
);

const PodcastProduction: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
        <span className="section-title">The best in class</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Nos Solutions Audio</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <OfferCard 
          label="RECORDING"
          title="Podcast de Marque"
          img="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=400"
          desc="De la conception éditoriale à la diffusion HD. On aide les marques à raconter leur histoire ou valoriser leur territoire."
        />
        <OfferCard 
          label="POST PROD"
          title="Com. Interne"
          img="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400"
          desc="Humanisez votre entreprise avec le podcast. Remplacez vos newsletters par un format authentique et accessible partout."
        />
        <OfferCard 
          label="STRATEGY"
          title="Régie & Sponsoring"
          img="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400"
          desc="Louez notre audience de 90 000 auditeurs mensuels. Sponsoring natif 'Host-Read' intégré dans nos médias phares."
        />
      </div>
    </div>
  );
};

export default PodcastProduction;
