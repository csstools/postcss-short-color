module.exports = {
	'postcss-short-color': {
		'basic': {
			message: 'supports standard border-radius'
		},
		'basic:w-prefix': {
			message: 'ignores standard size with prefix',
			options: {
				prefix: 'x'
			}
		},
		'prefix': {
			message: 'ignores prefix size'
		},
		'prefix:w-prefix': {
			message: 'supports prefix size with prefix',
			options: {
				prefix: 'x'
			},
			expect: 'basic.expect.css',
			result: 'basic.result.css'
		},
		'skipped': {
			message: 'supports skip tokens'
		}
	}
};
