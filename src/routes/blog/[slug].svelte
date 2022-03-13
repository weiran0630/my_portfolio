<script lang="ts" context="module">
	import { client } from '$lib/shared/graphql-client';
	import type { Post } from '$lib/models/post';
	import { postQuery } from '$lib/shared/queries';

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
	import Tags from '$lib/components/tags.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
	import Code from '$lib/components/code.svelte';
	import BackToTop from '$lib/components/back-to-top.svelte';

	export let post: Post;
	const { title, date, tags, content, coverImage, authors, minsToRead } = post;
</script>

<svelte:head>
	<title>📖 Blog | {title}</title>
</svelte:head>

<article class="prose prose-lg select-none mb-48">
	<a
		class=" no-underline gap-2 text-lg mt-10 btn btn-ghost btn-sm rounded-btn hover:scale-105"
		href="/blog"
	>
		<span class="text-xl">⬅</span>Previous Page
	</a>
	<figure>
		<img src={coverImage.url} alt="cover" />
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
				<span class="font-bold">
					<span class="font-light">Author:</span>
					{authors[0].name}
				</span>
				<span class="block font-light text-sm">{date} </span>
				<span class="block font-light text-sm">
					<Fa icon={faBookOpen} class="inline mt-2 mr-1" />
					{minsToRead} mins read
				</span>
			</div>
		</div>
	</div>

	<SvelteMarkdown source={content} renderers={{ code: Code }} />
</article>

<BackToTop />
