<!-- Grab the data from API before the page mount (loads) -->
<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Project } from '$lib/models/projects';
	import type { Author } from '$lib/models/author';
	import type { Tech } from '$lib/models/tech';
	import type { WorkExperience } from '$lib/models/workExperience';
	import { client } from '$lib/shared/graphql-client';
	import { authorsQuery, TechQuery, projectsQuery, WorkExperienceQuery } from '$lib/shared/queries';

	export const load: Load = async () => {
		const [
			{ authors },
			{ projects },
			{ frontendTeches, backendTeches, miscTeches },
      { workExperiences }
		] = await Promise.all([
			client.request(authorsQuery),
			client.request(projectsQuery),
			client.request(TechQuery),
			client.request(WorkExperienceQuery)
		]);

		return {
			props: { projects, authors, frontendTeches, backendTeches, miscTeches, workExperiences }
		};
	};
</script>

<script lang="ts">
	import ProjectContainer from '$lib/components/project-container.svelte';
	import AuthorContainer from '$lib/components/author-container.svelte';
	import WorkExpContainer from '$lib/components/work-exp-container.svelte';
	import TechStacks from '$lib/components/tech-stacks.svelte';
	import { fade } from 'svelte/transition';

	export let projects: Project[];
	export let authors: Author[];
	export let frontendTeches: Tech[];
	export let backendTeches: Tech[];
	export let miscTeches: Tech[];
	export let workExperiences: WorkExperience[];
</script>

<svelte:head>
	<title>🚀 Edison | Web Dev Portfolio</title>
</svelte:head>

<div in:fade={{ duration: 300 }}>
	<AuthorContainer {authors} />

	<TechStacks {frontendTeches} {backendTeches} {miscTeches} />

	<WorkExpContainer {workExperiences} />

	<div lang="zh-Hant-TW">
		<ProjectContainer {projects} />
	</div>
</div>
