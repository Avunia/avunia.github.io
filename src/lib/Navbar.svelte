<script lang="ts">
	import SocialLink from './SocialLink.svelte';

	// TODO: Set the signature correctly
	// Ooorrr, use some data file format for cleanliness
	export let socials: object;
</script>

<footer>
	{#each Object.values(socials) as social}
		<div><SocialLink {...social} /></div>
	{/each}
</footer>

<style>
	footer {
		text-align: center;
		display: flex;
		justify-content: center;
		padding: 24px;
		flex-wrap: wrap;
	}
	@media (orientation: landscape) {
		footer {
			flex-direction: row;
		}
		footer div:not(:first-child)::before {
			content: '▲';
			margin: 0.75em;
		}
	}
	@media (orientation: portrait) {
		footer {
			flex-direction: column;
		}

		footer > div {
			margin: 0.4em;
		}
	}
</style>
