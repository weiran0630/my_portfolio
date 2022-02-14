<script>
	import { browser } from '$app/env';

	const defaultValue = 'cupcake';
	const initialValue = browser ? window.localStorage.getItem('theme') : defaultValue;
</script>

<div class="flex gap-1 mt-1">
	<span class="label-text text-lg pb-2">☀️</span>
	<button data-toggle-theme="cupcake,synthwave" data-act-class="ACTIVECLASS">
		<input
			type="checkbox"
			class="toggle toggle-primary"
			checked={initialValue === defaultValue ? false : true}
		/>
	</button>
	<span class="label-text text-lg pb-2">🌚</span>
</div>
