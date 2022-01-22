<script>
	import Footer from '$lib/components/footer.svelte';
	import { onMount } from 'svelte';
	import PageTransitions from '$lib/components/page-transitions.svelte';
	import { page } from '$app/stores';
	import { themeChange } from 'theme-change';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Adsense from '$lib/components/adsense.svelte';

	onMount(() => {
		themeChange(false);
	});
</script>

<main class="container max-w-5xl mx-auto px-4 mt-5 mb-20 items-center">
	<Navbar />

	<PageTransitions refresh={$page.url.pathname}>
		<slot />
		<Adsense />
	</PageTransitions>
</main>
<svg class="fill-neutral" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
	<path
		fill-opacity="1"
		d="M0,32L48,32C96,32,192,32,288,58.7C384,85,480,139,576,144C672,149,768,107,864,117.3C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
	/>
</svg>

<Footer />
