import React from 'react';

const Navbar = ({ onOpenModal, onNavClick }) => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white transition-all">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-xl font-semibold tracking-wider uppercase">
            Northwest<span className="font-light text-slate-300">Homes</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-200">
          <button onClick={() => onNavClick('All')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Properties</button>
          <button onClick={() => onNavClick('Sales')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">For Sale</button>
          <button onClick={() => onNavClick('Lettings')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">To Let</button>
          <button onClick={() => onNavClick('Student Accommodation')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Student Living</button>
          <button onClick={scrollToAbout} className="hover:text-white transition-colors uppercase tracking-wider text-xs">About Us</button>
        </div>
        <div>
          <button onClick={onOpenModal} className="border border-white/80 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all">
            Book Viewing
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;