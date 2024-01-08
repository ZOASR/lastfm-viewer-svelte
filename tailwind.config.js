import tailwindConfig from '@lastfm-viewer/tailwind-config';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
	presets: [tailwindConfig]
};
