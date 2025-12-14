import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-brand-black text-brand-light selection:bg-brand-gold selection:text-brand-black font-sans">
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default App;