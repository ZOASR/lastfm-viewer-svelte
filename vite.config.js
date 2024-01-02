import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';

/** @type {import('vite').UserConfig} */

const config = defineConfig({
	server: {
		fs: {
			allow: [
				// search up for workspace root
				searchForWorkspaceRoot(process.cwd()),
				// your custom rules
				'/'
			]
		}
	},
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version)
	},
	plugins: [sveltekit()]
});

export default config;
