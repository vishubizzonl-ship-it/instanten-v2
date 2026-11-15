import { buildSiloRobots } from '../../utils/siloSitemap';

/**
 * Speedometer silo ka apna robots.txt.
 * Output: /onlinespeedometer/robots.txt
 *
 * Crawler ko is tool ke silo ka raasta aur uska sitemap batata hai.
 */
export const GET = buildSiloRobots('onlinespeedometer');
