
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Academy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32">
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <span className="text-[13px] font-black uppercase tracking-[0.4em] text-orange block">Offre Formation</span>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-black">
                L'<br/><span className="text-orange">Académie.</span>
              </h1>
              <p className="text-2xl text-black font-bold leading-relaxed italic border-l-8 border-orange pl-6">
                Nous nous déplaçons chez vous pour vous apprendre à créer, enregistrer et monter vos propres podcasts comme des pros.
              </p>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 font-medium">
                  La transmission par la pratique. Nous formons les communicants et passionnés avec les méthodes qui font notre succès.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {["Technique Prise de son", "Écriture & Pose de voix", "Montage & Mixage", "Coaching Lancement"].map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-black">
                      <div className="w-2 h-2 bg-orange rounded-full"></div>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-black">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200" 
                alt="Academy Training" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-50 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black p-12 rounded-[3rem] text-white">
              <p className="text-[11px] font-black uppercase tracking-widest text-orange mb-4">L'Argument Tueur</p>
              <p className="text-3xl md:text-4xl font-black leading-tight italic">
                "Apprenez avec ceux qui font l'audience, pas avec des théoriciens."
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h2 className="text-5xl font-black uppercase tracking-tighter text-black">Formez <br/><span className="text-orange">vos équipes.</span></h2>
              <p className="text-xl text-gray-700 font-medium">
                Devenez autonome dans la production de vos contenus audio.
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

export default Academy;
