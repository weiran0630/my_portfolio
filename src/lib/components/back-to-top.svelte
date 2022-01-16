<script lang="ts">
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div
	class="back-to-top btn btn-md btn-primary select-none right-10 bottom-10 fixed shadow-lg"
	on:click={goTop}
	class:hidden
>
	Back to top
</div>

<style>
	.back-to-top {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		z-index: 99;
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
