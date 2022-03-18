<!-- Grab the data from API before the page mount (loads) -->
<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Project } from '$lib/models/projects';
	import type { Author } from '$lib/models/author';
	import type { Tech } from '$lib/models/tech';
	import { client } from '$lib/shared/graphql-client';
	import { authorsQuery, TechQuery, projectsQuery } from '$lib/shared/queries';

	export const load: Load = async () => {
		const [{ authors }, { projects }, { frontendTeches, backendTeches, miscTeches }] =
			await Promise.all([
				client.request(authorsQuery),
				client.request(projectsQuery),
				client.request(TechQuery)
			]);

		return {
			props: { projects, authors, frontendTeches, backendTeches, miscTeches }
		};
	};
</script>

<script lang="ts">
	import ProjectContainer from '$lib/components/project-container.svelte';
	import AuthorContainer from '$lib/components/author-container.svelte';
	import TechStacks from '$lib/components/tech-stacks.svelte';
	import { fade } from 'svelte/transition';

	export let projects: Project[];
	export let authors: Author[];
	export let frontendTeches: Tech[];
	export let backendTeches: Tech[];
	export let miscTeches: Tech[];
</script>

<svelte:head>
	<title>🚀 Edison | Web Dev Portfolio</title>
</svelte:head>

<div in:fade={{ duration: 300 }}>
	<AuthorContainer {authors} />

	<TechStacks {frontendTeches} {backendTeches} {miscTeches} />

	<div lang="zh-Hant-TW">
		<ProjectContainer {projects} />
	</div>
</div>
