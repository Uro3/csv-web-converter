<script>
	import { parseSync } from '../lib/parser.js';
	import { convert } from '../lib/texConverter.js';

	const delimiterMap = new Map([
		['csv', ','],
		['tsv', '\t']
	]);

	let input = '';
	let output = '';
	let hline = false;
	let rule = false;
	let delimiter = delimiterMap.get('csv');

	const onClick = () => {
		if (!input) {
			return;
		}
		const parsedItems = parseSync(input, delimiter);
		output = convert(parsedItems, {
			hline: hline,
			rule: rule,
		});
	};
</script>

<div class="container">
	<div class="row-item container column">
		<p><strong>Text</strong></p>
		<textarea id="input-csv-text" bind:value={input} cols="30" rows="10" placeholder="Input your csv text"></textarea>
		<div class="column-item">
			<p class="caption">Text Format</p>
			<label class="radio-item">
				<input type="radio" bind:group={delimiter} value={delimiterMap.get('csv')}>
				csv
			</label>
			<label class="radio-item">
				<input type="radio" bind:group={delimiter} value={delimiterMap.get('tsv')}>
				tsv
			</label>
		</div>
		<div class="column-item">
			<p class="caption">Options</p>
			<label>
				<input type="checkbox" bind:checked={hline}>
				Add hline
			</label>
			<label>
				<input type="checkbox" bind:checked={rule}>
				Add rule line
			</label>
		</div>
		<button class="column-item convert-button" on:click={onClick}>convert</button>
	</div>
	<div class="row-item container column">
		<p><strong>Tex</strong></p>
		<textarea id="output-text" bind:value={output} cols="30" rows="10" readonly></textarea>
	</div>
</div>

<style>
.container {
  display: flex;
	justify-content: center;
}
.column {
	flex-direction: column;
	justify-content: flex-start;
}
.row-item {
	margin: 0 3%;
}
.column-item {
	margin: 5px 0;
}
.radio-item {
	display: inline-block;
	margin: 0 3px
}
.caption {
	margin: 5px 0;
	color: #777;
}
.convert-button {
	width: 100px;
	height: 40px;
	margin: 10px auto;
}
</style>
