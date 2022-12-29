<script lang="ts">
	import type { Tech } from '$lib/models/tech';
	import TechsView from '$lib/components/techs.svelte';
	export let frontendTeches: Tech[] = [];
	export let backendTeches: Tech[] = [];
	export let miscTeches: Tech[] = [];
</script>

<h1 class="text-5xl font-bold text-center mb-10 select-none">Tech && Skillset 🛠</h1>
<div class="stats flex flex-wrap sm:flex-nowrap mx-auto mb-48 select-none">
	<TechsView teches={frontendTeches} title="FRONTEND TECH" primary />
	<TechsView teches={backendTeches} title="BACKEND TECH" secondary />
	<TechsView teches={miscTeches} title="MISCELLANEOUS" />
</div>
