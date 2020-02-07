<script>
	import { parseSync } from './parser.js'

	let input = '';
	let output = '';
	const onClick = () => {
		output = parseSync(input);
	};
</script>

<div>
	<textarea id="input-csv-text" bind:value={input} cols="30" rows="10"></textarea>
	<button on:click={onClick}>convert</button>
	<textarea id="output-text" bind:value={output} cols="30" rows="10" readonly></textarea>
</div>
