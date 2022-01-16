<script>
	import ThemeSwitcher from '$lib/components/theme-switcher.svelte';
</script>

<div class="navbar w-full mx-2">
	<div class="flex-1 items-center select-none">
		<span class="font-bold text-xl hidden sm:inline-block mr-3">🚀 Edison Web Dev </span>

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

		<div class="ml-auto mr-4"><ThemeSwitcher /></div>
	</div>
</div>
