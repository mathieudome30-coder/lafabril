
import React from 'react';

const ServiceCard: React.FC<{ 
  id: string, 
  title: string, 
  icon: React.ReactNode, 
  items: string[], 
  accent: string,
  killer: string 
}> = ({ id, title, icon, items, accent, killer }) => (
  <div id={id} className="group relative bg-zinc-900 rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300">
    <div className={`w-14 h-14 rounded-2xl ${accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-6 italic">{title}</h3>
    <ul className="space-y-4 mb-8">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
          <svg className={`w-5 h-5 ${accent.replace('bg-', 'text-')} shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium">{item}</span>
        </li>
      ))}
    </ul>
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">L'Argument Tueur</p>
      <p className="text-sm font-serif italic text-white/90 leading-relaxed">"{killer}"</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="studio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Nos Piliers d'Expertise</h2>
            <p className="text-lg text-zinc-600">
              De la conception éditoriale à la formation technique, nous couvrons l'ensemble du spectre audio avec une approche résolument journalistique.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-orange font-black text-8xl opacity-10 leading-none select-none">STUDIO</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            id="studio-b2b"
            title="Le Studio B2B / B2G"
            accent="bg-zinc-800"
            killer="Confiez votre image à une équipe qui vient de la radio et de la télé, pas à des amateurs."
            items={[
              "Podcasts de Marque (Clé en main)",
              "Communication Interne (Podcast vs Newsletter)",
              "Identité Sonore & Univers de Marque",
              "Conception éditoriale sur mesure"
            ]}
            icon={<svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>}
          />
          <ServiceCard 
            id="media"
            title="Média & Régie"
            accent="bg-orange"
            killer="Ne cherchez pas une audience, louez la nôtre. Une communauté engagée et captive."
            items={[
              "Sponsoring Natif (Host-Read)",
              "Épisodes Partenaires Spéciaux",
              "Régie publicitaire Podcasts Propriétaires",
              "Placement de produit intelligent"
            ]}
            icon={<svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>}
          />
          <ServiceCard 
            id="academie"
            title="L'Académie"
            accent="bg-zinc-100"
            killer="Apprenez avec ceux qui font 90 000 écoutes par mois, pas avec des théoriciens."
            items={[
              "Formations Techniques (Son/Montage)",
              "Ecriture Audio & Pose de voix",
              "Coaching Stratégique Lancement",
              "Techniques d'interview pro"
            ]}
            icon={<svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
