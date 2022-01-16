<!-- Grab the data from API before the page mount (loads) -->
<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Project } from '$lib/models/projects';
	import type { Author } from '$lib/models/author';
	import { client } from '$lib/graphql-client';
	import { authorsQuery, projectsQuery } from '$lib/queries';

	export const load: Load = async () => {
		const [{ authors }, { projects }] = await Promise.all([
			client.request(authorsQuery),
			client.request(projectsQuery)
		]);

		return {
			props: { projects, authors }
		};
	};
</script>

<script lang="ts">
	import ProjectContainer from '$lib/components/project-container.svelte';
	import AuthorContainer from '$lib/components/author-container.svelte';

	export let projects: Project[];
	export let authors: Author[];
</script>

<svelte:head>
	<title>🚀 Edison | Web Dev Portfolio</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">Welcome to my Portfolio 😆</h1>

<AuthorContainer {authors} />

<ProjectContainer {projects} />
