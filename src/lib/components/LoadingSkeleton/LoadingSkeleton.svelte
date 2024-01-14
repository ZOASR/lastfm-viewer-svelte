<script lang="ts">
	import { lfmvstore } from '../stores.js';

	export let className: string;
	export let fallback: any | undefined;
	let loading: boolean = true;
	lfmvstore.subscribe((val) => {
		if (val) {
			loading = val.loading;
		}
	});
</script>

{#if loading}
	<div class={'skeleton ' + className} />
{:else}
	<slot>
		<div>{fallback}</div>
	</slot>
{/if}
