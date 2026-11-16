import React from 'react';
import { ServiceItem } from '../../types';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { 
  Check, 
  ArrowRight, 
  Building2, 
  Wrench, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onSelectServiceForQuote
}) => {
  if (!service) return null;

  const handleRequestQuote = () => {
    onClose();
    onSelectServiceForQuote(service.title);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour BMK SOLUTIONS, je souhaite obtenir un devis pour votre service : ${service.title} (${service.tagline}).`
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${service.number} — ${service.title}`}
      subtitle={service.tagline}
      maxWidth="3xl"
    >
      <div className="space-y-6">
        
        {/* Top Image & Badge */}
        <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-slate-200">
          <img
            src={service.imageUrl}
            alt={service.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-md">
            Pôle d'activité {service.number}
          </div>
        </div>

        {/* Full Descriptions */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-navy-700" />
            <span>Présentation technique du service</span>
          </h4>
          {service.fullDescription.map((paragraph, idx) => (
            <p key={idx} className="text-sm text-slate-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Specifications & Features */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-gold-600" />
            <span>Caractéristiques & prestations incluses</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment & Applications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-slate-200">
            <h5 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-2 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-navy-600" />
              <span>Matériels & Équipements</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {service.equipmentExamples.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200">
            <h5 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-2 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-navy-600" />
              <span>Publics & Domaines visés</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {service.targetAudience.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3 justify-end">
          <Button
            variant="whatsapp"
            size="md"
            href={`https://wa.me/212662133371?text=${whatsappMessage}`}
            external
            icon={<MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />}
            className="w-full sm:w-auto font-bold"
          >
            WhatsApp (+212 662 133 371)
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={handleRequestQuote}
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto font-bold"
          >
            Demander un devis pour ce service
          </Button>
        </div>

      </div>
    </Modal>
  );
};
