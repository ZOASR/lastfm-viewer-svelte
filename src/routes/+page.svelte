<script lang="ts">
	import SvelteLastFmViewer from '$lib/components/SvelteLastFMViewer.svelte';
</script>

<div id="app">
	<SvelteLastFmViewer user="ZOASR" api_key={import.meta.env.VITE_API_KEY} updateInterval={20000} />
	<a href="/package_test">go to test</a>
</div>

<style>
	#app {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}
</style>
