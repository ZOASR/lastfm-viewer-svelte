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
				'/package'
			]
		}
	},
	plugins: [sveltekit()]
});

export default config;
