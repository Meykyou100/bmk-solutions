import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { ContactFormData } from '../../types';
import { 
  Send, 
  MessageSquare, 
  FileCheck2, 
  RotateCcw,
  Phone
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = ''
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: preselectedService || '01 — Vidéosurveillance HD & NVR',
    establishmentType: 'Entreprise / Bureaux',
    projectDescription: '',
    preferredContact: 'phone'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    '01 — Vidéosurveillance HD & NVR',
    '02 — Systèmes anti-intrusion & Alarmes',
    '03 — Serrures intelligentes & Contrôle d\'accès',
    '04 — Matériel bureautique pro & Imprimantes',
    '05 — Bornes de recharge pour véhicules électriques',
    'Projet global multi-équipements'
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nom requis';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail valide requis';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Téléphone requis';
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 10) {
      newErrors.projectDescription = 'Veuillez préciser votre besoin (10 car. min)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const generateWhatsAppMessage = () => {
    const text = `*Demande de devis express BMK SOLUTIONS*
• Nom : ${formData.fullName}
${formData.company ? `• Société : ${formData.company}\n` : ''}• Téléphone : ${formData.phone}
• Email : ${formData.email}
• Service : ${formData.service}
• Établissement : ${formData.establishmentType}
• Projet : ${formData.projectDescription}`;
    return `https://wa.me/212662133371?text=${encodeURIComponent(text)}`;
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: preselectedService || '01 — Vidéosurveillance HD & NVR',
      establishmentType: 'Entreprise / Bureaux',
      projectDescription: '',
      preferredContact: 'phone'
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Demande d'étude et de devis personnalisé"
      subtitle="BMK SOLUTIONS — Réponse rapide sous 24h/48h et proposition sans engagement"
      maxWidth="2xl"
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-wrap items-center justify-between text-xs sm:text-sm gap-2">
            <span className="font-semibold text-emerald-900 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Assistance & Lignes directes :</span>
            </span>
            <div className="flex items-center gap-2 font-extrabold text-emerald-950">
              <a href="tel:+212662133371" className="hover:underline">+212 662 133 371</a>
              <span className="text-emerald-400">/</span>
              <a href="tel:+212662303678" className="hover:underline">+212 662 303 678</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Nom complet *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Votre nom"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 ${
                  errors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
              {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Société / Organisation
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Optionnel"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Adresse e-mail *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="exemple@domaine.fr"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 ${
                  errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
              {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Téléphone *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+212 6XX XX XX XX"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 ${
                  errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
              {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Équipement concerné *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white"
            >
              {serviceOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Description de vos besoins *
            </label>
            <textarea
              rows={3}
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
              placeholder="Indiquez le lieu, la configuration de vos locaux, vos impératifs techniques..."
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 ${
                errors.projectDescription ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300'
              }`}
            />
            {errors.projectDescription && <p className="text-xs text-rose-600 mt-1">{errors.projectDescription}</p>}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              className="w-full sm:flex-1 justify-center font-bold"
              icon={<Send className="w-4 h-4" />}
            >
              {isSubmitting ? 'Traitement...' : 'Soumettre ma demande de devis'}
            </Button>
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppMessage()}
              external
              className="w-full sm:w-auto font-bold"
              icon={<MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />}
            >
              WhatsApp (+212 662 133 371)
            </Button>
          </div>
        </form>
      ) : (
        <div className="text-center py-4 space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <FileCheck2 className="w-7 h-7" />
          </div>
          <h4 className="text-xl font-bold text-navy-950">
            Votre demande a bien été enregistrée
          </h4>
          <p className="text-sm text-slate-600 max-w-sm mx-auto">
            Merci <strong>{formData.fullName}</strong>. Votre demande pour <strong>{formData.service}</strong> est en cours d'étude par notre équipe technique.
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-600 text-left">
            <p className="font-bold text-navy-900 mb-1 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Contact direct au +212 662 133 371</span>
            </p>
            <p>
              Pour échanger immédiatement avec notre équipe ou transmettre des photos de vos locaux :
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppMessage()}
              external
              icon={<MessageSquare className="w-4 h-4" />}
              className="font-bold"
            >
              Transmettre sur WhatsApp
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={handleReset}
              icon={<RotateCcw className="w-3.5 h-3.5" />}
            >
              Nouvelle demande
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
