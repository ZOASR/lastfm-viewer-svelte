<script lang="ts">
	import SvelteLastFmViewer from '$lib/components/SvelteLastFMViewer.svelte';
	import '@lastfm-viewer/ui/styles/LastFMViewer.css';
	import '@lastfm-viewer/ui/styles';
	import '@lastfm-viewer/ui/styles/PastTracks.css';
	import '@lastfm-viewer/ui/styles/TrackProgressBar.css';
	import '@lastfm-viewer/ui/styles/CardFooter.css';
	import '@lastfm-viewer/ui/styles/ErrorView.css';
</script>

<div id="app">
	<SvelteLastFmViewer user="ZOASR" api_key={import.meta.env.VITE_API_KEY} updateInterval={20000} />
	<a href="/package_test">go to package_test</a>
</div>

<style>
	#app {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}
</style>
