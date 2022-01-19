<script lang="ts" context="module">
	import { client } from '$lib/graphql-client';
	import type { Post } from '$lib/models/post';
	import { postQuery } from '$lib/queries';

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
	import Code from '$lib/components/code.svelte';

	export let post: Post;
	const { title, date, tags, content, coverImage, authors } = post;
</script>

<svelte:head>
	<title>📖 Blog | {title}</title>
</svelte:head>

<article class="prose prose-lg select-none mb-48">
	<a class=" no-underline flex items-center gap-2 text-xl mt-10" href="/blog">
		<span class="text-2xl">⬅</span>Previous Page
	</a>
	<figure>
		<img src={coverImage.url} alt="" />
	</figure>

	<div class="flex gap-2 flex-wrap">
		<Tags {tags} variant="primary" size="lg" />
	</div>

	<div class="pb-5">
		<div class="flex items-center gap-3">
			<img
				src={authors[0].picture.url}
				width="50px"
				height="50px"
				alt=""
				class="btn-circle btn-lg"
			/>

			<div class="flex flex-col">
				<span class="font-bold"><span class="font-light">Author:</span> {authors[0].name}</span>
				<span class="block font-light text-sm">{date} </span>
			</div>
		</div>
	</div>

	<SvelteMarkdown source={content} renderers={{ code: Code }} />
</article>

<BackToTop />
