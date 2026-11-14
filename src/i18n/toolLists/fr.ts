import type { ToolLists } from '../toolLists';

export const fr: ToolLists = {
  'base64-encoder': {
    features: [
      'Encodage et décodage de texte conformes à l’IETF RFC 4648',
      'Import de fichiers traité uniquement en local pour la confidentialité',
      'Prise en charge UTF-8 pour les textes internationaux',
      'Image vers Base64 et téléchargement du Base64 en fichier',
      'Aucun envoi vers un serveur : tout l’encodage se fait dans le navigateur',
      'Résultats immédiats sous Windows, macOS, Linux, Android et iOS',
    ],
    useCases: [
      'Intégrer des images en Base64 dans du CSS ou du HTML',
      'Encoder des jetons d’API et des pièces jointes selon la RFC 4648',
      'Générer des data URI pour des applications web',
      'Transporter des données binaires sans quitter l’appareil',
    ],
  },
  'color-palette': {
    features: [
      'Plusieurs règles d’harmonie (complémentaire, analogue, triadique, monochrome)',
      'Contrôle de contraste W3C WCAG 2.2 niveau AA (4,5:1 texte courant, 3:1 grand texte)',
      'Référence de design accessible pour ADA et Section 508',
      'Export en variables CSS, configuration Tailwind, JSON Figma et Adobe ASE',
      'Palettes à partager et à travailler en équipe',
      'Simulation du daltonisme et génération de dégradés',
    ],
    useCases: [
      'Concevoir une identité de marque avec des couleurs accessibles',
      'Construire des systèmes de design conformes à ADA et Section 508',
      'Vérifier l’accessibilité de sites publics et privés',
      'Définir les couleurs de supports marketing et de fonds dégradés',
    ],
  },
  'css-grid-generator': {
    features: [
      'Constructeur visuel de grilles selon W3C CSS Grid Layout',
      'Dimensions de pistes (fr, px, %, auto, minmax) avec un code propre',
      'Contrôles d’écart, d’alignement et de zones nommées',
      'Aperçu en temps réel pour des mises en page réactives',
      'Grilles imbriquées et CSS prêt pour la production avec repli',
      'Fonctionne aussitôt dans Chrome, Safari, Firefox, Edge et Brave',
    ],
    useCases: [
      'Tableaux de bord et mises en page d’articles en CSS Grid',
      'Galeries photo et structures de page réactives',
      'Formulaires et systèmes de design selon la spécification W3C Grid',
      'Enseignement du front-end et prototypage rapide',
    ],
  },
  'image-compressor': {
    features: [
      'Compression avec perte intelligente qui préserve la qualité visible',
      'Prise en charge JPEG, PNG, WebP et AVIF dans les navigateurs récents',
      'Compression Canvas/WebP dans le navigateur : les images ne quittent pas l’appareil',
      'Optimisé pour le commerce en ligne et la performance web',
      'Aide à tenir un LCP sous 2,5 secondes',
      'Flux prêt pour traiter plusieurs images',
    ],
    useCases: [
      'Optimiser les images d’un site pour un chargement rapide',
      'Compresser des visuels produit pour Shopify, Etsy ou Amazon',
      'Alléger les ressources d’un blog avant publication',
      'Économiser la bande passante du CDN et accélérer les pages',
    ],
  },
  'json-formatter': {
    features: [
      'Coloration syntaxique avec détection d’erreurs et numéro de ligne',
      'Validation JSON conforme à l’IETF RFC 8259',
      'Arborescence repliable pour les grosses réponses d’API',
      'Bascule minifier/formater pour la production et le développement',
      'Traitement dans le navigateur : aucun envoi, confidentialité totale',
      'Fonctionne aussitôt dans les navigateurs récents sous Windows, macOS, Linux, Android et iOS',
    ],
    useCases: [
      'Déboguer des réponses d’API et formater des fichiers de configuration',
      'Valider du JSON au regard de l’IETF RFC 8259',
      'Expliquer la structure JSON aux étudiants et aux nouveaux développeurs',
      'Inspecter des données d’entreprise sans envoyer de contenu sensible',
    ],
  },
  'markdown-editor': {
    features: [
      'Aperçu en direct avec sortie conforme à CommonMark',
      'Coloration syntaxique des blocs de code et du formatage en ligne',
      'Tableaux, listes de tâches, notes de bas de page et formules',
      'Export en HTML, PDF ou Markdown brut',
      'Nombre de mots et temps de lecture pour les créateurs de contenu',
      'Utilisable hors ligne après le premier chargement, sans inscription',
    ],
    useCases: [
      'Rédiger de la documentation technique et des fichiers README',
      'Préparer des billets de blog conformes à CommonMark',
      'Créer une documentation d’API pour développeurs et étudiants',
      'Prendre des notes et écrire des travaux universitaires sans abonnement',
    ],
  },
  'meta-tag-generator': {
    features: [
      'Balises SEO conformes aux consignes d’extraits de Search Central',
      'Balises Open Graph pour des aperçus sociaux corrects',
      'Balises Twitter Card avec image, titre et description',
      'Simulation de l’aperçu sur Facebook, LinkedIn et X',
      'URL canonique, viewport et balises robots',
      'Export HTML et JSON prêt à déployer',
    ],
    useCases: [
      'Améliorer le SEO d’un site avec des balises conformes',
      'Optimiser le partage social pour votre audience',
      'Définir les balises de billets et de pages d’atterrissage',
      'Livrer un projet client avec des balises Search Central vérifiées',
    ],
  },
  'online-ruler': {
    features: [
      'Pouces (in) avec graduations 1/16, 1/8, 1/4 et 1/2 de pouce',
      'Centimètres (cm), millimètres (mm) et pixels (px) pour les mesures métriques',
      'Étalonnage avec une carte bancaire ou d’identité standard (ISO/IEC 7810 ID-1 : 85,60 × 53,98 mm)',
      'Référence exacte du NIST (1 pouce international = 25,4 mm)',
      'Aucune installation ; fonctionne aussitôt dans Chrome, Safari, Firefox, Edge et Brave',
      'Fonctionne sous Windows, macOS, Linux, Android et iOS avec une mise en page réactive',
    ],
    useCases: [
      'Mesurer une interface directement à l’écran',
      'Développement front-end avec des mesures en pouces et en pixels',
      'Vérifier un design imprimé sur des formats de papier standards',
      'Mesures rapides sur mobile comme sur ordinateur',
    ],
  },
  'password-generator': {
    features: [
      'Longueur réglable (4–128)',
      'Choix des jeux de caractères',
      'Exclusion des caractères ambigus',
      'Indicateur d’entropie et de robustesse',
      'Génération par lot',
      'Mode phrase de passe',
      'Uniquement dans le navigateur',
    ],
    useCases: [
      'Création de comptes',
      'Renouvellement des mots de passe',
      'Partage d’identifiants en équipe',
      'Mots de passe Wi-Fi',
      'Clés de chiffrement',
    ],
  },
  'qr-generator': {
    features: [
      'Plusieurs types de données (URL, vCard, Wi-Fi, SMS, e-mail, texte)',
      'Couleurs personnalisées et sortie propre sans logo',
      'Export PNG haute résolution et SVG',
      'Codes statiques qui n’expirent jamais',
      'Sans inscription, sans limite de scans, sans offre payante',
      'Fonctionne entièrement dans votre navigateur, rien n’est envoyé',
    ],
    useCases: [
      'Campagnes marketing',
      'Cartes de visite',
      'Enregistrement lors d’événements',
      'Partage du Wi-Fi',
      'Menus sans contact',
    ],
  },
  'regex-tester': {
    features: [
      'Surlignage des correspondances en temps réel',
      'Explication pas à pas de l’expression',
      'Prise en charge de plusieurs dialectes (JS, Python, PCRE, Go)',
      'Aide-mémoire de référence',
      'Détail des groupes capturés',
      'Uniquement dans le navigateur',
    ],
    useCases: [
      'Masques de validation de formulaires',
      'Analyse de journaux',
      'Extraction de données',
      'Routage d’URL',
      'Nettoyage des saisies',
    ],
  },
  'word-counter': {
    features: [
      'Comptage en temps réel',
      'Mots, caractères, phrases et paragraphes',
      'Estimation du temps de lecture et de parole',
      'Analyse de densité de mots-clés',
      'Fonctionne hors ligne',
      'Sans publicité ni pistage',
    ],
    useCases: [
      'Optimiser un billet de blog',
      'Vérifier la longueur d’un devoir ou d’une dissertation',
      'Planifier un contenu SEO',
      'Respecter les limites de caractères sur les réseaux',
      'Estimer un devis de traduction',
    ],
  },
};
