<script>
	import SocialLink from './SocialLink.svelte';
	export let socials;
</script>

<footer>
	{#each Object.values(socials) as social}
		<div><SocialLink {...social}/></div>
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
			margin: .75em;
		}
	}
	@media (orientation: portrait) {
		footer {
			flex-direction: column;
		}

		footer > div {
			margin: .4em;
		}
	}
</style>
