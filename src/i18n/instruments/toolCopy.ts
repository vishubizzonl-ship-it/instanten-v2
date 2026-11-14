/**
 * Hub cards aur tool pages ka localized naam + description, chaar sensor tools
 * ke liye. Naam/description compassinstant silo se aaye hain (8 languages),
 * nl aur sv wahan nahi the — wo is file mein likhe gaye hain.
 *
 * localizeTool() ise toolCopy ke baad dekhta hai, taaki purane 12 tools ka
 * data jahan tha wahi rahe.
 */
import type { LangCode } from "../ui";

export interface InstrumentToolCopy {
  name: string;
  description: string;
}

export const instrumentToolCopy: Record<LangCode, Record<string, InstrumentToolCopy>> = {
  en: {
    "onlinecompass": {
      name: "Online Compass",
      description: "Real-time magnetometer direction with calibration, offline support, and location awareness.",
    },
    "onlinebubblelevel": {
      name: "Bubble Level",
      description: "Free online bubble level to check any surface. Bubble level check online, spirit level online, level checker tool and water level tool online \u2014 no install.",
    },
    "onlinespeedometer": {
      name: "Speedometer",
      description: "Free online speedometer: measure your live speed in km/h or mph with GPS, plus max speed, average speed, altitude and trip time. No install, no sign-up.",
    },
    "onlineqibla": {
      name: "Qibla Finder",
      description: "Free online Qibla finder: see the Qibla direction from your location on a live compass, with the bearing in degrees and a clear arrow.",
    },
  },
  de: {
    "onlinecompass": {
      name: "Online-Kompass",
      description: "Echtzeit-Magnetometer-Richtung mit Kalibrierung, Offline-Unterst\u00fctzung und Positionsbewusstsein.",
    },
    "onlinebubblelevel": {
      name: "Wasserwaage",
      description: "Kostenlose Online-Wasserwaage f\u00fcr jede Fl\u00e4che. Niveau in Grad messen, Wasserwaage online und Niveau-Check auf dem Handy \u2014 ohne Installation.",
    },
    "onlinespeedometer": {
      name: "Tachometer",
      description: "Kostenloses Online-Tachometer: miss deine Live-Geschwindigkeit in km/h oder mph per GPS, dazu H\u00f6chstgeschwindigkeit, Durchschnitt, H\u00f6he und Fahrtzeit. Ohne Installation.",
    },
    "onlineqibla": {
      name: "Qibla-Finder",
      description: "Kostenloser Online-Qibla-Finder: Sehen Sie die Qibla-Richtung von Ihrem Standort auf einem Live-Kompass, mit Azimut in Grad und einem klaren Pfeil.",
    },
  },
  ja: {
    "onlinecompass": {
      name: "\u30aa\u30f3\u30e9\u30a4\u30f3\u30b3\u30f3\u30d1\u30b9",
      description: "\u30ad\u30e3\u30ea\u30d6\u30ec\u30fc\u30b7\u30e7\u30f3\u3001\u30aa\u30d5\u30e9\u30a4\u30f3\u30b5\u30dd\u30fc\u30c8\u3001\u4f4d\u7f6e\u8a8d\u8b58\u3092\u5099\u3048\u305f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u65b9\u5411\u3002",
    },
    "onlinebubblelevel": {
      name: "\u6c34\u6e96\u5668",
      description: "\u30aa\u30f3\u30e9\u30a4\u30f3\u6c34\u6e96\u5668\u306a\u3089\u3069\u3093\u306a\u9762\u3082\u3059\u3050\u306b\u6c34\u5e73\u30c1\u30a7\u30c3\u30af\u3002\u50be\u304d\u3092\u5ea6\u3067\u8868\u793a\u3059\u308b\u7121\u6599\u306e\u6c34\u5e73\u5668\u30fb\u6c34\u6e96\u5668\u30c4\u30fc\u30eb\u3067\u3001\u30b9\u30de\u30db\u3060\u3051\u3067\u4f7f\u3048\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u4e0d\u8981\u3002",
    },
    "onlinespeedometer": {
      name: "\u30b9\u30d4\u30fc\u30c9\u30e1\u30fc\u30bf\u30fc",
      description: "\u7121\u6599\u306e\u30aa\u30f3\u30e9\u30a4\u30f3\u30b9\u30d4\u30fc\u30c9\u30e1\u30fc\u30bf\u30fc\u3002GPS \u3067\u73fe\u5728\u306e\u901f\u5ea6\u3092 km/h \u307e\u305f\u306f mph \u3067\u8868\u793a\u3057\u3001\u6700\u9ad8\u901f\u5ea6\u30fb\u5e73\u5747\u901f\u5ea6\u30fb\u9ad8\u5ea6\u30fb\u8d70\u884c\u6642\u9593\u3082\u8a08\u6e2c\u3067\u304d\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u4e0d\u8981\u3001\u767b\u9332\u4e0d\u8981\u3002",
    },
    "onlineqibla": {
      name: "\u30ad\u30d6\u30e9\u30d5\u30a1\u30a4\u30f3\u30c0\u30fc",
      description: "\u7121\u6599\u306e\u30aa\u30f3\u30e9\u30a4\u30f3\u30ad\u30d6\u30e9\u30d5\u30a1\u30a4\u30f3\u30c0\u30fc\u3002\u73fe\u5728\u5730\u304b\u3089\u306e\u30ad\u30d6\u30e9\u65b9\u5411\u3092\u30e9\u30a4\u30d6\u30b3\u30f3\u30d1\u30b9\u3067\u8868\u793a\u3057\u3001\u65b9\u4f4d\u3092\u5ea6\u6570\u3068\u77e2\u5370\u3067\u306f\u3063\u304d\u308a\u793a\u3057\u307e\u3059\u3002",
    },
  },
  fr: {
    "onlinecompass": {
      name: "Boussole en Ligne",
      description: "Direction du magn\u00e9tom\u00e8tre en temps r\u00e9el avec calibration, support hors ligne et connaissance de la position.",
    },
    "onlinebubblelevel": {
      name: "Niveau \u00e0 Bulle",
      description: "Niveau \u00e0 bulle en ligne gratuit pour contr\u00f4ler toutes les surfaces. Contr\u00f4le de niveau en degr\u00e9s, niveau d\u2019eau en ligne et outil de niveau sur t\u00e9l\u00e9phone \u2014 sans installation.",
    },
    "onlinespeedometer": {
      name: "Tachym\u00e8tre",
      description: "Tachym\u00e8tre en ligne gratuit : mesurez votre vitesse en direct en km/h ou mph gr\u00e2ce au GPS, avec vitesse maximale, moyenne, altitude et dur\u00e9e du trajet. Sans installation.",
    },
    "onlineqibla": {
      name: "Chercheur de Qibla",
      description: "Chercheur de Qibla en ligne gratuit : voyez la direction de la Qibla depuis votre position sur une boussole en direct, avec le rel\u00e8vement en degr\u00e9s et une fl\u00e8che claire.",
    },
  },
  es: {
    "onlinecompass": {
      name: "Br\u00fajula en L\u00ednea",
      description: "Direcci\u00f3n de magnet\u00f3metro en tiempo real con calibraci\u00f3n, soporte sin conexi\u00f3n y conocimiento de ubicaci\u00f3n.",
    },
    "onlinebubblelevel": {
      name: "Nivel de Burbuja",
      description: "Nivel de burbuja online gratis para comprobar cualquier superficie. Comprueba el nivel en grados, nivel de agua online y herramienta de nivel en el m\u00f3vil \u2014 sin instalar nada.",
    },
    "onlinespeedometer": {
      name: "Veloc\u00edmetro",
      description: "Veloc\u00edmetro online gratis: mide tu velocidad en vivo en km/h o mph con GPS, adem\u00e1s de velocidad m\u00e1xima, media, altitud y duraci\u00f3n del viaje. Sin instalar nada.",
    },
    "onlineqibla": {
      name: "Buscador de Qibla",
      description: "Buscador de alquibla online gratis: mira la direcci\u00f3n de la alquibla desde tu ubicaci\u00f3n en una br\u00fajula en vivo, con el rumbo en grados y una flecha clara.",
    },
  },
  ko: {
    "onlinecompass": {
      name: "\uc628\ub77c\uc778 \ub098\uce68\ubc18",
      description: "\ubcf4\uc815, \uc624\ud504\ub77c\uc778 \uc9c0\uc6d0, \uc704\uce58 \uc778\uc2dd\uc744 \uac16\ucd98 \uc2e4\uc2dc\uac04 \uc790\uae30 \uc13c\uc11c \ubc29\ud5a5.",
    },
    "onlinebubblelevel": {
      name: "\uc218\uc900\uae30",
      description: "\uc628\ub77c\uc778 \uc218\ud3c9\uacc4\ub85c \uc5b4\ub5a4 \ud45c\uba74\uc774\ub4e0 \uc218\ud3c9 \ud655\uc778\ud558\uc138\uc694. \uae30\uc6b8\uae30\ub97c \ub3c4 \ub2e8\uc704\ub85c \ubcf4\uc5ec \uc8fc\ub294 \ubb34\ub8cc \uc218\ud3c9\uae30\u00b7\uc218\uc900\uae30 \ub3c4\uad6c\ub85c, \ud734\ub300\ud3f0\ub9cc \uc788\uc73c\uba74 \ub429\ub2c8\ub2e4. \uc124\uce58 \ubd88\ud544\uc694.",
    },
    "onlinespeedometer": {
      name: "\uc18d\ub3c4\uacc4",
      description: "\ubb34\ub8cc \uc628\ub77c\uc778 \uc18d\ub3c4\uacc4. GPS\ub85c \ud604\uc7ac \uc18d\ub3c4\ub97c km/h \ub610\ub294 mph\ub85c \ubcf4\uc5ec \uc8fc\uace0 \ucd5c\uace0 \uc18d\ub3c4, \ud3c9\uade0 \uc18d\ub3c4, \uace0\ub3c4, \uc8fc\ud589 \uc2dc\uac04\uae4c\uc9c0 \uce21\uc815\ud569\ub2c8\ub2e4. \uc124\uce58 \ubd88\ud544\uc694, \ud68c\uc6d0\uac00\uc785 \ubd88\ud544\uc694.",
    },
    "onlineqibla": {
      name: "\ud0a4\ube14\ub77c \ud30c\uc778\ub354",
      description: "\ubb34\ub8cc \uc628\ub77c\uc778 \ud0a4\ube14\ub77c \ud30c\uc778\ub354. \ub0b4 \uc704\uce58\uc5d0\uc11c \ubcf8 \ud0a4\ube14\ub77c \ubc29\ud5a5\uc744 \uc2e4\uc2dc\uac04 \ub098\uce68\ubc18\uc73c\ub85c \ubcf4\uace0, \ubc29\uc704\ub97c \uac01\ub3c4\uc640 \ud654\uc0b4\ud45c\ub85c \ud655\uc778\ud558\uc138\uc694.",
    },
  },
  nl: {
    "onlinecompass": {
      name: "Online kompas",
      description: "Gratis online kompas: lees de richting van je magneetsensor in graden, met het bijbehorende windstreck (N, NO, O, ZO, Z, ZW, W, NW). Geen installatie, geen account.",
    },
    "onlinebubblelevel": {
      name: "Waterpas",
      description: "Gratis online waterpas en libel: leg je telefoon op de te controleren ondergrond en lees de helling in graden af. Kalibreren, resetten en volledig scherm \u2014 geen installatie nodig.",
    },
    "onlinespeedometer": {
      name: "Snelheidsmeter",
      description: "Gratis online snelheidsmeter op basis van GPS: live snelheid in km/h of mph, plus topsnelheid, gemiddelde snelheid, hoogte en ritduur.",
    },
    "onlineqibla": {
      name: "Qibla-zoeker",
      description: "Gratis online qibla-zoeker: bereken de qibla-richting vanaf jouw locatie en zie de peiling in graden op een live kompas.",
    },
  },
  sv: {
    "onlinecompass": {
      name: "Online kompass",
      description: "Gratis online kompass: l\u00e4s av riktningen fr\u00e5n telefonens magnetometer i grader, med v\u00e4derstreck (N, NO, O, SO, S, SV, V, NV). Ingen installation, inget konto.",
    },
    "onlinebubblelevel": {
      name: "Vattenpass",
      description: "Gratis online vattenpass och libell: l\u00e4gg telefonen p\u00e5 ytan du vill kontrollera och l\u00e4s av lutningen i grader. Kalibrera, \u00e5terst\u00e4ll och k\u00f6r i fullsk\u00e4rm \u2014 ingen installation.",
    },
    "onlinespeedometer": {
      name: "Hastighetsm\u00e4tare",
      description: "Gratis online hastighetsm\u00e4tare med GPS: livehastighet i km/h eller mph, plus topphastighet, medelhastighet, h\u00f6jd och restid.",
    },
    "onlineqibla": {
      name: "Qibla-hittare",
      description: "Gratis online qibla-hittare: ber\u00e4kna qibla-riktningen fr\u00e5n din position och se b\u00e4ringen i grader p\u00e5 en livekompass.",
    },
  },
  it: {
    "onlinecompass": {
      name: "Bussola Online",
      description: "Direzione del magnetometro in tempo reale con calibrazione, supporto offline e consapevolezza della posizione.",
    },
    "onlinebubblelevel": {
      name: "Livella a Bolla",
      description: "Livella a bolla online gratis per controllare ogni superficie. Controllo del livello in gradi, livella ad acqua online e strumento livello sul telefono \u2014 senza installazione.",
    },
    "onlinespeedometer": {
      name: "Tachimetro",
      description: "Tachimetro online gratuito: misura la velocit\u00e0 in tempo reale in km/h o mph con il GPS, pi\u00f9 velocit\u00e0 massima, media, altitudine e durata del viaggio. Senza installare nulla.",
    },
    "onlineqibla": {
      name: "Trovatore di Qibla",
      description: "Cercatore di Qibla online gratuito: vedi la direzione della Qibla dalla tua posizione su una bussola in tempo reale, con il rilevamento in gradi e una freccia chiara.",
    },
  },
  pt: {
    "onlinecompass": {
      name: "B\u00fassola Online",
      description: "Dire\u00e7\u00e3o do magnet\u00f4metro em tempo real com calibra\u00e7\u00e3o, suporte offline e conhecimento de localiza\u00e7\u00e3o.",
    },
    "onlinebubblelevel": {
      name: "N\u00edvel de Bolha",
      description: "N\u00edvel de bolha online gr\u00e1tis para verificar qualquer superf\u00edcie. Verifica\u00e7\u00e3o de n\u00edvel em graus, n\u00edvel de \u00e1gua online e ferramenta de n\u00edvel no celular \u2014 sem instalar.",
    },
    "onlinespeedometer": {
      name: "Veloc\u00edmetro",
      description: "Veloc\u00edmetro online gr\u00e1tis: me\u00e7a sua velocidade ao vivo em km/h ou mph com GPS, al\u00e9m de velocidade m\u00e1xima, m\u00e9dia, altitude e dura\u00e7\u00e3o do trajeto. Sem instalar nada.",
    },
    "onlineqibla": {
      name: "Localizador de Qibla",
      description: "Localizador de Qibla online gr\u00e1tis: veja a dire\u00e7\u00e3o da Qibla da sua localiza\u00e7\u00e3o numa b\u00fassola ao vivo, com o rumo em graus e uma seta clara.",
    },
  },
};
