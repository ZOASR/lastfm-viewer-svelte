import { writable } from "svelte/store";
import type { lfmvcontext_t } from ".";
import { getLatestTrack, type TrackInfo } from "./lastfm";

export const lfmvstore = writable<lfmvcontext_t>();

let track: TrackInfo | Error;

export const useLfmv = (
	user: string,
	api_key: string,
	updateInterval?: number
) => {
	const get = async () => {
		track = await getLatestTrack(user, api_key);
		if (track instanceof Error) {
			lfmvstore.set({
				track: track,
				colors: undefined,
				loading: false,
			});
		} else {
			lfmvstore.set({
				track: track,
				colors: track.colors,
				loading: false,
			});
		}
	};
	get();
	let intervalRef: number;
	if (updateInterval) {
		intervalRef = setInterval(() => {
			get();
		}, updateInterval);
		return intervalRef;
	}
};