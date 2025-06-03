<script lang="ts">
	import type { Colors } from '@lastfm-viewer/utils/types';
	import { lfmvstore } from '../stores';
	import type { TrackInfo } from '@lastfm-viewer/utils/types';
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

<div class={`trackProgress`}>
	<span class={`nowplaying`}> Now Playing</span>
	<div class={`icon`}>
		<span style:background={colors?.secondary} class={`musicbar`} />
		<span style:background={colors?.secondary} class={`musicbar`} />
		<span style:background={colors?.secondary} class={`musicbar`} />
	</div>
</div>
<div class={`bar`} style:color={colors?.secondary}>
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
