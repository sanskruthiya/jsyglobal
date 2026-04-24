<script lang="ts">
	import { language } from '$lib/stores/language';
	import { loadContent } from '$lib/utils/content';
	import PageHeader from '$lib/components/PageHeader.svelte';

	let works: any = $state({});
	let selectedCategory = $state<string>('all');

	$effect(() => {
		loadContent($language, 'works').then((data) => {
			works = data;
		});
	});

	let categories = $derived(['all', ...new Set((works.works || []).map((w: any) => w.category))]) as string[];
	
	let filteredWorks = $derived.by(() => {
		const filtered = selectedCategory === 'all'
			? works.works || []
			: (works.works || []).filter((w: any) => w.category === selectedCategory);
		
		return [...filtered].sort((a: any, b: any) => {
			// Sort: projects with images first, then without images
			const hasImageA = a.image && a.image.length > 0;
			const hasImageB = b.image && b.image.length > 0;
			
			if (hasImageA && !hasImageB) return -1;
			if (!hasImageA && hasImageB) return 1;
			return 0;
		});
	});
</script>

<svelte:head>
	<title>{works.hero?.title || 'Works'} - JSY-Global</title>
	<meta name="description" content={works.hero?.subtitle || 'Our Works'} />
</svelte:head>

<PageHeader 
	title={works.hero?.title || 'Our Works'} 
	subtitle={works.hero?.subtitle || 'Our achievements'} 
/>

<section class="py-16">
	<div class="container-custom">
		<div class="mb-8 flex flex-wrap gap-4">
			{#each categories as category}
				<button
					onclick={() => (selectedCategory = category)}
					class="rounded-lg px-4 py-2 font-medium transition-colors {selectedCategory === category
						? 'bg-primary-600 text-white'
						: 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
				>
					{category === 'all' ? 'All' : category}
				</button>
			{/each}
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredWorks as work}
				<div class="card">
					{#if work.image}
						<div class="mb-4 h-48 overflow-hidden rounded-lg">
							<img 
								src={work.image} 
								alt={work.title}
								class="h-full w-full object-cover"
							/>
						</div>
					{/if}
					<div class="mb-2 flex items-center justify-between">
						<span class="text-sm font-semibold text-primary-600">{work.category}</span>
						<span class="text-sm text-gray-500">{work.year}</span>
					</div>
					<h3 class="mb-2 text-xl font-bold text-gray-900">{work.title}</h3>
					<p class="mb-2 text-sm text-gray-500">{work.location}</p>
					<p class="mb-4 text-gray-600">{work.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each work.tags || [] as tag}
							<span class="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
								{tag}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
