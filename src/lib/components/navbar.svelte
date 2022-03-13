<script>
	import ThemeSwitcher from '$lib/components/theme-switcher.svelte';
</script>

<div class="navbar w-full">
	<div class="flex-1 items-center select-none">
		<span class="font-bold text-xl hidden sm:inline-block mr-3 pb-[3px]">🚀 Edison Web Dev </span>

		<a class="btn btn-ghost btn-xs sm:btn-sm rounded-btn" href="/"> Portfolio </a>

		<a class="btn btn-ghost btn-xs sm:btn-sm rounded-btn" href="/blog"> Blog </a>

		<button
			class="btn btn-ghost btn-xs sm:btn-sm rounded-btn"
			on:click={() => {
				document.body.scrollIntoView({ block: 'end' });
			}}
		>
			Contact
		</button>

		<div class="ml-auto mr-1"><ThemeSwitcher /></div>
	</div>
</div>
