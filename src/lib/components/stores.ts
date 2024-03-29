import { writable } from 'svelte/store';
import { getLatestTrack } from '@lastfm-viewer/utils/lastfm';
import type { Colors, TrackInfo } from '@lastfm-viewer/utils/types';

export const lfmvstore = writable<{
	track: TrackInfo | Error;
	colors: Colors | undefined;
	loading: boolean;
}>();

let track: TrackInfo | Error;

export const useLfmv = (user: string, api_key: string, updateInterval?: number) => {
	const get = async () => {
		track = await getLatestTrack(user, api_key);
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
	let intervalRef: number;
	if (updateInterval && updateInterval > 0) {
		intervalRef = setInterval(() => {
			get();
		}, updateInterval);
		return intervalRef;
	}
};
