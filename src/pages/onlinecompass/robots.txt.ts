import { buildSiloRobots } from '../../utils/siloSitemap';

/**
 * Compass silo ka apna robots.txt.
 * Output: /onlinecompass/robots.txt
 *
 * Crawler ko is tool ke silo ka raasta aur uska sitemap batata hai.
 */
export const GET = buildSiloRobots('onlinecompass');
