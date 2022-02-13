<script lang="ts">
	import type { Tech } from '$lib/models/tech';

	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	export let title: string;
	export let teches: Tech[] = [];
	export let primary: boolean | null = null;
	export let secondary: boolean | null = null;

	let fontColor: string;
	if (primary) {
		fontColor = 'text-primary';
	} else if (secondary) {
		fontColor = 'text-secondary';
	} else {
		fontColor = '';
	}

	let index = 0;
	const interval = setInterval(() => {
		index = (index + 1) % teches.length;
	}, 3000);

	onDestroy(() => clearInterval(interval));

	$: tech = teches[index];
</script>

<div class="stat bg-primary-content">
	<h2 class="stat-title text-center">{title}</h2>
	{#key tech.name}
		<div class={`stat-value ${fontColor} flex flex-col items-center gap-2`} in:fade>
			<div>
				{tech.name}
			</div>
			<img src={tech.icon.url} alt={tech.name} width="75" height="75" in:fade />
		</div>
	{/key}
</div>
