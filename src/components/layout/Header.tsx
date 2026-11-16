import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { Menu, X, ArrowRight, Phone, MessageSquare, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Services', href: '#services' },
    { label: 'Environnements', href: '#environnements' },
    { label: 'Pourquoi nous', href: '#pourquoi-nous' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="dark" size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2.5 py-2 text-sm font-semibold text-slate-700 hover:text-navy-950 hover:bg-slate-100/80 rounded-md transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Header Right CTAs */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              {/* Primary phone only on desktop — both shown in mobile drawer */}
              <a
                href="tel:+212662133371"
                className="flex items-center gap-1.5 text-xs font-bold text-navy-950 bg-slate-100 hover:bg-slate-200/80 rounded-lg border border-slate-200 px-2.5 py-1.5 transition-colors whitespace-nowrap"
                title="Appeler BMK SOLUTIONS"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>+212 662 133 371</span>
              </a>

              {/* WhatsApp direct icon */}
              <a
                href="https://wa.me/212662133371?text=Bonjour%20BMK%20SOLUTIONS%2C%20je%20souhaite%20obtenir%20des%20renseignements%20ou%20un%20devis."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors border border-emerald-200"
                aria-label="Contacter sur WhatsApp"
                title="Échanger sur WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Main Devis CTA */}
              <Button
                variant="primary"
                size="sm"
                onClick={handleQuoteClick}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="font-bold shadow-sm"
              >
                Demander un devis
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+212662133371"
                className="p-2 text-navy-900 bg-slate-100 rounded-lg border border-slate-200"
                aria-label="Appeler le +212 662 133 371"
              >
                <Phone className="w-4 h-4" />
              </a>
              <Button
                variant="primary"
                size="sm"
                onClick={handleQuoteClick}
                className="text-xs py-1.5 px-3 font-bold"
              >
                Devis
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 hover:text-navy-950 rounded-lg hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 p-6 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <Logo size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-navy-950 rounded-lg hover:bg-slate-100 focus:outline-none"
                aria-label="Fermer le menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-5 flex-1 overflow-y-auto space-y-4">
              {/* Phone calls & Address pill */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Lignes directes & Support
                </span>
                <div className="space-y-1.5">
                  <a
                    href="tel:+212662133371"
                    className="text-sm font-extrabold text-navy-950 flex items-center gap-2 hover:text-navy-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>+212 662 133 371</span>
                  </a>
                  <a
                    href="tel:+212662303678"
                    className="text-sm font-extrabold text-navy-950 flex items-center gap-2 hover:text-navy-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>+212 662 303 678</span>
                  </a>
                </div>
                <div className="pt-2 border-t border-slate-200/80 flex items-start gap-1.5 text-xs text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-navy-800 shrink-0 mt-0.5" />
                  <span>Bine Lamdoune, Rue 45, N° 12</span>
                </div>
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
                Navigation
              </p>
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-navy-950 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Button
                variant="primary"
                size="md"
                onClick={handleQuoteClick}
                className="w-full justify-center font-bold"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Demander un devis gratuit
              </Button>
              <Button
                variant="whatsapp"
                size="md"
                href="https://wa.me/212662133371?text=Bonjour%20BMK%20SOLUTIONS%2C%20je%20souhaite%20des%20renseignements%20ou%20un%20devis."
                external
                className="w-full justify-center font-bold"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                WhatsApp : +212 662 133 371
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
