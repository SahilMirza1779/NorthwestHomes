import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[480px] bg-slate-900 text-white flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
        alt="Hero Property"
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
      />
      <div className="relative z-10 text-center max-w-2xl px-4">
        <span className="text-xs uppercase tracking-widest text-slate-300 mb-3 inline-block">
          Redefining Real Estate Experience
        </span>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
          Discover Exceptional Homes Across the North West
        </h1>
        <p className="text-slate-300 font-light text-sm md:text-base mb-6">
          Premium residential sales, lettings, and student residences tailored for modern living.
        </p>
      </div>
    </div>
  );
};

export default Hero;