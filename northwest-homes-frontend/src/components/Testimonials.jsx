import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Liam O'Connor",
    role: "University Student",
    comment: "Finding a student dorm in Manchester was effortless. Moved in within 48 hours without any paperwork hassle!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80"
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Retail Store Owner",
    comment: "Securing a prime high-street shop unit on Market Street was seamless. Northwest Homes made our business launch smooth.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Visiting Consultant",
    comment: "Booked a studio for a 3-month project. The flexibility of duration saved me a ton of money and stress.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-medium mb-3 block">Verified Feedback</span>
          <h2 className="text-4xl font-light tracking-tight mb-4">Loved by Residents & Retail Partners</h2>
          <p className="text-slate-400 text-sm font-light">See what students, professionals, and shop owners say about their experience with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div 
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 flex flex-col justify-between relative"
            >
              <Quote size={32} className="absolute top-6 right-6 text-slate-800" />
              <div>
                <div className="flex space-x-1 mb-6 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-8">"{rev.comment}"</p>
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/80">
                <img src={rev.image} alt={rev.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-sm font-medium text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;