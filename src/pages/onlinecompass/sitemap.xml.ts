import { buildSiloSitemap } from '../../utils/siloSitemap';

/**
 * Compass silo ka apna sitemap.
 * Output: /onlinecompass/sitemap.xml
 *
 * Is tool ke saare indexable pages: tool page, blog (index + articles),
 * about, contact, privacy, terms — EN aur har locale mirror ke saath.
 * Articles file system se discover hote hain, isliye naya post chhoot nahi sakta.
 */
export const GET = buildSiloSitemap('onlinecompass');
