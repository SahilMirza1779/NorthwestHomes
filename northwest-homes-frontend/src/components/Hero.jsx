import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenModal, onScroll }) => {
  return (
    <div className="relative h-[550px] bg-slate-900 text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/20 z-10" />
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
        alt="Hero Property"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center max-w-3xl px-4 mt-10"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-4 inline-block font-medium">
          Redefining Luxury Living
        </span>
        <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-6">
          Exceptional Homes <br/><span className="font-serif italic text-slate-300">Across the North West</span>
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button onClick={onScroll} className="bg-white text-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-amber-400 transition-colors">
            Explore Portfolio
          </button>
          <button onClick={onOpenModal} className="border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors">
            Free Valuation
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;