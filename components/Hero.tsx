
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-28 md:pt-20 overflow-hidden">
      {/* Background avec overlay adouci */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000" 
          className="w-full h-full object-cover grayscale brightness-[0.4]"
          alt="Studio La Fabrik Audio"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 md:py-0">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 md:px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 md:mb-10">
             <span className="w-2 h-2 bg-orange rounded-full shadow-[0_0_15px_rgba(234,88,12,0.8)]"></span>
             <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white">L'Agence des histoires qui s'écoutent</span>
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase mb-8 md:mb-10 leading-[0.9]">
            Agence de <br />
            production <span className="text-orange italic">audio & podcast.</span>
          </h1>

          <p className="text-xl md:text-3xl text-white max-w-3xl mb-10 md:mb-14 font-medium leading-relaxed">
            Fondée par Florent Mounier, <span className="text-orange font-bold">La Fabrik Audio</span> ne produit pas seulement du son, elle crée de l'émotion et de l'influence grâce à un ADN média pur.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
            <a href="#expertise" className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-orange text-black rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-orange/20 text-center">
              Nos Solutions B2B
            </a>
            <div className="flex items-center gap-4 text-white/60">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center">
                 <svg className="w-4 h-4 md:w-5 md:h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                 </svg>
               </div>
               <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">90 000 écoutes mensuelles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
