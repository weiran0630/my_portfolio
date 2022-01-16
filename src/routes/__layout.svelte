<script>
	import Footer from '$lib/components/footer.svelte';

	import { onMount } from 'svelte';
	import PageTransitions from '$lib/components/page-transitions.svelte';
	import { page } from '$app/stores';
	import { themeChange } from 'theme-change';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';

	onMount(() => {
		themeChange(false);
	});
</script>

<Navbar />

<main class="container max-w-5xl mx-auto px-4 mb-20 items-center">
	<PageTransitions refresh={$page.url.pathname}>
		<slot />
	</PageTransitions>
</main>
<Footer />
