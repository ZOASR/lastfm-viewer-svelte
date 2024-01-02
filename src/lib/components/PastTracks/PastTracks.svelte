<script lang="ts">
	import styles from './PastTracks.module.css';
	import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton.svelte';
	import type { Colors } from '..';
	import type { TrackInfo } from '../lastfm';
	import { lfmvstore } from '../stores';
	import Icon from '@iconify/svelte';

	const identity: (x: any) => any = (x: any) => x;
	function cloneArray(arr: any[]) {
		return arr.map(identity);
	}

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

{#if track && !(track instanceof Error)}
	{@const pastTracks = cloneArray(track?.pastTracks).splice(1, track?.pastTracks.length)}
	<div
		class={styles.pastTracks}
		style={`color: ${colors?.secondary};background: ${colors?.accent};`}
	>
		<LoadingSkeleton className="h-[300px]" fallback={null}>
			<div
				class={styles.pastTracks__title}
				style={`color: ${colors?.secondary}; background: ${colors?.accent};`}
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
