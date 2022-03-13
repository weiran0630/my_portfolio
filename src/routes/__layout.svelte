<script>
	import Footer from '$lib/components/footer.svelte';
	import { onMount } from 'svelte';
	import PageTransitions from '$lib/components/page-transitions.svelte';
	import { page } from '$app/stores';
	import { themeChange } from 'theme-change';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Wave from '$lib/components/wave.svelte';
	import BackToTop from '$lib/components/back-to-top.svelte';

	onMount(() => {
		themeChange(false);
	});
</script>

<main class="container max-w-5xl mx-auto px-4 mt-5 mb-20 items-center">
	<Navbar />

	<PageTransitions refresh={$page.url.pathname}>
		<slot />
	</PageTransitions>
</main>

<Wave />
<Footer />
<BackToTop />
