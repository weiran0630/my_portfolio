<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import style from 'svelte-highlight/src/styles/material-palenight';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCopy } from '@fortawesome/free-solid-svg-icons';

	export let text: string;
	export let copied: boolean = false;

	function copyToClipboard() {
		navigator.clipboard.writeText(text);
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 1000);
	}
</script>

<svelte:head>
	{@html style}
</svelte:head>

<div class="mockup-code !select-text relative">
	<span
		on:click={copyToClipboard}
		data-tip={copied ? `Copied!` : `Copy to clipboard`}
		class="opacity-25 hover:opacity-100 absolute right-[24px] hover:cursor-pointer transition tooltip tooltip-left"
	>
		<Fa icon={faCopy} />
	</span>
	<HighlightSvelte class="m-0 py-0 max-h-fit" code={text} />
</div>
