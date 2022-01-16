<script lang="ts">
	import type { Project } from '$lib/models/projects';
	import ProjectCard from './project-card.svelte';

	export let projects: Project[] = [];
</script>

<div class="flex flex-wrap gap-5 justify-center">
	{#each projects as { name, demo, sourceCode, description, image, tags }}
		<ProjectCard {name} {description} url={image[0].url} {demo} {tags} {sourceCode} />
	{/each}
</div>
