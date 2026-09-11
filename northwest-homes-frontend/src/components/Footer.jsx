import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = ({ onOpenModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-semibold tracking-wider uppercase text-white mb-4 block">
            Northwest<span className="font-light text-slate-400">Homes</span>
          </span>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Redefining flexible living spaces, co-living, student accommodations, and prime commercial retail shops across the North West.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Explore</h4>
          <ul className="space-y-3 text-xs font-light">
            <li><a href="#" className="hover:text-amber-500 transition-colors">Premium Rooms</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Student Hostels</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Co-living Spaces</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Commercial Shops</a></li>
            <li>
              <button onClick={onOpenModal} className="hover:text-amber-500 transition-colors">
                Book a Viewing
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Get in Touch</h4>
          <ul className="space-y-4 text-xs font-light text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
              <span>125 Deansgate,<br/>Manchester, M3 2BY, United Kingdom</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-amber-600 flex-shrink-0" />
              <span>+44 (0) 161 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-amber-600 flex-shrink-0" />
              <span>enquiries@northwesthomes.co.uk</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Stay Updated</h4>
          <p className="text-xs text-slate-400 font-light mb-4">
            Subscribe for exclusive rental deals, retail spaces, and new property alerts.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-slate-900 border border-slate-800 text-white text-xs px-4 py-3 w-full focus:outline-none focus:border-amber-600 transition-colors rounded-l-md"
            />
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-3 transition-colors rounded-r-md">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-[10px] text-slate-500 flex flex-col md:flex-row justify-between items-center font-light tracking-wider">
        <p>© {new Date().getFullYear()} Northwest Homes. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Flexible Living & Retail Experiences</p>
      </div>
    </footer>
  );
};

export default Footer;