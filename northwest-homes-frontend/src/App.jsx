import React, { useState } from 'react';
import { motion } from 'framer-motion';
import propertiesData from './data/properties.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import EnquiryModal from './components/EnquiryModal';
import PropertyDetailModal from './components/PropertyDetailModal';
import About from './components/About';
import Testimonials from './components/Testimonials';
import WhatsAppChat from './components/WhatsAppChat';
import Footer from './components/Footer';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('viewing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState('GBP');
  
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Updated Categories Array
  const categories = ['All', 'Room', 'Dormitory', 'Hostel', 'Suite', 'Co-living'];

  const filteredProperties = propertiesData.filter(item => {
  const matchesCategory = activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
  const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.location.toLowerCase().includes(searchQuery.toLowerCase());
  return matchesCategory && matchesSearch;
});

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
      <Navbar 
        onOpenModal={() => openModal('viewing')} 
        onNavClick={handleNavClick} 
        onMenuToggle={setIsMenuOpen} 
      />
      <Hero 
        onOpenModal={() => openModal('valuation')} 
        onScroll={() => handleNavClick('All')} 
        isMenuOpen={isMenuOpen} 
      />

      <section id="properties" className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-600 font-medium mb-3 block">Curated Portfolio</span>
          <h2 className="text-4xl font-light tracking-tight text-slate-900 mb-6">Explore Our Properties</h2>

          <div className="max-w-md mx-auto mb-8">
  <input 
    type="text" 
    placeholder="Search by location (e.g. Deansgate, City Center)..." 
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full bg-white border border-gray-200 text-sm text-slate-800 rounded-xl px-5 py-3.5 shadow-sm focus:outline-none focus:border-amber-600 transition-all"
  />
</div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider transition-all rounded-sm ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white font-medium shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <PropertyCard 
  key={property.id} 
  property={property} 
  index={index} 
  onViewDetails={handleViewDetails}
  currency={currency}
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
      <Testimonials />
      <WhatsAppChat />
      <Footer onOpenModal={() => openModal('viewing')} />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type={modalType} />
      <PropertyDetailModal isOpen={isDetailModalOpen} onClose={() => setIsDetailModalOpen(false)} property={selectedProperty} onEnquire={() => openModal('viewing')} />
    </div>
  );
}

export default App;