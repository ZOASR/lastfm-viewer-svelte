<script lang="ts">
	import styles from './ErrorView.module.css';

	const unexpectedErrors = [
		'NetworkError when attempting to fetch resource.',
		'Login: User required to be logged in',
		'Failed to fetch'
	];

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
