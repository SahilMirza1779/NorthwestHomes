import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold tracking-wider text-slate-900 uppercase">
            Northwest<span className="font-light text-slate-500">Homes</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#properties" className="hover:text-slate-950 transition-colors">Properties</a>
          <a href="#sales" className="hover:text-slate-950 transition-colors">For Sale</a>
          <a href="#lettings" className="hover:text-slate-950 transition-colors">To Let</a>
          <a href="#student" className="hover:text-slate-950 transition-colors">Student Living</a>
          <a href="#about" className="hover:text-slate-950 transition-colors">About Us</a>
        </div>
        <div>
          <button className="border border-slate-900 text-slate-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-all">
            Book Viewing
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;