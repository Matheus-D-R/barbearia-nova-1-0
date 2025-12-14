import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`;

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/70 to-brand-black/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000&auto=format&fit=crop" 
          alt="Interior de Barbearia Clássica" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
            <h2 className="text-brand-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-sans font-bold">
                Estilo • Tradição • Cavalheirismo
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                Mais do que um corte, <br/>
                <span className="text-brand-gold italic">um legado.</span>
            </h1>
            <p className="text-brand-light/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                Recupere a essência do cuidado masculino em um ambiente onde a precisão da navalha encontra a sofisticação moderna.
            </p>
            
            <a 
                href={whatsappLink}
                className="inline-flex items-center gap-3 bg-brand-gold text-brand-black px-8 py-4 rounded-none uppercase tracking-widest font-bold hover:bg-brand-goldHover transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-brand-gold/20"
            >
                Agendar pelo WhatsApp
                <ArrowRight size={20} />
            </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-light/50">
        <span className="text-xs tracking-widest uppercase">Role para baixo</span>
      </div>
    </section>
  );
};

export default Hero;