import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load = (() => {
	return {
		socials: {
			gh: {
				name: 'GitHub',
				href: 'https://github.com/atakiya'
			},
			tgram: {
				name: 'Telegram',
				href: 'https://t.me/atakiya'
			},
			mastodon: {
				name: 'Mastodon',
				href: 'https://furry.engineer/@atakiya'
			},
			discord: {
				name: 'Discord',
				href: 'https://discord.com/users/107584883857035264'
			},
			steam: {
				name: 'Steam',
				href: 'https://steamcommunity.com/profiles/76561198075021574'
			}
		}
	}
}) satisfies LayoutLoad
