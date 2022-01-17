<script lang="ts" context="module">
	import type { Post } from '$lib/models/post';
	import { client } from '$lib/graphql-client';
	import { postsQuery } from '$lib/queries';

	export const load = async () => {
		const { posts } = await client.request(postsQuery);

		return {
			props: {
				posts
			}
		};
	};
</script>

<script lang="ts">
	import PostCard from '$lib/components/post-card.svelte';
	export let posts: Post[];

	posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

<svelte:head>
	<title>🚀 Edison | The Blog</title>
</svelte:head>

<h1 class="font-bold text-center my-10 text-5xl select-none">Blog Posts 📖</h1>

<!-- <input
	type="text"
	placeholder="Search here..."
	class="input input-primary input-bordered"
	bind:value={searchTerm}
/> -->

{#each posts as post}
	<PostCard {...post} />
{/each}
