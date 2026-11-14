/**
 * Top-bar pills ke chhote naam.
 *
 * Card/hub par tool ka poora naam chalta hai ("Online Compass"), lekin header ki
 * pills mein chhota naam — Compass, Bubble Level, Speedometer, Qibla — warna
 * mobile par ek line mein fit nahi hote.
 *
 * Logo par full `online<tool>` wordmark hi rehta hai.
 */
import type { LangCode } from '../ui';

export const instrumentNavLabels: Record<LangCode, Record<string, string>> = {
  en: { onlinecompass: 'Compass', onlinebubblelevel: 'Bubble Level', onlinespeedometer: 'Speedometer', onlineqibla: 'Qibla' },
  de: { onlinecompass: 'Kompass', onlinebubblelevel: 'Wasserwaage', onlinespeedometer: 'Tachometer', onlineqibla: 'Qibla' },
  ja: { onlinecompass: 'コンパス', onlinebubblelevel: '水準器', onlinespeedometer: 'スピードメーター', onlineqibla: 'キブラ' },
  fr: { onlinecompass: 'Boussole', onlinebubblelevel: 'Niveau à bulle', onlinespeedometer: 'Tachymètre', onlineqibla: 'Qibla' },
  es: { onlinecompass: 'Brújula', onlinebubblelevel: 'Nivel de burbuja', onlinespeedometer: 'Velocímetro', onlineqibla: 'Alquibla' },
  ko: { onlinecompass: '나침반', onlinebubblelevel: '수준기', onlinespeedometer: '속도계', onlineqibla: '키블라' },
  nl: { onlinecompass: 'Kompas', onlinebubblelevel: 'Waterpas', onlinespeedometer: 'Snelheidsmeter', onlineqibla: 'Qibla' },
  sv: { onlinecompass: 'Kompass', onlinebubblelevel: 'Vattenpass', onlinespeedometer: 'Hastighetsmätare', onlineqibla: 'Qibla' },
  it: { onlinecompass: 'Bussola', onlinebubblelevel: 'Livella a bolla', onlinespeedometer: 'Tachimetro', onlineqibla: 'Qibla' },
  pt: { onlinecompass: 'Bússola', onlinebubblelevel: 'Nível de bolha', onlinespeedometer: 'Velocímetro', onlineqibla: 'Qibla' },
};
