<!-- Grab the data from API before the page mount (loads) -->
<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import { gql } from 'graphql-request';
	import { client } from '$lib/graphql-client';
	import ProjectCard from '$lib/components/project-card.svelte';

	export const load: Load = async () => {
		const query = gql`
			query GetProjects {
				projects {
					name
					slug
					description
					demo
					sourceCode
					image {
						url
					}
				}
			}
		`;

		const { projects } = await client.request(query);

		return {
			props: { projects }
		};
	};
</script>

<script lang="ts">
	export let projects;
</script>

<h1>Recent Projects</h1>

<div>
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div>
