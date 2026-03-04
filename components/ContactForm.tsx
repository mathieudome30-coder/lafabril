
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border-4 border-black shadow-2xl">
      <form className="space-y-8 md:space-y-10">
        <div className="space-y-3 md:space-y-4">
          <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black">Votre Nom</label>
          <input 
            type="text" 
            className="w-full bg-zinc-50 border-b-4 border-black px-4 py-4 md:py-6 focus:outline-none focus:border-orange transition-all font-black uppercase text-sm"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-3 md:space-y-4">
          <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black">E-mail pro</label>
          <input 
            type="email" 
            className="w-full bg-zinc-50 border-b-4 border-black px-4 py-4 md:py-6 focus:outline-none focus:border-orange transition-all font-black uppercase text-sm"
            placeholder="hello@agency.com"
          />
        </div>
        <div className="space-y-3 md:space-y-4">
          <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black">Message</label>
          <textarea 
            rows={4}
            className="w-full bg-zinc-50 border-b-4 border-black px-4 py-4 md:py-6 focus:outline-none focus:border-orange transition-all font-black uppercase text-sm resize-none"
            placeholder="Parlez-nous de votre projet..."
          ></textarea>
        </div>
        <button className="w-full py-6 md:py-8 bg-black text-white font-black text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] rounded-2xl hover:bg-orange hover:scale-[1.02] transition-all shadow-xl">
          Envoyer le brief
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
