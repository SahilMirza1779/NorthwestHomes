import React from 'react';

const Navbar = ({ onOpenModal, onNavClick }) => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-xl font-semibold tracking-wider text-slate-900 uppercase">
            Northwest<span className="font-light text-slate-500">Homes</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <button onClick={() => onNavClick('All')} className="hover:text-slate-950 transition-colors uppercase tracking-wider text-xs">Properties</button>
          <button onClick={() => onNavClick('Sales')} className="hover:text-slate-950 transition-colors uppercase tracking-wider text-xs">For Sale</button>
          <button onClick={() => onNavClick('Lettings')} className="hover:text-slate-950 transition-colors uppercase tracking-wider text-xs">To Let</button>
          <button onClick={() => onNavClick('Student Accommodation')} className="hover:text-slate-950 transition-colors uppercase tracking-wider text-xs">Student Living</button>
          <button onClick={scrollToAbout} className="hover:text-slate-950 transition-colors uppercase tracking-wider text-xs">About Us</button>
        </div>
        <div>
          <button onClick={onOpenModal} className="border border-slate-900 text-slate-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-all">
            Book Viewing
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;