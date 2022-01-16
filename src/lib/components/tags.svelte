<script lang="ts">
	export let tags: string[];
	export let size: string = 'md';
	export let variant: string = 'secondary';
</script>

{#each tags as tag}
	<div class={`badge badge-${size} badge-${variant} badge-outline select-none`}>{tag}</div>
{/each}
