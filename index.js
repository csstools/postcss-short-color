// tooling
const postcss = require('postcss');

// plugin
module.exports = postcss.plugin('postcss-short-color', ({
	prefix = '',
	skip   = '*'
}) => {
	// dashed prefix
	const dashedPrefix = prefix ? '-' + prefix + '-' : '';

	// property pattern
	const propertyMatch = new RegExp(`^${ dashedPrefix }(color)$`);

	return (css) => {
		// walk each matching declaration
		css.walkDecls(propertyMatch, (decl) => {
			// unprefixed property
			const property = decl.prop.match(propertyMatch)[1];

			// if a prefix is in use
			if (prefix) {
				// remove it from the property
				decl.prop = property;
			}

			// space-separated values (color, background-color)
			const values = postcss.list.space(decl.value);

			// if there are multiple values
			if (values.length > 1) {
				// if the background-color value is not a skip token
				if (values[1] !== skip) {
					// create a new declaration for the background-color
					decl.cloneAfter({
						prop: 'background-color',
						value: values.slice(1).join(' ')
					});
				}

				// if the color value is a skip token
				if (values[0] === skip) {
					// remove the original color declaration
					decl.remove();
				} else {
					// otherwise, update the color value
					decl.value = values[0];
				}
			}
		});
	};
});
