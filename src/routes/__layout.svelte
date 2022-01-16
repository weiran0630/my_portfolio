<script>
	import Footer from '$lib/components/footer.svelte';
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
		<div class="flex-1 items-center select-none">
			<span class="font-bold text-xl "
				>🚀 <span class="hidden sm:inline-block mr-3">Edison Web Dev</span>
			</span>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/"> Portfolio </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/blog"> Blog </a>
			<button
				class="btn btn-ghost btn-sm rounded-btn"
				on:click={() => {
					document.body.scrollIntoView({ block: 'end' });
				}}
			>
				Contact
			</button>

			<div class="ml-auto"><ThemeSwitcher /></div>
		</div>
	</div>

	<slot />
</main>
<Footer />
