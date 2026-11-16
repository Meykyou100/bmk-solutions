import React from 'react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { 
  CheckCircle, 
  Settings2, 
  UserCheck, 
  Cpu, 
  Compass, 
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  const pillars = [
    {
      icon: Settings2,
      number: '01',
      title: 'Solutions adaptées aux besoins',
      subtitle: 'Pas de forfait standardisé, mais une réponse calibrée',
      description: 'Nous refusons les formules toutes faites. Chaque site fait l\'objet d\'une étude préalable pour déterminer les angles de vision nécessaires, les zones sensibles à surveiller, les puissances de charge requises ou les cadences d\'impression adaptées à votre flux de travail.'
    },
    {
      icon: UserCheck,
      number: '02',
      title: 'Accompagnement personnalisé',
      subtitle: 'Un interlocuteur dédié de la conception au suivi',
      description: 'Vous bénéficiez d\'un dialogue direct avec un technicien qualifié capable de répondre précisément à vos interrogations. De la définition du cahier des charges à la prise en main de vos applications mobiles et logiciels de contrôle, vous n\'êtes jamais seul.'
    },
    {
      icon: Cpu,
      number: '03',
      title: 'Équipements professionnels',
      subtitle: 'Sélection rigoureuse de matériels robustes et pérennes',
      description: 'Nous travaillons exclusivement avec des marques reconnues du secteur de la sécurité électronique, du contrôle d\'accès et de la bureautique d\'entreprise. Nos équipements sont conçus pour un fonctionnement continu 24h/24, résistant aux sollicitations intensives.'
    },
    {
      icon: Compass,
      number: '04',
      title: 'Installation et conseil',
      subtitle: 'Rigueur de pose, intégration soignée et respect des normes',
      description: 'Une installation de sécurité ne vaut que par la qualité de sa mise en œuvre : passage soigné des goulottes et fourreaux, paramétrage sécurisé des réseaux IP, respect scrupuleux du RGPD pour les caméras et conformité aux règles d\'installation électrique.'
    }
  ];

  return (
    <section id="pourquoi-nous" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="navy" size="md" className="mb-3.5" icon={<ShieldCheck className="w-3.5 h-3.5 text-gold-400" />}>
            Nos Engagements de Qualité
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Pourquoi confier vos installations à BMK SOLUTIONS ?
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
            Une méthodologie rigoureuse, une sélection exigeante de matériels et une proximité constante pour garantir la sécurité et la continuité d'activité de vos infrastructures.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="p-8 sm:p-9 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-navy-400 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Number watermark */}
                <div className="absolute top-4 right-6 text-5xl font-mono font-extrabold text-slate-200/80 group-hover:text-navy-100 transition-colors pointer-events-none select-none">
                  {pillar.number}
                </div>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-navy-950 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-gold-400" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-700 mb-3.5">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garantie de service et d'intervention soignée</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Process Workflow */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-slate-100/80 border border-slate-200 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-8 text-center">
            Les 4 étapes clés d'une intervention avec BMK SOLUTIONS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {/* Horizontal connector line on large screens */}
            <div className="absolute hidden lg:block top-[18px] left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-slate-300 z-0 pointer-events-none" />

            <div className="space-y-2.5 relative z-10">
              <span className="w-9 h-9 rounded-xl bg-navy-950 text-white text-sm font-extrabold flex items-center justify-center font-mono shadow-sm">
                1
              </span>
              <h4 className="text-base font-bold text-navy-950">Prise de contact & Écoute</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Recueil de vos attentes, analyse des plans ou visite technique sur site pour évaluer les accès et contraintes.
              </p>
            </div>

            <div className="space-y-2.5 relative z-10">
              <span className="w-9 h-9 rounded-xl bg-navy-950 text-white text-sm font-extrabold flex items-center justify-center font-mono shadow-sm">
                2
              </span>
              <h4 className="text-base font-bold text-navy-950">Proposition chiffrée</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Élaboration d'un devis clair, transparent et sans frais dissimulés, listant chaque équipement et prestation.
              </p>
            </div>

            <div className="space-y-2.5 relative z-10">
              <span className="w-9 h-9 rounded-xl bg-navy-950 text-white text-sm font-extrabold flex items-center justify-center font-mono shadow-sm">
                3
              </span>
              <h4 className="text-base font-bold text-navy-950">Installation &amp; Paramétrage</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pose dans les règles de l'art, raccordement électrique et réseau sécurisé, tests fonctionnels complets.
              </p>
            </div>

            <div className="space-y-2.5 relative z-10">
              <span className="w-9 h-9 rounded-xl bg-navy-950 text-white text-sm font-extrabold flex items-center justify-center font-mono shadow-sm">
                4
              </span>
              <h4 className="text-base font-bold text-navy-950">Formation &amp; Suivi</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Explication pas à pas du fonctionnement des systèmes, configuration des accès mobiles et support technique réactif.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenQuoteModal}
              icon={<ArrowRight className="w-4 h-4" />}
              className="font-bold w-full sm:w-auto"
            >
              Échanger avec notre équipe technique
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href="https://wa.me/212662133371?text=Bonjour%20BMK%20SOLUTIONS%2C%20je%20souhaite%20des%20informations%20sur%20vos%20engagements."
              external
              icon={<MessageSquare className="w-4 h-4" />}
              className="font-bold w-full sm:w-auto"
            >
              WhatsApp : +212 662 133 371
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
