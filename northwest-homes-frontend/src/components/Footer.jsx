import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = ({ onOpenModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="text-xl font-semibold tracking-wider text-white uppercase">
              Northwest<span className="font-light text-slate-400">Homes</span>
            </span>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Redefining the standard of modern living and real estate excellence across the North West since 2011.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs font-light text-slate-400">
              <li><a href="#properties" className="hover:text-white transition-colors">Featured Properties</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Heritage (Since 2011)</a></li>
              <li><button onClick={onOpenModal} className="hover:text-white transition-colors text-left">Book a Viewing</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-xs font-light text-slate-400">
              <li className="flex items-center gap-2"><MapPin size={14} className="text-amber-500" /> North West, United Kingdom</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-amber-500" /> +44 (0) 20 7946 0912</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-amber-500" /> enquiries@northwesthomes.co.uk</li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Stay Updated</h4>
            <p className="text-xs text-slate-400 font-light mb-3">Subscribe for exclusive luxury property launches.</p>
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 text-white px-3 py-2 text-xs w-full focus:outline-none border border-slate-700" 
              />
              <button 
                onClick={() => alert('Subscribed successfully!')}
                className="bg-amber-500 text-slate-900 px-4 py-2 text-xs font-semibold hover:bg-amber-400 transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-light">
          <p>© 2011 - 2026 Northwest Homes. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Redesigned & Developed for InfyNext Info Tech Presentation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;