import type { ToolLists } from '../toolLists';

export const it: ToolLists = {
  'base64-encoder': {
    features: [
      'Codifica e decodifica testo secondo IETF RFC 4648',
      'Caricamento di file con elaborazione solo locale per la privacy',
      'Supporto UTF-8 per testi internazionali',
      'Immagine in Base64 e download del Base64 come file',
      'Nessun invio al server: tutta la codifica avviene nel browser',
      'Risultati immediati su Windows, macOS, Linux, Android e iOS',
    ],
    useCases: [
      'Incorporare immagini in Base64 in CSS o HTML',
      'Codificare token API e allegati email secondo la RFC 4648',
      'Generare data URI per applicazioni web',
      'Trasportare dati binari senza lasciare il dispositivo',
    ],
  },
  'color-palette': {
    features: [
      'Più regole di armonia (complementare, analoga, triadica, monocromatica)',
      'Verifica del contrasto W3C WCAG 2.2 livello AA (4,5:1 testo normale, 3:1 testo grande)',
      'Riferimento per il design accessibile ADA e Section 508',
      'Esportazione in variabili CSS, configurazione Tailwind, JSON Figma e Adobe ASE',
      'Palette da condividere e su cui collaborare',
      'Simulazione del daltonismo e generazione di sfumature',
    ],
    useCases: [
      'Progettare identità di marca con sistemi di colore accessibili',
      'Costruire design system conformi ad ADA e Section 508',
      'Verificare l’accessibilità di siti pubblici e privati',
      'Definire colori per materiali marketing e sfondi sfumati',
    ],
  },
  'css-grid-generator': {
    features: [
      'Costruttore visuale di griglie secondo W3C CSS Grid Layout',
      'Dimensioni delle tracce (fr, px, %, auto, minmax) con codice pulito',
      'Controlli di spaziatura, allineamento e aree con nome',
      'Anteprima in tempo reale per layout responsive',
      'Griglie annidate e CSS pronto per la produzione con fallback',
      'Funziona subito in Chrome, Safari, Firefox, Edge e Brave',
    ],
    useCases: [
      'Dashboard e layout di articoli con CSS Grid standard',
      'Gallerie fotografiche e strutture di pagina responsive',
      'Form e design system secondo la specifica W3C Grid',
      'Insegnamento del frontend e prototipazione rapida',
    ],
  },
  'image-compressor': {
    features: [
      'Compressione lossy intelligente che preserva la qualità visibile',
      'Supporto JPEG, PNG, WebP e AVIF nei browser moderni',
      'Compressione Canvas/WebP nel browser: le immagini non lasciano il dispositivo',
      'Ottimizzato per e-commerce e prestazioni web',
      'Aiuta a rispettare obiettivi LCP sotto 2,5 secondi',
      'Flusso pronto per più immagini',
    ],
    useCases: [
      'Ottimizzare le immagini del sito per un caricamento rapido',
      'Comprimere immagini prodotto per Shopify, Etsy e Amazon',
      'Alleggerire le risorse del blog prima della pubblicazione',
      'Risparmiare banda del CDN e servire pagine più veloci',
    ],
  },
  'json-formatter': {
    features: [
      'Evidenziazione della sintassi con errori e numero di riga',
      'Validazione JSON secondo IETF RFC 8259',
      'Vista ad albero comprimibile per risposte API estese',
      'Interruttore minifica/formatta per produzione e sviluppo',
      'Elaborazione nel browser: nessun invio, privacy totale',
      'Funziona subito nei browser moderni di Windows, macOS, Linux, Android e iOS',
    ],
    useCases: [
      'Debug di risposte API e formattazione di file di configurazione',
      'Validare JSON rispetto a IETF RFC 8259',
      'Spiegare la struttura JSON a studenti e nuovi sviluppatori',
      'Ispezionare dati aziendali senza caricare payload sensibili',
    ],
  },
  'markdown-editor': {
    features: [
      'Anteprima live con output conforme a CommonMark',
      'Evidenziazione della sintassi per blocchi di codice e formattazione inline',
      'Tabelle, liste di attività, note a piè di pagina e formule',
      'Esportazione in HTML, PDF o Markdown puro',
      'Conteggio parole e tempo di lettura per chi crea contenuti',
      'Utilizzabile offline dopo il primo caricamento, senza registrazione',
    ],
    useCases: [
      'Scrivere documentazione tecnica e file README',
      'Preparare articoli di blog conformi a CommonMark',
      'Creare documentazione API per sviluppatori e studenti',
      'Prendere appunti e scrivere testi accademici senza abbonamenti',
    ],
  },
  'meta-tag-generator': {
    features: [
      'Meta tag SEO secondo le linee guida degli snippet di Search Central',
      'Tag Open Graph per anteprime social corrette',
      'Tag Twitter Card con immagine, titolo e descrizione',
      'Simulazione dell’anteprima su Facebook, LinkedIn e X',
      'URL canonico, viewport e tag robots',
      'Esportazione HTML e JSON pronta all’uso',
    ],
    useCases: [
      'Migliorare la SEO di un sito con meta tag conformi',
      'Ottimizzare la condivisione social per il proprio pubblico',
      'Impostare i meta tag di articoli e landing page',
      'Consegnare progetti clienti con tag Search Central verificati',
    ],
  },
  'online-ruler': {
    features: [
      'Pollici (in) con tacche da 1/16, 1/8, 1/4 e 1/2 di pollice',
      'Centimetri (cm), millimetri (mm) e pixel (px) per misure metriche',
      'Calibrazione con una carta bancaria o d’identità standard (ISO/IEC 7810 ID-1: 85,60 × 53,98 mm)',
      'Riferimento esatto NIST (1 pollice internazionale = 25,4 mm)',
      'Nessuna installazione; funziona subito in Chrome, Safari, Firefox, Edge e Brave',
      'Funziona su Windows, macOS, Linux, Android e iOS con layout responsive',
    ],
    useCases: [
      'Misurare un’interfaccia direttamente sullo schermo',
      'Sviluppo frontend con misure in pollici e pixel',
      'Verificare un progetto di stampa su formati carta standard',
      'Misure rapide su mobile e desktop',
    ],
  },
  'password-generator': {
    features: [
      'Lunghezza regolabile (4–128)',
      'Scelta dei set di caratteri',
      'Esclusione dei caratteri ambigui',
      'Indicatore di entropia e robustezza',
      'Generazione in blocco',
      'Modalità passphrase',
      'Solo nel browser',
    ],
    useCases: [
      'Creazione di account',
      'Rotazione delle password',
      'Condivisione di credenziali in team',
      'Password Wi-Fi',
      'Chiavi di cifratura',
    ],
  },
  'qr-generator': {
    features: [
      'Più tipi di dati (URL, vCard, Wi-Fi, SMS, email, testo)',
      'Colori personalizzati e output pulito senza logo',
      'Esportazione PNG ad alta risoluzione e SVG',
      'Codici statici che non scadono mai',
      'Nessuna registrazione, nessun limite di scansioni, nessun piano a pagamento',
      'Funziona interamente nel browser: nulla viene caricato',
    ],
    useCases: [
      'Campagne marketing',
      'Biglietti da visita',
      'Check-in agli eventi',
      'Condivisione del Wi-Fi',
      'Menu contactless',
    ],
  },
  'regex-tester': {
    features: [
      'Evidenziazione delle corrispondenze in tempo reale',
      'Spiegazione passo passo dell’espressione',
      'Supporto a più dialetti (JS, Python, PCRE, Go)',
      'Promemoria di riferimento',
      'Dettaglio dei gruppi di cattura',
      'Solo nel browser',
    ],
    useCases: [
      'Pattern di validazione dei form',
      'Analisi dei log',
      'Estrazione di dati',
      'Routing degli URL',
      'Pulizia degli input',
    ],
  },
  'word-counter': {
    features: [
      'Conteggio in tempo reale',
      'Parole, caratteri, frasi e paragrafi',
      'Stima del tempo di lettura e di parlato',
      'Analisi della densità di parole chiave',
      'Funziona offline',
      'Nessuna pubblicità né tracciamento',
    ],
    useCases: [
      'Ottimizzare un articolo di blog',
      'Controllare la lunghezza di temi e tesine',
      'Pianificare contenuti SEO',
      'Rispettare i limiti di caratteri sui social',
      'Stimare il costo di una traduzione',
    ],
  },
};
