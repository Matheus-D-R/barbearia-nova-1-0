import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="A Arte do Cuidado" 
              alignment="center"
            />
            <div className="space-y-6 text-brand-light/90 text-lg font-light leading-relaxed text-justify md:px-10">
              <p>
                Em um mundo onde tudo é passageiro, nós escolhemos cultivar o permanente. A <strong className="text-brand-gold">Barbearia Imperial</strong> não é apenas um local para aparar os fios; é um santuário de masculinidade, construído sobre os pilares da tradição e da excelência.
              </p>
              <p>
                Acreditamos que cada homem carrega uma história, e nosso papel é refinar a imagem que a conta. Nossos barbeiros não são apenas profissionais, são artesãos dedicados que compreendem a geometria do rosto e a textura de cada fio.
              </p>
              <p>
                Aqui, o tempo desacelera. Entre a toalha quente e o deslizar suave da navalha, você encontra um momento de pausa, um ritual de renovação que vai muito além da estética. É sobre confiança. É sobre sair pronto para conquistar o seu lugar no mundo.
              </p>
              <div className="pt-8 text-center">
                <p className="font-serif text-2xl text-brand-gold italic">
                  "Onde o clássico encontra o contemporâneo."
                </p>
                <div className="w-24 h-px bg-brand-gold/30 mx-auto mt-6"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;