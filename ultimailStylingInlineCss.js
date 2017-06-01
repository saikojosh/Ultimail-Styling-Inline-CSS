'use strict';

/*
 * ULTIMAIL STYLING INLINE CSS
 */

const extender = require(`object-extender`);
const inlineCss = require(`inline-css`);

/*
 * Inline the CSS into the HTML.
 */
function parseCss (email, css, config) {

	// Specify the CSS to use.
	config.extraCss = `${css}\n\n${config.extraCss || ``}`;

	return Promise.resolve()
		.then(() => inlineCss(email.get(`htmlBody`), config))
		.then(html => email.htmlBody(html));

}

/*
 * Returns the middleware function.
 */
module.exports = function ultimailStylingInlineCss (_config) {

	const defaultConfig = {
		extraCss: null,
		removeStyleTags: false,
		preserveMediaQueries: true,
		applyWidthAttributes: true,
		applyTableAttributes: true,
		removeHtmlSelectors: false,
	};
	const readOnlyConfig = {
		applyStyleTags: true,
		applyLinkTags: false,
		url: process.cwd(),
	};
	const config = extender.defaults(defaultConfig, _config, readOnlyConfig);

	// The actual middleware to return.
	return (email, css, options, next) => {

		Promise.resolve()
			.then(() => parseCss(email, css, config))
			.then(() => next(null))
			.catch(err => next(new Error(`Error when inlining CSS: "${err}".`)));  // Doesn't return a real error!

	};

};
