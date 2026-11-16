import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/services';
import { ServiceItem } from '../../types';
import { ServiceModal } from './ServiceModal';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { 
  Camera, 
  ShieldAlert, 
  KeyRound, 
  Printer, 
  Zap, 
  ArrowRight, 
  Check, 
  FileText,
  Layers
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-5 h-5 text-navy-950" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-navy-950" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-navy-950" />;
      case 'Printer':
        return <Printer className="w-5 h-5 text-navy-950" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-navy-950" />;
      default:
        return <Layers className="w-5 h-5 text-navy-950" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="navy" size="md" className="mb-3.5" icon={<Layers className="w-3.5 h-3.5 text-gold-400" />}>
            Nos Prestations & Activités
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            5 solutions d'excellence pour équiper et sécuriser vos locaux.
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
            De la protection électronique des personnes et des biens jusqu'à la performance bureautique et la mobilité durable, découvrez les prestations professionnelles de BMK SOLUTIONS.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <article
              key={service.id}
              className={`group bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden ${
                index === 4 ? 'md:col-span-2 lg:col-span-1 lg:mx-auto lg:w-full' : ''
              }`}
            >
              {/* Image Header with Service Number & Dedicated Visual */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                <img
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent pointer-events-none" />
                
                {/* Service Number Tag */}
                <div className="absolute top-3.5 left-3.5 bg-navy-950/90 backdrop-blur-md border border-white/15 text-white font-mono font-extrabold text-xs px-3 py-1 rounded-lg">
                  {service.number}
                </div>

                {/* Icon badge in corner */}
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-xl bg-white text-navy-950 flex items-center justify-center shadow-lg border border-slate-100">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Bottom caption on image */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 block mb-1">
                    Activité {service.number}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3.5">
                  <p className="text-sm font-bold text-navy-900 leading-snug">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Quick Features Highlight */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highly Visible Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="flex-1 text-xs sm:text-sm font-bold text-navy-900 hover:text-navy-950 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors focus:outline-none"
                  >
                    <FileText className="w-4 h-4 text-navy-700" />
                    <span>Fiche technique</span>
                  </button>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onSelectServiceForQuote(service.title)}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="flex-1 justify-center py-2.5 font-bold shadow-sm"
                  >
                    Devis
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global Multi-Service Quote CTA Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl font-bold text-navy-950">
              Vous avez un projet combinant plusieurs équipements ?
            </h4>
            <p className="text-sm sm:text-base text-slate-600">
              Nous réalisons des études complètes intégrant vidéosurveillance, alarme, serrures intelligentes, matériel bureautique et bornes de recharge.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => onSelectServiceForQuote('Projet global multi-équipements')}
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 font-bold"
          >
            Demander une étude globale
          </Button>
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          onSelectServiceForQuote={onSelectServiceForQuote}
        />
      )}
    </section>
  );
};
