import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Users, Clock, CheckCircle, ImageOff, AlertCircle, CreditCard, Lock, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const PropertyDetailModal = ({ isOpen, onClose, property, onEnquire, currency = 'GBP' }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen || !property) return null;

  const imageList = Array.isArray(property.images) && property.images.length > 0 
    ? property.images 
    : (property.image ? [property.image] : ['/placeholder-room.jpg']);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleImageError = (idx) => {
    setFailedImages((prev) => ({ ...prev, [idx]: true }));
  };

  const isCurrentFailed = failedImages[currentImage];
  const isOccupied = property.status === 'Occupied';

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetAndClose = () => {
    setShowCheckout(false);
    setIsSuccess(false);
    setLoading(false);
    setCurrentImage(0);
    setFailedImages({});
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Left Side Image Slider */}
          <div className="w-full md:w-1/2 relative h-64 md:h-auto bg-slate-100 flex items-center justify-center overflow-hidden group">
            {isSuccess ? (
              <div className="absolute inset-0 bg-slate-900 text-white flex flex-col items-center justify-center p-8 text-center z-30">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Check size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-light mb-2">Booking Confirmed!</h3>
                <p className="text-xs text-slate-300 font-light max-w-xs leading-relaxed mb-6">
                  Your reservation for <span className="font-medium text-white">{property.title}</span> has been successfully placed.
                </p>
                <button 
                  onClick={resetAndClose}
                  className="bg-white text-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-md shadow-sm">
                  {property.category}
                </div>
                
                {!isCurrentFailed ? (
                  <img 
                    src={imageList[currentImage]} 
                    alt={property.title} 
                    onError={() => handleImageError(currentImage)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-400 absolute inset-0 bg-slate-100">
                    <ImageOff size={48} className="mb-2 opacity-50" />
                    <span className="text-xs uppercase tracking-widest">Image Blocked / Unavailable</span>
                  </div>
                )}

                {/* Slider Controls inside Modal */}
                {imageList.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all z-20 cursor-pointer">
                      <ChevronLeft size={18} className="text-slate-800" />
                    </button>
                    <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all z-20 cursor-pointer">
                      <ChevronRight size={18} className="text-slate-800" />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 z-20">
                      {imageList.map((_, idx) => (
                        <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentImage ? 'w-4 bg-white' : 'w-1.5 bg-white/60'}`} />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 p-8 md:p-10 relative overflow-y-auto flex flex-col">
            <button 
              onClick={resetAndClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 hover:bg-slate-100 p-2 rounded-full z-10 cursor-pointer"
            >
              <X size={20} />
            </button>

            {!showCheckout ? (
              <>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-600 font-medium mb-2 block">
                  Rental Listing
                </span>
                <h2 className="text-3xl font-light text-slate-900 mb-3">{property.title}</h2>
                
                <p className="text-sm text-slate-500 mb-6 flex items-center gap-1.5">
                  <MapPin size={16} className="text-amber-600" /> {property.location}
                </p>

                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div className="text-2xl font-bold text-slate-900">
                    {property.price}
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${isOccupied ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {property.status || 'Available'}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Duration</p>
                      <p className="text-sm font-medium text-slate-800">{property.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users size={20} className="text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Capacity</p>
                      <p className="text-sm font-medium text-slate-800">{property.capacity}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-10 flex-grow">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-green-500" /> Wi-Fi & Utilities Included
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-green-500" /> 24/7 Security & Support
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-green-500" /> Maintenance Covered
                  </div>
                </div>

                {isOccupied ? (
                  <div className="w-full bg-slate-100 text-slate-400 px-8 py-4 text-xs font-semibold uppercase tracking-widest rounded-lg flex justify-center items-center gap-2 cursor-not-allowed">
                    <AlertCircle size={16} /> Currently Occupied
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setShowCheckout(true)}
                      className="flex-1 bg-amber-500 text-slate-900 px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors rounded-lg shadow-md cursor-pointer"
                    >
                      Book Now
                    </button>
                    <button 
                      onClick={() => {
                        resetAndClose();
                        if (onEnquire) onEnquire();
                      }}
                      className="flex-1 bg-slate-900 text-white px-6 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-slate-800 transition-colors rounded-lg shadow-md cursor-pointer"
                    >
                      Send Enquiry
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6 pr-6">
                    <h3 className="text-xl font-medium text-slate-900 flex items-center gap-2">
                      <CreditCard size={20} className="text-amber-600" /> Secure Checkout
                    </h3>
                    <button onClick={() => setShowCheckout(false)} className="text-xs text-slate-500 hover:text-slate-900 underline cursor-pointer">
                      Back to details
                    </button>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg mb-6 text-xs text-slate-600 flex justify-between items-center border border-gray-100">
                    <div>
                      <p className="font-semibold text-slate-900">{property.title}</p>
                      <p className="text-slate-500">{property.location}</p>
                    </div>
                    <div className="text-right font-bold text-slate-900 text-sm">
                      {property.price}
                    </div>
                  </div>

                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">Cardholder Name</label>
                      <input type="text" required defaultValue="Sahil Mirza" className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500" />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">Card Number</label>
                      <div className="relative">
                        <CreditCard size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="text" required defaultValue="4242 •••• •••• 4242" className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-500" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">Expiry Date</label>
                        <input type="text" required defaultValue="12/28" className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500" />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">CVV</label>
                        <input type="password" required defaultValue="123" maxLength={4} className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500" />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-slate-900 text-white mt-4 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-colors rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Processing Payment...</span>
                      ) : (
                        <>
                          <Lock size={14} /> Pay & Confirm Booking
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                    <Lock size={12} /> 256-Bit SSL Encrypted Demo Payment Gateway
                  </p>
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PropertyDetailModal;