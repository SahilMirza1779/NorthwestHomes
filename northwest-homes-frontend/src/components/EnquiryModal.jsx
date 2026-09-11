import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Phone, Mail, User, Clock } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose, type = 'viewing' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleClose = () => {
    setSubmitted(false);
    setLoading(false);
    onClose();
  };

  const isViewing = type === 'viewing';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Left Side Banner */}
          <div className="w-full md:w-5/12 relative bg-slate-900 text-white p-8 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                alt="Spaces & Shops" 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />
            </div>

            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-semibold mb-2 block">
                {isViewing ? 'Schedule Visit' : 'Get In Touch'}
              </span>
              <h3 className="text-2xl font-light text-white leading-snug">
                {isViewing ? 'Book a Property or Shop Viewing' : 'Send a Direct Enquiry'}
              </h3>
            </div>

            <div className="relative z-10 mt-8">
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Explore flexible living spaces, student accommodations, and prime high-street commercial retail shops across the North West.
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-7/12 p-8 md:p-10 relative overflow-y-auto bg-white flex flex-col justify-between">
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-full z-10"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg text-white">
                  <Check size={32} />
                </div>
                <h4 className="text-2xl font-light text-slate-900 mb-2">Request Submitted!</h4>
                <p className="text-xs text-slate-500 font-light max-w-xs leading-relaxed mb-8">
                  Thank you. Our leasing team will contact you within 24 hours to confirm your details.
                </p>
                <button 
                  onClick={handleClose}
                  className="bg-slate-900 text-white px-8 py-3 text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-amber-400 hover:text-slate-900 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h4 className="text-xl font-medium text-slate-900 mb-1">
                    {isViewing ? 'Viewing Request' : 'Enquiry Details'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {isViewing ? 'Fill in your details to schedule a physical or virtual tour.' : 'Drop your queries and our experts will get back to you.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">Full Name</label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="text" required placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-600" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">Phone Number</label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="tel" required placeholder="+44 7000 000000" className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-600" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="email" required placeholder="hello@example.com" className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">Preferred Date</label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="date" required className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-600" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">Interested In</label>
                      <div className="relative">
                        <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <select className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-600">
                          <option>Rooms & Dorms</option>
                          <option>Commercial Retail Shop</option>
                          <option>Co-living Space</option>
                          <option>Student Hostel</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {!isViewing && (
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">Your Message</label>
                      <textarea rows={3} placeholder="Mention specific requirements..." className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg p-3 focus:outline-none focus:border-amber-600 resize-none"></textarea>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-slate-900 text-white mt-4 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-colors rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? 'Submitting Request...' : 'Submit Request'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnquiryModal;