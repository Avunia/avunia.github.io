<script lang="ts">
	export let href: string;
	export let name: string;
</script>

<a rel="me" {href} target="_blank">{name}</a>

<style>
	a {
		color: var(--color-hyperlink);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
