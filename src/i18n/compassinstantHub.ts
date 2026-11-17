/**
 * `/compassinstant/` hub page ki copy — compassinstant wala poora setup
 * instanten-v2 ke andar, saare 16 tools ke cards ke saath.
 *
 * Har string English fallback ke saath 10 locales mein hai; `hubCopy[lang]`
 * hamesha maujood rehta hai, isliye page kabhi khaali nahi dikhta.
 */
export type HubCopy = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  instrumentsH: string;
  instrumentsLead: string;
  toolsH: string;
  toolsLead: string;
  open: string;
  siloAbout: string;
  siloBlog: string;
  siloContact: string;
  siloPrivacy: string;
  siloTools: string;
  badge: string;
  detailP1: string;
  detailP2: string;
  detailP3: string;
  detailP4: string;
  detailP5: string;
};

const en: HubCopy = {
  title: 'CompassInstant — four sensor instruments in one place',
  description:
    'The complete CompassInstant toolset inside Instanten: online compass, bubble level, speedometer and Qibla finder — each with its own guides, about, contact and legal pages. Every card opens its own page.',
  h1: 'CompassInstant tools',
  lead: 'Four sensor instruments — a compass, a bubble level, a speedometer and a Qibla finder. Every card opens its own page, and each instrument keeps its own guides, about, contact and legal pages.',
  instrumentsH: 'Instruments',
  instrumentsLead: 'Live sensor tools that run entirely in your browser: put the phone flat, allow the sensor, read the value.',
  toolsH: 'Browser tools',
  toolsLead: 'Single-purpose utilities that finish in one screen — no sign-up, no upload, everything client-side.',
  open: 'Open',
  detailP1: 'This page is an index, not a second application. Each of the four cards opens the instrument’s own page, and from there the same silo continues: guides that explain a reading, an about page that says what the instrument does and does not do, a contact route, and the legal pages. Nothing here duplicates that content, so there is only ever one place to correct when something changes.',
  detailP2: 'The four instruments share one idea: a sensor your device already carries is enough to answer a question people ask every week. Which way am I facing. Is this surface straight. How fast am I moving. Which direction is the Qibla from here. Each answer is a number with a unit, printed with the specification behind it, and each page opens with the reading rather than with a form.',
  detailP3: 'Choose by the question, not by habit. Direction is a compass job, tilt is a level job, speed is the speedometer and the bearing to Makkah is the Qibla finder. If two readings disagree, the sensor is almost always the reason: a magnetometer drifts near metal, a position fix varies with signal, and a device that has not been calibrated since it was switched on can be several degrees out.',
  detailP4: 'Nothing here needs an account and nothing is uploaded. The four instruments read sensors the browser exposes on the device itself, the pages are pre-rendered static HTML, and the only thing stored locally is your theme preference. Close the tab and the reading is gone; there is no history to delete and no server log of where you were standing.',
  detailP5: 'If a reading looks wrong, work from the sensor outwards. Check that the page has permission to use the sensor, move away from metal, magnets and speakers, put the device on a flat surface for the level, and give a position fix a few seconds outdoors before trusting it. Reading twice in the same place is the quickest way to see whether the value is stable or drifting. If it keeps changing, the instrument is telling you about the environment, not about the page.',
  siloAbout: 'About',
  siloBlog: 'Guides',
  siloContact: 'Contact',
  siloPrivacy: 'Privacy',
  siloTools: 'All tools',
  badge: 'Free · no sign-up',
};

export const hubCopy: Record<string, HubCopy> = {
  en,
  de: {
    ...en,
    title: 'CompassInstant — vier Messinstrumente an einem Ort',
    description:
      'Das komplette CompassInstant-Set in Instanten: Online-Kompass, Wasserwaage, Tachometer und Qibla-Finder — jeweils mit eigenen Guides, Über-uns-, Kontakt- und Rechtsseiten.',
    h1: 'CompassInstant-Tools',
    lead: 'Vier Sensor-Instrumente — Kompass, Wasserwaage, Tachometer und Qibla-Finder. Jede Karte öffnet die eigene Seite, und jedes Instrument behält eigene Anleitungen, Über-uns-, Kontakt- und Rechtsseiten.',
    instrumentsH: 'Instrumente',
    instrumentsLead: 'Live-Sensortools, die komplett im Browser laufen: Gerät flach hinlegen, Sensor erlauben, Wert ablesen.',
    toolsH: 'Browser-Tools',
    toolsLead: 'Werkzeuge für eine Aufgabe, auf einem Bildschirm erledigt — ohne Anmeldung, ohne Upload, alles lokal.',
    open: 'Öffnen',
    detailP1: 'Diese Seite ist ein Index, keine zweite Anwendung. Jede der vier Karten öffnet die eigene Seite des Instruments, und dort geht derselbe Silo weiter: Anleitungen, die einen Messwert erklären, eine Über-Seite, die sagt, was das Instrument kann und was nicht, ein Kontaktweg und die Rechtstexte. Nichts davon wird hier doppelt gepflegt, es gibt also nur eine Stelle zum Korrigieren.',
    detailP2: 'Die vier Instrumente teilen eine Idee: Ein Sensor, den das Gerät ohnehin hat, reicht für eine Frage, die Menschen jede Woche stellen. Wohin schaue ich. Ist diese Fläche gerade. Wie schnell bin ich. Wo liegt die Qibla von hier. Jede Antwort ist eine Zahl mit Einheit, gedruckt mit der dahinterstehenden Spezifikation, und jede Seite beginnt mit dem Messwert statt mit einem Formular.',
    detailP3: 'Wählen Sie nach der Frage, nicht nach Gewohnheit. Richtung ist eine Kompass-Aufgabe, Neigung eine Wasserwaagen-Aufgabe, Geschwindigkeit gehört zum Tachometer und die Peilung nach Mekka zum Qibla-Finder. Widersprechen sich zwei Werte, steckt fast immer der Sensor dahinter: Ein Magnetometer driftet nahe Metall, eine Positionsbestimmung schwankt mit dem Signal, und ein Gerät ohne Kalibrierung kann mehrere Grad danebenliegen.',
    detailP4: 'Nichts hier braucht ein Konto, nichts wird hochgeladen. Die vier Instrumente lesen Sensoren, die der Browser auf dem Gerät selbst bereitstellt, die Seiten sind vorab erzeugtes statisches HTML, und lokal gespeichert wird nur Ihre Theme-Wahl. Tab schließen, Messwert weg: kein Verlauf zum Löschen, kein Server-Log über Ihren Standort.',
    detailP5: 'Wirkt ein Wert falsch, arbeiten Sie vom Sensor nach außen. Prüfen Sie die Sensorbefugnis der Seite, gehen Sie weg von Metall, Magneten und Lautsprechern, legen Sie das Gerät für die Wasserwaage flach hin und geben Sie der Positionsbestimmung draußen ein paar Sekunden. Zweimal am selben Ort zu messen zeigt am schnellsten, ob der Wert stabil ist oder driftet.',
    siloAbout: 'Über uns',
    siloBlog: 'Guides',
    siloContact: 'Kontakt',
    siloPrivacy: 'Datenschutz',
    siloTools: 'Alle Tools',
    badge: 'Kostenlos · ohne Anmeldung',
  },
  es: {
    ...en,
    title: 'CompassInstant — 4 instrumentos + four instruments instantáneas',
    description:
      'El conjunto completo de CompassInstant dentro de Instanten: brújula online, nivel de burbuja, velocímetro y alquibla — cada uno con sus guías, sobre nosotros, contacto y páginas legales.',
    h1: 'Herramientas CompassInstant',
    lead: 'Cuatro instrumentos con sensores — brújula, nivel de burbuja, velocímetro y buscador de alquibla. Cada tarjeta abre su propia página y cada instrumento conserva sus guías, página de información, contacto y avisos legales.',
    instrumentsH: 'Instrumentos',
    instrumentsLead: 'Herramientas de sensor en vivo que funcionan en el navegador: apoya el móvil, permite el sensor y lee el valor.',
    toolsH: 'Herramientas de navegador',
    toolsLead: 'Utilidades de una sola tarea que se resuelven en una pantalla — sin registro, sin subir archivos, todo en local.',
    open: 'Abrir',
    detailP1: 'Esta página es un índice, no una segunda aplicación. Cada una de las cuatro tarjetas abre la página de su instrumento y desde ahí sigue el mismo silo: guías que explican una lectura, una página de información que dice qué hace y qué no hace, una vía de contacto y las páginas legales. Aquí no se duplica nada, así que solo hay un lugar que corregir.',
    detailP2: 'Los cuatro instrumentos comparten una idea: un sensor que el dispositivo ya lleva basta para responder una pregunta que la gente se hace cada semana. Hacia dónde miro. Esta superficie está recta. A qué velocidad voy. Hacia dónde está la alquibla desde aquí. Cada respuesta es un número con unidad, junto a la especificación que lo respalda, y cada página empieza por la lectura.',
    detailP3: 'Elige por la pregunta, no por costumbre. La dirección es trabajo de la brújula, la inclinación del nivel, la velocidad del velocímetro y el rumbo a La Meca del buscador de alquibla. Si dos lecturas no coinciden, casi siempre es el sensor: un magnetómetro se desvía cerca del metal y la posición varía con la señal.',
    detailP4: 'Aquí nada pide cuenta y nada se sube. Los cuatro instrumentos leen sensores que el navegador expone en el propio dispositivo, las páginas son HTML estático pregenerado y lo único que se guarda localmente es tu preferencia de tema. Cierra la pestaña y la lectura desaparece: no hay historial que borrar ni registro en servidor de dónde estabas.',
    detailP5: 'Si una lectura parece mal, empieza por el sensor. Comprueba que la página tiene permiso para usarlo, aléjate de metales, imanes y altavoces, deja el dispositivo plano para el nivel y da unos segundos a la posición en exterior. Medir dos veces en el mismo sitio muestra rápido si el valor es estable o se está desviando.',
    siloAbout: 'Acerca de',
    siloBlog: 'Guías',
    siloContact: 'Contacto',
    siloPrivacy: 'Privacidad',
    siloTools: 'Todas las herramientas',
    badge: 'Gratis · sin registro',
  },
  fr: {
    ...en,
    title: 'CompassInstant — 4 instruments + four instruments instantanés',
    description:
      'L\'ensemble CompassInstant complet dans Instanten : boussole en ligne, niveau à bulle, tachymètre et boussole Qibla — chacun avec ses guides, à propos, contact et pages légales.',
    h1: 'Outils CompassInstant',
    lead: 'Quatre instruments à capteurs — boussole, niveau à bulle, compteur de vitesse et chercheur de Qibla. Chaque carte ouvre sa propre page et chaque instrument garde ses guides, sa page à propos, son contact et ses pages légales.',
    instrumentsH: 'Instruments',
    instrumentsLead: 'Outils à capteur en direct, entièrement dans le navigateur : posez le téléphone, autorisez le capteur, lisez la valeur.',
    toolsH: 'Outils de navigateur',
    toolsLead: 'Des utilitaires à une seule tâche, réglés en un écran — sans compte, sans envoi de fichier, tout en local.',
    open: 'Ouvrir',
    detailP1: 'Cette page est un index, pas une seconde application. Chacune des quatre cartes ouvre la page de l’instrument, et le même silo continue ensuite : guides qui expliquent une mesure, page à propos qui dit ce que l’instrument fait et ne fait pas, page de contact et pages légales. Rien n’est dupliqué ici, il n’y a donc qu’un seul endroit à corriger.',
    detailP2: 'Les quatre instruments partagent une idée : un capteur déjà présent dans l’appareil suffit pour répondre à une question que les gens se posent chaque semaine. Dans quelle direction je regarde. Cette surface est-elle droite. À quelle vitesse je vais. Où se trouve la Qibla d’ici. Chaque réponse est un nombre avec une unité, affiché avec la spécification qui le sous-tend, et chaque page commence par la mesure.',
    detailP3: 'Choisissez selon la question, pas selon l’habitude. La direction relève de la boussole, l’inclinaison du niveau, la vitesse du compteur et le relèvement vers La Mecque du chercheur de Qibla. Si deux mesures se contredisent, c’est presque toujours le capteur : un magnétomètre dérive près du métal et une position varie avec le signal.',
    detailP4: 'Rien ici ne demande de compte et rien n’est envoyé. Les quatre instruments lisent des capteurs que le navigateur expose sur l’appareil, les pages sont du HTML statique pré-généré, et seul votre choix de thème est stocké localement. Fermez l’onglet et la mesure disparaît : aucun historique à effacer, aucun journal serveur de votre position.',
    detailP5: 'Si une mesure paraît fausse, partez du capteur. Vérifiez que la page a l’autorisation d’utiliser le capteur, éloignez-vous du métal, des aimants et des haut-parleurs, posez l’appareil à plat pour le niveau et laissez quelques secondes à la position en extérieur. Mesurer deux fois au même endroit montre vite si la valeur est stable ou dérive, et si elle bouge, l’instrument décrit l’environnement plutôt que la page.',
    siloAbout: 'À propos',
    siloBlog: 'Guides',
    siloContact: 'Contact',
    siloPrivacy: 'Confidentialité',
    siloTools: 'Tous les outils',
    badge: 'Gratuit · sans compte',
  },
  it: {
    ...en,
    title: 'CompassInstant — 4 strumenti + four instruments istantanei',
    description:
      'Il set CompassInstant completo dentro Instanten: bussola online, livella, tachimetro e bussola Qibla — ognuno con guide, chi siamo, contatti e pagine legali.',
    h1: 'Strumenti CompassInstant',
    lead: 'Quattro strumenti con sensori — bussola, livella, tachimetro e ricerca Qibla. Ogni scheda apre la propria pagina e ogni strumento mantiene guide, pagina informativa, contatti e pagine legali.',
    instrumentsH: 'Strumenti',
    instrumentsLead: 'Strumenti con sensore in tempo reale, interamente nel browser: appoggia il telefono, consenti il sensore, leggi il valore.',
    toolsH: 'Strumenti del browser',
    toolsLead: 'Utility per una sola attività, risolte in una schermata — senza registrazione, senza caricamenti, tutto in locale.',
    open: 'Apri',
    detailP1: 'Questa pagina è un indice, non una seconda applicazione. Ognuna delle quattro schede apre la pagina del suo strumento e da lì continua lo stesso silo: guide che spiegano una lettura, una pagina informativa, un canale di contatto e le pagine legali. Qui non si duplica nulla, quindi c’è un solo posto da correggere.',
    detailP2: 'I quattro strumenti condividono un’idea: un sensore che il dispositivo ha già basta per rispondere a una domanda che le persone si fanno ogni settimana. Verso dove guardo. Questa superficie è dritta. A che velocità vado. Dove si trova la Qibla da qui. Ogni risposta è un numero con unità, accanto alla specifica che lo sostiene, e ogni pagina inizia dalla lettura.',
    detailP3: 'Scegli in base alla domanda, non all’abitudine. La direzione è compito della bussola, l’inclinazione della livella, la velocità del tachimetro e il rilevamento verso la Mecca della ricerca Qibla. Se due letture non concordano, quasi sempre è il sensore: un magnetometro deriva vicino al metallo e la posizione varia con il segnale.',
    detailP4: 'Qui non serve un account e nulla viene caricato. I quattro strumenti leggono sensori che il browser espone sul dispositivo, le pagine sono HTML statico pre-generato e l’unica cosa salvata in locale è la preferenza del tema. Chiudi la scheda e la lettura sparisce: nessuna cronologia da cancellare, nessun log sul server di dove eri.',
    detailP5: 'Se una lettura sembra sbagliata, parti dal sensore. Controlla che la pagina abbia il permesso di usarlo, allontanati da metalli, calamite e casse, appoggia il dispositivo su una superficie piana per la livella e lascia qualche secondo alla posizione all’aperto. Misurare due volte nello stesso punto mostra subito se il valore è stabile o sta derivando.',
    siloAbout: 'Chi siamo',
    siloBlog: 'Guide',
    siloContact: 'Contatti',
    siloPrivacy: 'Privacy',
    siloTools: 'Tutti gli strumenti',
    badge: 'Gratis · senza registrazione',
  },
  pt: {
    ...en,
    title: 'CompassInstant — 4 instrumentos + four instruments instantâneas',
    description:
      'O conjunto CompassInstant completo dentro do Instanten: bússola online, nível de bolha, velocímetro e alquibla — cada um com guias, sobre, contacto e páginas legais — mais doze ferramentas de navegador.',
    h1: 'Ferramentas CompassInstant',
    lead: 'Quatro instrumentos com sensor e doze ferramentas de navegador. Cada cartão abre a página própria dessa ferramenta — cada instrumento mantém guias, sobre, contacto e páginas legais.',
    instrumentsH: 'Instrumentos',
    instrumentsLead: 'Ferramentas de sensor ao vivo que correm no navegador: pousa o telemóvel, permite o sensor, lê o valor.',
    toolsH: 'Ferramentas de navegador',
    toolsLead: 'Utilitários de uma só tarefa, resolvidos num ecrã — sem registo, sem carregamentos, tudo local.',
    open: 'Abrir',
    detailP1: 'Esta página é um índice, não uma segunda aplicação. Cada um dos quatro cartões abre a página do respetivo instrumento e a partir daí continua o mesmo silo: guias que explicam uma leitura, uma página sobre o que faz e não faz, uma via de contacto e as páginas legais. Aqui nada é duplicado, por isso há apenas um sítio a corrigir.',
    detailP2: 'Os quatro instrumentos partilham uma ideia: um sensor que o dispositivo já tem chega para responder a uma pergunta que as pessoas fazem todas as semanas. Para onde estou a olhar. Esta superfície está direita. A que velocidade vou. Onde está a Qibla daqui. Cada resposta é um número com unidade, junto ao padrão que o sustenta, e cada página começa na leitura.',
    detailP3: 'Escolha pela pergunta, não pelo hábito. A direção é trabalho da bússola, a inclinação do nível, a velocidade do velocímetro e o rumo a Meca do localizador de Qibla. Se duas leituras não baterem certo, quase sempre é o sensor: um magnetómetro desvia-se perto de metal e a posição varia com o sinal.',
    detailP4: 'Aqui nada pede conta e nada é enviado. Os quatro instrumentos leem sensores que o navegador expõe no próprio dispositivo, as páginas são HTML estático pré-gerado e a única coisa guardada localmente é a preferência de tema. Feche o separador e a leitura desaparece: não há histórico para apagar nem registo no servidor de onde estava.',
    detailP5: 'Se uma leitura parecer errada, comece pelo sensor. Confirme que a página tem permissão para o usar, afaste-se de metais, ímanes e colunas, deixe o dispositivo plano para o nível e dê alguns segundos à posição no exterior. Medir duas vezes no mesmo local mostra depressa se o valor está estável ou a derivar.',
    siloAbout: 'Sobre',
    siloBlog: 'Guias',
    siloContact: 'Contacto',
    siloPrivacy: 'Privacidade',
    siloTools: 'Todas as ferramentas',
    badge: 'Grátis · sem registo',
  },
  nl: {
    ...en,
    title: 'CompassInstant — vier meetinstrumenten op één plek',
    description:
      'De complete CompassInstant-set binnen Instanten: online kompas, waterpas, snelheidsmeter en Qibla-kompas — elk met eigen gidsen, over ons, contact en juridische pagina\'s.',
    h1: 'CompassInstant-tools',
    lead: 'Vier sensorbased instrumenten — kompas, waterpas, snelheidsmeter en qibla-zoeker. Elke kaart opent een eigen pagina en elk instrument houdt eigen gidsen, over-pagina, contact en juridische pagina\'s.',
    instrumentsH: 'Instrumenten',
    instrumentsLead: 'Live sensortools die volledig in je browser werken: leg het toestel plat, geef toestemming, lees de waarde.',
    toolsH: 'Browsertools',
    toolsLead: 'Hulpmiddelen voor één taak, binnen één scherm klaar — geen account, geen upload, alles lokaal.',
    open: 'Openen',
    detailP1: 'Deze pagina is een index, geen tweede applicatie. Elk van de vier kaarten opent de pagina van dat instrument, en daar gaat dezelfde silo verder: gidsen die een meting uitleggen, een over-pagina, een contactroute en de juridische pagina’s. Hier wordt niets gedupliceerd, dus er is maar één plek om te corrigeren.',
    detailP2: 'De vier instrumenten delen één idee: een sensor die je apparaat al heeft is genoeg om een vraag te beantwoorden die mensen elke week stellen. Welke kant kijk ik op. Staat dit oppervlak recht. Hoe hard ga ik. Waar ligt de qibla vanaf hier. Elk antwoord is een getal met eenheid, naast de specificatie erachter, en elke pagina begint met de meting.',
    detailP3: 'Kies op basis van de vraag, niet uit gewoonte. Richting is kompaswerk, helling is waterpaswerk, snelheid hoort bij de snelheidsmeter en de peiling naar Mekka bij de qibla-zoeker. Spreken twee metingen elkaar tegen, dan zit de oorzaak bijna altijd in de sensor: een magnetometer drift bij metaal en een positie varieert met het signaal.',
    detailP4: 'Niets hier vraagt een account en niets wordt geüpload. De vier instrumenten lezen sensoren die de browser op het toestel zelf beschikbaar stelt, de pagina’s zijn vooraf gegenereerde statische HTML en lokaal wordt alleen je themavoorkeur bewaard. Sluit het tabblad en de meting is weg: geen geschiedenis om te wissen, geen serverlog van waar je stond.',
    detailP5: 'Lijkt een meting fout, werk dan van de sensor naar buiten. Controleer of de pagina toestemming heeft, ga weg van metaal, magneten en speakers, leg het toestel plat voor het waterpas en geef de positie buiten een paar seconden. Twee keer op dezelfde plek meten laat meteen zien of de waarde stabiel is of wegloopt.',
    siloAbout: 'Over ons',
    siloBlog: 'Gidsen',
    siloContact: 'Contact',
    siloPrivacy: 'Privacy',
    siloTools: 'Alle tools',
    badge: 'Gratis · geen account',
  },
  sv: {
    ...en,
    title: 'CompassInstant — fyra mätinstrument på ett ställe',
    description:
      'Hela CompassInstant-uppsättningen i Instanten: online kompass, vattenpass, hastighetsmätare och Qibla-kompass — var och en med egna guider, om oss, kontakt och juridiska sidor.',
    h1: 'CompassInstant-verktyg',
    lead: 'Fyra sensorinstrument — kompass, vattenpass, hastighetsmätare och qibla-sökare. Varje kort öppnar en egen sida och varje instrument behåller egna guider, om-sida, kontakt och juridiska sidor.',
    instrumentsH: 'Instrument',
    instrumentsLead: 'Senserverktyg i realtid som körs helt i webbläsaren: lägg telefonen plant, tillåt sensorn, läs av värdet.',
    toolsH: 'Webbläsarverktyg',
    toolsLead: 'Verktyg för en enda uppgift, klara på en skärm — inget konto, ingen uppladdning, allt lokalt.',
    open: 'Öppna',
    detailP1: 'Den här sidan är ett index, inte en andra applikation. Var och en av de fyra korten öppnar instrumentets egen sida, och där fortsätter samma silo: guider, en om-sida, en kontaktväg och de juridiska sidorna. Inget dupliceras här, så det finns bara en plats att rätta.',
    detailP2: 'De fyra instrumenten delar en idé: en sensor som enheten redan har räcker för att svara på en fråga folk ställer varje vecka. Vilket håll tittar jag åt. Är ytan rak. Hur fort går jag. Var ligger qibla härifrån. Varje svar är en siffra med enhet, bredvid specifikationen bakom, och varje sida börjar med mätvärdet.',
    detailP3: 'Välj efter frågan, inte av vana. Riktning är kompassjobb, lutning är vattenpassjobb, hastighet hör till hastighetsmätaren och bäringen till Mecka till qibla-sökaren. Om två mätvärden inte stämmer är det nästan alltid sensorn: en magnetometer driver nära metall och en position varierar med signalen.',
    detailP4: 'Inget här kräver konto och inget laddas upp. De fyra instrumenten läser sensorer som webbläsaren tillhandahåller på enheten, sidorna är förgenererad statisk HTML och lokalt sparas bara ditt temaval. Stäng fliken och mätvärdet är borta: ingen historik att radera, ingen serverlogg över var du stod.',
    detailP5: 'Verkar ett värde fel, arbeta utifrån sensorn. Kontrollera att sidan har tillstånd, flytta dig bort från metall, magneter och högtalare, lägg enheten plant för vattenpasset och ge positionen några sekunder utomhus. Att mäta två gånger på samma plats visar snabbt om värdet är stabilt eller driver.',
    siloAbout: 'Om oss',
    siloBlog: 'Guider',
    siloContact: 'Kontakt',
    siloPrivacy: 'Integritet',
    siloTools: 'Alla verktyg',
    badge: 'Gratis · inget konto',
  },
  ja: {
    ...en,
    title: 'CompassInstant — 4つのセンサー計測ツール',
    description:
      'Instanten 内の CompassInstant 一式：オンライン方位磁針、水準器、速度計、キブラ方位 — それぞれにガイド、概要、お問い合わせ、法務ページがあります。',
    h1: 'CompassInstant のツール',
    lead: '4つのセンサー計測ツール — コンパス、水準器、速度計、キブラ探知。各カードは専用ページを開き、それぞれが独自のガイド、概要、お問い合わせ、法務ページを持ちます。',
    instrumentsH: '計測ツール',
    instrumentsLead: 'ブラウザだけで動くセンサー計測ツール：端末を平らに置き、センサーを許可して値を読み取ります。',
    toolsH: 'ブラウザツール',
    toolsLead: '1画面で完了する単機能ツール。登録不要、アップロード不要、すべて端末内で処理します。',
    open: '開く',
    detailP1: 'このページは索引であり、2つ目のアプリではありません。4つのカードはそれぞれの計測ツールのページを開き、そこから同じサイロが続きます。計測値の読み方を説明するガイド、できることとできないことを書いた概要ページ、お問い合わせ導線、法務ページです。ここで内容を二重に持たないため、修正する場所は常に1か所だけです。',
    detailP2: '4つのツールに共通する考え方は、端末がすでに持っているセンサーだけで、人が毎週尋ねる問いに答えられるというものです。どちらを向いているか。この面は水平か。どのくらいの速さか。ここからキブラはどの方向か。答えはすべて単位付きの数値で、根拠となる仕様と並べて表示し、各ページは入力フォームではなく計測値から始まります。',
    detailP3: '選ぶときは習慣ではなく問いで選んでください。方位はコンパス、傾きは水準器、速さは速度計、メッカへの方位はキブラ探知です。2つの値が食い違う場合、原因はほとんどセンサー側です。磁気センサーは金属の近くでずれ、位置情報は電波で変動し、校正していない端末は数度ずれることがあります。',
    detailP4: 'ここではアカウントも不要で、何もアップロードされません。4つのツールはブラウザが端末上で提供するセンサーを読み、ページは事前生成された静的HTMLで、端末に保存されるのはテーマ設定だけです。タブを閉じれば計測値は消え、削除する履歴も、立ち位置を記録するサーバーログもありません。',
    detailP5: '値がおかしいときはセンサー側から確認してください。ページにセンサーの許可があるか、金属・磁石・スピーカーから離れているか、水準器なら端末を平らな面に置いたか、位置情報なら屋外で数秒待ったかを確認します。同じ場所で2回読むと、値が安定しているのか漂っているのかがすぐ分かります。値が動き続ける場合、その計測ツールはページではなく周囲の環境を映していることになります。端末の設定でセンサーの許可を確認するのも忘れないでください。水準器は端末を平らな面に置いたときが最も正確で、手で持ったままでは手ぶれがそのまま数値に出ます。屋外では位置情報の精度が上がり、屋内では磁気の影響を受けやすくなります。方位が数度ずれると感じたら、端末を8の字に動かして磁気センサーを再校正すると安定することが多いです。どのツールも計測値と単位を同じ位置に表示するので、値の変化を追いやすくなっています。',
    siloAbout: '概要',
    siloBlog: 'ガイド',
    siloContact: 'お問い合わせ',
    siloPrivacy: 'プライバシー',
    siloTools: 'すべてのツール',
    badge: '無料 · 登録不要',
  },
  ko: {
    ...en,
    title: 'CompassInstant — 네 가지 센서 측정 도구',
    description:
      'Instanten 안의 CompassInstant 전체 세트: 온라인 나침반, 수평계, 속도계, 키블라 방향 — 각각 고유한 가이드, 소개, 문의, 법적 페이지를 갖추고 있습니다. .',
    h1: 'CompassInstant 도구',
    lead: '네 가지 센서 측정 도구 — 나침반, 수평계, 속도계, 키블라 파인더. 각 카드는 전용 페이지를 열고, 각 도구는 자체 안내, 소개, 문의, 법적 페이지를 갖습니다.',
    instrumentsH: '계측 도구',
    instrumentsLead: '브라우저에서만 동작하는 실시간 센서 도구: 기기를 평평하게 두고 센서를 허용한 뒤 값을 읽습니다.',
    toolsH: '브라우저 도구',
    toolsLead: '한 화면에서 끝나는 단일 기능 도구. 가입 없음, 업로드 없음, 모든 처리는 기기 안에서.',
    open: '열기',
    detailP1: '이 페이지는 색인이지 두 번째 앱이 아닙니다. 네 카드는 각 도구의 페이지를 열고, 그곳에서 같은 구조가 이어집니다. 안내, 소개 페이지, 문의 경로, 법적 고지 페이지입니다. 여기서 내용을 중복하지 않으므로 고칠 곳은 항상 한 곳입니다.',
    detailP2: '네 도구는 하나의 생각을 공유합니다. 기기에 이미 있는 센서만으로 사람들이 매주 묻는 질문에 답할 수 있다는 것입니다. 어느 쪽을 보고 있나. 이 면은 반듯한가. 얼마나 빠른가. 여기서 키블라는 어느 방향인가. 모든 답은 단위가 붙은 숫자이며 근거 사양과 함께 표시되고, 각 페이지는 측정값으로 시작합니다.',
    detailP3: '습관이 아니라 질문으로 고르세요. 방위는 나침반, 기울기는 수평계, 속도는 속도계, 메카 방향은 키블라 파인더의 일입니다. 두 값이 어긋나면 거의 항상 센서가 원인입니다. 자기 센서는 금속 근처에서 흔들리고 위치는 신호에 따라 변합니다.',
    detailP4: '여기서는 계정도 필요 없고 아무것도 업로드되지 않습니다. 네 도구는 브라우저가 기기에서 제공하는 센서를 읽고, 페이지는 미리 생성된 정적 HTML이며, 기기에 저장되는 것은 테마 설정뿐입니다. 탭을 닫으면 측정값은 사라지고, 지울 기록도, 위치를 남기는 서버 로그도 없습니다.',
    detailP5: '값이 이상하면 센서부터 확인하세요. 페이지에 센서 사용 권한이 있는지, 금속·자석·스피커에서 떨어졌는지, 수평계라면 기기를 평평한 면에 두었는지, 위치는 야외에서 몇 초 기다렸는지 확인합니다. 같은 자리에서 두 번 읽으면 값이 안정적인지 흘러가는지 바로 알 수 있습니다. 값이 계속 움직이면 도구가 아니라 주변 환경을 보여 주는 것입니다. 기기 설정에서 센서 권한도 확인해 보세요. 수평계는 기기를 평평한 면에 두었을 때 가장 정확하고, 손에 들고 있으면 손떨림이 그대로 숫자에 나타납니다. 야외에서는 위치 정확도가 높아지고 실내에서는 자기 간섭을 받기 쉽습니다. 방위가 몇 도 어긋난다고 느껴지면 기기를 8자 모양으로 움직여 자기 센서를 다시 교정하면 대체로 안정됩니다. 모든 도구는 측정값과 단위를 같은 위치에 표시하므로 값의 변화를 따라가기 쉽습니다.',
    siloAbout: '소개',
    siloBlog: '가이드',
    siloContact: '문의',
    siloPrivacy: '개인정보',
    siloTools: '모든 도구',
    badge: '무료 · 가입 없음',
  },
};
