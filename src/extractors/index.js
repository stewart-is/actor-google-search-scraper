const cheerio = require('cheerio');
const desktopExtractors = require('./desktop');
const mobileExtractors = require('./mobile');

/**
 * Extracts paid and organic Google Search Results from provided
 * HTML string or a pre-loaded cheerio instance.
 *
 * @param {cheerio|string} source
 * @param {{ mobile: boolean }} options
 * @return {{
 *     paidResults: Array,
 *     organicResults: Array,
 * }}
 */
exports.extractResults = function extractResults(source, options = {}) {
    const $ = typeof source === 'string' ? cheerio.load(source) : source;
    const extractors = options.mobile ? mobileExtractors : desktopExtractors;
    return {
        paidResults: extractors.extractPaidResults($),
        organicResults: extractors.extractOrganicResults($),
    };
};
