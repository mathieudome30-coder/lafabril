
import React from 'react';

const PodcastCard: React.FC<{ 
  title: string, 
  subs: string, 
  desc: string, 
  image: string,
  category: string
}> = ({ title, subs, desc, image, category }) => (
  <div className="relative group cursor-pointer overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl">
    <div className="aspect-[4/5] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <span className="text-xs font-black uppercase tracking-widest text-orange mb-2 block">{category}</span>
      <h4 className="text-3xl font-serif italic mb-2">{title}</h4>
      <p className="text-sm text-zinc-300 mb-4 line-clamp-2">{desc}</p>
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-zinc-800"></div>
          ))}
        </div>
        <span className="text-xs font-bold text-zinc-400">{subs} auditeurs fidèles</span>
      </div>
    </div>
  </div>
);

const PodcastShowcase: React.FC = () => {
  return (
    <section id="media" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Nos Médias Propriétaires</h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Nous sommes nos premiers clients. Nos podcasts cumulent une audience qualifiée et engagée, prête à écouter vos messages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <PodcastCard 
            title="La Petite Histoire"
            category="Culture & Histoire"
            subs="40 000+"
            desc="Les récits fascinants qui ont marqué le temps, racontés par Florent Mounier. Un format immersif et addictif."
            image="https://picsum.photos/seed/history/800/1000"
          />
          <PodcastCard 
            title="Les Aventuriers"
            category="Société & Aventure"
            subs="15 000+"
            desc="À la rencontre de ceux qui osent, qui explorent et qui changent les codes. Des interviews sans filtre."
            image="https://picsum.photos/seed/adventure/800/1000"
          />
        </div>
      </div>
    </section>
  );
};

export default PodcastShowcase;
