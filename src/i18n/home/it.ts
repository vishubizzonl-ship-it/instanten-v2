import type { HomeCopy } from './types';

export const home: HomeCopy = {
  howTitle: 'Come funziona Instanten',
  steps: [
    {
      title: 'Scegli uno strumento Instanten',
      body:
        'Apri qualsiasi utilità dalla homepage senza account, estensioni o attese. Ogni strumento funziona nel browser su telefono, tablet o desktop.',
    },
    {
      title: 'Esegui o converti in tempo reale',
      body:
        'Incolla testo, valori o parametri e ottieni un risultato pulito in millisecondi. Conversione, formattazione o calcolo: l’output si aggiorna in tempo reale.',
    },
    {
      title: 'Copia i risultati e ottieni aiuto',
      body:
        'Copia risultati accurati con un clic o apri una guida chiara passo passo con formule e consigli. Ogni guida cita standard pubblici verificabili.',
    },
  ],
  trustTitle: 'Costruito per la fiducia, non solo per la velocità',
  trustLead:
    'Troppi siti di strumenti nascondono attività semplici dietro popup, script pesanti e muri di login. Instanten mantiene ogni flusso pulito, trasparente e senza distrazioni, con standard pubblici reali.',
  trustCards: [
    {
      title: 'Aiuto immediato senza registrazione',
      body:
        'Ogni strumento e guida è pronto all’uso. Non fornisci mai un’email, non avvii prove e non crei password per una rapida attività quotidiana.',
    },
    {
      title: 'Distribuzione online veloce',
      body:
        'Le pagine sono pre-renderizzate staticamente con script minimi. Ogni strumento risponde subito, anche su reti mobili, e supporta gli obiettivi Core Web Vitals.',
    },
    {
      title: 'Precisione di conversione verificata',
      body:
        'Le letture seguono standard pubblici: direzione e inclinazione provengono da W3C DeviceOrientation Event, il rilevamento Qibla dall’API Geolocation del W3C e le velocità usano conversioni SI esatte (1 nodo = 1,852 km/h).',
    },
    {
      title: 'Privacy nel browser',
      body:
        'L’elaborazione avviene nel browser quando possibile e le preferenze del tema restano in locale sul dispositivo. Instanten non vende né condivide dati personali per pubblicità comportamentale.',
    },
  ],
  explainTitle: 'Instanten spiegato',
  explainLead:
    'Come funzionano i nostri strumenti istantanei, cosa puoi completare in pochi secondi e perché le utilità web veloci battono i download pesanti.',
  blocks: [
    {
      title: 'Che cosa misura davvero ogni strumento',
      paragraphs: [
        'La bussola online trasforma il sensore di orientamento del telefono o del portatile in una direzione in gradi. È il modo più rapido per rispondere a «verso dove sto guardando» senza aprire una seconda app: il quadrante segue il dispositivo mentre ruoti e la cifra resta leggibile mentre l’ago si muove. Poiché legge un magnetometro, casse, telai metallici e custodie magnetiche vicine alterano la lettura.',
        'La livella mostra l’inclinazione su entrambi gli assi contemporaneamente, così puoi controllare una mensola, una cornice o una lavatrice senza avere una livella fisica in casa. Due valori in gradi e una bolla visibile dicono se la superficie è in piano lungo la lunghezza e lungo la larghezza, cosa che un solo tubo non mostra mai.',
        'Il tachimetro mostra la velocità in km/h, mph e nodi insieme, convertita con fattori SI esatti perché le tre cifre non si contraddicano. Legge la posizione comunicata dal browser: utile in auto, in bici o in barca, senza account, senza tracciamento e senza installazione.',
        'La ricerca Qibla calcola il rilevamento di circolo massimo dalle tue coordinate alla Mecca e lo mostra come direzione di bussola. Non è la stessa cosa di «puntare a est»: il rilevamento corretto cambia con il luogo in cui ti trovi, e la pagina indica il valore usato perché tu possa verificarlo.',
      ],
    },

    {
      title: 'Cosa fa Instanten',
      paragraphs: [
        'Ogni giorno studenti, sviluppatori, scrittori, designer e team affrontano decine di piccole attività digitali: formattare dati, convertire subito, pulire testo, calcolare valori o cercare risposte tecniche. Aprire software desktop pesante per trenta secondi è uno spreco.',
        'Instanten risolve il problema in un unico posto: un hub rapido e moderno di strumenti istantanei gratuiti e tutorial pratici, senza account, limiti d’uso o abbonamenti.',
      ],
    },
    {
      title: 'Perché Instanten sembra così semplice',
      paragraphs: [
        'La velocità è solo metà del lavoro; la chiarezza conta altrettanto. Ogni strumento mette input e output in primo piano, con controlli mobili, navigazione da tastiera e passaggio immediato tra modalità chiara e scura.',
        'Tre regole guidano l’intera libreria:',
      ],
      bullets: [
        'Avvio immediato senza pesantezza — le pagine HTML statiche si caricano quasi subito nei browser moderni.',
        'Letture su cui contare — direzione e inclinazione da W3C DeviceOrientation Event, rilevamento Qibla dall’API Geolocation del W3C e velocità con conversioni SI esatte tra km/h, mph e nodi.',
        'Contesto pratico accanto allo strumento — le guide spiegano casi limite e best practice per un aiuto reale.',
      ],
    },
    {
      title: 'Attività quotidiane completabili con Instanten',
      bullets: [
        'Formattazione e conversione rapide — trasforma unità, testo strutturato, codice o valori senza errori di calcolo.',
        'Flussi per sviluppatori e creativi — pulisci, ispeziona, valida e prepara le risorse più velocemente.',
        'Aiuto immediato per studio e ufficio — verifica calcoli e segui guide su telefono, Chromebook o PC.',
        'Guide AI e produttività — tutorial pratici sul blog Instanten.',
      ],
      links: [{ label: 'Blog Instanten', href: '/blog/' }],
    },
    {
      title: 'Perché gli strumenti online battono i programmi pesanti',
      paragraphs: [
        'Le suite desktop native hanno senso per il rendering video di più gigabyte, non per utilità quotidiane. Un toolkit online nel browser elimina problemi di compatibilità, ingombro di archiviazione, aggiornamenti in background e licenze — lo stesso strumento funziona su Windows, macOS, Linux, Android e iOS.',
        'Scopri la nostra filosofia e la verifica di ogni strumento rispetto alle specifiche W3C citate nella pagina About.',
      ],
      links: [{ label: 'Chi siamo', href: '/about/' }],
    },
    {
      title: 'Come ottenere il meglio da Instanten',
      bullets: [
        'Aggiungi la homepage ai preferiti per un accesso immediato.',
        'Usa prima input puliti e non formattati per evitare spazi nascosti.',
        'Abbina gli strumenti a esempi quando regole o casi limite non sono familiari.',
        'Cambia tema per letture lunghe; la preferenza viene salvata localmente.',
        'Condividi link permanenti con anteprima Open Graph con il team.',
        'Suggerisci nuove funzioni dalla pagina Contatti.',
      ],
      links: [{ label: 'Contatti', href: '/contact/' }],
    },
    {
      title: 'Da dove arrivano le letture e dove finiscono',
      paragraphs: [
        'Ogni strumento di Instanten legge una grandezza che il tuo dispositivo misura già. La bussola e la livella leggono l’evento di orientamento esposto dal browser, il tachimetro legge le variazioni della posizione comunicata e la ricerca Qibla combina quella posizione con una formula di trigonometria sferica. Niente viene caricato, niente resta tra una visita e l’altra e nessun risultato arriva da un server: per questo ogni pagina continua a funzionare dopo aver chiuso e riaperto la scheda.',
        'Da qui deriva anche il limite onesto. Un sensore del telefono non è uno strumento topografico tarato: un magnetometro deriva vicino a metalli e calamite, una posizione del browser può essere precisa a pochi metri o a qualche centinaio secondo il segnale, e un portatile inclinato comunica l’inclinazione in modo diverso da un telefono appoggiato. Per questo ogni pagina dice cosa ha misurato invece di promettere precisione da laboratorio.',
        'Le letture appaiono nell’unità adatta. Direzione e inclinazione in gradi, velocità insieme in km/h, mph e nodi con fattori SI esatti, e la pagina Qibla fornisce il rilevamento in gradi dal nord con la distanza calcolata. Se un numero sembra sbagliato, controlla prima il sensore, non il calcolo.',
      ],
      bullets: [
        'Nessun caricamento: ogni lettura è calcolata dentro la pagina.',
        'Unità e specifica di riferimento accanto alla cifra.',
        'I limiti dei sensori sono scritti nella pagina, non in una nota.',
      ],
    },

  ],
  faqTitle: 'Domande frequenti',
  faqs: [],
};
