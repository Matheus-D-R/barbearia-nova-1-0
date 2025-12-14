import React from 'react';
import SectionTitle from './SectionTitle';
import { SERVICES } from '../constants';
import { Scissors } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black border-y border-brand-gold/10">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Nossos Serviços" 
          subtitle="Excelência em cada detalhe, do corte clássico ao acabamento perfeito."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group relative p-6 border border-brand-wood/30 hover:border-brand-gold/50 transition-colors duration-300 bg-brand-dark/50"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif text-brand-light group-hover:text-brand-gold transition-colors">
                  {service.name}
                </h3>
                <span className="text-xl font-bold text-brand-gold">
                  {service.price}
                </span>
              </div>
              
              <div className="w-12 h-px bg-brand-wood/50 my-3 group-hover:w-full group-hover:bg-brand-gold/30 transition-all duration-500"></div>
              
              <p className="text-brand-light/60 text-sm font-light">
                {service.description}
              </p>

              {/* Decorative Icon */}
              <div className="absolute top-4 right-4 text-brand-black opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <Scissors size={80} className="stroke-brand-black fill-brand-wood/10 -rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;