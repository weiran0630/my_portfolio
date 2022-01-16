<script lang="ts">
	export let url = '';
	export let name = '';
	export let demo = '';
	export let sourceCode = '';
	export let description = '';
	export let tags: string[] = [];
</script>

<div class="card sm:w-72 card-bordered shadow-md">
	<figure><a href={demo}><img src={url} alt={name} /></a></figure>
	<div class="card-body">
		<a href={demo}>
			<h2 class="card-titles font-bold mb-2 text-auto select-none">{name}</h2>
		</a>

		<p class="select-none text-sm">
			{description}
		</p>

		<div class="btn-group mt-3">
			<a href={demo} class="btn btn-sm btn-active">Demo</a>
			<a href={sourceCode} class="btn btn-sm ">Source</a>
		</div>

		<div class="flex gap-2 flex-wrap mt-3">
			{#each tags as tag}
				<div class="badge badge-sm badge-outline hover:select-none">{tag}</div>
			{/each}
		</div>
	</div>
</div>
