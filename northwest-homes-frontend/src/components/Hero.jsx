import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenModal, onScroll, isMenuOpen }) => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30 z-10 pointer-events-none" />

      {/* Hero Content & Buttons */}
      {!isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-30 text-center max-w-4xl px-4 pt-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-amber-400 mb-4 inline-block font-medium">
            Flexible Living & Commercial Rentals
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6">
            Find Perfect Spaces & Shops <br/><span className="font-serif italic text-slate-200">in the North West</span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button 
              type="button"
              onClick={onScroll} 
              className="bg-white text-slate-900 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-amber-400 transition-colors shadow-lg cursor-pointer relative z-40"
            >
              Explore Spaces & Shops
            </button>
            <button 
              type="button"
              onClick={onOpenModal} 
              className="border border-white bg-slate-900/80 backdrop-blur-md text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors cursor-pointer relative z-40"
            >
              Quick Enquiry
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;