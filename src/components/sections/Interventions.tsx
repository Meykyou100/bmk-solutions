import React from 'react';
import { INTERVENTION_DOMAINS } from '../../data/interventions';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  ShieldAlert,
  Info
} from 'lucide-react';

interface InterventionsProps {
  onSelectDomainForQuote: (domainTitle: string) => void;
}

export const Interventions: React.FC<InterventionsProps> = ({ onSelectDomainForQuote }) => {
  return (
    <section 
      id="environnements" 
      className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 scroll-mt-20"
    >
      {/* Fallback anchor for backward compatibility */}
      <span id="domaines" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="navy" size="md" className="mb-3.5" icon={<Building className="w-3.5 h-3.5 text-gold-400" />}>
            Applications Professionnelles
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Nos solutions par environnement.
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
            Chaque secteur présente des impératifs propres en matière de sécurité, de confidentialité et de gestion des accès. Découvrez nos préconisations techniques par typologie d'infrastructure.
          </p>
        </div>

        {/* 4 Environment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INTERVENTION_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative aspect-[16/9] overflow-hidden bg-navy-950">
                  <img
                    src={domain.imageUrl}
                    alt={domain.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 block mb-1">
                      Environnement d'application
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {domain.title}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  <p className="text-sm font-bold text-navy-900 leading-snug">
                    {domain.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {domain.description}
                  </p>

                  {/* Enjeux & Solutions */}
                  <div className="space-y-4 pt-2">
                    {/* Challenges */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 mb-2.5 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        <span>Enjeux spécifiques du lieu</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {domain.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-navy-500 font-bold">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="p-4 rounded-xl bg-navy-950/5 border border-navy-900/10">
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 mb-2.5 flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-navy-800" />
                        <span>Équipements préconisés par BMK</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-800 font-medium">
                        {domain.solutions.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 sm:px-8 pt-0 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-100 mt-4">
                <span className="text-xs text-slate-500 font-medium">
                  Étude d'implantation sur plan ou sur site disponible
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onSelectDomainForQuote(domain.title)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto justify-center font-bold"
                >
                  Devis pour ce profil
                </Button>
              </div>

            </div>
          ))}
        </div>

        {/* Application Note Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left shadow-sm">
          <div className="w-8 h-8 rounded-full bg-slate-100 text-navy-900 flex items-center justify-center shrink-0">
            <Info className="w-4 h-4" />
          </div>
          <span>
            Ces exemples illustrent nos standards d'ingénierie par environnement. Chaque déploiement réel fait l'objet d'un dimensionnement individualisé adapté à vos locaux.
          </span>
        </div>

      </div>
    </section>
  );
};
