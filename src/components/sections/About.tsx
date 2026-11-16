import React from 'react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { 
  Shield, 
  Target, 
  Wrench, 
  Headphones, 
  ArrowRight,
  Layers,
  Check,
  MessageSquare
} from 'lucide-react';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  const commitments = [
    {
      icon: Target,
      title: 'Une approche sur mesure',
      description: 'Chaque bâtiment et chaque activité présente des exigences singulières. Nous analysons précisément vos contraintes avant de recommander une solution technique calibrée.'
    },
    {
      icon: Layers,
      title: 'Des technologies éprouvées',
      description: 'Nous sélectionnons du matériel professionnel réputé pour sa durabilité, sa conformité aux standards de l\'industrie et sa simplicité d\'exploitation au quotidien.'
    },
    {
      icon: Wrench,
      title: 'Une installation rigoureuse',
      description: 'La qualité d\'un système réside dans son intégration. Nous veillons à la discrétion des passages de câbles, à la robustesse des fixations et aux paramétrages réseau sécurisés.'
    },
    {
      icon: Headphones,
      title: 'Conseil et réactivité',
      description: 'Un interlocuteur dédié à votre écoute pour vous orienter, assurer la formation initiale des utilisateurs et répondre à vos questions tout au long du cycle de vie des équipements.'
    }
  ];

  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="navy" size="md" className="mb-3.5" icon={<Shield className="w-3.5 h-3.5 text-gold-400" />}>
            À propos de BMK SOLUTIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Votre partenaire en sécurité et solutions professionnelles.
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
            BMK SOLUTIONS réunit sous une même enseigne les expertises indispensables à la protection des espaces et à l'équipement technologique moderne. Qu'il s'agisse de sécuriser des locaux commerciaux, un site industriel, des bureaux d'entreprise ou une résidence privée, nous apportons une réponse pragmatique, fiable et pérenne.
          </p>
        </div>

        {/* Core Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-navy-400 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-950 text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-950 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy-900">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Engagement BMK SOLUTIONS</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Synergy Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-navy-950 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle glow */}
          <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-navy-800/50 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gold-400 block">
                Une vision transversale de votre sécurité et de vos équipements
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Simplifiez la gestion de vos installations avec un interlocuteur unique.
              </h3>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Plutôt que de multiplier les prestataires pour votre vidéosurveillance, votre détection d'alarme, vos serrures connectées, votre parc d'impression et vos bornes de recharge, BMK SOLUTIONS coordonne l'ensemble de vos projets avec rigueur et réactivité.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
              <Button
                variant="gold"
                size="lg"
                onClick={onOpenQuoteModal}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center font-bold"
              >
                Demander une étude technique
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                href="https://wa.me/212662133371?text=Bonjour%20BMK%20SOLUTIONS%2C%20je%20souhaite%20un%20conseil%20pour%20mon%20projet."
                external
                icon={<MessageSquare className="w-4 h-4" />}
                className="w-full justify-center font-bold"
              >
                Discuter sur WhatsApp
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
