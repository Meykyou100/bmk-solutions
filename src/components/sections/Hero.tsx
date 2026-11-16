import React from 'react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { 
  ArrowRight, 
  ShieldCheck, 
  Camera, 
  Lock, 
  Zap, 
  Printer, 
  Bell, 
  CheckCircle2, 
  Clock, 
  MessageSquare,
  PhoneCall,
  MapPin
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const quickPillars = [
    { label: 'Vidéosurveillance HD', href: '#services', icon: Camera },
    { label: 'Systèmes Anti-intrusion', href: '#services', icon: Bell },
    { label: 'Serrures Intelligentes', href: '#services', icon: Lock },
    { label: 'Matériel Bureautique Pro', href: '#services', icon: Printer },
    { label: 'Bornes de Recharge VE', href: '#services', icon: Zap },
  ];

  return (
    <section 
      id="accueil" 
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/80 via-slate-50 to-white border-b border-slate-200/70"
    >
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0b162c 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Positioning Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="navy" size="md" icon={<ShieldCheck className="w-3.5 h-3.5 text-gold-400" />}>
                Spécialiste en Sécurité & Équipements Professionnels
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-navy-950 tracking-tight leading-[1.12]">
              Des solutions intelligentes pour protéger et équiper votre quotidien.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl font-normal">
              BMK SOLUTIONS vous accompagne avec des solutions professionnelles de sécurité, de surveillance et d'équipements technologiques.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenQuoteModal}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="shadow-lg shadow-navy-950/15 font-bold"
              >
                Demander un devis
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href="https://wa.me/212662133371?text=Bonjour%20BMK%20SOLUTIONS%2C%20je%20souhaite%20obtenir%20des%20renseignements%20ou%20un%20devis."
                external
                icon={<MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />}
                iconPosition="left"
                className="font-bold shadow-md shadow-emerald-600/20"
              >
                WhatsApp : +212 662 133 371
              </Button>
            </div>

            {/* Direct Telephone & Address Banner */}
            <div className="pt-2 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 font-bold text-navy-950">
                  <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Lignes directes :</span>
                </span>
                <a 
                  href="tel:+212662133371" 
                  className="font-extrabold text-navy-950 hover:text-navy-700 underline underline-offset-4"
                >
                  +212 662 133 371
                </a>
                <span className="text-slate-300">•</span>
                <a 
                  href="tel:+212662303678" 
                  className="font-extrabold text-navy-950 hover:text-navy-700 underline underline-offset-4"
                >
                  +212 662 303 678
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                <MapPin className="w-3.5 h-3.5 text-navy-700 shrink-0" />
                <span>Bine Lamdoune, Rue 45, N° 12 — Intervention rapide</span>
              </div>
            </div>

            {/* Professional Engagements Indicators */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">Étude technique personnalisée</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-navy-800 shrink-0" />
                <span className="font-semibold text-slate-800">Réactivité & devis rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="font-semibold text-slate-800">Équipements professionnels certifiés</span>
              </div>
            </div>

          </div>

          {/* Right Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Professional Security Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-navy-950 aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85"
                  alt="Système de vidéosurveillance et technologies de sécurité BMK SOLUTIONS — cameras, monitoring"
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.06] group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/15 to-transparent pointer-events-none" />

                {/* Overlaid Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-950/95 backdrop-blur-md border border-white/15 text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-navy-900 border border-gold-500/40 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-gold-400" />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-white tracking-wide">BMK SOLUTIONS</p>
                        <p className="text-xs text-slate-300">Vente, installation &amp; maintenance</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Installation Pro
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Contact Badge */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-xl border border-slate-200 text-xs font-bold text-navy-950">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Intervention Entreprises &amp; Résidentiel</span>
              </div>

            </div>
          </div>

        </div>

        {/* Five Activity Quick Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center sm:text-left">
            Nos 5 expertises professionnelles :
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:sm:col-span-1">
            {quickPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <a
                  key={idx}
                  href={pillar.href}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-navy-400 hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-navy-50 group-hover:bg-navy-950 text-navy-900 group-hover:text-gold-400 flex items-center justify-center transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-navy-950 leading-tight">
                    {pillar.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
