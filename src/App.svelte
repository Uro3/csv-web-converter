<script>
	import ConvertTex from './components/ConvertTex.svelte';
</script>

<main>
	<h1>CSV to Latax Table</h1>
	<ConvertTex />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
