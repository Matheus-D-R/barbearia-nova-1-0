import React from 'react';
import { Award, Clock, Coffee, ShieldCheck } from 'lucide-react';
import SectionTitle from './SectionTitle';

const features = [
  {
    icon: Award,
    title: "Atendimento de Elite",
    description: "Profissionais treinados não apenas para cortar, mas para consultar e elevar o seu estilo pessoal."
  },
  {
    icon: ShieldCheck,
    title: "Higiene Absoluta",
    description: "Esterilização hospitalar de equipamentos e uso de materiais descartáveis. Sua segurança é inegociável."
  },
  {
    icon: Coffee,
    title: "Ambiente & Bar",
    description: "Relaxe em nossas cadeiras de couro legítimo enquanto aprecia um café expresso ou uma cerveja gelada por nossa conta."
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Respeitamos o seu tempo. Nossa agenda é organizada rigorosamente para evitar esperas desnecessárias."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="A Experiência Imperial"
          subtitle="Por que somos a escolha dos homens que valorizam qualidade."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white/5 transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-full bg-brand-black border border-brand-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-gold/5">
                <feature.icon size={32} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-serif text-brand-light mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-light/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;