<script lang="ts">
	import type { Colors } from '..';
	import { lfmvstore } from '../stores';
	import type { TrackInfo } from '@repo/utils/types';
	import styles from '@repo/ui/TrackProgressBar.module.css';
	import { msToMins, msToSecs } from '@repo/utils/utils';

	let track: TrackInfo | Error;
	let colors: Colors;
	colors = {
		primary: undefined,
		secondary: undefined,
		accent: undefined
	};
	track = {
		artistName: '',
		albumTitle: '',
		trackName: '',
		colors: undefined,
		duration: 0,
		imageUrl: undefined,
		nowplaying: false,
		pastTracks: []
	};
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
		<span class="text-xs">00:00</span>
		<progress class="progress" max={track ? track?.duration / 1000 : 0} />
		<span class="text-xs">
			{#if track && track?.duration > 0}
				{msToMins(track?.duration)}:{msToSecs(track?.duration)}
			{:else}
				--:--
			{/if}
		</span>
	{/if}
</div>
