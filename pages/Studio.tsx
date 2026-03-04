
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Play, Mic, Headphones, Music, CheckCircle2, Star, Radio } from 'lucide-react';

const Studio: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      <main className="pt-32">
        {/* HERO SECTION - DARK & IMMERSIVE */}
        <section className="relative py-20 md:py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000" 
              alt="Studio Background" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl space-y-6 md:space-y-8">
              <span className="inline-block px-4 py-1 bg-orange text-black text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] rounded-full">
                Expertise B2B / B2G
              </span>
              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                Studio de <br/><span className="text-orange">Création Sonore.</span>
              </h1>
              <p className="text-xl md:text-3xl font-bold text-gray-300 max-w-2xl leading-tight italic border-l-4 md:border-l-8 border-orange pl-6 md:pl-8">
                Nous ne produisons pas seulement du son. Nous créons des expériences immersives qui transforment votre communication de marque.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES DÉTAILLÉS */}
        <section className="py-20 md:py-32 px-6 bg-white text-black rounded-[3rem] md:rounded-[6rem] mx-2 md:mx-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                {
                  title: "Podcast de Marque",
                  price: "À partir de 1 500€",
                  desc: "De la conception éditoriale à la diffusion. Nous créons des séries audio qui engagent votre audience et renforcent votre autorité.",
                  icon: <Mic className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Écriture de scripts", "Enregistrement HD", "Sound Design", "Hébergement"]
                },
                {
                  title: "Spot Radio & Pub",
                  price: "À partir de 450€",
                  desc: "Production de spots publicitaires percutants pour la radio et le digital. Une écriture efficace pour un impact immédiat.",
                  icon: <Radio className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Copywriting publicitaire", "Voix-off pro", "Mixage aux normes", "Formats courts"]
                },
                {
                  title: "Doublage & Voix-off",
                  price: "Sur Devis",
                  desc: "Donnez une voix à vos projets : vidéos corporate, e-learning, documentaires ou publicités. Un large catalogue de voix.",
                  icon: <Headphones className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Casting voix", "Direction artistique", "Synchro image", "Multi-langues"]
                },
                {
                  title: "Identité Sonore",
                  price: "Sur Devis",
                  desc: "Votre logo se voit, votre marque s'écoute. Nous créons votre signature sonore unique pour tous vos points de contact.",
                  icon: <Music className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Logo sonore", "Musique originale", "Attente téléphonique", "Jingles"]
                },
                {
                  title: "Post-Production",
                  price: "Sur Devis",
                  desc: "Vous avez déjà le contenu ? Nous lui donnons une dimension professionnelle avec un mixage et un mastering de qualité radio.",
                  icon: <Headphones className="w-10 h-10 md:w-12 md:h-12 text-orange" />,
                  features: ["Nettoyage audio", "Mixage multicanal", "Mastering", "Montage dynamique"]
                }
              ].map((service, i) => (
                <div key={i} className="flex flex-col justify-between w-full lg:w-[calc(50%-1.5rem)] xl:w-[calc(33.333%-2rem)] group p-8 md:p-10 bg-zinc-50 rounded-[2.5rem] md:rounded-[3rem] border-2 border-transparent hover:border-orange transition-all duration-500">
                  <div>
                    <div className="mb-6 md:mb-8">{service.icon}</div>
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">{service.title}</h3>
                    </div>
                    <p className="text-orange font-black text-base md:text-lg mb-3 md:mb-4">{service.price}</p>
                    <p className="text-gray-600 font-medium mb-6 md:mb-8 text-sm md:text-base leading-relaxed">{service.desc}</p>
                    <ul className="space-y-3 mb-8 md:mb-10">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-widest">
                          <CheckCircle2 className="w-4 h-4 text-orange" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full py-4 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:text-orange border-2 border-transparent hover:border-orange transition-all">
                    Demander un devis
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AUDIO EXAMPLES - PLACEHOLDERS VISUELS */}
        <section className="py-20 md:py-32 px-6">
          <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">Écoutez <span className="text-orange">notre savoir-faire.</span></h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">Extraits de productions réalisées pour nos clients.</p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
            {[
              { title: "Podcast Corporate - Tech Innovation", client: "Grand Groupe Lyon", duration: "02:45" },
              { title: "Identité Sonore - Retail Luxe", client: "Marque Parisienne", duration: "00:15" },
              { title: "Storytelling Territorial", client: "Département du Gard", duration: "03:20" }
            ].map((audio, i) => (
              <div key={i} className="bg-zinc-900/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center gap-6 md:gap-8 group hover:bg-zinc-800/50 transition-all">
                <button className="w-14 h-14 md:w-16 md:h-16 bg-orange rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-black fill-current" />
                </button>
                <div className="flex-grow text-center md:text-left">
                  <h4 className="text-lg md:text-xl font-black uppercase tracking-tight">{audio.title}</h4>
                  <p className="text-orange text-xs md:text-sm font-bold">{audio.client}</p>
                </div>
                {/* Visual Waveform Placeholder */}
                <div className="hidden md:flex items-end gap-1 h-12 flex-grow max-w-[200px]">
                  {[...Array(20)].map((_, j) => (
                    <div 
                      key={j} 
                      className="w-1 bg-white/20 rounded-full transition-all group-hover:bg-orange/50"
                      style={{ height: `${Math.random() * 100}%` }}
                    ></div>
                  ))}
                </div>
                <span className="font-mono text-xs md:text-sm text-gray-500">{audio.duration}</span>
              </div>
            ))}
          </div>
        </section>



        {/* PRÉSENTATION FLORENT */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto bg-zinc-900 rounded-[4rem] overflow-hidden border border-white/5">
            <div className="grid lg:grid-cols-2">
              <div className="h-[500px] lg:h-auto overflow-hidden">
                <img 
                  src="https://lafabrikaudio.fr/wp-content/uploads/2023/05/Florent-Mounier-La-Fabrik-Audio.jpg" 
                  alt="Florent Mounier" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-16 md:p-24 flex flex-col justify-center space-y-8">
                <span className="text-orange font-black uppercase tracking-[0.4em] text-sm">Le Fondateur</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Florent <br/>Mounier.</h2>
                <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed italic">
                  "Après 20 ans passés dans les plus grandes rédactions radio et TV, j'ai créé La Fabrik Audio pour mettre cette exigence journalistique au service des marques."
                </p>
                <div className="flex gap-4">
                  <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-xs font-black uppercase tracking-widest">Ex-Radio France</div>
                  <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-xs font-black uppercase tracking-widest">Expert Storytelling</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AVIS CLIENTS */}
        <section className="py-32 px-6 bg-zinc-50 text-black rounded-[4rem] md:rounded-[6rem] mx-2 md:mx-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Ils nous font <span className="text-orange">confiance.</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Sophie Martin",
                  role: "Directrice Com, Groupe Innov",
                  text: "La Fabrik Audio a su capturer l'essence de notre marque et la transformer en un podcast passionnant. Un professionnalisme rare.",
                  rating: 5
                },
                {
                  name: "Jean-Pierre Durand",
                  role: "Élu, Département du Gard",
                  text: "Une collaboration fluide pour un storytelling territorial qui a touché nos administrés. Florent et son équipe sont des experts.",
                  rating: 5
                }
              ].map((review, i) => (
                <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-5 h-5 text-orange fill-current" />)}
                  </div>
                  <p className="text-2xl font-bold italic mb-8 leading-tight">"{review.text}"</p>
                  <div>
                    <p className="font-black uppercase tracking-widest text-sm">{review.name}</p>
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
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85]">Prêt à <br/><span className="text-orange">faire du bruit ?</span></h2>
              <p className="text-2xl text-gray-400 font-bold max-w-md">
                Discutons de vos objectifs et créons ensemble une identité sonore qui marque les esprits.
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

export default Studio;
