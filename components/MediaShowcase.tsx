
import React from 'react';

const MediaShowcase: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
        <div className="space-y-8 md:space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
             <span className="w-2 h-2 bg-orange rounded-full"></span>
             <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Nos Succès d'audience</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Notre preuve <br/><span className="text-orange italic">par l'exemple.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white font-bold leading-relaxed max-w-lg">
            Nous sommes nos premiers clients. Cette indépendance éditoriale nous permet de tester, innover et garantir des résultats concrets pour nos partenaires.
          </p>
          <div className="grid grid-cols-2 gap-6 md:gap-10 pt-4 md:pt-6">
            <div>
              <p className="text-5xl md:text-7xl font-black text-orange">40K</p>
              <p className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-white mt-2">Écoutes Mensuelles</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-black text-white">40K</p>
              <p className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-white mt-2">Abonnés Fidèles</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:gap-8">
           <div className="bg-white/10 border-2 border-white/20 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex flex-col sm:flex-row items-center gap-6 md:gap-8 group hover:bg-white/20 transition-all">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1461360228754-6e81c478c882?q=80&w=200" className="w-full h-full object-cover" alt="La Petite Histoire" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xl md:text-2xl font-black uppercase text-white">La Petite Histoire</h4>
                <p className="text-white/80 text-base md:text-lg font-medium mt-2">Le média historique N°1. Des récits immersifs qui captivent.</p>
              </div>
           </div>
           
           <div className="bg-white/10 border-2 border-white/20 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex flex-col sm:flex-row items-center gap-6 md:gap-8 group hover:bg-white/20 transition-all">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=200" className="w-full h-full object-cover" alt="Les Aventuriers" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xl md:text-2xl font-black uppercase text-white">Les Aventuriers</h4>
                <p className="text-white/80 text-base md:text-lg font-medium mt-2">À la rencontre de ceux qui osent transformer le monde.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MediaShowcase;
