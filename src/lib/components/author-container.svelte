<script lang="ts">
	import type { Author } from '$lib/models/author';
	import { onDestroy } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { fly } from 'svelte/transition';

	export let authors: Author[] = [];
	const {
		name,
		intro,
		iam,
		picture: { url }
	} = authors[0];

	let index = 0;
	let interval = setInterval(() => {
		index = (index + 1) % iam.length;
	}, 4000);

	onDestroy(() => clearInterval(interval));

	$: whoami = iam[index];
</script>

<div class="mb-48 flex flex-col select-none">
	<h1 class="font-bold text-center mb-20 mt-10  text-5xl">Welcome to my Portfolio 😆</h1>

	<div class="flex flex-wrap md:flex-nowrap justify-center items-center md:justify-start">
		<img class="mask mask-circle h-48 md:ml-5 mb-10 sm:mb-0" src={url} alt={name} />

		<div class="ml-7">
			<h2 class="text-3xl mb-4 font-bold tracking-wider">
				Hi! I'm
				{#key whoami}
					<span
						class="text-primary inline-block font-mono "
						in:fly={{ y: -10, delay: 500, duration: 500 }}
						out:fly={{ y: 10, duration: 500 }}>{whoami}</span
					>
				{/key}
			</h2>

			<SvelteMarkdown source={intro} />
		</div>
	</div>
</div>
