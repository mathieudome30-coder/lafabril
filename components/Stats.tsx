
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '90 000', label: 'Écoutes / mois', sub: 'Sur nos propres médias' },
    { value: '40 000', label: 'Abonnés fidèles', sub: 'Communauté engagée' },
    { value: '15 ans', label: 'Expertise Média', sub: 'Radio & TV (Florent Mounier)' },
    { value: '100%', label: 'Production interne', sub: 'Qualité premium garantie' },
  ];

  return (
    <section className="bg-zinc-900/40 border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-black text-orange mb-1">{stat.value}</p>
              <p className="text-sm font-bold uppercase tracking-wide text-zinc-100">{stat.label}</p>
              <p className="text-xs text-zinc-400 mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
