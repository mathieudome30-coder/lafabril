
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { GraduationCap, BookOpen, Video, Users, CheckCircle2, Star, Award, Zap } from 'lucide-react';

const Academy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000" 
              alt="Academy Background" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl space-y-6 md:space-y-8">
              <span className="inline-block px-4 py-1 bg-orange text-black text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] rounded-full">
                Formation & Coaching
              </span>
              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                L'Académie <br/><span className="text-orange">du Podcast.</span>
              </h1>
              <p className="text-xl md:text-3xl font-bold text-gray-300 max-w-2xl leading-tight italic border-l-4 md:border-l-8 border-orange pl-6 md:pl-8">
                Apprenez à créer, enregistrer et diffuser votre propre podcast avec les méthodes des professionnels de la radio.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES ACADEMY */}
        <section className="py-20 md:py-32 px-6 bg-white text-black rounded-[3rem] md:rounded-[6rem] mx-2 md:mx-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  title: "Formation Technique",
                  desc: "Maîtrisez le matériel, les logiciels de montage et les techniques de prise de son pour un rendu professionnel immédiat.",
                  icon: <Video className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Choix du matériel", "Logiciels de montage", "Prise de son", "Mixage de base"]
                },
                {
                  title: "Storytelling & Écriture",
                  desc: "Apprenez à structurer vos épisodes, à poser votre voix et à captiver votre audience du début à la fin.",
                  icon: <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Structure narrative", "Pose de voix", "Interviewing", "Rythme audio"]
                },
                {
                  title: "Stratégie & Diffusion",
                  desc: "Comment lancer son podcast, le faire connaître et construire une communauté fidèle autour de votre contenu.",
                  icon: <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Hébergement", "SEO Audio", "Réseaux sociaux", "Monétisation"]
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

        {/* POURQUOI NOUS ? */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Apprenez avec <br/><span className="text-orange">des pros.</span></h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Pas de théorie inutile. Nos formations sont basées sur 20 ans d'expérience terrain en radio et télévision. Nous vous transmettons les "secrets de fabrication" du média audio.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight">Certification Qualiopi</h4>
                    <p className="text-gray-500 font-medium">Nos formations peuvent être prises en charge par vos OPCO ou le CPF.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight">Accompagnement Live</h4>
                    <p className="text-gray-500 font-medium">Pas de vidéos pré-enregistrées froides. Vous échangez en direct avec nos formateurs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-orange/20 blur-3xl rounded-full"></div>
              <div className="relative bg-zinc-900 p-12 rounded-[4rem] border border-white/10">
                <Users className="w-16 h-16 text-orange mb-8" />
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Formation <br/>en Entreprise.</h3>
                <p className="text-gray-400 font-medium mb-8 leading-relaxed">
                  Nous nous déplaçons dans vos locaux pour former vos équipes à la création de podcasts internes ou de marque.
                </p>
                <button className="px-8 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest hover:bg-orange transition-all">
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* OFFRES ACADEMY */}
        <section className="py-32 px-6 bg-orange rounded-[4rem] md:rounded-[6rem] mx-2 md:mx-6 text-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">Nos Formations.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Formation Individuelle",
                  price: "890€ HT",
                  desc: "Devenez autonome en 2 jours intensifs.",
                  features: ["Matériel & Technique", "Écriture & Storytelling", "Montage & Diffusion", "Support post-formation"]
                },
                {
                  name: "Pack Entreprise",
                  price: "Sur Devis",
                  desc: "Formez vos équipes au média audio.",
                  features: ["Audit de vos besoins", "Formation sur site", "Création d'un pilote", "Accompagnement stratégique"]
                }
              ].map((offer, i) => (
                <div key={i} className="bg-white p-12 rounded-[3rem] shadow-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{offer.name}</h3>
                    <p className="text-orange font-black text-xl mb-8">{offer.price}</p>
                    <p className="text-gray-600 font-bold mb-8">{offer.desc}</p>
                    <ul className="space-y-4 mb-12">
                      {offer.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
                          <CheckCircle2 className="w-5 h-5 text-orange" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:bg-zinc-800 transition-all">
                    S'inscrire à la formation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AVIS ÉTUDIANTS */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Ils ont <span className="text-orange">appris avec nous.</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Marc Lefebvre",
                  role: "Indépendant",
                  text: "Grâce à l'Académie, j'ai lancé mon podcast en moins d'un mois. La pédagogie est top et très concrète.",
                  rating: 5
                },
                {
                  name: "Lucie Bernard",
                  role: "Responsable RH",
                  text: "Une formation en entreprise géniale. Nos équipes sont maintenant capables de produire notre journal interne audio.",
                  rating: 5
                }
              ].map((review, i) => (
                <div key={i} className="bg-zinc-900 p-12 rounded-[3rem] border border-white/5">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-5 h-5 text-orange fill-current" />)}
                  </div>
                  <p className="text-2xl font-bold italic mb-8 leading-tight text-gray-200">"{review.text}"</p>
                  <div>
                    <p className="font-black uppercase tracking-widest text-sm text-white">{review.name}</p>
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85]">Passez <br/><span className="text-orange">à l'action.</span></h2>
              <p className="text-2xl text-gray-400 font-bold max-w-md">
                Réservez votre session de formation ou demandez un programme personnalisé.
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
