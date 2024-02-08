<script lang="ts">
	import SvelteLastFmViewer from '../../../dist/components/SvelteLastFMViewer.svelte';
</script>

<div id="app">
	<SvelteLastFmViewer
		user="ZOASR"
		api_key="very_wrong_api_key"
		updateInterval={20000}
		mode="prod"
	/>
</div>

<style>
	#app {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}
</style>
