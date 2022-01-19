<script lang="ts">
	import type { Author } from '$lib/models/author';
	import SvelteMarkdown from 'svelte-markdown';

	export let authors: Author[] = [];
	const {
		name,
		intro,
		picture: { url }
	} = authors[0];
</script>

<div class="mb-24 flex flex-col select-none">
	<h1 class="font-bold text-center mb-20 mt-10 text-5xl">Welcome to my Portfolio 😆</h1>

	<div class="flex flex-wrap md:flex-nowrap justify-center items-center md:justify-start">
		<img class="mask mask-circle h-48 md:ml-5" src={url} alt={name} />

		<div class="ml-7">
			<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>

			<SvelteMarkdown source={intro} />
		</div>
	</div>
</div>
