<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.css';

	onMount(() => {
		themeChange(false);
	});
</script>

<main class="container max-w-5xl mx-auto px-4 mb-20">
	<slot />
</main>
