<script lang="ts">
	import type { Colors } from '@lastfm-viewer/utils/types';
	import { lfmvstore } from '../stores';
	import type { TrackInfo } from '@lastfm-viewer/utils/types';
	import styles from '@lastfm-viewer/ui/TrackProgressBar.module.css';
	import { msToMins, msToSecs } from '@lastfm-viewer/utils/utils';

	let track: TrackInfo | Error;
	let colors: Colors | undefined;
	lfmvstore.subscribe((val) => {
		if (val) {
			track = val.track ? val.track : track;
			colors = val.colors ? val.colors : colors;
		}
	});
</script>

<div class={styles.trackProgress}>
	<span class={styles.nowplaying}> Now Playing</span>
	<div class={styles.icon}>
		<span style:background={colors?.secondary} class={styles.musicbar} />
		<span style:background={colors?.secondary} class={styles.musicbar} />
		<span style:background={colors?.secondary} class={styles.musicbar} />
	</div>
</div>
<div class={styles.bar} style:color={colors?.secondary}>
	{#if !(track instanceof Error)}
		<span>00:00</span>
		<progress class="progress" max={track ? track?.duration / 1000 : 0} />
		<span>
			{#if track && track?.duration > 0}
				{msToMins(track?.duration)}:{msToSecs(track?.duration)}
			{:else}
				--:--
			{/if}
		</span>
	{/if}
</div>
