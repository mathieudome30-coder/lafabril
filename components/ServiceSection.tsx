
import React from 'react';

const Block: React.FC<{ 
  num: string, 
  title: string, 
  desc: string, 
  items: string[], 
  image: string,
  reverse?: boolean 
}> = ({ num, title, desc, items, image, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center max-w-7xl mx-auto w-full`}>
    <div className="flex-1 space-y-8">
      <div className="flex items-baseline gap-4">
        <span className="text-7xl font-black text-orange">{num}</span>
        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">{title}</h3>
      </div>
      <p className="text-xl text-gray-500 font-medium leading-relaxed">
        {desc}
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-black">
            <div className="w-2 h-2 bg-orange rounded-full"></div>
            {item}
          </li>
        ))}
      </ul>
      <div className="pt-6">
        <a href="#contact" className="inline-flex items-center gap-4 font-black uppercase tracking-widest text-xs border-b-4 border-orange pb-2 hover:bg-orange transition-all px-2">
          Démarrer un projet <span className="text-lg">→</span>
        </a>
      </div>
    </div>
    <div className="flex-1 w-full aspect-video lg:aspect-square rounded-[3rem] overflow-hidden bg-gray-100 relative group">
       <img src={image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" alt={title} />
       <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
    </div>
  </div>
);

const ServiceSection: React.FC = () => {
  return (
    <div className="space-y-40">
      <Block 
        num="01"
        title="Studio de Production"
        desc="Nous créons des podcasts de marque et des solutions de communication interne pour transformer votre message en aventure audio."
        items={["Podcasts de Marque", "Communication Interne", "Identité Sonore", "Brand Content"]}
        image="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800"
      />
      
      <Block 
        num="02"
        title="Média & Régie"
        reverse
        desc="Propulsez votre marque auprès de notre communauté engagée de 90 000 auditeurs mensuels via nos podcasts phares."
        items={["Sponsoring Natif", "Host-Read", "Épisodes Partenaires", "Régie Publicitaire"]}
        image="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800"
      />

      <Block 
        num="03"
        title="L'Académie"
        desc="Apprenez les secrets de la production audio avec des professionnels en activité. De la technique à l'éditorial."
        items={["Prise de Son", "Montage & Mixage", "Pose de Voix", "Stratégie de Lancement"]}
        image="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800"
      />
    </div>
  );
};

export default ServiceSection;
