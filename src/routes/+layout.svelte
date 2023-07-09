<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	{#each Object.values(data.socials) as { href }}
		<link rel="me" {href} />
	{/each}
</svelte:head>

<slot />
