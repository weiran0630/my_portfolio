<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import style from 'svelte-highlight/src/styles/atom-one-dark';

	export let text: string;
</script>

<svelte:head>
	{@html style}
</svelte:head>

<HighlightSvelte class="mockup-code !pl-3 pt-7" code={text} />
