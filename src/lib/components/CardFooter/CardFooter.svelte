<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Colors } from '@lastfm-viewer/utils/lastfm';

	import styles from '@lastfm-viewer/ui/CardFooter.module.css';

	export let colors: Colors | undefined;
	export let user: string;
</script>

<div style={`color: ${colors?.secondary}`} class={styles.cardFooter}>
	<span class="flex gap-2">
		<a href="https://www.last.fm/" target="_blank" class="h-min self-center">
			<Icon icon="fa-brands:lastfm-square" />
		</a>

		<a href="https://musicbrainz.org/" target="_blank">
			<Icon icon="simple-icons:musicbrainz" />
		</a>
	</span>
	<a class={styles.profile} href={`https://www.last.fm/user/${user}`}>
		<Icon icon="fa-regular:user" />
		{user}
	</a>
</div>
