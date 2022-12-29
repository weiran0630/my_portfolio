<script lang="ts">
	import type { WorkExperience } from '$lib/models/workExperience';

	export let workExperiences: WorkExperience[];
</script>

<h1 class="text-5xl font-bold text-center mb-10">Work Experiences 💼</h1>

<div class="mb-48">
	{#each workExperiences as { company, jobTitle, image, description }}
		<div class="card card-side bg-base-100 flex">
			<figure class="w-2">
				<img class="mask mask-circle h-48 md:ml-5 mb-10 sm:mb-0" src={image.url} alt={jobTitle} />
			</figure>
			<div class="card-body">
				<h2
					class="card-title text-primary text-3xl mt-4 sm:mb-4 font-bold tracking-wider min-h-[73px] sm:min-h-fit"
				>
					{company} - {jobTitle}
				</h2>
				<p>{description}</p>
			</div>
		</div>
	{/each}
</div>
