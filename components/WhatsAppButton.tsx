import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  const whatsappLink = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400 group"
      aria-label="Agendar via WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-brand-black text-brand-gold text-xs font-bold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-brand-gold/30">
        Agende agora
      </span>
    </a>
  );
};

export default WhatsAppButton;