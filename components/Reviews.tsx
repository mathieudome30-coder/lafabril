
import React from 'react';

const Reviews: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="lg:col-span-5">
           <span className="text-orange font-black text-[10px] uppercase tracking-[0.5em] block mb-6">Témoignage Client</span>
           <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8">
             Ce qu'ils <br/>pensent <br/>de nous.
           </h2>
        </div>
        <div className="lg:col-span-7">
          <blockquote className="text-xl md:text-4xl font-bold tracking-tight leading-snug italic text-white border-l-4 border-orange pl-6 md:pl-8 mb-10 md:mb-12">
            "L'expertise de Florent a transformé notre vision technique en une épopée sonore fascinante. La qualité broadcast est au rendez-vous à chaque épisode."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-800"></div>
            <div>
              <p className="font-black text-white uppercase tracking-widest text-[10px] md:text-xs">Marie L.</p>
              <p className="text-[9px] md:text-[10px] text-gray-500 font-black uppercase tracking-widest">Directrice Communication, Michelin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
