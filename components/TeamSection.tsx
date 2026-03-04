
import React from 'react';

const TeamMember: React.FC<{ name: string, role: string, img: string }> = ({ name, role, img }) => (
  <div className="group">
    <div className="aspect-[3/4] overflow-hidden mb-6">
      <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={name} />
    </div>
    <h4 className="text-sm font-black uppercase tracking-tight">{name}</h4>
    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{role}</p>
  </div>
);

const TeamSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
        <span className="section-title">The Team</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        <TeamMember 
          name="Florent Mounier" 
          role="CEO & Host" 
          img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" 
        />
        <TeamMember 
          name="Lana Ray" 
          role="Finance Director" 
          img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" 
        />
        <TeamMember 
          name="Joey Spielberg" 
          role="Head of Digital" 
          img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
        />
        <TeamMember 
          name="Tom Scott" 
          role="Lead Audio Eng." 
          img="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop" 
        />
        <TeamMember 
          name="Gabriel Gienner" 
          role="Coordinator" 
          img="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=300&auto=format&fit=crop" 
        />
        <TeamMember 
          name="Lou Thompson" 
          role="Assistant" 
          img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" 
        />
      </div>
    </div>
  );
};

export default TeamSection;
