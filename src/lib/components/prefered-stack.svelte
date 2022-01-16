<script lang="ts">
	import { onDestroy } from 'svelte';

	const frameworks = [
		{ name: 'Next.js', description: 'Everyone uses it, so do I.', color: 'black' },
		{ name: 'Svelte', description: 'React is my wife, Svelte is my mistress.', color: 'orange' },
		{ name: 'Nest.js', description: 'Build backend fast.', color: 'red' },
		{ name: '.Net Core', description: 'ALL-ENCOMPASSING.', color: 'blue' }
	];

	let index = 0;
	const interval = setInterval(() => {
		index = (index + 1) % frameworks.length;
	}, 2500);

	onDestroy(() => clearInterval(interval));

	$: framework = frameworks[index];
</script>

<div class="stats border-2 stats flex flex-wrap sm:flex-nowrap mx-auto max-w-2xl mb-20">
	<div class="stat">
		<div class="stat-title">Prefered Language</div>
		<div class="stat-value text-primary">TypeScript</div>
		<div class="stat-desc">No one like runtime error.</div>
	</div>

	<div class="stat">
		<div class="stat-title">Liked Frameworks</div>
		<div class={`stat-value text-${framework.color}-500`}>{framework.name}</div>
		<div class={`stat-desc `}>{framework.description}</div>
	</div>
</div>
