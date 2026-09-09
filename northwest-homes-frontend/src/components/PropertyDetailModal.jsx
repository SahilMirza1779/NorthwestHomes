import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Bed, Bath, Square, CheckCircle } from 'lucide-react';

const PropertyDetailModal = ({ isOpen, onClose, property, onEnquire }) => {
  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl flex flex-col md:flex-row relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-sm text-slate-500 hover:text-slate-900 transition-colors">
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 h-[300px] md:h-auto relative">
              <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 text-xs font-bold uppercase tracking-wider text-slate-900">
                {property.category}
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-sm font-medium text-amber-600 tracking-widest uppercase mb-2 block">
                Premium Listing
              </span>
              <h2 className="text-3xl font-light text-slate-900 mb-2 leading-tight">
                {property.title}
              </h2>
              <p className="text-slate-500 flex items-center gap-1 mb-6 text-sm">
                <MapPin size={16} /> Exclusive Location, North West
              </p>

              <div className="text-3xl font-medium text-slate-900 mb-8 pb-8 border-b border-gray-100">
                {property.price}
              </div>

              <div className="grid grid-cols-2 gap-y-4 mb-8">
                <div className="flex items-center gap-2 text-slate-600">
                  <Bed size={20} className="text-slate-400" /> 
                  <span className="text-sm">3 Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Bath size={20} className="text-slate-400" /> 
                  <span className="text-sm">2 Bathrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Square size={20} className="text-slate-400" /> 
                  <span className="text-sm">{property.category === 'Sales' ? '2,500 sqft Area' : 'Fully Furnished'}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle size={20} className="text-slate-400" /> 
                  <span className="text-sm">Premium Finish</span>
                </div>
              </div>

              <p className="text-slate-600 font-light leading-relaxed mb-8 text-sm">
                Experience the pinnacle of luxury living with this exceptional property. Featuring expansive interiors, bespoke finishes, and breathtaking views, this home is designed for those who appreciate the finer things in life.
              </p>

              <div className="flex gap-4 mt-auto">
                <button 
                  onClick={() => { onClose(); onEnquire(); }}
                  className="flex-1 bg-slate-900 text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-colors"
                >
                  Book a Viewing
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PropertyDetailModal;