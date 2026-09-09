import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const PropertyCard = ({ property, index, onViewDetails }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white group cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden rounded-t-sm">
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900">
          {property.category}
        </div>
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <button 
              onClick={() => onViewDetails(property)}
              className="bg-white text-slate-900 px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-amber-400 transition-colors"
            >
                View Details
            </button>
        </div>
      </div>
      <div className="pt-6 pb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-light text-slate-900 group-hover:text-amber-700 transition-colors">{property.title}</h3>
          <span className="text-xl font-medium text-slate-900">{property.price}</span>
        </div>
        <p className="text-sm text-slate-500 mb-5 flex items-center gap-1">
          <MapPin size={14} /> Premium Location, North West
        </p>
        
        <div className="flex items-center gap-5 text-sm text-slate-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5"><Bed size={16} className="text-slate-400"/> 3</div>
          <div className="flex items-center gap-1.5"><Bath size={16} className="text-slate-400"/> 2</div>
          <div className="flex items-center gap-1.5"><Square size={16} className="text-slate-400"/> {property.category === 'Sales' ? '2,500 sqft' : 'Furnished'}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;