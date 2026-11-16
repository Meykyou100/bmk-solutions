import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Interventions } from './components/sections/Interventions';
import { Contact } from './components/sections/Contact';
import { QuoteModal } from './components/common/QuoteModal';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceFromSection = (serviceTitle: string) => {
    // Scroll directly to contact section with service preselected
    setSelectedServiceForQuote(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-navy-950 selection:text-white">
      {/* Sticky Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Semantic Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. About Section */}
        <About onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. Services Section (The 5 core activities) */}
        <Services onSelectServiceForQuote={handleSelectServiceFromSection} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 5. Projects & Intervention Domains */}
        <Interventions onSelectDomainForQuote={handleSelectServiceFromSection} />

        {/* 6. Contact & Quote Request Form */}
        <Contact 
          initialService={selectedServiceForQuote} 
          onClearInitialService={() => setSelectedServiceForQuote('')} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating />

      {/* Dedicated Express Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedServiceForQuote}
      />
    </div>
  );
};

export default App;
