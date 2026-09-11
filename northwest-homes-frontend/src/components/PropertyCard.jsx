import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, ChevronLeft, ChevronRight, Clock, ImageOff } from 'lucide-react';

const PropertyCard = ({ property, index, onViewDetails, currency = 'GBP' }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageError, setImageError] = useState(false);

  const imageList = Array.isArray(property.images) && property.images.length > 0 
    ? property.images 
    : (property.image ? [property.image] : ['/placeholder-room.jpg']);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % imageList.length);
    setImageError(false);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
    setImageError(false);
  };

  // Safe and accurate currency formatting
  const getFormattedPrice = () => {
    let rate = 1;
    let symbol = '£';

    if (currency === 'USD') {
      rate = 1.3;
      symbol = '$';
    } else if (currency === 'INR') {
      rate = 108;
      symbol = '₹';
    }

    const dayPrice = Math.round((property.basePriceDay || 20) * rate);
    const monthPrice = Math.round((property.basePriceMonth || 400) * rate);

    return `${symbol}${dayPrice}/day | ${symbol}${monthPrice.toLocaleString()}/mo`;
  };

  const statusColor = property.status === 'Occupied' 
    ? 'bg-red-500/90' 
    : property.status === 'Few Beds Left' 
      ? 'bg-orange-500/90' 
      : 'bg-green-500/90';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-100 flex flex-col"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100 flex items-center justify-center">
        <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-md shadow-sm">
          {property.category}
        </div>
        
        <div className={`absolute top-4 right-4 z-20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-md shadow-sm ${statusColor}`}>
          {property.status || 'Available'}
        </div>
        
        {!imageError ? (
          <img 
            src={imageList[currentImage]} 
            alt={property.title} 
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400">
            <ImageOff size={32} className="mb-2 opacity-50" />
            <span className="text-[10px] uppercase tracking-widest">Unavailable</span>
          </div>
        )}

        {imageList.length > 1 && !imageError && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <ChevronLeft size={16} className="text-slate-800" />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <ChevronRight size={16} className="text-slate-800" />
            </button>
            
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
              {imageList.map((_, idx) => (
                <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentImage ? 'w-3 bg-white' : 'w-1.5 bg-white/60'}`} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-medium text-slate-900 mb-1 truncate">{property.title}</h3>
        <p className="text-xs text-slate-500 mb-4 flex items-center gap-1.5 font-medium truncate">
          <MapPin size={12} className="text-amber-600" /> {property.location}
        </p>
        
        <div className="text-base font-bold text-slate-900 mb-4">
          {getFormattedPrice()}
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-slate-50 p-3 rounded-lg mb-4 flex-grow">
          <div className="flex items-center gap-1.5"><Clock size={14} className="text-slate-400"/> {property.duration}</div>
          <div className="flex items-center gap-1.5"><Users size={14} className="text-slate-400"/> {property.capacity}</div>
        </div>

        <button 
          onClick={() => onViewDetails && onViewDetails(property)}
          className="w-full bg-slate-900 text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-amber-400 hover:text-slate-900 transition-colors rounded-lg"
        >
          {property.status === 'Occupied' ? 'View Details' : 'Check Availability'}
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;