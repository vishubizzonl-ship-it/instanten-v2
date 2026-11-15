import { buildSiloRobots } from '../../utils/siloSitemap';

/**
 * Qibla silo ka apna robots.txt.
 * Output: /onlineqibla/robots.txt
 *
 * Crawler ko is tool ke silo ka raasta aur uska sitemap batata hai.
 */
export const GET = buildSiloRobots('onlineqibla');
