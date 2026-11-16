import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { LegalModal } from '../common/LegalModal';
import { 
  Camera, 
  ShieldAlert, 
  KeyRound, 
  Printer, 
  Zap, 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquare, 
  ArrowUpRight,
  Shield
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'mentions' | 'confidentialite' | null>(null);

  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'Vidéosurveillance HD', href: '#services', icon: Camera },
    { name: 'Systèmes anti-intrusion', href: '#services', icon: ShieldAlert },
    { name: 'Serrures intelligentes', href: '#services', icon: KeyRound },
    { name: 'Matériel bureautique pro', href: '#services', icon: Printer },
    { name: 'Bornes de recharge VE', href: '#services', icon: Zap },
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos de BMK SOLUTIONS', href: '#a-propos' },
    { name: 'Nos solutions par environnement', href: '#environnements' },
    { name: 'Pourquoi nous choisir', href: '#pourquoi-nous' },
    { name: 'Demande de devis & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Pied de page BMK SOLUTIONS</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          
          {/* Col 1: Brand & Presentation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed mt-4">
              BMK SOLUTIONS est votre partenaire spécialisé en solutions de sécurité électronique et équipements professionnels. Nous accompagnons entreprises, commerces et particuliers dans la protection de leurs biens et l'optimisation technologique de leurs espaces.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-xs text-slate-300">
                <Shield className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Installation soignée & matériel professionnel certifié</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://wa.me/212662133371?text=Bonjour%20BMK%20SOLUTIONS%2C%20je%20souhaite%20un%20renseignement%20sur%20vos%20équipements."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl bg-emerald-950 text-emerald-300 hover:text-white hover:bg-emerald-900 border border-emerald-800 hover:border-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>WhatsApp : +212 662 133 371</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Activités & Services
            </h3>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-slate-400 hover:text-white flex items-center gap-2.5 group transition-colors"
                    >
                      <Icon className="w-4 h-4 text-navy-400 group-hover:text-gold-400 transition-colors shrink-0" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors block leading-snug"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact details with real phone (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Coordonnées directes
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white block font-bold">Téléphones & WhatsApp</span>
                  <a href="tel:+212662133371" className="text-emerald-400 hover:text-emerald-300 font-bold block">
                    +212 662 133 371
                  </a>
                  <a href="tel:+212662303678" className="text-emerald-400 hover:text-emerald-300 font-bold block mt-0.5">
                    +212 662 303 678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white block font-bold">Siège & Localisation</span>
                  <span className="text-slate-300 block">Bine Lamdoune, Rue 45, N° 12</span>
                  <span className="text-slate-500 text-xs block">Interventions & chantiers</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white block font-bold">Courriel</span>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Via formulaire de devis
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} BMK SOLUTIONS. Tous droits réservés. Spécialiste en solutions de sécurité et équipements professionnels.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModalType('mentions')}
              className="hover:text-slate-300 transition-colors focus:outline-none underline-offset-4 hover:underline"
            >
              Mentions Légales
            </button>
            <button
              type="button"
              onClick={() => setLegalModalType('confidentialite')}
              className="hover:text-slate-300 transition-colors focus:outline-none underline-offset-4 hover:underline"
            >
              Politique de Confidentialité
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      {legalModalType && (
        <LegalModal
          isOpen={!!legalModalType}
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}
    </footer>
  );
};
