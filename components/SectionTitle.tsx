import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-serif text-brand-gold uppercase tracking-widest mb-4">
        {title}
      </h2>
      {subtitle && (
        <div className="flex flex-col items-center">
            <span className="w-24 h-0.5 bg-brand-wood mb-4"></span>
            <p className="text-brand-light/80 font-light text-lg max-w-2xl mx-auto italic">
            "{subtitle}"
            </p>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;