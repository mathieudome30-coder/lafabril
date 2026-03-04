
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 md:pt-32 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 border-b border-gray-100 pb-12 md:pb-20 mb-8 md:mb-12">
          <div className="md:col-span-2 space-y-6 md:space-y-8">
             <Link to="/" className="flex items-center gap-4 group">
               <div className="h-14 md:h-16 bg-zinc-900 px-4 flex items-center overflow-hidden rounded-xl transition-all group-hover:bg-orange">
                 <img 
                   src="https://i.postimg.cc/dtYKrjpY/Design-sans-titre-(6).png" 
                   alt="La Fabrik Audio Logo" 
                   className="h-8 md:h-10 w-auto object-contain" 
                   referrerPolicy="no-referrer"
                 />
               </div>
             </Link>
             <p className="text-gray-600 max-w-sm font-medium text-base md:text-lg leading-snug">
               Agence de storytelling audio dirigée par Florent Mounier. 
               Nous ne produisons pas seulement du son, nous produisons des histoires qui s'écoutent.
             </p>
          </div>
          <div>
            <h5 className="font-black text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8 text-black">Exploration</h5>
            <ul className="space-y-3 md:space-y-4 text-[11px] md:text-[13px] font-black uppercase tracking-widest text-black">
              <li><Link to="/studio" className="hover:text-orange transition-colors">Le Studio</Link></li>
              <li><Link to="/media-regie" className="hover:text-orange transition-colors">La Régie</Link></li>
              <li><Link to="/academy" className="hover:text-orange transition-colors">L'Académie</Link></li>
              <li><a href="/#contact" className="hover:text-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8 text-black">Contact</h5>
            <ul className="space-y-3 md:space-y-4 text-[11px] md:text-[13px] font-black uppercase tracking-widest text-black">
              <li>Lyon / Paris / Gard</li>
              <li className="text-orange font-black">contact@lafabrikaudio.fr</li>
              <li>40 000 Écoutes mensuelles</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 opacity-40">
           <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-center md:text-left">© 2024 La Fabrik Audio Agency. Agence de Production Audio Créative.</p>
           <div className="flex gap-6 md:gap-8 text-[8px] md:text-[9px] font-black uppercase tracking-widest">
             <a href="#" className="hover:text-black transition-colors">Instagram</a>
             <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-black transition-colors">Twitter</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
