import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import EnquiryModal from './components/EnquiryModal';
import PropertyDetailModal from './components/PropertyDetailModal';
import About from './components/About';
import Testimonials from './components/Testimonials';
import WhatsAppChat from './components/WhatsAppChat';
import Footer from './components/Footer';
import propertiesData from './data/properties.json';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('viewing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Categories Array
  const categories = ['All', 'Room', 'Dormitory', 'Hostel', 'Suite', 'Co-living', 'Shops'];

  const filteredProperties = propertiesData.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNavClick = (category) => {
    setActiveCategory(category);
    const element = document.getElementById('properties-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setIsDetailModalOpen(true);
  };

  const scrollToProperties = () => {
    const element = document.getElementById('properties-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-900 font-sans">
      {/* Navbar */}
      <Navbar 
        onOpenModal={() => { setModalType('viewing'); setIsModalOpen(true); }} 
        onNavClick={handleNavClick} 
        onMenuToggle={(open) => setIsMenuOpen(open)} 
      />

      {/* Hero Section */}
      <Hero 
        onOpenModal={() => { setModalType('viewing'); setIsModalOpen(true); }} 
        onScroll={scrollToProperties} 
        isMenuOpen={isMenuOpen} 
      />

      {/* Properties Section */}
      <section id="properties-section" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-600 font-medium mb-3 block">Curated Portfolio</span>
          <h2 className="text-4xl font-light tracking-tight text-slate-900 mb-4">Explore Our Properties & Shops</h2>
          <p className="text-slate-500 text-sm font-light">Browse through our exclusive residential spaces and commercial retail units in Manchester.</p>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <input 
            type="text" 
            placeholder="Search by location (e.g. Deansgate, Market Street)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 text-sm text-slate-800 rounded-xl px-5 py-3.5 shadow-sm focus:outline-none focus:border-amber-600 transition-all"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-lg transition-all cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Property Cards Grid */}
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
            <div className="col-span-full text-center py-16 text-slate-400">
              <p className="text-base font-light">No properties or shops found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* About Us */}
      <About />

      {/* Testimonials */}
      <Testimonials />

      {/* WhatsApp Floating Chat */}
      <WhatsAppChat />

          {/* Footer */}
<Footer onOpenModal={() => { setModalType('viewing'); setIsModalOpen(true); }} />

      {/* Modals */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
      />

      <PropertyDetailModal 
        isOpen={isDetailModalOpen} 
        onClose={() => setIsDetailModalOpen(false)} 
        property={selectedProperty}
        onEnquire={() => { setModalType('enquiry'); setIsModalOpen(true); }}
      />
    </div>
  );
}

export default App;