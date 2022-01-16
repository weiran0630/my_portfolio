<script lang="ts">
	import type { Author } from '$lib/models/author';

	export let authors: Author[] = [];
</script>

{#each authors as { name, intro, picture: { url } }}
	<div class="flex flex-wrap md:flex-nowrap mb-24 justify-center items-center md:justify-start">
		<img class="mask mask-circle h-48 mb-10" src={url} alt={name} />
		<div class="ml-7">
			<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
			<p class="text-xl mb-4">{@html intro}</p>
		</div>
	</div>
{/each}
