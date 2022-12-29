<script lang="ts">
	import type { WorkExperience } from '$lib/models/workExperience';
	import Tags from './tags.svelte';

	export let workExperiences: WorkExperience[];
</script>

<h1 class="text-5xl font-bold text-center mb-10 select-none">Work Experiences 💼</h1>

<div class="mb-48 select-none">
	{#each workExperiences as { company, jobTitle, image, description, workingWith }}
		<div class="flex flex-wrap md:flex-nowrap justify-center items-center md:justify-start">
			<figure class="w-48 md:w-auto">
				<img src={image.url} alt={jobTitle} />
			</figure>

			<div class="card-body">
				<h2
					class="card-title text-primary text-3xl mt-4 sm:mb-4 font-bold tracking-wider min-h-[73px] sm:min-h-fit"
				>
					{company} - {jobTitle}
				</h2>

				<p>{description}</p>

				<h5 class="flex gap-2 mt-4 items-center flex-wrap">
					<span class="font-bold">Technology involved:</span>
					<Tags tags={workingWith} variant="secondary" />
				</h5>
			</div>
		</div>
	{/each}
</div>
