# svelte-lastfm-viewer

> [!NOTE]
> This repository is now part of a monorepo if you want to start developing on it go to the original monorepo [here](https://github.com/ZOASR/lastfm-viewer)

<p align="center" >
<a href="https://npm.io/package/svelte-lastfm-viewer"><img src="https://img.shields.io/badge/maintained%20with-npm-cc00ff.svg?style=for-the-badge&logo=npm" ></a>
<a href="https://www.npmjs.com/package/svelte-lastfm-viewer" alt="svelte-lastfm-viewer(npm)">
<img src="https://img.shields.io/npm/dt/svelte-lastfm-viewer?style=for-the-badge&logo=npm&logoColor=red&label=svelte-lastfm-viewer" /></a>
</p>

A sveltejs component to view recent scrobbles for a last.fm user **(This is a sister project to <a href="https://github.com/ZOASR/react-lastfm-viewer">@react-lastfm-viewer</a>)**

<p align="center">
  <img src="https://github.com/ZOASR/svelte-lastfm-viewer/blob/main/images/Preview_1.png" style="border-radius: 10px"/>
  <img src="https://github.com/ZOASR/svelte-lastfm-viewer/blob/main/images/Preview_2.png" style="border-radius: 10px"/>
</p>

## Quick start

Install it:

```bash
npm i svelte-lastfm-viewer
# or
yarn add svelte-lastfm-viewer
# or
pnpm add svelte-lastfm-viewer
```

Use it:

to start using the component you first need to get a last.fm API key from [here](https://www.last.fm/api), once you've done that just import the component and specify the username of the user you want to get scrobbling information from:

> Please note that some users set their profile stats to private, so not every user is applicable, if you're using this component on your personal account just set your "Recent listening" stats to public [here](https://www.last.fm/settings/privacy)

```svelte
<script>
	import SvelteLastFmViewer from 'svelte-lastfm-viewer';
</script>

<SvelteLastFmViewer user="[username]" api_key="[API_KEY]" />
```

if you want to frequently fetch the user's listening info just specify the `updateInterval` prop. (milliseconds) (it takes a number that determines the update interval):

```svelte
<script>
	import SvelteLastFmViewer from "svelte-lastfm-viewer";
</script>

<SvelteLastFmViewer
	user="[username]"
	api_key="[API_KEY]"
	updateInterval={20000} {/* 20 seconds */}
/>
```
