
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceBlock: React.FC<{ 
  category: string, 
  title: string, 
  desc: string, 
  points: string[], 
  killer: string,
  image: string,
  index: string,
  link: string
}> = ({ category, title, desc, points, killer, image, index, link }) => (
  <div className="service-card group border-2 border-black p-6 md:p-12 bg-white shadow-xl hover:shadow-2xl transition-all rounded-[2rem] md:rounded-[3rem] overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-4xl md:text-5xl font-black text-orange">{index}</span>
          <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-black">{category}</span>
        </div>
        
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-black">{title}</h3>
          <p className="text-lg md:text-xl text-black font-bold leading-relaxed italic border-l-4 md:border-l-8 border-orange pl-4 md:pl-6">
            {desc}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-8">
          {points.map((p, i) => (
            <li key={i} className="flex items-center gap-3 text-[11px] md:text-sm font-black uppercase tracking-widest text-black">
              <div className="w-2 h-2 bg-orange rounded-full"></div>
              {p}
            </li>
          ))}
        </ul>

        <div className="killer-arg bg-zinc-50 p-6 md:p-8 rounded-2xl border-2 border-black/5">
          <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-orange mb-3 md:mb-4">L'Argument Tueur</p>
          <p className="text-lg md:text-xl font-bold text-black leading-snug">"{killer}"</p>
        </div>

        <Link 
          to={link} 
          className="inline-flex items-center justify-center w-full sm:w-auto gap-4 px-8 py-5 bg-black text-white rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-[0.2em] hover:bg-orange hover:text-black transition-all group/btn"
        >
          Découvrir l'expertise
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-2xl order-1 lg:order-2">
        <img src={image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={title} referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
      </div>
    </div>
  </div>
);

const ServicesEditorial: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12">
      <ServiceBlock 
        index="01"
        category="Studio de Création"
        title="Le Studio"
        desc="Production de podcasts, spots radio et doublage. Nous transformons votre communication en une expérience sonore immersive et haut de gamme."
        points={["Podcasts de Marque", "Spots Radio & Pub", "Doublage & Voix-off", "Identité Sonore"]}
        killer="Confiez votre image à une équipe qui vient de la radio et de la télé, pas à des amateurs."
        image="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800"
        link="/studio"
      />

      <ServiceBlock 
        index="02"
        category="Régie Publicitaire"
        title="Média & Régie"
        desc="Profitez de notre réseau de podcasts et de nos partenaires radio. Nous intégrons vos messages publicitaires au cœur des contenus les plus suivis."
        points={["Sponsoring Natif", "Spots Radio & Audio", "Épisodes Partenaires", "Régie Publicitaire"]}
        killer="Ne cherchez pas une audience, louez la nôtre. Une communauté engagée et captive."
        image="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800"
        link="/media-regie"
      />

      <ServiceBlock 
        index="03"
        category="Pôle Formation"
        title="L'Académie"
        desc="Nous nous déplaçons chez vous pour vous apprendre à créer, enregistrer et monter vos propres contenus audio comme des pros."
        points={["Technique Prise de son", "Écriture & Pose de voix", "Montage & Mixage", "Coaching Lancement"]}
        killer="Apprenez avec ceux qui font l'audience, pas avec des théoriciens."
        image="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800"
        link="/academy"
      />
    </div>
  );
};

export default ServicesEditorial;
