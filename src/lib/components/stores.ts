import { writable } from 'svelte/store';
import { getLatestTrack } from '@lastfm-viewer/utils/lastfm';
import type { Colors, TrackInfo } from '@lastfm-viewer/utils/types';

export const lfmvstore = writable<{
	track: TrackInfo | Error;
	colors: Colors | undefined;
	loading: boolean;
}>();

let track: TrackInfo | Error;

export const useLfmv = (user: string, updateInterval?: number) => {
	const get = async () => {
		track = await getLatestTrack(user);
		if (track instanceof Error) {
			lfmvstore.set({
				track: track,
				colors: undefined,
				loading: false
			});
		} else {
			lfmvstore.set({
				track: track,
				colors: track.colors,
				loading: false
			});
		}
	};
	get();
	
	// Validate updateInterval to be at least 2 seconds
	const MIN_UPDATE_INTERVAL = 2000; // 2 seconds in milliseconds
	const safeUpdateInterval = updateInterval 
		? Math.max(updateInterval, MIN_UPDATE_INTERVAL)
		: undefined;

	if (updateInterval && updateInterval < MIN_UPDATE_INTERVAL) {
		console.warn(
			`updateInterval is too low. Using minimum allowed value of ${MIN_UPDATE_INTERVAL}ms to prevent rate limiting.`
		);
	}

	let intervalRef: ReturnType<typeof setInterval>;
	if (safeUpdateInterval) {
		intervalRef = setInterval(() => {
			get();
		}, safeUpdateInterval);
		return intervalRef;
	}
};
