<script lang="ts">
	import SvelteLastFmViewer from '$lib/components/SvelteLastFMViewer.svelte';
</script>

<div id="app">
	<SvelteLastFmViewer user="ZOASR" updateInterval={20000} mode="prod" />
</div>

<style>
	#app {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}
</style>
