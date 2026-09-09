import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="h-48 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{property.category}</span>
        <h3 className="text-lg font-medium text-slate-800 mt-1 mb-2">{property.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{property.features}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold text-slate-900">{property.price}</span>
          <button className="bg-slate-900 text-white px-4 py-2 text-sm rounded hover:bg-slate-800 transition-colors">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;