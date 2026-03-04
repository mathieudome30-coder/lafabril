
import React from 'react';

const SpotPubTeaser: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative group overflow-hidden rounded-[3rem] bg-gray-50 border border-gray-100 p-8 md:p-20 flex flex-col md:flex-row items-center gap-12 transition-all hover:shadow-2xl hover:shadow-orange/5">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange text-[10px] font-black uppercase tracking-widest">
            Expertise Pub
          </div>
          <h3 className="text-4xl md:text-6xl font-extrabold text-black leading-tight tracking-tighter">
            Le Spot Pub qui <br/>
            <span className="text-orange">fait vendre.</span>
          </h3>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md">
            De la radio nationale aux flux streaming, nous concevons des messages audio percutants qui marquent les esprits dès la première seconde.
          </p>
          <div className="pt-4">
            <a href="#contact" className="inline-block px-10 py-5 btn-orange rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl shadow-orange/20">
              Demander un devis Spot
            </a>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent z-10 md:hidden"></div>
          {[
            { label: "Impact", val: "+45%", desc: "Mémorisation" },
            { label: "Rapidité", val: "48h", desc: "Livraison HD" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
              <p className="text-3xl font-black text-black">{stat.val}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-orange mt-1">{stat.label}</p>
              <p className="text-xs text-gray-400 mt-2">{stat.desc}</p>
            </div>
          ))}
          <div className="col-span-2 bg-black p-8 rounded-3xl flex items-center justify-between group-hover:bg-orange transition-colors duration-500">
             <div className="text-white">
               <p className="text-sm font-bold opacity-60 uppercase tracking-widest">Écouter un exemple</p>
               <p className="text-lg font-bold">Campagne Michelin</p>
             </div>
             <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
               <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotPubTeaser;
