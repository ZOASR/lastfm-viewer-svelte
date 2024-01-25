<script lang="ts">
	import { onMount } from 'svelte';

	import ErrorView from './ErrorView/ErrorView.svelte';
	import TrackProgressBar from './TrackProgressBar/TrackProgressBar.svelte';
	import CardFooter from './CardFooter/CardFooter.svelte';
	import PastTracks from './PastTracks/PastTracks.svelte';
	import LoadingSkeleton from './LoadingSkeleton/LoadingSkeleton.svelte';

	import type { Colors, TrackInfo } from '@lastfm-viewer/utils/types';
	import { lfmvstore, useLfmv } from './stores.js';
	import Icon from '@iconify/svelte';
	import disc from './disc.svg';
	import styles from '@lastfm-viewer/ui/LastFMViewer.module.css';
	import '@lastfm-viewer/ui';

	export let user: string;
	export let api_key: string;
	export let updateInterval: number = 0;
	let intervalref: number | undefined;

	let track: TrackInfo | Error;
	let colors: Colors | undefined;
	lfmvstore.subscribe((val) => {
		if (val) {
			track = val.track ? val.track : track;
			colors = val.colors ? val.colors : colors;
		}
	});

	onMount(() => {
		intervalref = useLfmv(user, api_key, updateInterval);
		return () => clearInterval(intervalref);
	});
</script>

<link href="https://lastfm.freetls.fastly.net" rel="preconnect" />
<link href="https://archive.org" rel="preconnect" />
<link href="https://coverartarchive.org" rel="preconnect" />
<link href="https://musicbrainz.org" rel="preconnect" />
<link href="https://ws.audioscrobbler.com" rel="preconnect" />

<div class={styles.lfmvCard} style:background={colors?.primary} data-lfmv="dark">
	{#if track instanceof Error}
		<ErrorView message={track.message} />
	{:else}
		<figure style:box-shadow={`0 0 20px ${colors?.coverShadowColor}`}>
			<LoadingSkeleton fallback={null} className="mx-auto h-[300px] w-[300px]">
				{#if track.imageUrl}
					<img src={track.imageUrl} alt="Album Cover" />
				{:else}
					<img src={disc} alt="Default album cover thumbnail" />
				{/if}
			</LoadingSkeleton>
		</figure>
		<div class={styles.cardBody} style:color={colors?.secondary}>
			<LoadingSkeleton className="mx-auto h-[40px] w-[90%]" fallback={null}>
				{#if track.nowplaying}
					<TrackProgressBar />
				{/if}
			</LoadingSkeleton>
			<h1 class={styles.trackTitle}>
				<LoadingSkeleton className={styles.titleSkeleton} fallback="Track title not available">
					<span class={styles.infoSpan}>{track?.trackName} </span>
				</LoadingSkeleton>
			</h1>
			<div class="flex flex-col gap-2">
				<LoadingSkeleton className={styles.titleSkeleton} fallback="Artist name not available">
					<span class={styles.infoSpan}>
						<Icon icon="fa-regular:user" />
						{track?.artistName}
					</span>
				</LoadingSkeleton>
				<LoadingSkeleton className={styles.titleSkeleton} fallback="Album name not available">
					<span class={styles.infoSpan}>
						<Icon icon="fa6-solid:compact-disc" />
						{#if track.albumTitle}
							{track?.albumTitle}
						{:else}
							Album name not available
						{/if}
					</span>
				</LoadingSkeleton>
			</div>
			<PastTracks />
			<CardFooter {user} {colors} />
		</div>
	{/if}
</div>
