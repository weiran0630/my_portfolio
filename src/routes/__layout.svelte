<script>
	import ThemeSwitcher from '$lib/components/theme-switcher.svelte';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.css';

	onMount(() => {
		themeChange(false);
	});
</script>

<main class="container max-w-5xl mx-auto px-4 mb-20 items-center">
	<div class="navbar mb-5">
		<div class="flex-1  ">
			<a class="btn btn-ghost btn-sm rounded-btn"> Portfolio </a>
			<a class="btn btn-ghost btn-sm rounded-btn"> Blog </a>
			<a class="btn btn-ghost btn-sm rounded-btn"> Contact </a>

			<div class="ml-auto"><ThemeSwitcher /></div>
		</div>
	</div>

	<slot />
</main>
