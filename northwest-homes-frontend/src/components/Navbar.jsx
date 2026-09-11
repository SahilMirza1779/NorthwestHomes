import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onOpenModal, onNavClick, onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (onMenuToggle) onMenuToggle(nextState);
  };

  const handleScrollToAbout = () => {
    setIsOpen(false);
    if (onMenuToggle) onMenuToggle(false);
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryClick = (category) => {
    setIsOpen(false);
    if (onMenuToggle) onMenuToggle(false);
    onNavClick(category);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white transition-all">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-lg md:text-xl font-semibold tracking-wider uppercase">
            Northwest<span className="font-light text-slate-300">Homes</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-200">
          <button onClick={() => onNavClick('Room')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Rooms</button>
          <button onClick={() => onNavClick('Dormitory')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Dorms</button>
          <button onClick={() => onNavClick('Hostel')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Hostels</button>
          <button onClick={() => onNavClick('Co-living')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Co-living</button>
          <button onClick={handleScrollToAbout} className="hover:text-white transition-colors uppercase tracking-wider text-xs">About Us</button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button onClick={onOpenModal} className="border border-white/80 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all">
            Book Viewing
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white p-2 focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-slate-950/95 border-b border-white/10 px-6 py-8 flex flex-col space-y-6 text-center shadow-2xl">
          <button onClick={() => handleCategoryClick('Room')} className="text-white hover:text-amber-400 text-sm uppercase tracking-widest transition-colors py-2 font-medium">Rooms</button>
          <button onClick={() => handleCategoryClick('Dormitory')} className="text-white hover:text-amber-400 text-sm uppercase tracking-widest transition-colors py-2 font-medium">Dorms</button>
          <button onClick={() => handleCategoryClick('Hostel')} className="text-white hover:text-amber-400 text-sm uppercase tracking-widest transition-colors py-2 font-medium">Hostels</button>
          <button onClick={() => handleCategoryClick('Co-living')} className="text-white hover:text-amber-400 text-sm uppercase tracking-widest transition-colors py-2 font-medium">Co-living</button>
          <button onClick={handleScrollToAbout} className="text-white hover:text-amber-400 text-sm uppercase tracking-widest transition-colors py-2 font-medium">About Us</button>
          <div className="pt-4">
            <button onClick={() => { toggleMenu(); onOpenModal(); }} className="w-full bg-white text-slate-900 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-amber-400 transition-colors shadow-lg">Book Viewing</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;