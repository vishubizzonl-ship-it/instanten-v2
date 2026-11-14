import type { ToolLists } from '../toolLists';

export const de: ToolLists = {
  'base64-encoder': {
    features: [
      'Kodieren und Dekodieren von Text nach IETF RFC 4648',
      'Datei-Upload mit reiner Verarbeitung im Browser für mehr Privatsphäre',
      'UTF-8-Unterstützung für internationalen Text',
      'Bild zu Base64 und Base64 als Datei herunterladen',
      'Keine Server-Uploads — die gesamte Kodierung läuft im Browser',
      'Sofortige Ergebnisse auf Windows, macOS, Linux, Android und iOS',
    ],
    useCases: [
      'Bilder standardkonform als Base64 in CSS oder HTML einbetten',
      'API-Tokens und E-Mail-Anhänge RFC-4648-konform kodieren',
      'Data-URIs für Webanwendungen erzeugen',
      'Binärdaten übertragen, ohne das Gerät zu verlassen',
    ],
  },
  'color-palette': {
    features: [
      'Mehrere Harmonieregeln (komplementär, analog, triadisch, monochrom)',
      'Kontrastprüfung nach W3C WCAG 2.2 Stufe AA (4,5:1 Text, 3:1 große Schrift)',
      'Referenz für barrierefreies Design nach ADA und Section 508',
      'Export als CSS-Variablen, Tailwind-Konfiguration, Figma-JSON und Adobe ASE',
      'Paletten teilen und gemeinsam abstimmen',
      'Simulation von Farbsehschwächen und Verläufe erzeugen',
    ],
    useCases: [
      'Markenidentität mit barrierefreien Farbsystemen entwerfen',
      'UI-Designsysteme nach ADA- und Section-508-Vorgaben aufbauen',
      'Barrierefreiheit für öffentliche und private Websites prüfen',
      'Farben für Marketingmaterial und Verlaufsflächen festlegen',
    ],
  },
  'css-grid-generator': {
    features: [
      'Visueller Grid-Baukasten nach W3C CSS Grid Layout',
      'Spaltenbreiten (fr, px, %, auto, minmax) mit sauberem Code-Output',
      'Abstände, Ausrichtung und benannte Grid-Bereiche',
      'Live-Vorschau für responsive Weblayouts',
      'Verschachtelte Grids und produktionsreifes CSS mit Fallbacks',
      'Läuft sofort in Chrome, Safari, Firefox, Edge und Brave',
    ],
    useCases: [
      'Dashboard- und Artikellayouts mit Standard-CSS-Grid bauen',
      'Fotogalerien und responsive Seitenstrukturen erstellen',
      'Formularlayouts und Designsysteme nach W3C-Grid-Spezifikation',
      'Frontend-Unterricht und schnelles Prototyping für Lernende',
    ],
  },
  'image-compressor': {
    features: [
      'Intelligente verlustbehaftete Kompression bei sichtbar gleicher Qualität',
      'Unterstützung für JPEG, PNG, WebP und AVIF in modernen Browsern',
      'Komprimierung per Canvas/WebP im Browser — Bilder verlassen das Gerät nicht',
      'Optimiert für E-Commerce und Web-Performance',
      'Hilft, LCP-Ziele unter 2,5 Sekunden zu erreichen',
      'Batch-fähiger Ablauf für mehrere Bilder',
    ],
    useCases: [
      'Website-Bilder für schnelles Laden auf Mobilfunk und Breitband optimieren',
      'Produktbilder für Shopify, Etsy und Amazon komprimieren',
      'Blog- und Content-Bilder vor dem Veröffentlichen verkleinern',
      'CDN-Bandbreite sparen und Seiten schneller ausliefern',
    ],
  },
  'json-formatter': {
    features: [
      'Syntaxhervorhebung mit Fehlererkennung inklusive Zeilennummer',
      'JSON-Validierung nach IETF RFC 8259 für standardkonforme Ausgabe',
      'Einklappbare Baumansicht für große API-Antworten',
      'Minifizieren und Formatieren für Produktion und Entwicklung',
      'Verarbeitung im Browser — kein Upload, volle Privatsphäre',
      'Läuft sofort in modernen Browsern auf Windows, macOS, Linux, Android und iOS',
    ],
    useCases: [
      'API-Antworten debuggen und Konfigurationsdateien formatieren',
      'JSON auf Konformität mit IETF RFC 8259 prüfen',
      'Studierenden und neuen Entwicklern den JSON-Aufbau erklären',
      'Unternehmensdaten prüfen, ohne sensible Inhalte hochzuladen',
    ],
  },
  'markdown-editor': {
    features: [
      'Live-Vorschau mit CommonMark-konformer Ausgabe',
      'Syntaxhervorhebung für Codeblöcke und Inline-Formatierung',
      'Tabellen, Aufgabenlisten, Fußnoten und Formeln',
      'Export als HTML, PDF oder reines Markdown',
      'Wortzahl und Lesezeit für Content-Autoren',
      'Nach dem ersten Laden offline nutzbar — keine Anmeldung nötig',
    ],
    useCases: [
      'Technische Dokumentation und README-Dateien schreiben',
      'Blogbeiträge mit CommonMark-konformer Ausgabe entwerfen',
      'API-Dokumentation für Entwickler und Studierende erstellen',
      'Notizen und wissenschaftliche Texte ohne Abokosten festhalten',
    ],
  },
  'meta-tag-generator': {
    features: [
      'SEO-Meta-Tags nach den Snippet-Richtlinien von Search Central',
      'Open-Graph-Tags für korrekte Social-Media-Vorschauen',
      'Twitter-Card-Tags mit Bild, Titel und Beschreibung',
      'Vorschau-Simulation für Facebook, LinkedIn und X',
      'Canonical-URL, Viewport und Robots-Tags',
      'HTML- und JSON-Export zur sofortigen Nutzung',
    ],
    useCases: [
      'Website-SEO mit standardkonformen Meta-Tags verbessern',
      'Social-Sharing für die Zielgruppe optimieren',
      'Meta-Tags für Blogbeiträge und Landingpages festlegen',
      'Kundenprojekte mit geprüften Search-Central-Tags übergeben',
    ],
  },
  'online-ruler': {
    features: [
      'Zoll (in) mit 1/16-, 1/8-, 1/4- und 1/2-Zoll-Markierungen',
      'Zentimeter (cm), Millimeter (mm) und Pixel (px) für metrische Maße',
      'Kalibrierung über eine Standard-Bank- oder Ausweiskarte (ISO/IEC 7810 ID-1: 85,60 × 53,98 mm)',
      'Exakte Referenz nach NIST (1 internationales Zoll = 25,4 mm)',
      'Keine Installation nötig; läuft sofort in Chrome, Safari, Firefox, Edge und Brave',
      'Funktioniert auf Windows, macOS, Linux, Android und iOS mit responsivem Layout',
    ],
    useCases: [
      'UI- und UX-Designmaße direkt am Bildschirm prüfen',
      'Frontend-Entwicklung mit Zoll- und Pixelangaben',
      'Druckdesign an Standard-Papierformaten kontrollieren',
      'Schnelle Bildschirmmessungen auf Mobilgeräten und Desktop',
    ],
  },
  'password-generator': {
    features: [
      'Anpassbare Länge (4–128)',
      'Auswahl der Zeichensätze',
      'Ausschluss leicht verwechselbarer Zeichen',
      'Entropie- und Stärkeanzeige',
      'Mehrere Passwörter auf einmal erzeugen',
      'Passphrasen-Modus',
      'Ausschließlich im Browser',
    ],
    useCases: [
      'Konten anlegen',
      'Passwörter regelmäßig wechseln',
      'Zugangsdaten im Team teilen',
      'WLAN-Passwörter erzeugen',
      'Verschlüsselungsschlüssel erstellen',
    ],
  },
  'qr-generator': {
    features: [
      'Mehrere Datentypen (URL, vCard, WLAN, SMS, E-Mail, Text)',
      'Eigene Farben und saubere Ausgabe ohne Logo',
      'Export als hochauflösendes PNG und SVG',
      'Statische Codes, die nie ablaufen',
      'Keine Anmeldung, kein Scan-Limit, keine Bezahlstufe',
      'Läuft vollständig im Browser — nichts wird hochgeladen',
    ],
    useCases: [
      'Marketingkampagnen',
      'Visitenkarten',
      'Check-in bei Veranstaltungen',
      'WLAN-Zugang teilen',
      'Kontaktlose Speisekarten',
    ],
  },
  'regex-tester': {
    features: [
      'Hervorhebung der Treffer in Echtzeit',
      'Schrittweise Erklärung des regulären Ausdrucks',
      'Mehrere Dialekte (JS, Python, PCRE, Go)',
      'Spickzettel als Referenz',
      'Details zu Treffergruppen',
      'Ausschließlich im Browser',
    ],
    useCases: [
      'Muster für die Formularvalidierung',
      'Log-Dateien auswerten',
      'Daten extrahieren',
      'URL-Routing',
      'Eingaben bereinigen',
    ],
  },
  'word-counter': {
    features: [
      'Zählung in Echtzeit',
      'Wörter, Zeichen, Sätze und Absätze',
      'Schätzung der Lese- und Sprechzeit',
      'Analyse der Keyword-Dichte',
      'Funktioniert offline',
      'Keine Werbung, kein Tracking',
    ],
    useCases: [
      'Blogbeiträge optimieren',
      'Länge von Aufsätzen und Hausarbeiten prüfen',
      'SEO-Content planen',
      'Zeichenlimits in sozialen Netzwerken einhalten',
      'Übersetzungskosten schätzen',
    ],
  },
};
