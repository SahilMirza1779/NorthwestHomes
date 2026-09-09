import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const PropertyCard = ({ property, index, onViewDetails }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-gray-100 shadow-sm overflow-hidden mb-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center rounded-sm"
    >
      <div className={`relative h-[450px] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
          {property.category}
        </div>
        <motion.img 
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className={`p-8 md:p-14 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
        <span className="text-xs uppercase tracking-[0.3em] text-amber-600 font-medium mb-3 block">
          Featured Collection
        </span>
        <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 leading-snug">{property.title}</h3>
        <p className="text-xs text-slate-500 mb-6 flex items-center gap-1">
          <MapPin size={14} className="text-amber-600" /> Exclusive Location, North West
        </p>
        
        <div className="text-3xl font-medium text-slate-900 mb-6">
          {property.price}
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-600 border-t border-b border-gray-100 py-4 mb-8">
          <div className="flex items-center gap-1.5"><Bed size={16} className="text-amber-600"/> 3 Beds</div>
          <div className="flex items-center gap-1.5"><Bath size={16} className="text-amber-600"/> 2 Baths</div>
          <div className="flex items-center gap-1.5"><Square size={16} className="text-amber-600"/> {property.category === 'Sales' ? '2,500 sqft' : 'Furnished'}</div>
        </div>

        <div>
          <button 
            onClick={() => onViewDetails(property)}
            className="bg-slate-900 text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-colors shadow-md"
          >
            View Property Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;