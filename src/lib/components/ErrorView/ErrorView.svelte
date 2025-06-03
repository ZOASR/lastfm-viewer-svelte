<script lang="ts">
	export let message: string;
	export let mode: 'prod' | 'dev';
</script>

<div>
	{#if mode === 'dev'}
		<h1>Hello developer👋, please consider handling the following error before deployment:</h1>
	{/if}
	<div class={`errorView`}>
		<span>Error</span>
		{message}
	</div>
</div>
