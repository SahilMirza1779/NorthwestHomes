import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose, type }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-sm shadow-xl w-full max-w-md overflow-hidden relative"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-lg font-light tracking-wide text-slate-900 uppercase">
                {type === 'valuation' ? 'Free Valuation' : 'Book a Viewing'}
              </h3>
              <button onClick={onClose} className="text-slate-400 hover:text-slate-900 transition-colors">
                <X size={20} />
              </button>
            </div>
            <form 
              className="p-6 space-y-5" 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert('Success! Enquiry submitted.'); 
                onClose(); 
              }}
            >
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
                <input type="text" required className="w-full border-b border-gray-200 px-2 py-2 focus:outline-none focus:border-amber-400 transition-colors bg-gray-50/50" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                <input type="email" required className="w-full border-b border-gray-200 px-2 py-2 focus:outline-none focus:border-amber-400 transition-colors bg-gray-50/50" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                <input type="tel" required className="w-full border-b border-gray-200 px-2 py-2 focus:outline-none focus:border-amber-400 transition-colors bg-gray-50/50" />
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white mt-4 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-colors">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;