<script lang="ts">
	import SvelteLastFmViewer from '$lib/components/SvelteLastFMViewer.svelte';
</script>

<SvelteLastFmViewer user="ZOASR" api_key={import.meta.env.VITE_API_KEY} updateInterval={20000} />
