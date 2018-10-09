import postcss from 'postcss';

export default postcss.plugin('postcss-short-color', opts => {
	const prefix = 'prefix' in Object(opts) ? `-${opts.prefix}-` : '';
	const skip = 'skip' in Object(opts) ? String(opts.skip) : '*';

	const colorPropertyRegExp = new RegExp(`^${prefix}(color)$`);

	return root => {
		// for each color declaration
		root.walkDecls(colorPropertyRegExp, decl => {
			// conditionally unprefix the color property
			decl.prop = decl.prop.replace(colorPropertyRegExp, '$1');

			// space-separated values (color, background-color)
			const [color, backgroundColor] = postcss.list.space(decl.value);

			if (backgroundColor) {
				// conditionally prepend the background-color declaration
				if (backgroundColor !== skip) {
					decl.cloneBefore({ prop: 'background-color', value: backgroundColor });
				}

				// conditionally remove the color declaration
				if (color !== skip) {
					decl.value = color;
				} else {
					decl.remove();
				}
			}
		});
	};
});
