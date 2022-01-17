<script lang="ts">
	import type { Project } from '$lib/models/projects';
	import ProjectCard from './project-card.svelte';

	export let projects: Project[] = [];
</script>

<h1 class="font-bold text-center mb-20 text-5xl select-none">Recent Projects 👨🏻‍💻</h1>

<div class="flex flex-wrap justify-center gap-10">
	{#each projects as { name, demo, sourceCode, description, image, tags }}
		<ProjectCard {name} {description} url={image[0].url} {demo} {tags} {sourceCode} />
	{/each}
</div>
