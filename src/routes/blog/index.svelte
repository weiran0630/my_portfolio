<script lang="ts" context="module">
	import type { Post } from '$lib/models/post';
	import { client } from '$lib/shared/graphql-client';
	import { postsQuery } from '$lib/shared/queries';

	export const load = async () => {
		const { posts } = await client.request(postsQuery(5, 0));

		return {
			props: {
				posts
			}
		};
	};
</script>

<script lang="ts">
	import PostCard from '$lib/components/post-card.svelte';
	import { inview } from 'svelte-inview/dist/index';
	import BackToTop from '$lib/components/back-to-top.svelte';
	import Adsense from '$lib/components/adsense.svelte';

	export let posts: Post[];
	let pageSize = 5;
	let hasMore = true;

	const handleChange = async (e) => {
		if (e.detail.inView && hasMore) {
			const { posts: nextPosts } = await client.request(postsQuery(5, pageSize));

			if (nextPosts.length > 0) {
				pageSize += 5;
				posts = [...posts, ...nextPosts];
			} else {
				hasMore = false;
			}
		}
	};
</script>

<svelte:head>
	<title>🚀 Edison | The Blog</title>
</svelte:head>

<h1 class="font-bold text-center my-10 text-5xl select-none">Blog Posts 📖</h1>

<div lang="zh-Hant-TW">
	<!-- Google Adsense -->
	<Adsense />

	{#each posts as post}
		<PostCard {...post} />
	{/each}
</div>

<div use:inview={{}} on:change={handleChange} />

<BackToTop />
