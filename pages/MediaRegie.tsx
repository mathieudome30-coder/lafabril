
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Radio, Users, BarChart3, Megaphone, CheckCircle2, Star, TrendingUp } from 'lucide-react';

const MediaRegie: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2000" 
              alt="Media Background" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl space-y-6 md:space-y-8">
              <span className="inline-block px-4 py-1 bg-orange text-black text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] rounded-full">
                Sponsoring & Publicité
              </span>
              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                Votre Audience, <br/><span className="text-orange">Notre Réseau.</span>
              </h1>
              <div className="flex flex-wrap gap-6 md:gap-8 items-center pt-6 md:pt-8">
                <div className="space-y-1">
                  <p className="text-4xl md:text-5xl font-black text-orange">40 000</p>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">Écoutes / Mois</p>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                <div className="space-y-1">
                  <p className="text-4xl md:text-5xl font-black text-white">15+</p>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">Podcasts Actifs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES RÉGIE */}
        <section className="py-20 md:py-32 px-6 bg-white text-black rounded-[3rem] md:rounded-[6rem] mx-2 md:mx-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  title: "Sponsoring (Host-read)",
                  desc: "Le créateur du podcast parle de votre marque avec ses propres mots. C'est le format le plus engageant et le plus authentique.",
                  icon: <Users className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Authenticité maximale", "Engagement fort", "Ciblage affinitaire", "Production incluse"]
                },
                {
                  title: "Spots Radio & Audio",
                  desc: "Insertion de spots publicitaires (Pre-roll, Mid-roll) dans nos flux audio et diffusion sur nos réseaux radio partenaires.",
                  icon: <Radio className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Large couverture", "Répétition efficace", "Ciblage géographique", "Reporting détaillé"]
                },
                {
                  title: "Contenu Partenaire",
                  desc: "Un épisode entier dédié à votre expertise ou votre actualité, intégré naturellement dans la ligne éditoriale du podcast.",
                  icon: <Megaphone className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Temps de parole long", "Expertise valorisée", "Storytelling dédié", "SEO audio"]
                }
              ].map((service, i) => (
                <div key={i} className="group p-8 md:p-10 bg-zinc-50 rounded-[2.5rem] md:rounded-[3rem] border-2 border-transparent hover:border-orange transition-all duration-500">
                  <div className="mb-6 md:mb-8">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 md:mb-6">{service.title}</h3>
                  <p className="text-gray-600 font-medium mb-6 md:mb-8 text-sm md:text-base leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-widest">
                        <CheckCircle2 className="w-4 h-4 text-orange" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS & ANALYTICS */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Des données <br/><span className="text-orange">transparentes.</span></h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Nous fournissons des rapports détaillés pour chaque campagne. Mesurez votre impact, suivez vos conversions et optimisez votre ROI.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-zinc-900 rounded-3xl border border-white/5">
                  <TrendingUp className="w-8 h-8 text-orange mb-4" />
                  <p className="text-3xl font-black">85%</p>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500">Taux de complétion</p>
                </div>
                <div className="p-8 bg-zinc-900 rounded-3xl border border-white/5">
                  <BarChart3 className="w-8 h-8 text-orange mb-4" />
                  <p className="text-3xl font-black">2.4x</p>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500">Mémorisation vs Vidéo</p>
                </div>
              </div>
            </div>
            <div className="bg-orange p-12 rounded-[4rem] text-black space-y-8">
              <Star className="w-12 h-12 fill-current" />
              <p className="text-3xl font-black italic leading-tight">
                "Le podcast est le seul média qui permet une attention aussi profonde. Nos auditeurs sont captivés, pas distraits."
              </p>
              <p className="font-black uppercase tracking-widest text-sm">— Florent Mounier</p>
            </div>
          </div>
        </section>

        {/* OFFRES RÉGIE */}
        <section className="py-20 md:py-32 px-6 bg-zinc-900 rounded-[3rem] md:rounded-[6rem] mx-2 md:mx-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">Nos Packs <br/>Média.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Pack Visibilité",
                  price: "450€ / mois",
                  desc: "Idéal pour une présence régulière.",
                  features: ["4 Spots Pre-roll", "Ciblage thématique", "Rapport mensuel", "Engagement garanti"]
                },
                {
                  name: "Pack Influence",
                  price: "1 200€ / mois",
                  desc: "Le pouvoir de la recommandation.",
                  features: ["2 Host-read dédiés", "Sponsoring de saison", "Post réseaux sociaux", "Accès aux stats live"]
                },
                {
                  name: "Pack Domination",
                  price: "Sur Devis",
                  desc: "Pour un impact massif et exclusif.",
                  features: ["Exclusivité sectorielle", "Épisodes dédiés", "Campagne multi-podcasts", "Accompagnement stratégique"]
                }
              ].map((offer, i) => (
                <div key={i} className="bg-black p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 flex flex-col justify-between hover:border-orange transition-all">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2">{offer.name}</h3>
                    <p className="text-orange font-black text-lg md:text-xl mb-6 md:mb-8">{offer.price}</p>
                    <p className="text-gray-400 font-bold mb-6 md:mb-8 text-sm md:text-base">{offer.desc}</p>
                    <ul className="space-y-4 mb-10 md:mb-12">
                      {offer.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-[11px] md:text-sm font-black uppercase tracking-widest">
                          <CheckCircle2 className="w-5 h-5 text-orange" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full py-4 md:py-5 bg-orange text-black rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-white transition-all">
                    Réserver mon créneau
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85]">Boostez <br/><span className="text-orange">votre marque.</span></h2>
              <p className="text-2xl text-gray-400 font-bold max-w-md">
                Rejoignez notre réseau et touchez une audience qualifiée et engagée.
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
