import React, { useState, useEffect } from 'react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ContactFormData } from '../../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  AlertCircle,
  FileCheck2, 
  ShieldCheck,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

interface ContactProps {
  initialService?: string;
  onClearInitialService?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ 
  initialService = '', 
  onClearInitialService 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: initialService || '',
    establishmentType: 'Entreprise / Bureaux',
    projectDescription: '',
    preferredContact: 'phone'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const serviceOptions = [
    '01 — Vidéosurveillance HD & NVR',
    '02 — Systèmes anti-intrusion & Alarmes',
    '03 — Serrures intelligentes & Contrôle d\'accès',
    '04 — Matériel bureautique pro & Imprimantes',
    '05 — Bornes de recharge pour véhicules électriques',
    'Projet global multi-équipements'
  ];

  const establishmentOptions = [
    'Entreprise / Bureaux d\'affaires',
    'Commerce / Boutique / Point de vente',
    'Entrepôt / Site logistique / Industrie',
    'Copropriété / Syndic de gestion',
    'Résidence individuelle / Propriété privée',
    'Autre établissement'
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Veuillez renseigner votre nom complet.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez renseigner votre adresse e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse e-mail valide.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Veuillez indiquer un numéro de téléphone joignable.';
    } else if (!/^[\d\s+().-]{8,20}$/.test(formData.phone)) {
      newErrors.phone = 'Format de téléphone invalide.';
    }

    if (!formData.service) {
      newErrors.service = 'Veuillez sélectionner le service concerné.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Veuillez décrire brièvement votre besoin.';
    } else if (formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Merci de détailler un peu plus votre besoin (au moins 10 caractères).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      establishmentType: 'Entreprise / Bureaux',
      projectDescription: '',
      preferredContact: 'phone'
    });
    setErrors({});
    setIsSubmitted(false);
    if (onClearInitialService) {
      onClearInitialService();
    }
  };

  // Generate WhatsApp prefilled link with international format
  const generateWhatsAppMessage = () => {
    const text = `*Demande de devis BMK SOLUTIONS*
• Nom : ${formData.fullName}
${formData.company ? `• Société : ${formData.company}\n` : ''}• Téléphone : ${formData.phone}
• Email : ${formData.email}
• Service : ${formData.service}
• Établissement : ${formData.establishmentType}
• Contact préféré : ${formData.preferredContact}
• Projet : ${formData.projectDescription}`;
    return `https://wa.me/212662133371?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="navy" size="md" className="mb-3.5" icon={<Mail className="w-3.5 h-3.5 text-gold-400" />}>
            Demande de Devis & Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Parlez-nous de votre projet de sécurité ou d'équipement.
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
            Obtenez une étude personnalisée et un devis sans engagement. Nos techniciens examinent votre demande et vous recontactent sous 24h à 48h ouvrées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct WhatsApp, Phone & Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Prominent Direct Phone & WhatsApp Box */}
            <div className="p-7 sm:p-8 rounded-3xl bg-emerald-950 text-white border-2 border-emerald-700 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/90 text-emerald-200 text-xs font-bold tracking-wide">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Réponse Rapide & Devis Gratuit</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    Contact direct WhatsApp & Téléphone
                  </h3>
                  <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                    Vous souhaitez poser une question technique rapide ou transmettre des plans de vos locaux ? Contactez directement nos spécialistes :
                  </p>
                </div>

                {/* Big Visible Phone Numbers */}
                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-2xl bg-emerald-900/90 border border-emerald-700 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase font-bold text-emerald-300 block">
                        Ligne principale & WhatsApp
                      </span>
                      <a
                        href="tel:+212662133371"
                        className="text-lg sm:text-xl font-black text-white hover:text-emerald-200 tracking-tight"
                      >
                        +212 662 133 371
                      </a>
                    </div>
                    <a
                      href="tel:+212662133371"
                      className="p-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-100 transition-colors shadow-sm"
                      aria-label="Appeler le +212 662 133 371"
                    >
                      <Phone className="w-4 h-4 text-emerald-900" />
                    </a>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-900/90 border border-emerald-700 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase font-bold text-emerald-300 block">
                        Seconde ligne directe
                      </span>
                      <a
                        href="tel:+212662303678"
                        className="text-lg sm:text-xl font-black text-white hover:text-emerald-200 tracking-tight"
                      >
                        +212 662 303 678
                      </a>
                    </div>
                    <a
                      href="tel:+212662303678"
                      className="p-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-100 transition-colors shadow-sm"
                      aria-label="Appeler le +212 662 303 678"
                    >
                      <Phone className="w-4 h-4 text-emerald-900" />
                    </a>
                  </div>
                </div>

                {/* Big WhatsApp Button */}
                <Button
                  variant="whatsapp"
                  size="lg"
                  href="https://wa.me/212662133371?text=Bonjour%20BMK%20SOLUTIONS%2C%20je%20souhaite%20obtenir%20des%20renseignements%20ou%20un%20devis."
                  external
                  icon={<MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />}
                  className="w-full justify-center font-extrabold text-base shadow-lg"
                >
                  Discuter sur WhatsApp (+212 662 133 371)
                </Button>
              </div>
            </div>

            {/* Practical Coordinates Block */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950">
                Informations administratives & techniques
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-navy-800" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold text-sm">Adresse du siège</strong>
                    <span className="text-slate-800 font-bold block mt-0.5">Bine Lamdoune, Rue 45, Numéro 12</span>
                    <span className="text-slate-500 block text-xs mt-0.5">Maroc — Déplacement et chantiers sur l'ensemble de la région</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-navy-800" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold text-sm">Téléphones & WhatsApp</strong>
                    <div className="space-y-0.5 mt-0.5">
                      <a href="tel:+212662133371" className="text-navy-900 font-bold hover:underline block">
                        +212 662 133 371
                      </a>
                      <a href="tel:+212662303678" className="text-navy-900 font-bold hover:underline block">
                        +212 662 303 678
                      </a>
                    </div>
                    <span className="text-slate-500 block text-xs mt-1">Lundi au vendredi : 08h30 - 18h30</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-navy-800" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold text-sm">Courriel institutionnel</strong>
                    <a href="#contact" className="text-slate-600 hover:text-navy-950 transition-colors">
                      Via formulaire de devis ci-contre
                    </a>
                    <span className="text-slate-500 block text-xs mt-0.5">Traitement sous 24h à 48h</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-navy-800" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold text-sm">Disponibilité technique</strong>
                    <span className="text-slate-600 block">Prise en charge et réactivité continue</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-navy-700 shrink-0" />
                  <span>Devis gratuit, transparent, sans engagement et conforme RGPD</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Quote Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-card">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-navy-950">
                      Formulaire de demande de devis personnalisé
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Remplissez ces quelques informations pour recevoir une proposition adaptée sous 24h/48h.
                    </p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                        Nom et prénom *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="Ex: Alexandre Laurent"
                        className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-navy-900 ${
                          errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                        Entreprise / Organisation <span className="text-slate-400 font-normal text-xs">(Optionnel)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ex: Société ABC"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-navy-900"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                        Adresse e-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="contact@votre-domaine.fr"
                        className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-navy-900 ${
                          errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+212 6XX XX XX XX ou 06 XX..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-navy-900 ${
                          errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection & Establishment Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                        Prestation principale *
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          if (errors.service) setErrors({ ...errors, service: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white ${
                          errors.service ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                        }`}
                      >
                        <option value="">-- Choisissez un équipement --</option>
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="establishmentType" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                        Type d'établissement
                      </label>
                      <select
                        id="establishmentType"
                        value={formData.establishmentType}
                        onChange={(e) => setFormData({ ...formData, establishmentType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-navy-900"
                      >
                        {establishmentOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred contact channel */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                      Canal de réponse souhaité
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'phone', label: 'Téléphone' },
                        { id: 'email', label: 'E-mail' },
                        { id: 'whatsapp', label: 'WhatsApp' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: item.id as any })}
                          className={`py-2.5 px-3 rounded-xl border font-bold text-xs sm:text-sm text-center transition-all ${
                            formData.preferredContact === item.id
                              ? 'border-navy-950 bg-navy-950 text-white shadow-sm'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project description */}
                  <div>
                    <label htmlFor="projectDescription" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                      Description de votre projet & contraintes *
                    </label>
                    <textarea
                      id="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => {
                        setFormData({ ...formData, projectDescription: e.target.value });
                        if (errors.projectDescription) setErrors({ ...errors, projectDescription: undefined });
                      }}
                      placeholder="Précisez la superficie approximative, le nombre de caméras, serrures ou bornes envisagées, vos délais..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-navy-900 resize-y ${
                        errors.projectDescription ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 bg-white'
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.projectDescription}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit button & Notice */}
                  <div className="pt-2 space-y-3.5">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center font-extrabold text-base shadow-lg"
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Traitement de votre demande...' : 'Envoyer ma demande de devis'}
                    </Button>
                    <p className="text-xs text-slate-500 text-center leading-relaxed">
                      En soumettant ce formulaire, vous acceptez d'être recontacté exclusivement dans le cadre de votre projet. Aucune donnée n'est cédée à des tiers.
                    </p>
                  </div>
                </form>
              ) : (
                /* Clear Success & Backend Integration Notice State */
                <div className="p-4 sm:p-6 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <FileCheck2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-navy-950">
                      Demande enregistrée avec succès !
                    </h3>
                    <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                      Merci <strong>{formData.fullName}</strong>. Votre demande pour <strong>{formData.service}</strong> a été validée.
                    </p>
                  </div>

                  {/* Integration notice */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm text-slate-700 space-y-2.5">
                    <div className="flex items-center gap-2 font-bold text-navy-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Transmission instantanée par WhatsApp disponible</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Pour une prise en charge prioritaire par nos techniciens, vous pouvez transmettre directement les détails de votre demande sur notre WhatsApp :
                    </p>
                  </div>

                  {/* Fast transmit button */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <Button
                      variant="whatsapp"
                      size="lg"
                      href={generateWhatsAppMessage()}
                      external
                      icon={<MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />}
                      className="w-full sm:w-auto font-bold"
                    >
                      Envoyer sur WhatsApp (+212 662 133 371)
                    </Button>

                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={handleReset}
                      icon={<RotateCcw className="w-4 h-4" />}
                      className="w-full sm:w-auto font-semibold"
                    >
                      Nouvelle demande
                    </Button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
