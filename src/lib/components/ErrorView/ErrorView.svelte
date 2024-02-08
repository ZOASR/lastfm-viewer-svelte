<script lang="ts">
	import styles from '@lastfm-viewer/ui/ErrorView.module.css';
	export let message: string;
	export let mode: 'prod' | 'dev';
</script>

<div>
	{#if mode === 'dev'}
		<h1>Hello developer👋, please consider handling the following error before deployment:</h1>
	{/if}
	<div class={styles.errorView}>
		<span>Error</span>
		{message}
	</div>
</div>
