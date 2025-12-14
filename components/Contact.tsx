import React from 'react';
import { MapPin, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const whatsappLink = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`;

  return (
    <section className="py-20 bg-brand-black text-center relative overflow-hidden">
        {/* Subtle background detail */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-black via-brand-gold to-brand-black"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-gold uppercase tracking-widest mb-12">
            Localização & Contato
        </h2>

        <div className="bg-brand-dark p-10 border border-brand-wood/20 shadow-2xl relative">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                
                {/* Info Block */}
                <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-brand-black rounded-full text-brand-gold">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-brand-light font-bold uppercase tracking-wider mb-1">Endereço</h4>
                        <p className="text-brand-light/70">{BUSINESS_INFO.address}</p>
                        <p className="text-brand-light/70">{BUSINESS_INFO.cityState}</p>
                    </div>
                    <a 
                        href={BUSINESS_INFO.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-brand-gold border-b border-brand-gold pb-0.5 hover:text-white hover:border-white transition-colors"
                    >
                        Ver no Google Maps
                    </a>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-32 bg-brand-wood/30"></div>

                {/* Info Block */}
                <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-brand-black rounded-full text-brand-gold">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-brand-light font-bold uppercase tracking-wider mb-1">Contato</h4>
                        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-brand-light/70 hover:text-brand-gold transition-colors block text-lg">
                            {BUSINESS_INFO.phoneDisplay}
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <a 
                    href={whatsappLink}
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded font-bold uppercase tracking-wide hover:bg-[#1fb355] transition-all shadow-lg hover:shadow-green-500/20"
                >
                    <MessageSquare size={20} />
                    Agendar Horário
                </a>
                <p className="mt-4 text-brand-light/40 text-sm">
                    Atendimento preferencialmente com hora marcada.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;