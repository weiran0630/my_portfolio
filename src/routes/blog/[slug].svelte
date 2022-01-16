<script lang="ts" context="module">
	import { client } from '$lib/graphql-client';
	import type { Post } from '$lib/models/post';
	import { postQuery } from '$lib/queries';
	import { marked } from 'marked';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { post } = await client.request(postQuery, variables);

		return {
			props: {
				post
			}
		};
	};
</script>

<script lang="ts">
	import BackToTop from '$lib/components/back-to-top.svelte';
	import Tags from '$lib/components/tags.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let post: Post;
	const { title, date, tags, content, coverImage, authors } = post;
</script>

<svelte:head>
	<title>Blog | {title}</title>
</svelte:head>

<article class="prose prose-lg select-none">
	<a class=" no-underline flex items-center gap-2 text-xl" href="/blog"
		><span class="text-2xl">⬅</span>Previous Page</a
	>
	<figure>
		<img src={coverImage.url} alt="" />
	</figure>

	<div class="mb-5">
		<div class="flex gap-2 flex-wrap mt-3 mb-2">
			<Tags {tags} variant="secondary" />
		</div>
		<span class="block">{date} <br /> {authors[0].name}</span>
	</div>

	<SvelteMarkdown source={content} />
</article>

<BackToTop />
