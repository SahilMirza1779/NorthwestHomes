import React, { useState } from 'react';
import propertiesData from './data/properties.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import EnquiryModal from './components/EnquiryModal';
import PropertyDetailModal from './components/PropertyDetailModal';
import About from './components/About';
import Footer from './components/Footer'; // Import Footer

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('viewing');
  
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const categories = ['All', 'Sales', 'Lettings', 'Student Accommodation'];

  const filteredProperties = activeCategory === 'All' 
    ? propertiesData 
    : propertiesData.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleNavClick = (category) => {
    setActiveCategory(category);
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar onOpenModal={() => openModal('viewing')} onNavClick={handleNavClick} />
      <Hero onOpenModal={() => openModal('valuation')} onScroll={() => handleNavClick('All')} />

      <section id="properties" className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-200 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">Curated Portfolio</span>
            <h2 className="text-3xl font-light tracking-tight text-slate-900 mt-1">Featured Properties</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all rounded-sm ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white font-medium'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                index={index} 
                onViewDetails={handleViewDetails}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400 font-light">
              No properties found in this category.
            </div>
          )}
        </div>
      </section>

      <About />

      {/* Render Enhanced Footer */}
      <Footer onOpenModal={() => openModal('viewing')} />

      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
      />

      <PropertyDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        property={selectedProperty}
        onEnquire={() => openModal('viewing')}
      />
    </div>
  );
}

export default App;