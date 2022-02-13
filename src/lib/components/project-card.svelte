<script lang="ts">
	import Tags from './tags.svelte';

	export let url = '';
	export let name = '';
	export let demo = '';
	export let sourceCode = '';
	export let description = '';
	export let tags: string[] = [];
</script>

<div class="card sm:w-72 card-bordered shadow-sm bg-primary-content">
	<figure><a href={demo}><img src={url} alt={name} /></a></figure>
	<div class="card-body">
		<a href={demo}>
			<h2 class="card-titles font-bold text-lg mb-2 select-none">{name}</h2>
		</a>

		<p class="select-none text-sm">
			{description}
		</p>

		<div class="btn-group pt-3 mt-auto">
			<a href={demo} class="btn btn-sm btn-active">Demo</a>
			<a href={sourceCode} class="btn btn-sm ">Source</a>
		</div>

		<div class="flex gap-2 flex-wrap mt-3">
			<Tags {tags} variant="secondary" />
		</div>
	</div>
</div>
