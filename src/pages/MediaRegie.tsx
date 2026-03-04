
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const MediaRegie: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32">
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <span className="text-[13px] font-black uppercase tracking-[0.4em] text-orange block">Offre Sponsoring</span>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Média & <br/><span className="text-orange">Régie.</span>
              </h1>
              <p className="text-2xl text-white font-bold leading-relaxed italic border-l-8 border-orange pl-6">
                Profitez de nos 40 000 auditeurs mensuels. Nous intégrons vos messages publicitaires au cœur de nos podcasts les plus suivis.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-6">
                <div>
                  <p className="text-7xl font-black text-orange">40K</p>
                  <p className="text-[11px] font-black uppercase tracking-widest text-white mt-2">Écoutes Mensuelles</p>
                </div>
                <div>
                  <p className="text-7xl font-black text-white">40K</p>
                  <p className="text-[11px] font-black uppercase tracking-widest text-white mt-2">Abonnés Fidèles</p>
                </div>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200" 
                alt="Media & Regie" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <section className="py-24 bg-white text-black px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black p-12 rounded-[3rem] text-white">
              <p className="text-[11px] font-black uppercase tracking-widest text-orange mb-4">L'Argument Tueur</p>
              <p className="text-3xl md:text-4xl font-black leading-tight italic">
                "Ne cherchez pas une audience, louez la nôtre. Une communauté engagée et captive."
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-zinc-900">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h2 className="text-5xl font-black uppercase tracking-tighter text-white">Devenez <br/><span className="text-orange">partenaire.</span></h2>
              <p className="text-xl text-gray-400 font-medium">
                Associez votre marque à des contenus de qualité et touchez une audience qualifiée.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MediaRegie;
