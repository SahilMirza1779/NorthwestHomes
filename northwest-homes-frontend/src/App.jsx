import React, { useState } from 'react';
import propertiesData from './data/properties.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sales', 'Lettings', 'Student Accommodation'];

  const filteredProperties = activeCategory === 'All' 
    ? propertiesData 
    : propertiesData.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <Hero />

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
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400 font-light">
              No properties found in this category.
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white py-8 text-center text-xs text-slate-400 tracking-wider">
        © 2026 Northwest Homes Redesign Prototype. Developed for Presentation.
      </footer>
    </div>
  );
}

export default App;