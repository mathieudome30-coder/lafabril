
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 py-4 md:py-8 px-4 md:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-md rounded-2xl px-6 md:px-8 py-3 md:py-4 border border-white/10 shadow-2xl">
        <Link to="/" className="flex items-center gap-4 group relative z-50">
          <div className="h-10 md:h-12 overflow-hidden rounded-xl transition-all">
            <img 
              src="https://i.postimg.cc/dtYKrjpY/Design-sans-titre-(6).png" 
              alt="La Fabrik Audio Logo" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-[12px] font-black uppercase tracking-[0.3em] text-white hover:text-orange transition-colors flex items-center gap-2">
              Expertise
              <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 pt-4 w-64 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
              <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-4 space-y-2">
                <Link to="/studio" className="block p-4 rounded-xl hover:bg-white/10 transition-all group">
                  <p className="text-[10px] font-black text-orange uppercase tracking-widest mb-1">B2B / B2G</p>
                  <p className="text-sm font-bold text-white">Le Studio</p>
                </Link>
                <Link to="/media-regie" className="block p-4 rounded-xl hover:bg-white/10 transition-all group">
                  <p className="text-[10px] font-black text-orange uppercase tracking-widest mb-1">Sponsoring</p>
                  <p className="text-sm font-bold text-white">Média & Régie</p>
                </Link>
                <Link to="/academy" className="block p-4 rounded-xl hover:bg-white/10 transition-all group">
                  <p className="text-[10px] font-black text-orange uppercase tracking-widest mb-1">Formation</p>
                  <p className="text-sm font-bold text-white">L'Académie</p>
                </Link>
              </div>
            </div>
          </div>

          <a href="/#projets" className="text-[12px] font-black uppercase tracking-[0.3em] text-white hover:text-orange transition-colors">Projets</a>
          <a href="/#contact" className="text-[12px] font-black uppercase tracking-[0.3em] text-white hover:text-orange transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="/#contact" className="hidden sm:block px-6 md:px-8 py-2 md:py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-orange transition-all rounded-full">
            Démarrer un projet
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2 text-white hover:text-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-32 px-10 space-y-12">
          <div className="space-y-6">
            <p className="text-orange font-black uppercase tracking-[0.4em] text-xs">Expertise</p>
            <div className="grid gap-6 pl-4">
              <Link to="/studio" className="text-4xl font-black uppercase tracking-tighter text-white hover:text-orange transition-colors">Le Studio</Link>
              <Link to="/media-regie" className="text-4xl font-black uppercase tracking-tighter text-white hover:text-orange transition-colors">Média & Régie</Link>
              <Link to="/academy" className="text-4xl font-black uppercase tracking-tighter text-white hover:text-orange transition-colors">L'Académie</Link>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-orange font-black uppercase tracking-[0.4em] text-xs">Navigation</p>
            <div className="grid gap-6 pl-4">
              <a href="/#projets" className="text-4xl font-black uppercase tracking-tighter text-white hover:text-orange transition-colors">Projets</a>
              <a href="/#contact" className="text-4xl font-black uppercase tracking-tighter text-white hover:text-orange transition-colors">Contact</a>
            </div>
          </div>

          <div className="pt-10">
            <a href="/#contact" className="block w-full py-6 bg-orange text-black text-center text-sm font-black uppercase tracking-widest rounded-2xl">
              Démarrer un projet
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
