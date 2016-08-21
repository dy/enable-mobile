const css = require('insert-styles');
const fs = require('fs');

css(fs.readFileSync(require.resolve('normalize.css'), 'utf-8'));

addMeta({
	name: 'viewport',
	content: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0'
});
addMeta({
	'http-equiv': 'x-ua-compatible',
	content: 'ie=edge'
});
addMeta({
	charset: 'utf-8'
});


function addMeta (obj) {
	let meta = document.createElement('meta');
	for (let name in obj) {
		meta.setAttribute(name, obj[name]);
	}
	document.head.insertBefore(meta, document.head.firstChild);
}