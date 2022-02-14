<script lang="ts">
	import Tags from './tags.svelte';
	import { fly } from 'svelte/transition';

	export let title: string = '';
	export let slug: string = '';
	export let intro: string = '';
	export let tags: string[] = [];
</script>

<div
	class="card lg:card-side select-none btn-ghost hover:bg-opacity-5 transition duration-150"
	in:fly={{ y: 100, duration: 500 }}
>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p class="text-sm">
			{intro.slice(0, 80)}...
		</p>
		<div class="card-actions">
			<div class="flex gap-2 flex-wrap mt-3">
				<Tags {tags} variant="secondary" />
			</div>
			<a
				class="btn btn-primary btn-sm ml-auto hover:scale-105 hover:text-secondary-content"
				href={`/blog/${slug}`}>Read More</a
			>
		</div>
	</div>
</div>
