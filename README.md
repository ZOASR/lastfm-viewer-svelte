# @lastfm-viewer/svelte

> [!NOTE]
> This repository is now part of a monorepo if you want to start developing on it go to the original monorepo [here](https://github.com/ZOASR/lastfm-viewer)

<p align="center" >

<a href="https://www.npmjs.com/package/@lastfm-viewer/svelte" alt="@lastfm-viewer/svelte(npm)">
<img src="https://img.shields.io/npm/dt/@lastfm-viewer/svelte?style=for-the-badge&logo=npm&logoColor=red&label=@lastfm-viewer/svelte" /></a>
</p>

A sveltejs component to view recent scrobbles for a last.fm user

<p align="center">
  <img src="https://github.com/ZOASR/lastfm-viewer-svelte/blob/main/images/Preview_1.png" style="border-radius: 10px"/>
  <img src="https://github.com/ZOASR/lastfm-viewer-svelte/blob/main/images/Preview_2.png" style="border-radius: 10px"/>
</p>

## Quick start

Install it:

```bash
npm i @lastfm-viewer/svelte
# or
yarn add @lastfm-viewer/svelte
# or
pnpm add @lastfm-viewer/svelte
```

Use it:

to start using the component you first need to get a last.fm API key from [here](https://www.last.fm/api), once you've done that just import the component and specify the username of the user you want to get scrobbling information from:

> Please note that some users set their profile stats to private, so not every user is applicable, if you're using this component on your personal account just set your "Recent listening" stats to public [here](https://www.last.fm/settings/privacy)

```svelte
<script>
	import SvelteLastFmViewer from '@lastfm-viewer/svelte';
</script>

<SvelteLastFmViewer user="[username]" api_key="[API_KEY]" />
```

if you want to frequently fetch the user's listening info just specify the `updateInterval` prop. (milliseconds) (it takes a number that determines the update interval):

```svelte
<script>
	import SvelteLastFmViewer from "@lastfm-viewer/svelte";
</script>

<SvelteLastFmViewer
	user="[username]"
	api_key="[API_KEY]"
	updateInterval={20000} {/* 20 seconds */}
/>
```

> [!CAUTION]
> setting the `updateInterval` prop to a low number might subject your api key for termination, to avoid this just use a higher more reasonable number.
