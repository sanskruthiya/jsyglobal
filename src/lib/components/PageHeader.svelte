<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
	}

	let { title, subtitle }: Props = $props();
</script>

<section class="relative overflow-hidden bg-primary-600 py-16 text-white">
	<!-- Background geometric shapes -->
	<div class="absolute inset-0">
		<div
			class="absolute bottom-[10%] right-[5%] h-32 w-32 rotate-45 rounded-lg bg-primary-500/30"
		></div>
		<div
			class="absolute bottom-[25%] right-[15%] h-24 w-24 rounded-lg bg-primary-400/20"
		></div>
		<div
			class="absolute bottom-[5%] right-[25%] h-20 w-20 rotate-12 rounded-lg bg-primary-500/25"
		></div>
		<div
			class="absolute bottom-[40%] right-[8%] h-28 w-28 -rotate-12 rounded-lg bg-primary-400/15"
		></div>
		<div
			class="absolute bottom-[15%] right-[35%] h-16 w-16 rotate-45 rounded-lg bg-primary-500/20"
		></div>
	</div>

	<!-- Content -->
	<div class="container-custom relative z-10">
		<h1 class="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
		{#if subtitle}
			<p class="text-xl">{subtitle}</p>
		{/if}
	</div>
</section>
