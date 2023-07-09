<script lang="ts">
	import type { PageData } from './$types';
	import Navbar from '$lib/Navbar.svelte';
	import SocialLink from '$lib/SocialLink.svelte';

	export let data: PageData;
</script>

<main>
	<p>Hello! My name is Alexander, better known under the alias of ｢Avunia Takiya｣.</p>
	<p>
		I'm a self-taught DevOps Engineer, aspiring Network technician and passionate hobby
		fullstack developer and UI designer.
	</p>
	<p>
		There are a couple things I totally fawn about, such as Avians, Electronics, Hardware, Space
		and the Universe(s?), and Mangos.
	</p>
	<br />
	<p>
		You can primarily reach me for personal reasons via <a href="mailto:avunia@takiya.eu"
			>email</a
		>
		and <SocialLink {...data.socials.tgram} />, or one of the options below.
	</p>
	<p>
		For business opportunities, please get in touch via <a href="mailto:alexander@takiya.eu"
			>this email</a
		>.
	</p>
</main>
<hr />
<Navbar {...data} />

<style>
	@media (prefers-color-scheme: dark) {
		:root {
			--theme-background: #22213b;
			--theme-text-primary: rgba(255, 248, 231, 0.75);
		}
	}
	@media (prefers-color-scheme: light) {
		:root {
			--theme-background: rgb(255, 248, 231);
			--theme-text-primary: rgba(0, 0, 0, 0.75);
		}
	}
	:root {
		--color-text-shadow: rgba(0, 0, 0, 0.2);
		--triangle-size: 0.42em;
		--triangle-spacing: 16px;
		--color-hyperlink: hsl(261, 90%, 76%);
	}
	:global(body) {
		display: grid;
		background-color: var(--theme-background);
		color: var(--theme-text-primary);
		font-size: 150%;
		padding: 24px;
		text-shadow: 0px 0px 1px var(--color-text-shadow);
		justify-content: center;
		align-items: center;
		align-content: center;
	}
	/* TODO: Replace this with align-content: safe center; once more devices support it */
	@media (orientation: portrait) {
		:global(body) {
			align-content: flex-start;
		}
	}
	p:first-of-type,
	p:last-of-type {
		margin: 0;
	}
	main {
		text-align: center;
		padding: 24px;
	}
	a {
		color: var(--color-hyperlink);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	hr {
		width: 25%;
		border: 1px solid var(--color-hyperlink);
	}
</style>
