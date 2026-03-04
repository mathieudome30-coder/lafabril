
import React from 'react';

const AcademySection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="section-title">The Academy</span>
          <h3 className="text-6xl md:text-8xl font-black text-black leading-[0.85] tracking-tighter mb-12 uppercase">
            LEARN <br/><span className="text-orange italic">ON-SITE</span>
          </h3>
          <p className="text-xl text-gray-700 font-medium leading-relaxed mb-12 max-w-lg">
            90 000 écoutes mensuelles ne s'inventent pas. Nous nous déplaçons chez vous pour vous transmettre la méthode réelle pour passer de l'amateurisme au broadcast professionnel.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black group-hover:bg-orange transition-colors">01</div>
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest">Broadcast Mastery</h4>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Prise de son & Montage</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black group-hover:bg-orange transition-colors">02</div>
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest">Storytelling Strategy</h4>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Écriture & Interview</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-gray-100 p-12">
            <img 
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800" 
              className="w-full h-full object-cover grayscale shadow-2xl"
              alt="Academy Studio"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 border-4 border-orange -z-10 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default AcademySection;
