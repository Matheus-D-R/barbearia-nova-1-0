import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] py-8 border-t border-brand-wood/10 text-center">
      <div className="container mx-auto px-6">
        <h3 className="font-serif text-brand-gold text-2xl tracking-widest mb-4">BARBEARIA IMPERIAL</h3>
        <p className="text-brand-light/30 text-xs">
          © {new Date().getFullYear()} Barbearia Imperial. Todos os direitos reservados.
        </p>
        <p className="text-brand-light/20 text-[10px] mt-2">
            Ilha Solteira - SP
        </p>
      </div>
    </footer>
  );
};

export default Footer;