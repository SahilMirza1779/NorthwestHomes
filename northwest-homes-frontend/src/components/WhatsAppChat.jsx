import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
  const handleChat = () => {
    window.open('https://wa.me/441611234567?text=Hi,%20I%20am%20interested%20in%20booking%20a%20property%20with%20Northwest%20Homes.', '_blank');
  };

  return (
    <button 
      onClick={handleChat}
      className="fixed bottom-6 right-6 z-[100] bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="absolute right-full mr-3 bg-slate-900 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Chat with Manager
      </span>
    </button>
  );
};

export default WhatsAppChat;