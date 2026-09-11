import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Calendar, Clock, ImageOff } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose, type }) => {
  const [imageError, setImageError] = useState(false);

  if (!isOpen) return null;

  const title = type === 'viewing' ? 'Book a Viewing' : 'Quick Enquiry';
  const subtitle = type === 'viewing' 
    ? 'Schedule a visit to explore our premium living spaces in person.' 
    : 'Tell us what you are looking for, and we will find the perfect space.';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[95vh]"
        >
          {/* Left Side - Lifestyle Image with Fallback */}
          <div className="hidden md:block md:w-2/5 relative bg-slate-900 flex items-center justify-center overflow-hidden">
            {!imageError ? (
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" 
                alt="Co-living Space" 
                onError={() => setImageError(true)}
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20">
                <ImageOff size={64} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent flex flex-col justify-end p-8 text-white z-10">
              <h3 className="text-2xl font-light mb-2">Find Your Vibe</h3>
              <p className="text-xs font-light text-slate-300 leading-relaxed">
                Join a community of students and professionals in the heart of the North West. Flexible, fully-furnished, and hassle-free.
              </p>
            </div>
          </div>

          {/* Right Side - Premium Form */}
          <div className="w-full md:w-3/5 p-8 relative overflow-y-auto">
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-200 p-2 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="mb-8 pr-8">
              <h2 className="text-3xl font-light text-slate-900 mb-2">{title}</h2>
              <p className="text-xs text-slate-500 font-light leading-relaxed">{subtitle}</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 block">Full Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" required className="w-full bg-slate-50 border border-slate-200 text-sm text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" placeholder="John Doe" />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 block">Phone Number</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="tel" required className="w-full bg-slate-50 border border-slate-200 text-sm text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" placeholder="+44 7000 000000" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 block">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="email" required className="w-full bg-slate-50 border border-slate-200 text-sm text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" placeholder="hello@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 block">Move-in Date</label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="date" required className="w-full bg-slate-50 border border-slate-200 text-sm text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 block">Expected Duration</label>
                  <div className="relative">
                    <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select className="w-full bg-slate-50 border border-slate-200 text-sm text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:bg-white transition-all appearance-none cursor-pointer">
                      <option value="">Select Duration</option>
                      <option>1 - 7 Days</option>
                      <option>1 - 3 Months</option>
                      <option>6 Months</option>
                      <option>1 Year+</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white mt-6 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-colors rounded-lg shadow-md">
                Submit Request
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnquiryModal;