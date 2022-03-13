import adapter from '@sveltejs/adapter-auto';

import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({})],

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		vite: {
			optimizeDeps: {
				include: ['highlight.js/lib/core']
			},
			ssr: {
				noExternal: ['@fortawesome/free-solid-svg-icons']
			}
		}
	}
};

export default config;
