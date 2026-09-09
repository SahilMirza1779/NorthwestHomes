import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onOpenModal, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToAbout = () => {
    setIsOpen(false);
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryClick = (category) => {
    setIsOpen(false);
    onNavClick(category);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white transition-all">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-lg md:text-xl font-semibold tracking-wider uppercase">
            Northwest<span className="font-light text-slate-300">Homes</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-200">
          <button onClick={() => onNavClick('All')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Properties</button>
          <button onClick={() => onNavClick('Sales')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">For Sale</button>
          <button onClick={() => onNavClick('Lettings')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">To Let</button>
          <button onClick={() => onNavClick('Student Accommodation')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Student Living</button>
          <button onClick={handleScrollToAbout} className="hover:text-white transition-colors uppercase tracking-wider text-xs">About Us</button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button onClick={onOpenModal} className="border border-white/80 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all">
            Book Viewing
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown / Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-8 flex flex-col space-y-6 text-center shadow-2xl">
          <button 
            onClick={() => handleCategoryClick('All')} 
            className="text-slate-200 hover:text-amber-400 text-sm uppercase tracking-widest transition-colors py-2"
          >
            Properties
          </button>
          <button 
            onClick={() => handleCategoryClick('Sales')} 
            className="text-slate-200 hover:text-amber-400 text-sm uppercase tracking-widest transition-colors py-2"
          >
            For Sale
          </button>
          <button 
            onClick={() => handleCategoryClick('Lettings')} 
            className="text-slate-200 hover:text-amber-400 text-sm uppercase tracking-widest transition-colors py-2"
          >
            To Let
          </button>
          <button 
            onClick={() => handleCategoryClick('Student Accommodation')} 
            className="text-slate-200 hover:text-amber-400 text-sm uppercase tracking-widest transition-colors py-2"
          >
            Student Living
          </button>
          <button 
            onClick={handleScrollToAbout} 
            className="text-slate-200 hover:text-amber-400 text-sm uppercase tracking-widest transition-colors py-2"
          >
            About Us
          </button>
          <div className="pt-4 border-t border-slate-800">
            <button 
              onClick={() => { setIsOpen(false); onOpenModal(); }} 
              className="w-full bg-white text-slate-900 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-amber-400 transition-colors"
            >
              Book Viewing
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;