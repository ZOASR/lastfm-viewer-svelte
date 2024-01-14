<script lang="ts">
	import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton.svelte';

	import type { Colors } from '@lastfm-viewer/utils/types';
	import type { TrackInfo } from '@lastfm-viewer/utils/types';
	import { lfmvstore } from '../stores.js';
	import styles from '@lastfm-viewer/ui/PastTracks.module.css';
	import Icon from '@iconify/svelte';

	let track: TrackInfo | Error;
	let colors: Colors | undefined;
	lfmvstore.subscribe((val) => {
		if (val) {
			track = val.track ? val.track : track;
			colors = val.colors ? val.colors : colors;
		}
	});
</script>

{#if track && !(track instanceof Error)}
	{#if track.pastTracks}
		{@const pastTracks = track?.pastTracks?.filter((_, idx) => idx !== 0)}
		<div
			class={styles.pastTracks}
			style={`color: ${colors?.secondary};background: ${colors?.accent};`}
		>
			<LoadingSkeleton className="h-[300px]" fallback={null}>
				<div
					class={styles.pastTracks__title}
					style:background={`rgb(from ${colors?.primary} r g b / 50%)`}
					style:color={colors?.secondary}
				>
					Past tracks
				</div>
				{#each pastTracks as track}
					<div class={styles.pastTracks__track}>
						<div class="divider m-0.5 h-min" />
						<div class={styles.scrollable}>
							<a
								href={track.url}
								target="_blank"
								class={styles.pastTracks__trackTitle}
								style={`color: ${colors?.secondary}`}
							>
								{track.name}
							</a>
							<span class={styles.scrollable__artist} style={`color: ${colors?.secondary}`}>
								<Icon icon="fa-regular:user" />

								{track.artist['#text']}
							</span>
							<span class={styles.scrollable__date} style={`color: ${colors?.secondary}`}>
								<Icon icon="mingcute:calendar-fill" />
								{track.date['#text']}
							</span>
						</div>
					</div>
				{/each}
			</LoadingSkeleton>
		</div>
	{/if}
{/if}
