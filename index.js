'use strict';
/**
 * Metalsmith plugin that removes empty tags from your template files.
 * @return {Function}
 */
function plugin(tags) {
	return function (files, metalsmith, done) {
		Object.keys(files).forEach(file => {
			setImmediate(done);

			tags = tags || [];
			let contents = files[file].contents.toString();

			tags.forEach(tag => {
				const re = new RegExp(`<${tag}.*?>\s?<\/${tag}>\n?`, 'igm'); // eslint-disable-line no-useless-escape
				contents = contents
					.replace(/&nbsp;/igm, '')
					.replace(re, '');
			});

			files[file].contents = contents;
		});
	};
}

module.exports = plugin;
