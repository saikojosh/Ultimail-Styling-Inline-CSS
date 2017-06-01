# Ultimail-Styling-Inline-CSS
Styling middleware for [Ultimail](https://www.npmjs.org/package/ultimail) that adds support for inlining CSS into the email HTML.

## Included by Default
This module is included by default in [Ultimail](https://www.npmjs.org/package/ultimail) so there's no need to require and configure it manually.

## Quick Start
You need to configure this middleware as "styling" middleware using `mailer.configure()` method:

```javascript
const Ultimail = require(`ultimail`);
const ultimailStylingInlineCss = require(`ultimail-styling-inline-css`);

const mailer = new Ultimail({
	from: `some@email.com`,
	styles: true,
});

mailer.configure(`styling`, ultimailStylingInlineCss());
```
