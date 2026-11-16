import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'videosurveillance',
    number: '01',
    title: 'Vidéosurveillance',
    tagline: 'Vente et installation de caméras de surveillance haute définition',
    shortDescription: 'Systèmes de vidéosurveillance IP professionnels, caméras dômes et tubes haute résolution 4K avec vision nocturne, enregistreurs NVR sécurisés et consultation à distance sur smartphone ou PC.',
    fullDescription: [
      'BMK SOLUTIONS conçoit et installe des architectures de vidéosurveillance sur mesure adaptées aux exigences des professionnels, commerçants et résidences privées.',
      'Nos équipements intègrent les dernières technologies de traitement d\'image : capteurs 4K Ultra HD, vision nocturne infrarouge avancée, analyse intelligente de franchissement de ligne et stockage sécurisé sur serveur dédié ou NVR avec redondance.',
      'Chaque installation respecte scrupuleusement la réglementation en vigueur (RGPD et législation sur la protection des données) avec paramétrage précis des masquages de confidentialité.'
    ],
    features: [
      'Caméras dômes et tubes motorisés intérieur / extérieur certifiés IP67/IK10',
      'Résolution 4K Ultra HD avec traitement WDR contre les contre-jours',
      'Vision nocturne infrarouge et technologies d\'éclairage adaptatif',
      'Enregistreurs NVR réseau avec disques durs professionnels de haute durabilité',
      'Accès distant crypté et sécurisé sur smartphone, tablette et poste de supervision',
      'Conformité réglementaire et paramétrage des zones de masquage'
    ],
    equipmentExamples: [
      'Caméras IP dôme anti-vandale IK10',
      'Caméras thermiques et infrarouges longue portée',
      'Enregistreurs réseau NVR 8 à 64 canaux',
      'Switches PoE professionnels et onduleurs de secours'
    ],
    targetAudience: [
      'Bureaux d\'entreprise & sièges sociaux',
      'Surfaces commerciales & boutiques',
      'Entrepôts logistiques & zones de stockage',
      'Copropriétés & résidences individuelles'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Caméra dôme de vidéosurveillance professionnelle installée au plafond',
    iconName: 'Camera'
  },
  {
    id: 'anti-intrusion',
    number: '02',
    title: 'Systèmes anti-intrusion',
    tagline: 'Solutions fiables de détection et de protection contre les intrusions',
    shortDescription: 'Centrales d\'alarme professionnelles, détection périmétrique et volumétrique avancée, sirènes auto-alimentées et transmission sécurisée en temps réel pour une levée de doute instantanée.',
    fullDescription: [
      'La protection de vos locaux repose sur un système anti-intrusion réactif et infaillible. BMK SOLUTIONS étudie la configuration de vos bâtiments pour positionner stratégiquement les points de détection.',
      'Nous déployons des solutions filaires blindées ou radio sécurisées à double fréquence, éliminant les risques d\'interférence ou de brouillage.',
      'En cas de déclenchement, l\'alerte est transmise instantanément sur vos appareils mobiles avec levée de doute photographique ou vidéo.'
    ],
    features: [
      'Centrales d\'alarme hybrides (technologie filaire blindée et radio sécurisée)',
      'Détecteurs volumétriques bi-technologie (infrarouge passif et hyperfréquence)',
      'Détection d\'ouverture magnétique renforcée pour portes et fenêtres',
      'Barrières infrarouges périmétriques pour extérieurs et clôtures',
      'Sirènes intérieures et extérieures avec flash lumineux dissuasif',
      'Transmetteurs GSM/4G et IP redondants pour alerte immédiate'
    ],
    equipmentExamples: [
      'Centrales certifiées pour environnements professionnels',
      'Détecteurs avec capture photo intégrée pour levée de doute',
      'Claviers de commande tactiles et badges RFID de désarmement',
      'Générateurs de brouillard opacifiant en option'
    ],
    targetAudience: [
      'Locaux professionnels et ateliers',
      'Commerces de détail et bijouteries',
      'Bâtiments industriels isolés',
      'Résidences principales et secondaires'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Centrale d\'alarme connectée et équipement de sécurité anti-intrusion',
    iconName: 'ShieldAlert'
  },
  {
    id: 'serrures-intelligentes',
    number: '03',
    title: 'Serrures intelligentes',
    tagline: 'Vente et installation de serrures connectées et contrôle d\'accès',
    shortDescription: 'Serrures électroniques de haute sécurité, cylindres mécatroniques, contrôle d\'accès par empreinte biométrique, badge RFID ou code numérique pour une gestion sereine et traçable des accès.',
    fullDescription: [
      'Modernisez la gestion de vos accès grâce à des serrures intelligentes haut de gamme combinant robustesse mécanique et intelligence numérique.',
      'Nos systèmes éliminent la contrainte des trousseaux de clés physiques perdus ou dupliqués sans autorisation. Vous gérez les droits d\'accès en temps réel selon les plages horaires ou les profils utilisateurs.',
      'Idéales pour les bureaux partagés, locaux techniques, salles de serveurs ou habitations d\'exception recherchant élégance et sécurité renforcée.'
    ],
    features: [
      'Ouverture multi-modes : badge RFID/NFC, code PIN, empreinte biométrique ou smartphone',
      'Création de clés temporaires ou codes d\'accès à durée programmée',
      'Historique complet des entrées et sorties consultable en ligne',
      'Verrouillage automatique sécurisé dès la fermeture de la porte',
      'Compatibilité avec portes blindées, portes vitrées et menuiseries standard',
      'Alimentation longue autonomie avec secours physique'
    ],
    equipmentExamples: [
      'Serrures électroniques motorisées multipoints',
      'Cylindres connectés européens mécatroniques',
      'Lecteurs muraux biométriques autonomes ou centralisés',
      'Passerelles de gestion réseau chiffrées'
    ],
    targetAudience: [
      'Entreprises et espaces de coworking',
      'Professions libérales et cabinets médicaux',
      'Salles informatiques et zones sensibles',
      'Propriétés résidentielles privées'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Serrure intelligente électronique installée sur une porte d\'entrée moderne',
    iconName: 'KeyRound'
  },
  {
    id: 'bureautique',
    number: '04',
    title: 'Matériel bureautique',
    tagline: 'Vente d\'imprimantes et d\'équipements bureautiques professionnels',
    shortDescription: 'Imprimantes laser multifonctions de haute précision, copieurs réseau professionnels, scanners documentaires haute cadence et solutions d\'impression sécurisée pour optimiser vos flux de travail.',
    fullDescription: [
      'Un équipement bureautique fiable et économique est le pilier de la productivité de vos équipes. BMK SOLUTIONS vous fournit des équipements professionnels calibrés pour votre volume d\'activité.',
      'Nous sélectionnons des matériels reconnus pour leur endurance, leur vitesse de numérisation et la netteté de leurs rendus couleur et monochrome.',
      'Nous assurons le déploiement sur votre réseau informatique, le paramétrage des profils d\'impression sécurisée par badge et la configuration des répertoires de numérisation directe.'
    ],
    features: [
      'Imprimantes multifonctions réseau (Impression, Numérisation, Copie, Recto-verso automatique)',
      'Vitesse d\'impression élevée et gestion multi-bacs grands formats (A4 / A3)',
      'Impression sécurisée avec authentification par code ou badge utilisateur',
      'Numérisation ultra-rapide vers cloud d\'entreprise, réseau local ou messagerie',
      'Faible consommation énergétique et gestion optimisée des consommables',
      'Intégration fluide dans les environnements informatiques Windows, Mac et Linux'
    ],
    equipmentExamples: [
      'Multifonctions laser couleur d\'entreprise A4/A3',
      'Scanners professionnels de documents à défilement rapide',
      'Imprimantes de service compactes à haut rendement',
      'Consommables et pièces d\'usure d\'origine'
    ],
    targetAudience: [
      'PME, PMI et grandes entreprises',
      'Études notariales et cabinets d\'avocats',
      'Agences d\'architecture et bureaux d\'études',
      'Centres administratifs et scolaires'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Imprimante professionnelle laser multifonction dans un bureau d\'entreprise',
    iconName: 'Printer'
  },
  {
    id: 'bornes-recharge',
    number: '05',
    title: 'Bornes de recharge électrique',
    tagline: 'Vente et installation de bornes de recharge pour véhicules électriques',
    shortDescription: 'Solutions de recharge performantes et conformes aux normes pour véhicules électriques et hybrides : wallbox résidentielles, bornes pour flottes d\'entreprises et parkings professionnels.',
    fullDescription: [
      'Accompagnez la transition énergétique de votre entreprise ou de votre habitat avec une infrastructure de recharge électrique sûre, durable et intelligente.',
      'BMK SOLUTIONS prend en charge l\'ensemble de votre projet : étude de puissance de votre tableau électrique, choix de la puissance de charge appropriée (7,4 kW à 22 kW), tirage de ligne dédiée et installation dans le respect des règles de l\'art.',
      'Nos bornes communicantes intègrent le délestage automatique pour préserver votre abonnement électrique, ainsi que des modules de gestion des accès par badge RFID pour la refacturation ou le contrôle des utilisateurs.'
    ],
    features: [
      'Puissances modulables : monophasé (7,4 kW) et triphasé (11 kW à 22 kW)',
      'Gestion intelligente de la charge avec délestage dynamique automatique',
      'Contrôle d\'accès par badge RFID pour flottes ou salariés autorisés',
      'Supervision de la consommation et suivi des cycles de recharge',
      'Boîtiers étanches certifiés IP54/IK10 résistants aux intempéries et aux chocs',
      'Conformité stricte aux exigences d\'installation électrique'
    ],
    equipmentExamples: [
      'Wallbox murales compactes pour entreprises et particuliers',
      'Bornes doubles sur pied pour parkings extérieurs',
      'Tableaux de protection électrique dédiés avec disjoncteur différentiel',
      'Systèmes de monitoring et de supervision de charge'
    ],
    targetAudience: [
      'Entreprises équipant leurs flottes et parkings collaborateurs',
      'Hôtels, restaurants et commerces accueillant du public',
      'Syndics de copropriété et résidences collectives',
      'Propriétaires de véhicules électriques en habitat individuel'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Borne de recharge pour véhicule électrique connectée lors d\'une session de recharge',
    iconName: 'Zap'
  }
];
