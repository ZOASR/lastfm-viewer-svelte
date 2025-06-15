<script lang="ts">
	import { onMount } from 'svelte';
	import Iconify from '@iconify/svelte';
	import type { SvelteComponentTyped } from 'svelte';

	// Type assertion for the Icon component with all documented properties
	const Icon = Iconify as unknown as typeof SvelteComponentTyped<{
		// Required
		icon: string;

		// Optional properties from documentation
		class?: string;
		inline?: boolean;
		width?: string | number;
		height?: string | number;
		hFlip?: boolean;
		vFlip?: boolean;
		flip?: string;
		rotate?: number | string;
		color?: string;
		onLoad?: () => void;

		// Allow any other additional props
		[key: string]: any;
	}>;

	import ErrorView from './ErrorView/ErrorView.svelte';
	import TrackProgressBar from './TrackProgressBar/TrackProgressBar.svelte';
	import CardFooter from './CardFooter/CardFooter.svelte';
	import PastTracks from './PastTracks/PastTracks.svelte';
	import LoadingSkeleton from './LoadingSkeleton/LoadingSkeleton.svelte';

	import type { Colors, TrackInfo } from '@lastfm-viewer/utils/types';
	import { lfmvstore, useLfmv } from './stores.js';

	export let user: string;
	export let updateInterval: number = 0;
	export let mode: 'dev' | 'prod' = 'dev';
	let intervalref: ReturnType<typeof setInterval> | undefined;

	let track: TrackInfo | Error;
	let colors: Colors | undefined;
	lfmvstore.subscribe((val) => {
		if (val) {
			track = val.track ? val.track : track;
			colors = val.colors ? val.colors : colors;
		}
	});

	onMount(() => {
		intervalref = useLfmv(user, updateInterval);
		return () => clearInterval(intervalref);
	});
</script>

<link href="https://lastfm.freetls.fastly.net" rel="preconnect" />
<link href="https://coverartarchive.org" rel="preconnect" />
<link href="https://lastfm-viewer-api.cloudflare-untying955.workers.dev" rel="preconnect" />

<div
	class={`lfmvCard`}
	style:background={colors?.primary}
	data-lfmv="dark"
	style:color={colors?.secondary}
>
	<div data-lfmv>
		{#if track instanceof Error}
			<ErrorView {mode} error={track} />
		{:else}
			<div>
				<figure style:filter={`drop-shadow(0 0 20px ${colors?.coverShadowColor})`}>
					<LoadingSkeleton fallback={null} className="mx-auto aspect-square w-full">
						{#if track.imageUrl}
							<img src={track.imageUrl} alt="Album Cover" />
						{:else}
							<div
								class:!animate-spin-slow={track.nowplaying}
								class="sm:h-[300px] h-[100px] [color:var(--default-secondary)]"
							>
								<Icon icon="bi:disc-fill" class="h-full w-full" />
							</div>
							<!-- <img src={disc} alt="Default album cover thumbnail" /> -->
						{/if}
					</LoadingSkeleton>
				</figure>
				<LoadingSkeleton className="mx-auto h-[40px] w-[90%]" fallback={null}>
					{#if track.nowplaying}
						<TrackProgressBar />
					{/if}
				</LoadingSkeleton>
				<h1 class={`trackTitle`}>
					<LoadingSkeleton className={`titleSkeleton`} fallback="Track title not available">
						<span class={`infoSpan`}>{track?.trackName} </span>
					</LoadingSkeleton>
				</h1>
				<div class="flex flex-col gap-2">
					<LoadingSkeleton className={`titleSkeleton`} fallback="Artist name not available">
						<span class={`infoSpan`}>
							<Icon icon="fa-regular:user" />
							{track?.artistName}
						</span>
					</LoadingSkeleton>
					<LoadingSkeleton className={`titleSkeleton`} fallback="Album name not available">
						<span class={`infoSpan`}>
							<Icon icon="fa6-solid:compact-disc" />
							{#if track.albumTitle}
								{track?.albumTitle}
							{:else}
								Album name not available
							{/if}
						</span>
					</LoadingSkeleton>
				</div>
			</div>
			<div class={`cardBody`}>
				<PastTracks />
				<CardFooter {user} {colors} />
			</div>
		{/if}
	</div>
</div>
