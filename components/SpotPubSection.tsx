
import React from 'react';

const SpotPubSection: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Packs */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Pack Essentiel */}
        <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 premium-shadow flex flex-col group hover:border-orange/20 transition-all">
          <div className="mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">Standard</span>
            <h3 className="text-4xl font-bold mt-2">Le Spot Efficace</h3>
          </div>
          
          <div className="text-5xl font-black mb-10 text-black">490€ <span className="text-lg text-gray-500 font-medium tracking-normal">HT</span></div>
          
          <ul className="space-y-5 mb-12 flex-grow">
            {['Script commercial inclus', '1 Voix off au choix', 'Musique libre de droits', 'Mixage pro', 'Livraison 48h'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
                {item}
              </li>
            ))}
          </ul>

          <button className="w-full py-5 border-2 border-gray-100 rounded-2xl font-bold text-gray-600 group-hover:border-orange group-hover:text-orange transition-all uppercase tracking-widest text-[10px]">
            Commander maintenant
          </button>
        </div>

        {/* Pack Premium */}
        <div className="bg-white p-12 rounded-[2.5rem] border-2 border-black relative flex flex-col shadow-2xl">
          <div className="absolute -top-4 right-10 bg-black text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">Sur Mesure</div>
          
          <div className="mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange">Premium</span>
            <h3 className="text-4xl font-bold mt-2">Stratégie & Régie</h3>
          </div>
          
          <div className="text-2xl font-black mb-10 text-black">DEVIS PERSONNALISÉ</div>
          
          <ul className="space-y-5 mb-12 flex-grow">
            {['Tout le Pack Standard', 'Design sonore exclusif', 'Sponsoring Podcasts Propriétaires', 'Ciblage Audience Qualifiée', 'Rapports de Performance'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
                {item}
              </li>
            ))}
          </ul>

          <button className="w-full py-5 btn-orange rounded-2xl font-bold uppercase tracking-widest text-[10px]">
            Lancer ma campagne
          </button>
        </div>
      </div>
      
      {/* Social Proof */}
      <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-30 mt-12">
        <span className="font-bold text-2xl tracking-tighter">MICHELIN</span>
        <span className="font-bold text-2xl tracking-tighter">AUVERGNE</span>
        <span className="font-bold text-2xl tracking-tighter">REGION</span>
        <span className="font-bold text-2xl tracking-tighter">BANQUE POP</span>
      </div>
    </div>
  );
};

export default SpotPubSection;
