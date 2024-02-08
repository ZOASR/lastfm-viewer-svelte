import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */

const config = defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['./dist/']
		}
	}
});

export default config;
