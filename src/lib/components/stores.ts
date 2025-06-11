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
	let intervalRef: ReturnType<typeof setInterval>;
	if (updateInterval && updateInterval > 0) {
		intervalRef = setInterval(() => {
			get();
		}, updateInterval);
		return intervalRef;
	}
};
