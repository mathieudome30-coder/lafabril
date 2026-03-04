
import React from 'react';
import Hero from '../components/Hero';
import ServicesEditorial from '../components/ServicesEditorial';
import MediaShowcase from '../components/MediaShowcase';
import Reviews from '../components/Reviews';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* SECTION SERVICES - BLOCS MASSIFS */}
        <section id="expertise" className="py-24 md:py-32 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
            <span className="text-[13px] font-black uppercase tracking-[0.4em] text-black block mb-6">Expertise & Savoir-faire</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-black">
              Le son au service <br/><span className="text-orange">de vos histoires.</span>
            </h2>
          </div>
          <ServicesEditorial />
        </section>

        {/* SECTION MÉDIA - NOIR PROFOND */}
        <section id="projets" className="bg-black text-white py-32 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6">
          <MediaShowcase />
        </section>

        {/* SECTION TÉMOIGNAGES - NOIR POUR LE CONTRASTE */}
        <section className="py-32 bg-black text-white">
          <Reviews />
        </section>

        {/* SECTION CONTACT */}
        <section id="contact" className="py-32 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                  Lancez <br/>votre <br/><span className="text-orange">projet.</span>
                </h2>
                <p className="text-2xl md:text-3xl text-black font-bold max-w-md leading-tight">
                  Une équipe agile, une expertise radio/TV et une passion pour le storytelling. Parlons de votre future identité sonore.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-black">Nous trouver</p>
                <p className="text-3xl font-black uppercase italic tracking-tighter">Lyon / Paris / Gard</p>
                <p className="text-2xl font-black text-white bg-orange inline-block px-6 py-3 rounded-xl shadow-lg">contact@lafabrikaudio.fr</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
