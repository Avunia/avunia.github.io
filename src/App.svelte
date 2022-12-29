<script>
	import Navbar from './Navbar.svelte';
	import SocialLink from './SocialLink.svelte';

	const socials = {
		gh: {
			name: 'GitHub',
			href: 'https://github.com/atakiya'
		},
		linkedin: {
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/alexander-meinhardt-901797136'
		},
		steam: {
			name: 'Steam',
			href: 'https://steamcommunity.com/profiles/76561198075021574'
		},
		tgram: {
			name: 'Telegram',
			href: 'https://t.me/atakiya'
		},
		mastodon: {
			name: 'Mastodon',
			href: 'https://furry.engineer/@atakiya'
		}
	}
</script>

<main>
	<p>Hello! My name is Alexander, better known under the alias of ｢Avunia Takiya｣.</p>
	<p>I am a jack-of-many-trades: developer, designer, troubleshooter, avian enthusiast and more.</p>
	<p>My favorite things are <span class="emphasize">birds, hardware, software, <span title="Space, or, the universe">the skies beyond our planet</span></span> and <span class="emphasize">mangos</span>.</p>
	<br/>
	<p>You can primarily reach me for personal reasons via <a href="mailto:avunia@takiya.eu">email</a> and <SocialLink {...socials.tgram}/>, or one of the options below.</p>
	<p>For business, please get in touch via <a href="mailto:alexander@takiya.eu">this email</a>, <SocialLink {...socials.linkedin}/>, or <SocialLink {...socials.gh}/>.</p>
</main>
<hr/>
<Navbar {socials}/>

<style>
	@media (prefers-color-scheme: dark) {
		:root {
			--theme-background: #22213b;
			--theme-text-primary: rgba(255, 248, 231, .75);
		}
	}
	@media (prefers-color-scheme: light) {
		:root {
			--theme-background: rgb(255, 248, 231);
			--theme-text-primary: rgba(0, 0, 0, .75);
		}
	}
	:root {
		--color-text-shadow: rgba(0,0,0,.2);
		--triangle-size: .42em;
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
	p:first-of-type, p:last-of-type {
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
	.emphasize {
		text-transform: capitalize;
	}
</style>
