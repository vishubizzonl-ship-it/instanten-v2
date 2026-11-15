import { buildSiloRobots } from '../../utils/siloSitemap';

/**
 * Bubble Level silo ka apna robots.txt.
 * Output: /onlinebubblelevel/robots.txt
 *
 * Crawler ko is tool ke silo ka raasta aur uska sitemap batata hai.
 */
export const GET = buildSiloRobots('onlinebubblelevel');
