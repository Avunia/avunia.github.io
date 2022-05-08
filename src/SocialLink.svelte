<script>
	export let href;
	export let name;
</script>

<a {href} target="_blank">{name}</a>

<style>
	a {
		color: var(--color-hyperlink);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
