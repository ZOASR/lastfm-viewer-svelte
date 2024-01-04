<script lang="ts">
	import { unexpectedErrors } from '@lastfm-viewer/utils/utils';
	import styles from '@lastfm-viewer/ui/ErrorView.module.css';

	export let message: string;
</script>

<div>
	{#if unexpectedErrors.includes(message)}
		<h1>Hello developer👋, please consider handling the following error before deployment:</h1>
	{/if}
	<div class={styles.errorView}>
		<span>Error</span>
		{message}
	</div>
</div>
