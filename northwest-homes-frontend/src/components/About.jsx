import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-widest text-amber-600 font-medium mb-4 block">Our Legacy</span>
              <h2 className="text-4xl font-light tracking-tight text-slate-900 mb-6 leading-snug">
                Elevating the standard of <br/> <span className="font-serif italic text-slate-500">Modern Living</span>
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-6">
                At Northwest Homes, we believe that a home is more than just a place to live—it's a sanctuary. Inspired by premium architectural traditions and modern design principles, we curate properties that offer an unparalleled lifestyle experience.
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                Whether you are seeking a premium sales property, an elegant letting, or sophisticated student accommodation, our commitment to excellence ensures that every interaction is seamless and tailored to your unique aspirations.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-8 border-b border-slate-900 pb-1 text-sm font-semibold uppercase tracking-wider text-slate-900 hover:text-amber-600 hover:border-amber-600 transition-colors"
              >
                Discover Our Story
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" 
                alt="Premium Living" 
                className="w-full h-full object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-8 hidden md:block">
                <p className="text-4xl font-light mb-1">15+</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative p-8 md:p-12"
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>

              <span className="text-xs uppercase tracking-[0.3em] text-amber-600 font-medium mb-2 block">
                The Northwest Homes Heritage
              </span>
              <h3 className="text-3xl font-light text-slate-900 mb-6">
                Redefining Real Estate Since 2011
              </h3>

              <div className="space-y-6 text-slate-600 font-light leading-relaxed text-sm">
                <p>
                  Founded with a singular vision to transform property discovery across the North West, Northwest Homes has grown into a trusted market leader in residential sales, premium lettings, and specialized student accommodations.
                </p>
                <p>
                  Our philosophy bridges traditional integrity with cutting-edge digital experiences. We understand that finding a property is a deeply personal journey, which is why our dedicated team combines local expertise with high-touch advisory services.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-sm">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-base mb-1">Award Winning Service</h4>
                      <p className="text-xs text-slate-500">Recognized for excellence in client satisfaction and property management.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-sm">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-base mb-1">Trusted Expertise</h4>
                      <p className="text-xs text-slate-500">Over 15 years of deep regional market insight and transparent dealings.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-sm">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-base mb-1">Innovative Approach</h4>
                      <p className="text-xs text-slate-500">Leveraging modern platforms for instant property discovery and viewings.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-sm">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-base mb-1">Client Centric</h4>
                      <p className="text-xs text-slate-500">Tailored solutions designed specifically around your unique lifestyle needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-slate-900 text-white px-8 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-amber-400 hover:text-slate-900 transition-colors"
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