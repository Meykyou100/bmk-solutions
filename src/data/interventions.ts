import { InterventionDomain } from '../types';

export const INTERVENTION_DOMAINS: InterventionDomain[] = [
  {
    id: 'tertiaire',
    title: 'Tertiaire & Bureaux d\'Entreprise',
    subtitle: 'Sécurisation des espaces de travail et optimisation documentaire',
    description: 'Protection intégrale des locaux professionnels, régulation des flux de collaborateurs et de visiteurs, et intégration d\'équipements bureautiques de haute performance.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Espace de bureaux d\'entreprise moderne et sécurisé',
    challenges: [
      'Contrôle rigoureux des accès aux étages et zones sensibles',
      'Confidentialité des documents imprimés et numérisés',
      'Recharge des véhicules professionnels des collaborateurs'
    ],
    solutions: [
      'Serrures intelligentes par badge RFID et biométrie',
      'Vidéosurveillance discrète des zones d\'accueil',
      'Multifonctions laser réseau avec authentification',
      'Bornes de recharge avec gestion des droits d\'accès'
    ]
  },
  {
    id: 'commerce',
    title: 'Commerces & Points de Vente',
    subtitle: 'Dissuasion des actes malveillants et protection des marchandises',
    description: 'Dispositifs pensés pour dissuader les vols, surveiller les points d\'encaissement et sécuriser les réserves de stock en toute discrétion.',
    imageUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Boutique commerciale équipée de dispositifs de sécurité',
    challenges: [
      'Surveillance en temps réel des zones d\'encaissement et rayons',
      'Détection anti-intrusion immédiate hors horaires d\'ouverture',
      'Accès restreint et traçable aux réserves de valeur'
    ],
    solutions: [
      'Caméras ultra haute définition avec couverture grand angle',
      'Système d\'alarme avec sirène haute puissance et levée de doute',
      'Serrures numériques à code pour l\'accès aux stocks'
    ]
  },
  {
    id: 'industrie',
    title: 'Sites Industriels & Logistique',
    subtitle: 'Surveillance périmétrique et sécurisation des grands volumes',
    description: 'Solutions robustes adaptées aux contraintes des entrepôts, des quais de chargement et des zones de stockage extérieures étendues.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Entrepôt logistique et industriel avec surveillance périmétrique',
    challenges: [
      'Surveillance des vastes périmètres extérieurs et des cours de manœuvre',
      'Résistance des équipements aux intempéries, poussières et chocs',
      'Protection des marchandises sensibles entreposées'
    ],
    solutions: [
      'Caméras thermiques et dômes motorisés longue portée',
      'Barrières infrarouges de détection périmétrique',
      'Systèmes d\'enregistrement vidéo avec stockage massif sécurisé'
    ]
  },
  {
    id: 'copropriete',
    title: 'Copropriétés & Résidentiel',
    subtitle: 'Sérénité des résidents et protection des parties communes',
    description: 'Équipements fiables pour sécuriser les halls d\'entrée, les parkings souterrains et accompagner les résidents vers la mobilité électrique.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Résidence moderne avec entrée sécurisée et parking aménagé',
    challenges: [
      'Prévention des dégradations et incivilités dans les parties communes',
      'Gestion simple des accès pour les résidents et prestataires',
      'Installation de bornes de recharge en parking sans surcharge électrique'
    ],
    solutions: [
      'Vidéosurveillance des accès et parkings conforme à la législation',
      'Contrôle d\'accès par clés électroniques ou badges résidents',
      'Bornes de recharge partagées avec sous-comptage individuel'
    ]
  }
];
