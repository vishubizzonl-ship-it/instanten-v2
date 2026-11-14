/**
 * Sensor tools ke per-locale SEO title + description.
 *
 * Title 70 characters se lamba nahi hona chahiye (site-integrity test), isliye
 * fitTitle() suffix tabhi lagata hai jab jagah bache — warna title chhota kar
 * deta hai. Description har jagah 50+ characters ka hai.
 */
import type { LangCode } from "../ui";

export const instrumentSeo: Record<string, Record<LangCode, { title: string; description: string }>> = {
  "onlinecompass": {
    en: {
      title: "Online Compass \u2014 Free Live Compass in Your Browser",
      description: "Real-time magnetometer direction with calibration, offline support, and location awareness.",
    },
    de: {
      title: "Online-Kompass \u2014 Kostenloser Live-Kompass im Browser",
      description: "Echtzeit-Magnetometer-Richtung mit Kalibrierung, Offline-Unterst\u00fctzung und Positionsbewusstsein.",
    },
    ja: {
      title: "\u30aa\u30f3\u30e9\u30a4\u30f3\u30b3\u30f3\u30d1\u30b9 \u2014 \u30d6\u30e9\u30a6\u30b6\u3067\u4f7f\u3048\u308b\u7121\u6599\u306e\u65b9\u89d2\u78c1\u91dd",
      description: "\u30aa\u30f3\u30e9\u30a4\u30f3\u30b3\u30f3\u30d1\u30b9\u306f\u3001\u30b9\u30de\u30db\u306e\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u304b\u3089\u5411\u3044\u3066\u3044\u308b\u65b9\u4f4d\u3092\u8aad\u307f\u53d6\u308a\u3001\u5ea6\u6570\u3068\u6771\u897f\u5357\u5317\uff08N\u30fbNE\u30fbE \u306a\u3069\uff09\u306e\u30e9\u30d9\u30eb\u3067\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306b\u8868\u793a\u3057\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u4e0d\u8981\u3001\u767b\u9332\u4e0d\u8981\u3001\u30aa\u30d5\u30e9\u30a4\u30f3\u3067\u3082\u4f7f\u3048\u307e\u3059\u3002",
    },
    fr: {
      title: "Boussole en ligne \u2014 boussole gratuite dans le navigateur",
      description: "Direction du magn\u00e9tom\u00e8tre en temps r\u00e9el avec calibration, support hors ligne et connaissance de la position.",
    },
    es: {
      title: "Br\u00fajula online \u2014 br\u00fajula gratis en el navegador",
      description: "Direcci\u00f3n de magnet\u00f3metro en tiempo real con calibraci\u00f3n, soporte sin conexi\u00f3n y conocimiento de ubicaci\u00f3n.",
    },
    ko: {
      title: "\uc628\ub77c\uc778 \ub098\uce68\ubc18 \u2014 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc4f0\ub294 \ubb34\ub8cc \ub098\uce68\ubc18",
      description: "\uc628\ub77c\uc778 \ub098\uce68\ubc18\uc740 \ud734\ub300\ud3f0\uc758 \uc790\uae30 \uc13c\uc11c\ub85c \uc9c0\uae08 \ud5a5\ud55c \ubc29\ud5a5\uc744 \uc77d\uc5b4 \uac01\ub3c4\uc640 \ubc29\uc704(N, NE, E \u2026)\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \ubcf4\uc5ec \uc90d\ub2c8\ub2e4. \uc124\uce58\ub098 \ud68c\uc6d0\uac00\uc785 \uc5c6\uc774 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ubc14\ub85c \uc4f8 \uc218 \uc788\uace0 \uc624\ud504\ub77c\uc778\uc5d0\uc11c\ub3c4 \ub3d9\uc791\ud569\ub2c8\ub2e4.",
    },
    nl: {
      title: "Online kompas \u2014 gratis kompas in je browser",
      description: "Gratis online kompas: lees de richting van je magneetsensor in graden, met het bijbehorende windstreck (N, NO, O, ZO, Z, ZW, W, NW). Geen installatie, geen account, werkt ook offline.",
    },
    sv: {
      title: "Online kompass \u2014 gratis kompass i webbl\u00e4saren",
      description: "Gratis online kompass: l\u00e4s av riktningen fr\u00e5n telefonens magnetometer i grader, med v\u00e4derstreck (N, NO, O, SO, S, SV, V, NV). Ingen installation, inget konto, fungerar \u00e4ven offline.",
    },
    it: {
      title: "Bussola online \u2014 bussola gratuita nel browser",
      description: "Direzione del magnetometro in tempo reale con calibrazione, supporto offline e consapevolezza della posizione.",
    },
    pt: {
      title: "B\u00fassola online \u2014 b\u00fassola gr\u00e1tis no navegador",
      description: "Dire\u00e7\u00e3o do magnet\u00f4metro em tempo real com calibra\u00e7\u00e3o, suporte offline e conhecimento de localiza\u00e7\u00e3o.",
    },
  },
  "onlinebubblelevel": {
    en: {
      title: "Bubble Level \u2014 Free online bubble level to check any surface",
      description: "Free online bubble level to check any surface. Bubble level check online, spirit level online, level checker tool and water level tool online \u2014 no install.",
    },
    de: {
      title: "Wasserwaage \u2014 Kostenlose Online-Wasserwaage f\u00fcr jede Fl\u00e4che",
      description: "Kostenlose Online-Wasserwaage f\u00fcr jede Fl\u00e4che. Niveau in Grad messen, Wasserwaage online und Niveau-Check auf dem Handy \u2014 ohne Installation.",
    },
    ja: {
      title: "\u6c34\u6e96\u5668",
      description: "\u30aa\u30f3\u30e9\u30a4\u30f3\u6c34\u6e96\u5668\u306a\u3089\u3069\u3093\u306a\u9762\u3082\u3059\u3050\u306b\u6c34\u5e73\u30c1\u30a7\u30c3\u30af\u3002\u50be\u304d\u3092\u5ea6\u3067\u8868\u793a\u3059\u308b\u7121\u6599\u306e\u6c34\u5e73\u5668\u30fb\u6c34\u6e96\u5668\u30c4\u30fc\u30eb\u3067\u3001\u30b9\u30de\u30db\u3060\u3051\u3067\u4f7f\u3048\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u4e0d\u8981\u3002",
    },
    fr: {
      title: "Niveau \u00e0 Bulle",
      description: "Niveau \u00e0 bulle en ligne gratuit pour contr\u00f4ler toutes les surfaces. Contr\u00f4le de niveau en degr\u00e9s, niveau d\u2019eau en ligne et outil de niveau sur t\u00e9l\u00e9phone \u2014 sans installation.",
    },
    es: {
      title: "Nivel de Burbuja",
      description: "Nivel de burbuja online gratis para comprobar cualquier superficie. Comprueba el nivel en grados, nivel de agua online y herramienta de nivel en el m\u00f3vil \u2014 sin instalar nada.",
    },
    ko: {
      title: "\uc218\uc900\uae30 \u2014 \uc628\ub77c\uc778 \uc218\ud3c9\uacc4\ub85c \uc5b4\ub5a4 \ud45c\uba74\uc774\ub4e0 \uc218\ud3c9 \ud655\uc778\ud558\uc138\uc694",
      description: "\uc628\ub77c\uc778 \uc218\ud3c9\uacc4\ub85c \uc5b4\ub5a4 \ud45c\uba74\uc774\ub4e0 \uc218\ud3c9 \ud655\uc778\ud558\uc138\uc694. \uae30\uc6b8\uae30\ub97c \ub3c4 \ub2e8\uc704\ub85c \ubcf4\uc5ec \uc8fc\ub294 \ubb34\ub8cc \uc218\ud3c9\uae30\u00b7\uc218\uc900\uae30 \ub3c4\uad6c\ub85c, \ud734\ub300\ud3f0\ub9cc \uc788\uc73c\uba74 \ub429\ub2c8\ub2e4. \uc124\uce58 \ubd88\ud544\uc694.",
    },
    nl: {
      title: "Waterpas",
      description: "Gratis online waterpas en libel: leg je telefoon op de te controleren ondergrond en lees de helling in graden af. Kalibreren, resetten en volledig scherm \u2014 geen installatie nodig.",
    },
    sv: {
      title: "Vattenpass",
      description: "Gratis online vattenpass och libell: l\u00e4gg telefonen p\u00e5 ytan du vill kontrollera och l\u00e4s av lutningen i grader. Kalibrera, \u00e5terst\u00e4ll och k\u00f6r i fullsk\u00e4rm \u2014 ingen installation beh\u00f6vs.",
    },
    it: {
      title: "Livella a Bolla",
      description: "Livella a bolla online gratis per controllare ogni superficie. Controllo del livello in gradi, livella ad acqua online e strumento livello sul telefono \u2014 senza installazione.",
    },
    pt: {
      title: "N\u00edvel de Bolha",
      description: "N\u00edvel de bolha online gr\u00e1tis para verificar qualquer superf\u00edcie. Verifica\u00e7\u00e3o de n\u00edvel em graus, n\u00edvel de \u00e1gua online e ferramenta de n\u00edvel no celular \u2014 sem instalar.",
    },
  },
  "onlinespeedometer": {
    en: {
      title: "Speedometer",
      description: "Free online speedometer: measure your live speed in km/h or mph with GPS, plus max speed, average speed, altitude and trip time. No install, no sign-up.",
    },
    de: {
      title: "Tachometer",
      description: "Kostenloses Online-Tachometer: miss deine Live-Geschwindigkeit in km/h oder mph per GPS, dazu H\u00f6chstgeschwindigkeit, Durchschnitt, H\u00f6he und Fahrtzeit. Ohne Installation.",
    },
    ja: {
      title: "\u30b9\u30d4\u30fc\u30c9\u30e1\u30fc\u30bf\u30fc",
      description: "\u7121\u6599\u306e\u30aa\u30f3\u30e9\u30a4\u30f3\u30b9\u30d4\u30fc\u30c9\u30e1\u30fc\u30bf\u30fc\u3002GPS \u3067\u73fe\u5728\u306e\u901f\u5ea6\u3092 km/h \u307e\u305f\u306f mph \u3067\u8868\u793a\u3057\u3001\u6700\u9ad8\u901f\u5ea6\u30fb\u5e73\u5747\u901f\u5ea6\u30fb\u9ad8\u5ea6\u30fb\u8d70\u884c\u6642\u9593\u3082\u8a08\u6e2c\u3067\u304d\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u4e0d\u8981\u3001\u767b\u9332\u4e0d\u8981\u3002",
    },
    fr: {
      title: "Tachym\u00e8tre",
      description: "Tachym\u00e8tre en ligne gratuit : mesurez votre vitesse en direct en km/h ou mph gr\u00e2ce au GPS, avec vitesse maximale, moyenne, altitude et dur\u00e9e du trajet. Sans installation.",
    },
    es: {
      title: "Veloc\u00edmetro",
      description: "Veloc\u00edmetro online gratis: mide tu velocidad en vivo en km/h o mph con GPS, adem\u00e1s de velocidad m\u00e1xima, media, altitud y duraci\u00f3n del viaje. Sin instalar nada.",
    },
    ko: {
      title: "\uc18d\ub3c4\uacc4 \u2014 \ubb34\ub8cc \uc628\ub77c\uc778 \uc18d\ub3c4\uacc4",
      description: "\ubb34\ub8cc \uc628\ub77c\uc778 \uc18d\ub3c4\uacc4. GPS\ub85c \ud604\uc7ac \uc18d\ub3c4\ub97c km/h \ub610\ub294 mph\ub85c \ubcf4\uc5ec \uc8fc\uace0 \ucd5c\uace0 \uc18d\ub3c4, \ud3c9\uade0 \uc18d\ub3c4, \uace0\ub3c4, \uc8fc\ud589 \uc2dc\uac04\uae4c\uc9c0 \uce21\uc815\ud569\ub2c8\ub2e4. \uc124\uce58 \ubd88\ud544\uc694, \ud68c\uc6d0\uac00\uc785 \ubd88\ud544\uc694.",
    },
    nl: {
      title: "Snelheidsmeter",
      description: "Gratis online snelheidsmeter op basis van GPS: live snelheid in km/h of mph, plus topsnelheid, gemiddelde snelheid, hoogte en ritduur.",
    },
    sv: {
      title: "Hastighetsm\u00e4tare",
      description: "Gratis online hastighetsm\u00e4tare med GPS: livehastighet i km/h eller mph, plus topphastighet, medelhastighet, h\u00f6jd och restid.",
    },
    it: {
      title: "Tachimetro",
      description: "Tachimetro online gratuito: misura la velocit\u00e0 in tempo reale in km/h o mph con il GPS, pi\u00f9 velocit\u00e0 massima, media, altitudine e durata del viaggio. Senza installare nulla.",
    },
    pt: {
      title: "Veloc\u00edmetro",
      description: "Veloc\u00edmetro online gr\u00e1tis: me\u00e7a sua velocidade ao vivo em km/h ou mph com GPS, al\u00e9m de velocidade m\u00e1xima, m\u00e9dia, altitude e dura\u00e7\u00e3o do trajeto. Sem instalar nada.",
    },
  },
  "onlineqibla": {
    en: {
      title: "Qibla Finder",
      description: "Free online Qibla finder: see the Qibla direction from your location on a live compass, with the bearing in degrees and a clear arrow.",
    },
    de: {
      title: "Qibla-Finder",
      description: "Kostenloser Online-Qibla-Finder: Sehen Sie die Qibla-Richtung von Ihrem Standort auf einem Live-Kompass, mit Azimut in Grad und einem klaren Pfeil.",
    },
    ja: {
      title: "\u30ad\u30d6\u30e9\u30d5\u30a1\u30a4\u30f3\u30c0\u30fc",
      description: "\u7121\u6599\u306e\u30aa\u30f3\u30e9\u30a4\u30f3\u30ad\u30d6\u30e9\u30d5\u30a1\u30a4\u30f3\u30c0\u30fc\u3002\u73fe\u5728\u5730\u304b\u3089\u306e\u30ad\u30d6\u30e9\u65b9\u5411\u3092\u30e9\u30a4\u30d6\u30b3\u30f3\u30d1\u30b9\u3067\u8868\u793a\u3057\u3001\u65b9\u4f4d\u3092\u5ea6\u6570\u3068\u77e2\u5370\u3067\u306f\u3063\u304d\u308a\u793a\u3057\u307e\u3059\u3002",
    },
    fr: {
      title: "Chercheur de Qibla",
      description: "Chercheur de Qibla en ligne gratuit : voyez la direction de la Qibla depuis votre position sur une boussole en direct, avec le rel\u00e8vement en degr\u00e9s et une fl\u00e8che claire.",
    },
    es: {
      title: "Buscador de Qibla",
      description: "Buscador de alquibla online gratis: mira la direcci\u00f3n de la alquibla desde tu ubicaci\u00f3n en una br\u00fajula en vivo, con el rumbo en grados y una flecha clara.",
    },
    ko: {
      title: "\ud0a4\ube14\ub77c \ud30c\uc778\ub354 \u2014 \ubb34\ub8cc \uc628\ub77c\uc778 \ud0a4\ube14\ub77c \ud30c\uc778\ub354",
      description: "\ubb34\ub8cc \uc628\ub77c\uc778 \ud0a4\ube14\ub77c \ud30c\uc778\ub354. \ub0b4 \uc704\uce58\uc5d0\uc11c \ubcf8 \ud0a4\ube14\ub77c \ubc29\ud5a5\uc744 \uc2e4\uc2dc\uac04 \ub098\uce68\ubc18\uc73c\ub85c \ubcf4\uace0, \ubc29\uc704\ub97c \uac01\ub3c4\uc640 \ud654\uc0b4\ud45c\ub85c \ud655\uc778\ud558\uc138\uc694.",
    },
    nl: {
      title: "Qibla-zoeker",
      description: "Gratis online qibla-zoeker: bereken de qibla-richting vanaf jouw locatie en zie de peiling in graden op een live kompas.",
    },
    sv: {
      title: "Qibla-hittare",
      description: "Gratis online qibla-hittare: ber\u00e4kna qibla-riktningen fr\u00e5n din position och se b\u00e4ringen i grader p\u00e5 en livekompass.",
    },
    it: {
      title: "Trovatore di Qibla",
      description: "Cercatore di Qibla online gratuito: vedi la direzione della Qibla dalla tua posizione su una bussola in tempo reale, con il rilevamento in gradi e una freccia chiara.",
    },
    pt: {
      title: "Localizador de Qibla",
      description: "Localizador de Qibla online gr\u00e1tis: veja a dire\u00e7\u00e3o da Qibla da sua localiza\u00e7\u00e3o numa b\u00fassola ao vivo, com o rumo em graus e uma seta clara.",
    },
  },
};

const SITE_NAME = 'Instanten';
const MAX_TITLE = 70;

/**
 * "Title — Instanten" tab tak jodta hai jab tak 70 chars mein fits ho;
 * warna title ko dash-clause boundary par chhota karta hai. Google bhi ~70 ke
 * baad cut karta hai, to chhota title hi behtar hai.
 */
export function fitTitle(title: string): string {
  const withBrand = `${title} — ${SITE_NAME}`;
  if (withBrand.length <= MAX_TITLE) return withBrand;
  if (title.length <= MAX_TITLE) return title;
  const parts = title.split(' — ');
  let out = parts[0];
  for (let i = 1; i < parts.length; i += 1) {
    const next = `${out} — ${parts[i]}`;
    if (next.length > MAX_TITLE) break;
    out = next;
  }
  return out.length > MAX_TITLE ? `${out.slice(0, MAX_TITLE - 1).trimEnd()}…` : out;
}
