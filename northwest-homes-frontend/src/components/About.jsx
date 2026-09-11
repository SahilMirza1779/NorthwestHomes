import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ShieldCheck, Home, Users } from 'lucide-react';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.section 
        id="about" 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="py-28 bg-white border-t border-gray-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-amber-600 font-medium mb-4 block">Our Vision</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6 leading-snug">
                Flexible living spaces for <br/> <span className="font-serif italic text-slate-500">Every Journey</span>
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-6 text-sm">
                At Northwest Homes, we believe finding a place to stay should be effortless. Whether you are a student looking for a vibrant dormitory, a professional seeking a co-living space, or a family needing a private room, we curate spaces that feel like home from day one.
              </p>
              <p className="text-slate-600 font-light leading-relaxed text-sm">
                Say goodbye to rigid leases. From single-day stays to year-long accommodations, our flexible booking system and fully-managed properties ensure that your rental experience is seamless, transparent, and tailored to your needs.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-8 border-b border-slate-900 pb-1 text-xs font-semibold uppercase tracking-widest text-slate-900 hover:text-amber-600 hover:border-amber-600 transition-colors"
              >
                Discover Our Story
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Co-living Space" 
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-8 hidden md:block shadow-2xl rounded-tr-xl rounded-bl-xl border border-slate-800">
                <p className="text-4xl font-light mb-1">1000+</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">Happy Residents</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Story Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative p-8 md:p-12"
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-full"
              >
                <X size={20} />
              </button>

              <span className="text-xs uppercase tracking-[0.3em] text-amber-600 font-medium mb-2 block">
                The Northwest Homes Experience
              </span>
              <h3 className="text-3xl font-light text-slate-900 mb-6">
                Your Trusted Rental Partner
              </h3>

              <div className="space-y-6 text-slate-600 font-light leading-relaxed text-sm">
                <p>
                  Started with a vision to revolutionize the rental market, Northwest Homes has quickly become the go-to platform for students, working professionals, and travelers seeking high-quality, flexible accommodations.
                </p>
                <p>
                  We handle the heavy lifting—from verifying properties to ensuring fast Wi-Fi and clean spaces—so you can focus on living. Our diverse portfolio ranges from budget-friendly dorms to premium luxury suites, all available at your fingertips.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-slate-50 text-amber-600 rounded-lg">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-base mb-1">Flexible Durations</h4>
                      <p className="text-xs text-slate-500">Book for a day, a month, or a year without the hassle of long-term lock-ins.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-slate-50 text-amber-600 rounded-lg">
                      <Home size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-base mb-1">Move-in Ready</h4>
                      <p className="text-xs text-slate-500">Fully furnished spaces equipped with all essential amenities and utilities.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-slate-50 text-amber-600 rounded-lg">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-base mb-1">Verified Properties</h4>
                      <p className="text-xs text-slate-500">Every listing is physically verified to ensure safety, cleanliness, and comfort.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-slate-50 text-amber-600 rounded-lg">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-base mb-1">Vibrant Community</h4>
                      <p className="text-xs text-slate-500">Join a network of like-minded individuals in our co-living and hostel spaces.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-slate-900 text-white px-8 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-amber-400 hover:text-slate-900 transition-colors rounded-lg"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;