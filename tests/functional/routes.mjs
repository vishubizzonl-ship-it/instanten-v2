/** Shared page-route lists + helpers for the functional suite. */
export const INSTRUMENTS = {
  onlinecompass: '/onlinecompass/',
  onlinebubblelevel: '/onlinebubblelevel/',
  onlinespeedometer: '/onlinespeedometer/',
  onlineqibla: '/onlineqibla/',
};

export const txt = (el) => (el?.textContent || '').replace(/\s+/g, ' ').trim();
